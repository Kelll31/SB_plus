"""Windows editor for the document registry on the existing FTP hosting."""

from concurrent.futures import ThreadPoolExecutor
from contextlib import contextmanager
from ftplib import all_errors, error_perm
from functools import partial
from hashlib import sha256
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlsplit
from uuid import uuid4
import datetime
import json
import os
import re
import sys
import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog, ttk
import webbrowser

import hosting
from documents_credentials import CredentialsStore


SITE = 'http://poligonsb.ru/'
SITE_DIR = '/www/poligonsb.ru'
MAX_FILE = 8 * 1024 * 1024
DOCUMENT_FILETYPES = [('Документы и сканы', '*.pdf *.jpg *.jpeg *.png *.webp')]
MAX_CONTENT = 2 * 1024 * 1024
MAX_DOCUMENTS = 100
LOCK = '.sb-documents-lock'
COMPANY_SECTION = 'Документы СБ+'
ARCHIVE_SECTION = 'Архив'
UPLOADED = re.compile(r'images/sb-document-[a-f0-9]{32}\.(pdf|jpg|png|webp)\Z')
FROZEN = getattr(sys, 'frozen', False)
APP_DATA = Path(os.environ.get('LOCALAPPDATA') or Path.home() / 'AppData' / 'Local') / 'SBPlus' / 'DocumentsAdmin'


def document_extension(data):
    if data.startswith(b'%PDF-') and b'%%EOF' in data[-4096:]:
        return 'pdf'
    if data.startswith(b'\xff\xd8\xff') and data.endswith(b'\xff\xd9'):
        return 'jpg'
    if data.startswith(b'\x89PNG\r\n\x1a\n') and data[12:16] == b'IHDR' and data.endswith(b'IEND\xaeB`\x82'):
        return 'png'
    if data.startswith(b'RIFF') and data[8:12] == b'WEBP' and data[12:16] in (b'VP8 ', b'VP8L', b'VP8X'):
        return 'webp'
    raise ValueError('Файл должен быть сохранён в формате PDF, JPG, PNG или WebP.')


def read_document(filename):
    try:
        with Path(filename).open('rb') as file:
            data = file.read(MAX_FILE + 1)
    except OSError as error:
        raise ValueError('Не удалось открыть выбранный файл. Выберите его ещё раз.') from error
    if not 0 < len(data) <= MAX_FILE:
        raise ValueError('Выберите файл размером до 8 МБ.')
    return data, document_extension(data)


def validate_text(value, label, limit, required=False):
    value = value.strip()
    if required and not value:
        raise ValueError(f'Заполните поле «{label}».')
    if len(value.encode('utf-8')) > limit:
        raise ValueError(f'Сократите поле «{label}».')
    return value


def is_on_home(item):
    return bool(item.get('published')) and item.get('showOnHome', not item.get('archived')) is True


def home_documents(entries):
    def position(item):
        value = item.get('homeOrder')
        return value if type(value) is int and 1 <= value <= MAX_DOCUMENTS else MAX_DOCUMENTS + 1

    return sorted((item for item in entries if is_on_home(item)), key=position)


