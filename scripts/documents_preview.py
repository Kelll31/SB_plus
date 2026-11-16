"""Local preview of a PDF or scan selected in the document editor."""

from io import BytesIO
import tkinter as tk
from tkinter import simpledialog, ttk

from PIL import Image, ImageOps, ImageTk
import pypdfium2 as pdfium
import pypdfium2.raw as pdfium_raw


ZOOM_LEVELS = (1, 1.5, 2, 3)
MAX_PREVIEW_SIDE = 3200


class PreviewWindow(tk.Toplevel):
    def __init__(self, parent, filename, *, pdf=None, scan=None):
        super().__init__(parent)
        self.withdraw()
        self.pdf = pdf
        self.scan = scan
        self.page_count = len(pdf) if pdf is not None else 1
        self.index = 0
        self.render_job = None
        self.photo = None
        self.title(f'Предпросмотр — {filename}')
        self.transient(parent)
        self.geometry(f'{min(860, parent.winfo_screenwidth() - 90)}x{min(730, parent.winfo_screenheight() - 100)}')
        self.minsize(540, 330)
        self.protocol('WM_DELETE_WINDOW', self.close)
        self.bind('<Escape>', self.close)

        toolbar = ttk.Frame(self, padding=(12, 8))
        toolbar.pack(fill='x')
        if pdf is not None:
            self.previous = ttk.Button(toolbar, text='Назад', command=lambda: self.change_page(-1))
            self.previous.pack(side='left')
            self.page_label = tk.StringVar()
            ttk.Label(toolbar, textvariable=self.page_label, width=15, anchor='center').pack(side='left', padx=4)
            self.next = ttk.Button(toolbar, text='Далее', command=lambda: self.change_page(1))
            self.next.pack(side='left', padx=(0, 12))
        self.zoom = ttk.Combobox(toolbar, values=('По размеру окна', '150%', '200%', '300%'), width=17, state='readonly')
        self.zoom.current(0)
        self.zoom.pack(side='left')
        self.zoom.bind('<<ComboboxSelected>>', self.schedule_render)
        ttk.Button(toolbar, text='Закрыть', command=self.close).pack(side='right')

        viewport = ttk.Frame(self)
        viewport.pack(fill='both', expand=True)
        viewport.rowconfigure(0, weight=1)
        viewport.columnconfigure(0, weight=1)
        self.canvas = tk.Canvas(viewport, background='#e9edf0', borderwidth=0, highlightthickness=0)
        self.canvas.grid(row=0, column=0, sticky='nsew')
        vertical = ttk.Scrollbar(viewport, orient='vertical', command=self.canvas.yview)
        vertical.grid(row=0, column=1, sticky='ns')
        horizontal = ttk.Scrollbar(viewport, orient='horizontal', command=self.canvas.xview)
        horizontal.grid(row=1, column=0, sticky='ew')
        self.canvas.configure(xscrollcommand=horizontal.set, yscrollcommand=vertical.set)
        self.canvas.bind('<Configure>', self.schedule_render)
        self.canvas.bind('<MouseWheel>', self.scroll)
        self.canvas.bind('<Shift-MouseWheel>', self.scroll_horizontal)
        self.canvas_image = self.canvas.create_image(0, 0, anchor='nw')
        self.status = tk.StringVar()
        ttk.Label(self, textvariable=self.status, padding=(12, 5)).pack(fill='x')

        self.update_pages()
        self.deiconify()
        self.wait_visibility()
        self.grab_set()
        self.focus_set()
        self.wait_window()

    def scroll(self, event):
        self.canvas.yview_scroll(-3 if event.delta > 0 else 3, 'units')

    def scroll_horizontal(self, event):
        self.canvas.xview_scroll(-3 if event.delta > 0 else 3, 'units')

    def update_pages(self):
        if self.pdf is not None:
            self.page_label.set(f'{self.index + 1} из {self.page_count}')
            self.previous.configure(state='normal' if self.index > 0 else 'disabled')
            self.next.configure(state='normal' if self.index + 1 < self.page_count else 'disabled')

    def change_page(self, step):
        self.index += step
        self.update_pages()
        self.schedule_render()

    def schedule_render(self, _event=None):
        if self.render_job is not None:
            self.after_cancel(self.render_job)
        self.render_job = self.after(60, self.render)

    def scale_for(self, width, height):
        if width <= 0 or height <= 0:
            raise ValueError('Пустая страница.')
        space_w = max(self.canvas.winfo_width() - 24, 1)
        space_h = max(self.canvas.winfo_height() - 24, 1)
        fit = min(space_w / width, space_h / height)
        return min(fit * ZOOM_LEVELS[self.zoom.current()], MAX_PREVIEW_SIDE / max(width, height))

    def render_image(self):
        if self.pdf is None:
            width, height = self.scan.size
            scale = self.scale_for(width, height)
            return self.scan.resize((max(round(width * scale), 1), max(round(height * scale), 1)), Image.Resampling.LANCZOS)
        page = self.pdf[self.index]
        try:
            bitmap = page.render(scale=self.scale_for(*page.get_size()))
            try:
                return bitmap.to_pil().copy()
            finally:
                bitmap.close()
        finally:
            page.close()

    def render(self):
        self.render_job = None
        try:
            with self.render_image() as image:
                self.photo = ImageTk.PhotoImage(image, master=self)
        except (OSError, ValueError, pdfium.PdfiumError):
            self.canvas.itemconfigure(self.canvas_image, image='')
            self.status.set('Не удалось отобразить страницу.')
            return
        width, height = self.photo.width(), self.photo.height()
        x = max((self.canvas.winfo_width() - width) // 2, 12)
        y = max((self.canvas.winfo_height() - height) // 2, 12)
        self.canvas.coords(self.canvas_image, x, y)
        self.canvas.itemconfigure(self.canvas_image, image=self.photo)
        self.canvas.configure(scrollregion=(0, 0, x + width + 12, y + height + 12))
        self.canvas.xview_moveto(0)
        self.canvas.yview_moveto(0)
        self.status.set('')

    def close(self, _event=None):
        if self.render_job is not None:
            self.after_cancel(self.render_job)
        self.destroy()


def open_preview(parent, filename, data, extension):
    previous_grab = parent.grab_current()
    try:
        if extension == 'pdf':
            try:
                pdf = pdfium.PdfDocument(data)
            except pdfium.PdfiumError as error:
                if error.err_code != pdfium_raw.FPDF_ERR_PASSWORD:
                    raise
                password = simpledialog.askstring('Предпросмотр PDF', 'Пароль от файла', show='*', parent=parent)
                if password is None:
                    return
                pdf = pdfium.PdfDocument(data, password=password)
            try:
                if len(pdf) == 0:
                    raise ValueError('В PDF нет страниц.')
                PreviewWindow(parent, filename, pdf=pdf)
            finally:
                pdf.close()
        else:
            with Image.open(BytesIO(data)) as source:
                source.thumbnail((MAX_PREVIEW_SIDE, MAX_PREVIEW_SIDE), Image.Resampling.LANCZOS)
                with ImageOps.exif_transpose(source) as scan:
                    PreviewWindow(parent, filename, scan=scan)
    except (OSError, Image.DecompressionBombError, pdfium.PdfiumError) as error:
        raise ValueError('Не удалось открыть предпросмотр. Проверьте выбранный файл и его пароль, если он защищён.') from error
    finally:
        if previous_grab is not None and previous_grab.winfo_exists():
            previous_grab.grab_set()
            previous_grab.focus_set()