class Registry:
    def __init__(self, directory=SITE_DIR, credentials=None):
        self.directory = directory
        self.credentials = credentials

    def connect(self):
        if self.credentials is not None:
            return hosting.connect(self.credentials, allow_plain_ftp=True)
        if FROZEN:
            raise ValueError('Введите FTP-логин и пароль в настройках.')
        if not (hosting.ROOT / '.env').is_file():
            raise ValueError('Положите файл .env с FTP-доступом рядом с запуском панели.')
        credentials = hosting.env_values()
        credentials['ftp_login'] = credentials.get('ftp_root') or credentials.get('ftp_login')
        if not credentials['ftp_login'] or not credentials.get('ftp_password'):
            raise ValueError('В файле .env укажите ftp_root или ftp_login и ftp_password.')
        if '--allow-plain-ftp' not in sys.argv:
            raise ValueError('Откройте панель через Documents-Admin.cmd.')
        return hosting.connect(credentials)

    @staticmethod
    def read(ftp):
        raw = BytesIO()

        def receive(block):
            if raw.tell() + len(block) > MAX_CONTENT:
                raise ValueError('Реестр на сервере превысил 2 МБ.')
            raw.write(block)

        ftp.retrbinary('RETR content.json', receive)
        try:
            content = json.loads(raw.getvalue())
            if not isinstance(content, dict) or content['version'] != 1 or type(content['revision']) is not int:
                raise ValueError
            if not isinstance(content['licenses'], list) or not isinstance(content['posts'], list):
                raise ValueError
            if any(not isinstance(item, dict) or not isinstance(item.get('id'), str) or not isinstance(item.get('title'), str)
                   or not isinstance(item.get('file'), str) for item in content['licenses']):
                raise ValueError
            if len({item['id'] for item in content['licenses']}) != len(content['licenses']):
                raise ValueError
            if any(not isinstance(item, dict) for item in content['posts']):
                raise ValueError
        except (KeyError, TypeError, UnicodeError, ValueError) as error:
            raise ValueError('Не удалось прочитать реестр сайта. Попробуйте обновить список.') from error
        return content, raw.getvalue()

    def load(self):
        with self.connect() as ftp:
            ftp.cwd(self.directory)
            return self.read(ftp)[0]['licenses']

    @contextmanager
    def change(self):
        with self.connect() as ftp:
            ftp.cwd(self.directory)
            owner = LOCK + '/' + uuid4().hex
            try:
                ftp.mkd(LOCK)
            except error_perm as error:
                if str(error).startswith('550'):
                    raise ValueError('Реестр уже обновляется. Повторите попытку через минуту.') from error
                raise
            try:
                ftp.mkd(owner)
                yield ftp
            finally:
                try:
                    ftp.rmd(owner)
                    ftp.rmd(LOCK)
                except all_errors:
                    # Remove the outer lock only after proving ownership on the new connection.
                    with self.connect() as recovery:
                        recovery.cwd(self.directory)
                        recovery.rmd(owner)
                        recovery.rmd(LOCK)

    @staticmethod
    def replace(ftp, path, data):
        directory, _, _ = path.rpartition('/')
        prefix = directory + '/' if directory else ''
        pending = prefix + '.sb-document-' + uuid4().hex + '.tmp'
        try:
            ftp.storbinary('STOR ' + pending, BytesIO(data))
            ftp.rename(pending, path)
        except all_errors:
            try:
                ftp.delete(pending)
            except all_errors:
                pass
            raise

    @staticmethod
    def content_bytes(content):
        content['revision'] += 1
        data = (json.dumps(content, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
        if len(data) > MAX_CONTENT:
            raise ValueError('Реестр достиг предельного размера 2 МБ.')
        return data

    @staticmethod
    def backup(raw):
        directory = (APP_DATA if FROZEN else hosting.PRIVATE) / 'document-backups'
        directory.mkdir(parents=True, exist_ok=True)
        name = datetime.datetime.now().strftime('%Y%m%d-%H%M%S-') + uuid4().hex[:8] + '.json'
        (directory / name).write_bytes(raw)

    def add(self, filename, title, number, document_id, *, archived=False, show_on_home=None):
        if not re.fullmatch(r'[a-f0-9]{32}', document_id):
            raise ValueError('Выберите файл для добавления ещё раз.')
        title = validate_text(title, 'Название', 600, required=True)
        number = validate_text(number, 'Номер', 300)
        data, extension = read_document(filename)
        path = 'images/sb-document-' + document_id + '.' + extension
        entry = dict(id=document_id, title=title, description='', number=number,
                     file=path, archived=archived, published=True)
        if show_on_home is not None:
            entry['showOnHome'] = show_on_home
        with self.change() as ftp:
            content, before = self.read(ftp)
            if any(item['id'] == document_id for item in content['licenses']):
                return content['licenses']
            if len(content['licenses']) >= MAX_DOCUMENTS:
                raise ValueError(f'В реестре уже {MAX_DOCUMENTS} документов. Удалите лишний документ перед добавлением.')
            content['licenses'].insert(0, entry)
            after = self.content_bytes(content)
            self.backup(before)
            self.replace(ftp, path, data)
            # Publish the reference only once the file is fully uploaded. If the connection
            # drops during the rename, a retry reuses this same document ID and file path.
            self.replace(ftp, 'content.json', after)
            return content['licenses']

    def edit(self, document_id, *, title=None, number=None, filename=None):
        changes = {}
        if title is not None:
            changes['title'] = validate_text(title, 'Название', 600, required=True)
        if number is not None:
            changes['number'] = validate_text(number, 'Номер', 300)
        upload = None
        if filename is not None:
            data, extension = read_document(filename)
            digest = sha256(document_id.encode('utf-8') + b'\0')
            digest.update(data)
            changes['file'] = 'images/sb-document-' + digest.hexdigest()[:32] + '.' + extension
            upload = data

        with self.change() as ftp:
            content, before = self.read(ftp)
            licenses = content['licenses']
            item = next((entry for entry in licenses if entry['id'] == document_id), None)
            if item is None:
                raise ValueError('Документ уже удалён. Обновите список.')
            if all(item.get(field) == value for field, value in changes.items()):
                return licenses, True

            previous_file = item['file']
            item.update(changes)
            after = self.content_bytes(content)
            self.backup(before)
            if upload is not None and item['file'] != previous_file:
                self.replace(ftp, item['file'], upload)
            self.replace(ftp, 'content.json', after)
            if item['file'] != previous_file:
                return licenses, self.delete_unused_file(ftp, content, previous_file)
            return licenses, True

    def move(self, document_id, archived):
        with self.change() as ftp:
            content, before = self.read(ftp)
            licenses = content['licenses']
            item = next((entry for entry in licenses if entry['id'] == document_id), None)
            if item is None:
                raise ValueError('Документ уже удалён. Обновите список.')
            if bool(item.get('archived')) != archived:
                item['archived'] = archived
                licenses.remove(item)
                licenses.insert(0, item)
                after = self.content_bytes(content)
                self.backup(before)
                self.replace(ftp, 'content.json', after)
            return licenses

    def set_home_visibility(self, document_id, visible):
        with self.change() as ftp:
            content, before = self.read(ftp)
            licenses = content['licenses']
            item = next((entry for entry in licenses if entry['id'] == document_id), None)
            if item is None:
                raise ValueError('Документ уже удалён. Обновите список.')
            if item.get('showOnHome') is not visible:
                item['showOnHome'] = visible
                if not visible:
                    item.pop('homeOrder', None)
                after = self.content_bytes(content)
                self.backup(before)
                self.replace(ftp, 'content.json', after)
            return licenses

    def set_home_position(self, document_id, position):
        with self.change() as ftp:
            content, before = self.read(ftp)
            licenses = content['licenses']
            shown = home_documents(licenses)
            current = next((index for index, item in enumerate(shown) if item['id'] == document_id), None)
            if current is None:
                raise ValueError('Документ не отображается на главной. Обновите список.')
            target = max(0, min(position, len(shown) - 1))
            if current != target:
                shown.insert(target, shown.pop(current))
                for index, item in enumerate(shown, start=1):
                    item['homeOrder'] = index
                after = self.content_bytes(content)
                self.backup(before)
                self.replace(ftp, 'content.json', after)
            return licenses

    def remove(self, document_id):
        with self.change() as ftp:
            content, before = self.read(ftp)
            entry = next((item for item in content['licenses'] if item['id'] == document_id), None)
            if entry is None:
                return content['licenses'], True
            content['licenses'] = [item for item in content['licenses'] if item['id'] != document_id]
            after = self.content_bytes(content)
            self.backup(before)
            self.replace(ftp, 'content.json', after)
            return content['licenses'], self.delete_unused_file(ftp, content, entry['file'])

    @staticmethod
    def delete_unused_file(ftp, content, path):
        if (UPLOADED.fullmatch(path)
                and all(item['file'] != path for item in content['licenses'])
                and all(item.get('cover') != path for item in content['posts'])):
            try:
                ftp.delete(path)
            except all_errors:
                return False
        return True


class FtpDialog(simpledialog.Dialog):
    def __init__(self, parent, login):
        self.login = login
        super().__init__(parent, 'Настройки FTP')

    def body(self, master):
        ttk.Label(master, text='Введите данные от FTP для сайта poligonsb.ru.').grid(row=0, columnspan=2, pady=(3, 12))
        ttk.Label(master, text='Логин').grid(row=1, column=0, sticky='w', padx=(0, 9))
        self.login_input = ttk.Entry(master, width=32)
        self.login_input.grid(row=1, column=1, sticky='ew', pady=3)
        self.login_input.insert(0, self.login)
        ttk.Label(master, text='Пароль').grid(row=2, column=0, sticky='w', padx=(0, 9))
        self.password = ttk.Entry(master, show='*', width=32)
        self.password.grid(row=2, column=1, sticky='ew', pady=3)
        return self.password if self.login else self.login_input

    def buttonbox(self):
        box = ttk.Frame(self, padding=10)
        ttk.Button(box, text='Подключиться', command=self.ok).pack(side='left', padx=4)
        ttk.Button(box, text='Отмена', command=self.cancel).pack(side='left', padx=4)
        self.bind('<Return>', self.ok)
        self.bind('<Escape>', self.cancel)
        box.pack()

    def validate(self):
        login, password = self.login_input.get().strip(), self.password.get()
        if not login or not password or any(c in login + password for c in '\r\n\0'):
            messagebox.showerror('Настройки FTP', 'Укажите FTP-логин и пароль.', parent=self)
            return False
        self.result = {'ftp_login': login, 'ftp_password': password}
        return True


class DocumentEditDialog(simpledialog.Dialog):
    def __init__(self, parent, document, submit):
        self.document = document
        self.submit = submit
        self.filename = None
        self.saving = False
        super().__init__(parent, 'Редактировать документ')

    def body(self, master):
        ttk.Label(master, text='Название').grid(row=0, column=0, sticky='w', padx=(0, 12))
        self.title_input = ttk.Entry(master, width=44)
        self.title_input.grid(row=0, column=1, sticky='ew', pady=4)
        self.title_input.insert(0, self.document['title'])
        ttk.Label(master, text='Номер').grid(row=1, column=0, sticky='w')
        self.number_input = ttk.Entry(master, width=44)
        self.number_input.grid(row=1, column=1, sticky='ew', pady=4)
        self.number_input.insert(0, self.document.get('number') or '')

        ttk.Label(master, text='Файл').grid(row=2, column=0, sticky='nw', pady=(8, 0))
        file_controls = ttk.Frame(master)
        file_controls.grid(row=2, column=1, sticky='ew', pady=(8, 0))
        self.file_label = tk.StringVar(value='Текущий файл')
        ttk.Label(file_controls, textvariable=self.file_label, wraplength=350).grid(row=0, columnspan=3, sticky='w')
        self.replace_button = ttk.Button(file_controls, text='Заменить файл…', command=self.choose_file)
        self.replace_button.grid(row=1, column=0, pady=6, sticky='w')
        self.preview_button = ttk.Button(file_controls, text='Предпросмотр', command=self.preview_file, state='disabled')
        self.preview_button.grid(row=1, column=1, padx=(8, 0), sticky='w')
        self.reset_button = ttk.Button(file_controls, text='Отменить замену', command=self.reset_file, state='disabled')
        self.reset_button.grid(row=1, column=2, padx=(8, 0), sticky='w')
        self.status = tk.StringVar()
        ttk.Label(master, textvariable=self.status, wraplength=370).grid(row=3, columnspan=2, sticky='w')
        return self.title_input

    def buttonbox(self):
        box = ttk.Frame(self, padding=10)
        self.save_button = ttk.Button(box, text='Сохранить', command=self.ok)
        self.save_button.pack(side='left', padx=4)
        self.cancel_button = ttk.Button(box, text='Отмена', command=self.cancel)
        self.cancel_button.pack(side='left', padx=4)
        self.bind('<Return>', self.ok)
        self.bind('<Escape>', self.cancel)
        box.pack()

    def choose_file(self):
        filename = filedialog.askopenfilename(parent=self, title='Выберите новый PDF или скан',
                                              filetypes=DOCUMENT_FILETYPES)
        if filename:
            self.filename = filename
            self.file_label.set(Path(filename).name)
            self.preview_button.configure(state='normal')
            self.reset_button.configure(state='normal')
            self.status.set('')

    def preview_file(self):
        if self.saving or self.filename is None:
            return
        try:
            from documents_preview import open_preview

            data, extension = read_document(self.filename)
            self.status.set('')
            open_preview(self, Path(self.filename).name, data, extension)
        except ImportError:
            self.status.set('Не удалось запустить просмотр PDF и сканов.')
        except ValueError as error:
            self.status.set(str(error))

    def reset_file(self):
        self.filename = None
        self.file_label.set('Текущий файл')
        self.preview_button.configure(state='disabled')
        self.reset_button.configure(state='disabled')
        self.status.set('')

    def ok(self, _event=None):
        if self.saving:
            return
        changes = {}
        try:
            title = validate_text(self.title_input.get(), 'Название', 600, required=True)
            number = validate_text(self.number_input.get(), 'Номер', 300)
        except ValueError as error:
            self.status.set(str(error))
            return
        if title != self.document['title']:
            changes['title'] = title
        if number != (self.document.get('number') or ''):
            changes['number'] = number
        if self.filename is not None:
            changes['filename'] = self.filename
        if not changes:
            self.cancel()
            return
        self.set_saving(True)
        self.status.set('Сохраняем изменения…')
        self.submit(self, changes)

    def set_saving(self, saving):
        self.saving = saving
        state = 'disabled' if saving else 'normal'
        for control in (self.title_input, self.number_input, self.replace_button, self.save_button, self.cancel_button):
            control.configure(state=state)
        file_state = 'normal' if self.filename is not None and not saving else 'disabled'
        self.reset_button.configure(state=file_state)
        self.preview_button.configure(state=file_state)

    def show_error(self, text):
        self.set_saving(False)
        self.status.set(text)

    def cancel(self, event=None):
        if not self.saving:
            super().cancel(event)


class DocumentsWindow:
    def __init__(self, root, registry, credentials_store=None):
        self.root = root
        self.registry = registry
        self.credentials_store = credentials_store
        self.worker = ThreadPoolExecutor(max_workers=1)
        self.busy = False
        self.document_id = uuid4().hex
        self.filename = ''
        self.rows = {}
        self.home_positions = {}
        self.dragged_row = None
        self.drag_start_y = 0
        self.drag_y = 0
        self.drag_active = False
        self.drag_scroll = None

        root.title('СБ+ · Лицензии и сертификаты')
        root.geometry('790x625')
        root.minsize(700, 530)
        root.protocol('WM_DELETE_WINDOW', self.close)
        root.bind('<Escape>', self.cancel_home_drag)

        frame = ttk.Frame(root, padding=18)
        frame.pack(fill='both', expand=True)
        ttk.Label(frame, text='Лицензии и сертификаты', font=('Segoe UI', 18, 'bold')).pack(anchor='w', pady=(0, 14))

        views = ttk.Frame(frame)
        views.pack(fill='x', pady=(0, 8))
        self.list_view = tk.StringVar(value='registry')
        self.registry_view_button = ttk.Radiobutton(views, text='Реестр', variable=self.list_view, value='registry',
                                                   style='Toolbutton', command=self.render_list)
        self.registry_view_button.pack(side='left')
        self.home_view_button = ttk.Radiobutton(views, text='На главной', variable=self.list_view, value='home',
                                               style='Toolbutton', command=self.render_list)
        self.home_view_button.pack(side='left', padx=(6, 12))
        self.reorder_hint = tk.StringVar()
        ttk.Label(views, textvariable=self.reorder_hint).pack(side='left')

        list_frame = ttk.Frame(frame)
        list_frame.pack(fill='both', expand=True)
        self.list = ttk.Treeview(list_frame, columns=('title', 'number', 'section', 'home'), show='headings', selectmode='browse')
        self.list.heading('title', text='Документ')
        self.list.heading('number', text='Номер')
        self.list.heading('section', text='Раздел')
        self.list.heading('home', text='На главной')
        self.list.column('title', width=350, minwidth=190)
        self.list.column('number', width=130, minwidth=65, stretch=False)
        self.list.column('section', width=110, minwidth=80, stretch=False)
        self.list.column('home', width=90, anchor='center', stretch=False)
        self.list.pack(side='left', fill='both', expand=True)
        scrollbar = ttk.Scrollbar(list_frame, orient='vertical', command=self.list.yview)
        scrollbar.pack(side='right', fill='y')
        self.list.configure(yscrollcommand=scrollbar.set)
        self.list.bind('<<TreeviewSelect>>', lambda _: self.update_controls())
        self.list.bind('<ButtonPress-1>', self.start_home_drag)
        self.list.bind('<B1-Motion>', self.preview_home_drag)
        self.list.bind('<ButtonRelease-1>', self.drop_home_row)
        self.document_menu = tk.Menu(self.list, tearoff=False)
        self.document_order_menu = tk.Menu(self.document_menu, tearoff=False)
        self.list.bind('<Button-3>', self.right_click_document)
        self.list.bind('<Shift-F10>', self.open_selected_menu)
        self.list.bind('<Menu>', self.open_selected_menu)

        list_actions = ttk.Frame(frame)
        list_actions.pack(fill='x', pady=(9, 4))
        self.edit_button = ttk.Button(list_actions, text='Редактировать', command=self.edit_document)
        self.edit_button.pack(side='left')
        self.remove_button = ttk.Button(list_actions, text='Удалить', command=self.remove)
        self.remove_button.pack(side='left', padx=(8, 0))
        self.move_button = ttk.Button(list_actions, text='Переместить…', command=self.move_document)
        self.move_button.pack(side='left', padx=(8, 0))
        self.reload_button = ttk.Button(list_actions, text='Обновить список', command=self.refresh)
        self.reload_button.pack(side='left', padx=8)
        ttk.Button(list_actions, text='Реестр на сайте', command=lambda: webbrowser.open(SITE + '#/documents')).pack(side='right')
        if self.credentials_store is not None:
            self.ftp_button = ttk.Button(list_actions, text='Настройки FTP', command=self.configure_ftp)
            self.ftp_button.pack(side='right', padx=8)

        selected_settings = ttk.Frame(frame)
        selected_settings.pack(fill='x', pady=(0, 14))
        ttk.Label(selected_settings, text='Выбранный документ').pack(side='left', padx=(0, 12))
        self.selected_home = tk.BooleanVar(value=False)
        self.selected_home_check = ttk.Checkbutton(selected_settings, text='Показывать на главной',
                                                   variable=self.selected_home, command=self.save_home_visibility)
        self.selected_home_check.pack(side='left')
        self.first_home_button = ttk.Button(selected_settings, text='На первое место', command=self.change_home_position)
        self.first_home_button.pack(side='left', padx=(12, 0))
        self.up_home_button = ttk.Button(selected_settings, text='Выше', command=lambda: self.change_home_position(-1))
        self.up_home_button.pack(side='left', padx=(6, 0))
        self.down_home_button = ttk.Button(selected_settings, text='Ниже', command=lambda: self.change_home_position(1))
        self.down_home_button.pack(side='left', padx=(6, 0))

        editor = ttk.LabelFrame(frame, text='Добавить документ', padding=12)
        editor.pack(fill='x')
        editor.columnconfigure(1, weight=1)
        self.file_label = tk.StringVar(value='PDF, JPG, PNG или WebP, до 8 МБ')
        self.pick_button = ttk.Button(editor, text='Выбрать файл…', command=self.choose_file)
        self.pick_button.grid(row=0, column=0, padx=(0, 8), sticky='w')
        ttk.Label(editor, textvariable=self.file_label, wraplength=400).grid(row=0, column=1, sticky='w')
        ttk.Label(editor, text='Название').grid(row=1, column=0, pady=(10, 4), sticky='w')
        self.title = ttk.Entry(editor)
        self.title.grid(row=1, column=1, pady=(10, 4), sticky='ew')
        ttk.Label(editor, text='Номер (по желанию)').grid(row=2, column=0, padx=(0, 8), sticky='w')
        self.number = ttk.Entry(editor)
        self.number.grid(row=2, column=1, sticky='ew')
        ttk.Label(editor, text='Раздел').grid(row=3, column=0, pady=(8, 0), sticky='w')
        self.section = ttk.Combobox(editor, state='readonly', values=(COMPANY_SECTION, ARCHIVE_SECTION))
        self.section.current(0)
        self.section.grid(row=3, column=1, pady=(8, 0), sticky='w')
        self.draft_home = tk.BooleanVar(value=False)
        self.draft_home_check = ttk.Checkbutton(editor, text='Показывать на главной', variable=self.draft_home)
        self.draft_home_check.grid(row=4, column=0, columnspan=2, pady=(8, 0), sticky='w')
        self.publish_button = ttk.Button(editor, text='Добавить на сайт', command=self.publish)
        self.publish_button.grid(row=4, column=1, pady=(8, 0), sticky='e')

        self.status = tk.StringVar()
        ttk.Label(frame, textvariable=self.status, wraplength=550).pack(anchor='w', pady=(10, 0))
        self.update_controls()
        root.after(50, self.start)

    def start(self):
        if self.credentials_store is not None:
            try:
                saved = self.credentials_store.load()
                if saved is not None:
                    self.registry.credentials = saved
            except ValueError as error:
                self.status.set(str(error))
            if self.registry.credentials is None:
                self.configure_ftp()
                return
        self.refresh()

    def configure_ftp(self):
        previous = self.registry.credentials or {}
        values = FtpDialog(self.root, previous.get('ftp_login', '')).result
        if not values:
            if not previous:
                self.status.set('Для работы нажмите «Настройки FTP» и укажите логин и пароль.')
            return

        candidate = Registry(self.registry.directory, values)

        def connected(entries):
            self.registry = candidate
            self.display(entries)
            try:
                self.credentials_store.save(values)
            except OSError:
                self.status.set('Подключились. Windows не сохранила настройки. При следующем запуске введите их снова.')
                return
            self.status.set('Подключились. Настройки сохранены на этом компьютере.')

        self.run(candidate.load, 'Проверяем подключение…', connected)

    def update_controls(self):
        ready = self.credentials_store is None or self.registry.credentials is not None
        for control in (self.title, self.number, self.pick_button, self.reload_button, self.draft_home_check):
            control.configure(state='normal' if ready and not self.busy else 'disabled')
        for button in (self.registry_view_button, self.home_view_button):
            button.configure(state='disabled' if self.busy else 'normal')
        self.section.configure(state='readonly' if ready and not self.busy else 'disabled')
        if self.credentials_store is not None:
            self.ftp_button.configure(state='disabled' if self.busy else 'normal')
        selection = self.list.selection()
        item = self.rows.get(selection[0]) if selection else None
        selected = 'normal' if not self.busy and item is not None else 'disabled'
        self.edit_button.configure(state=selected)
        self.remove_button.configure(state=selected)
        self.move_button.configure(state=selected)
        self.selected_home.set(item is not None and is_on_home(item))
        self.selected_home_check.configure(state=selected if item and item.get('published') else 'disabled')
        position = self.home_positions.get(item['id']) if item else None
        can_move = not self.busy and position is not None
        above = 'normal' if can_move and position > 0 else 'disabled'
        self.first_home_button.configure(state=above)
        self.up_home_button.configure(state=above)
        self.down_home_button.configure(state='normal' if can_move and position < len(self.home_positions) - 1 else 'disabled')
        self.publish_button.configure(state='normal' if not self.busy and self.filename else 'disabled')

    def display(self, entries):
        self.rows = {item['id']: item for item in entries}
        self.home_positions = {item['id']: index for index, item in enumerate(home_documents(entries))}
        self.render_list()

    def render_list(self):
        self.reset_home_drag()
        selection = self.list.selection()
        on_home = self.list_view.get() == 'home'
        row_ids = self.home_positions if on_home else self.rows
        self.list.delete(*self.list.get_children())
        for document_id in row_ids:
            item = self.rows[document_id]
            section = ARCHIVE_SECTION if item.get('archived') else COMPANY_SECTION
            if not item.get('published'):
                section = 'Скрыт'
            position = self.home_positions.get(document_id)
            self.list.insert('', 'end', iid=document_id, values=(item['title'], item.get('number') or '—', section,
                                                                 position + 1 if position is not None else '—'))
        if selection and self.list.exists(selection[0]):
            self.list.selection_set(selection[0])
            self.list.see(selection[0])
        hint = 'Перетаскивайте строки мышью. Порядок сохранится автоматически.' if self.home_positions else 'Отметьте документы для главной в реестре.'
        self.reorder_hint.set(hint if on_home else '')
        self.update_controls()

    def right_click_document(self, event):
        if self.list.identify_region(event.x, event.y) == 'cell':
            self.show_document_menu(self.list.identify_row(event.y), event.x_root, event.y_root)
        return 'break'

    def open_selected_menu(self, _event):
        selection = self.list.selection()
        if selection and not self.busy:
            document_id = selection[0]
            self.list.see(document_id)
            bounds = self.list.bbox(document_id)
            if bounds:
                x, y, _width, height = bounds
                self.show_document_menu(document_id, self.list.winfo_rootx() + x + 8,
                                        self.list.winfo_rooty() + y + height)
        return 'break'

    def show_document_menu(self, document_id, x, y):
        if self.busy or self.dragged_row is not None or document_id not in self.rows:
            return
        item = self.rows[document_id]
        self.list.selection_set(document_id)
        self.list.focus(document_id)
        self.list.focus_set()
        self.update_controls()

        menu = self.document_menu
        menu.delete(0, 'end')
        menu.add_command(label='Открыть файл', command=partial(self.open_document_file, item['file']))
        menu.add_command(label='Редактировать…', command=self.edit_document)
        menu.add_separator()
        if item.get('published'):
            shown = is_on_home(item)
            menu.add_command(label='Убрать с главной' if shown else 'Показать на главной',
                             command=partial(self.save_home_visibility, not shown))
        position = self.home_positions.get(document_id)
        if position is not None and len(self.home_positions) > 1:
            order = self.document_order_menu
            order.delete(0, 'end')
            higher = 'normal' if position > 0 else 'disabled'
            lower = 'normal' if position + 1 < len(self.home_positions) else 'disabled'
            order.add_command(label='На первое место', command=self.change_home_position, state=higher)
            order.add_command(label='Выше', command=partial(self.change_home_position, -1), state=higher)
            order.add_command(label='Ниже', command=partial(self.change_home_position, 1), state=lower)
            menu.add_cascade(label='Порядок на главной', menu=order)
        move_label = 'В раздел «Документы СБ+»' if item.get('archived') else 'В архив'
        menu.add_command(label=move_label, command=self.move_document)
        menu.add_separator()
        menu.add_command(label='Удалить…', command=self.remove)
        try:
            menu.tk_popup(x, y)
        finally:
            menu.grab_release()

    def open_document_file(self, reference):
        try:
            url = urljoin(SITE, reference)
            location = urlsplit(url)
            if (location.scheme in ('http', 'https') and location.netloc == urlsplit(SITE).netloc
                    and location.path not in ('', '/')):
                if webbrowser.open(url, new=2):
                    return
        except (ValueError, OSError, webbrowser.Error):
            pass
        self.status.set('Не удалось открыть файл в браузере.')

    def start_home_drag(self, event):
        if self.busy or self.list_view.get() != 'home' or len(self.home_positions) < 2:
            return
        if self.list.identify_region(event.x, event.y) == 'cell':
            self.dragged_row = self.list.identify_row(event.y) or None
            self.drag_start_y = event.y

    def preview_home_drag(self, event):
        if not self.dragged_row or self.busy:
            return
        self.drag_y = event.y
        if not self.drag_active:
            if abs(event.y - self.drag_start_y) < 4:
                return
            self.drag_active = True
            self.list.configure(cursor='fleur')
            self.drag_scroll = self.root.after(120, self.scroll_home_drag)
        self.preview_home_row(event.y)
        return 'break'

    def preview_home_row(self, y):
        target = self.list.identify_row(y)
        if target and target != self.dragged_row:
            self.list.move(self.dragged_row, '', self.list.index(target))
            for position, row in enumerate(self.list.get_children(), start=1):
                self.list.set(row, 'home', position)

    def scroll_home_drag(self):
        height = self.list.winfo_height()
        if self.drag_y < 28:
            self.list.yview_scroll(-1, 'units')
            self.preview_home_row(max(24, self.drag_y))
        elif self.drag_y > height - 22:
            self.list.yview_scroll(1, 'units')
            self.preview_home_row(min(height - 3, self.drag_y))
        self.drag_scroll = self.root.after(120, self.scroll_home_drag)

    def reset_home_drag(self):
        if self.drag_scroll is not None:
            self.root.after_cancel(self.drag_scroll)
            self.drag_scroll = None
        if self.drag_active:
            self.list.configure(cursor='')
        self.drag_active = False
        self.dragged_row = None

    def cancel_home_drag(self, _event):
        if self.dragged_row is not None:
            self.render_list()
            return 'break'

    def drop_home_row(self, event):
        document_id = self.dragged_row
        active = self.drag_active
        self.reset_home_drag()
        if not active:
            return
        inside = 0 <= event.x < self.list.winfo_width() and 0 <= event.y < self.list.winfo_height()
        if not inside or self.busy:
            self.render_list()
            return 'break'
        target = self.list.index(document_id)
        if target != self.home_positions[document_id]:
            self.save_home_position(document_id, target, on_error=self.render_list)
        return 'break'

    def run(self, task, progress, finished, *, on_error=None):
        if self.busy:
            return
        self.busy = True
        self.status.set(progress)
        self.update_controls()
        future = self.worker.submit(task)

        def poll():
            if not future.done():
                self.root.after(100, poll)
                return
            self.busy = False
            self.update_controls()
            try:
                finished(future.result())
            except ValueError as error:
                self.status.set(str(error))
            except error_perm as error:
                self.status.set('FTP отклонил вход. Проверьте логин и пароль.' if str(error).startswith('530')
                                else 'FTP отклонил операцию. Обновите список и проверьте доступ к файлам сайта.')
            except all_errors:
                self.status.set('Связь с хостингом прервалась. Обновите список и повторите действие при необходимости.')
            else:
                self.update_controls()
                return
            if on_error is not None:
                on_error()
            self.update_controls()

        self.root.after(100, poll)

    def refresh(self):
        def loaded(entries):
            self.display(entries)
            self.status.set('Список с сайта обновлён.')

        self.run(self.registry.load, 'Загружаем список с сайта…', loaded)

    def choose_file(self):
        filename = filedialog.askopenfilename(parent=self.root, title='Выберите PDF или скан',
                                              filetypes=DOCUMENT_FILETYPES)
        if filename:
            self.filename = filename
            self.file_label.set(Path(filename).name)
            if not self.title.get().strip():
                self.title.insert(0, Path(filename).stem)
            self.title.focus_set()
            self.update_controls()

    def publish(self):
        section = self.section.get()

        def published(entries):
            self.display(entries)
            self.filename = ''
            self.document_id = uuid4().hex
            self.title.delete(0, 'end')
            self.number.delete(0, 'end')
            self.section.current(0)
            self.draft_home.set(False)
            self.file_label.set('PDF, JPG, PNG или WebP, до 8 МБ')
            self.status.set(f'Документ добавлен в раздел «{section}».')

        task = partial(self.registry.add, self.filename, self.title.get(), self.number.get(), self.document_id,
                       archived=section == ARCHIVE_SECTION, show_on_home=self.draft_home.get())
        self.run(task, 'Публикуем документ…', published)

    def edit_document(self):
        selection = self.list.selection()
        if self.busy or not selection:
            return
        document_id = selection[0]

        def submit(dialog, changes):
            def saved(result):
                entries, file_removed = result
                self.display(entries)
                self.status.set('Документ обновлён.' if file_removed
                                else 'Документ обновлён. FTP не подтвердил удаление прежнего файла.')
                dialog.set_saving(False)
                dialog.cancel()

            self.run(partial(self.registry.edit, document_id, **changes), 'Сохраняем изменения…', saved,
                     on_error=lambda: dialog.show_error(self.status.get()))

        DocumentEditDialog(self.root, self.rows[document_id], submit)

    def save_home_visibility(self, visible=None):
        selection = self.list.selection()
        if not selection:
            return
        document_id = selection[0]
        if visible is None:
            visible = self.selected_home.get()

        def saved(entries):
            self.display(entries)
            self.status.set('Документ показан на главной.' if visible else 'Документ доступен в реестре.')

        self.run(partial(self.registry.set_home_visibility, document_id, visible), 'Обновляем показ на главной…', saved)

    def change_home_position(self, offset=None):
        selection = self.list.selection()
        if not selection or selection[0] not in self.home_positions:
            return
        document_id = selection[0]
        target = 0 if offset is None else self.home_positions[document_id] + offset
        self.save_home_position(document_id, target)

    def save_home_position(self, document_id, target, *, on_error=None):
        def saved(entries):
            self.display(entries)
            self.list.selection_set(document_id)
            self.list.see(document_id)
            self.status.set(f'Позиция на главной: {self.home_positions[document_id] + 1}.')

        self.run(partial(self.registry.set_home_position, document_id, target), 'Сохраняем порядок на главной…', saved,
                 on_error=on_error)

    def move_document(self):
        selection = self.list.selection()
        if not selection:
            return
        item = self.rows[selection[0]]
        archived = not item.get('archived')
        section = ARCHIVE_SECTION if archived else COMPANY_SECTION
        if not messagebox.askyesno('Раздел документа', f'Переместить «{item["title"]}» в раздел «{section}»?',
                                   parent=self.root, default='no'):
            return

        def moved(entries):
            self.display(entries)
            self.status.set(f'Документ перемещён в раздел «{section}».')

        self.run(partial(self.registry.move, item['id'], archived), 'Меняем раздел…', moved)

    def remove(self):
        selection = self.list.selection()
        if not selection:
            return
        item = self.rows[selection[0]]
        if not messagebox.askyesno('Удаление документа', f'Убрать «{item["title"]}» из реестра на сайте?',
                                   parent=self.root, default='no'):
            return

        def removed(result):
            entries, file_removed = result
            self.display(entries)
            self.status.set('Документ удалён из реестра.' if file_removed
                            else 'Документ убран из реестра. FTP не подтвердил удаление файла.')

        self.run(partial(self.registry.remove, item['id']), 'Удаляем документ…', removed)

    def close(self):
        if self.busy:
            self.status.set('Дождитесь завершения операции.')
            return
        self.reset_home_drag()
        self.worker.shutdown()
        self.root.destroy()


def main(default_credentials=None):
    root = tk.Tk()
    DocumentsWindow(root, Registry(credentials=default_credentials), CredentialsStore(APP_DATA) if FROZEN else None)
    root.mainloop()


if __name__ == '__main__':
    main()
