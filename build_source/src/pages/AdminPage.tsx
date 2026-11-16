import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, FileText, KeyRound, LogOut, Plus, ShieldCheck, Trash2 } from 'lucide-react';
import { Brand } from '../components/Layout';
import { api, type License, type SiteContent, useContent } from '../context/ContentContext';
import './adminDocuments.css';

type AuthStatus = { configured: boolean; authenticated: boolean; csrf: string };
const fileTypes = '.pdf,.jpg,.jpeg,.png,.webp';
const adminUrl = 'https://poligonsb.ru/#/admin';

export default function AdminPage() {
  const { reload } = useContent();
  const [auth, setAuth] = useState<AuthStatus | null>(null);
  const [documents, setDocuments] = useState<License[] | null>(null);
  const [draftId, setDraftId] = useState('');
  const [removing, setRemoving] = useState<License | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const pending = useRef(false);
  const titleInput = useRef<HTMLInputElement>(null);
  const deleteDialog = useRef<HTMLDialogElement>(null);
  const adding = draftId !== '';

  async function refresh() {
    setLoading(true);
    setError('');
    try {
      const status = await api<AuthStatus>('status');
      setAuth(status);
      setDocuments(status.authenticated ? (await api<SiteContent>('admin-content')).licenses : null);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { void refresh(); }, []);
  useEffect(() => { if (adding) titleInput.current?.focus(); }, [adding]);
  useEffect(() => { if (removing) deleteDialog.current?.showModal(); }, [removing]);

  async function run(action: () => Promise<void>) {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setError('');
    setMessage('');
    try {
      await action();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  function send<T>(action: string, body: FormData | Record<string, unknown> = {}) {
    const headers = new Headers({ 'X-CSRF-Token': auth?.csrf ?? '' });
    if (body instanceof FormData) return api<T>(action, { method: 'POST', headers, body });
    headers.set('Content-Type', 'application/json');
    return api<T>(action, { method: 'POST', headers, body: JSON.stringify(body) });
  }

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    void run(async () => {
      await send(auth?.configured ? 'login' : 'setup', {
        password: values.get('password'), setupKey: values.get('setupKey'),
      });
      await refresh();
    });
  }

  function signOut() {
    void run(async () => {
      await send('logout');
      setDraftId('');
      setDocuments(null);
      setAuth(null);
      await refresh();
    });
  }

  function addDocument(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    values.set('id', draftId);
    const file = values.get('file');
    if (!(file instanceof File) || !file.size || file.size > 8 * 1024 * 1024) {
      setError('Выберите файл размером до 8 МБ.');
      return;
    }
    void run(async () => {
      const result = await send<SiteContent>('add-document', values);
      setDocuments(result.licenses);
      setDraftId('');
      setMessage('Документ добавлен на сайт.');
      await reload();
    });
  }

  function removeDocument(document: License) {
    void run(async () => {
      const result = await send<SiteContent>('remove-document', { id: document.id });
      setDocuments(result.licenses);
      deleteDialog.current?.close();
      setMessage('Документ удалён с сайта.');
      await reload();
    });
  }

  const firstRun = auth && !auth.configured;
  const publicHost = ['poligonsb.ru', 'www.poligonsb.ru'].includes(location.hostname);
  const status = error && <div className="notice admin-error" role="alert">{error}</div>;

  return <div className="admin-shell">
    <Helmet><title>Управление документами | СБ+</title><meta name="robots" content="noindex,nofollow"/></Helmet>
    <header className="admin-header">
      <div className="container admin-header-inner">
        <Brand/>
        <div className="admin-header-actions">
          <Link to="/documents" className="text-link">Реестр на сайте<ArrowUpRight size={16}/></Link>
          {auth?.authenticated && <button className="button button-outline button-small" type="button" disabled={busy} onClick={signOut}><LogOut size={16}/>Выйти</button>}
        </div>
      </div>
    </header>
    {!auth?.authenticated ? <main className="login-wrap">
      <div className="login-card">
        <ShieldCheck size={34} aria-hidden="true"/>
        <h1>{firstRun ? 'Первый вход' : 'Управление документами'}</h1>
        <p>{firstRun ? 'Введите ключ установки и придумайте пароль от 12 символов.' : 'Лицензии и сертификаты СБ+.'}</p>
        {status}
        {loading ? <p role="status">Подключаемся к серверу…</p> : auth ? <form onSubmit={signIn}>
          {firstRun && <label>Ключ установки<input name="setupKey" type="password" autoComplete="off" required maxLength={128}/></label>}
          <label>Пароль<input name="password" type="password" autoComplete={firstRun ? 'new-password' : 'current-password'} minLength={12} maxLength={72} required/></label>
          <button className="button" disabled={busy}><KeyRound size={17}/>{firstRun ? 'Создать пароль' : 'Войти'}</button>
        </form> : <div className="admin-document-actions">
          {publicHost && location.protocol === 'http:' && <a className="text-link" href={adminUrl}>Открыть по HTTPS<ArrowUpRight size={16}/></a>}
          <button className="button button-outline" type="button" onClick={() => void refresh()}>Повторить проверку</button>
        </div>}
      </div>
    </main> : <main className="container admin-main admin-documents">
      <div className="admin-documents-heading">
        <h1>Лицензии и сертификаты</h1>
        {!adding && documents && <button className="button" type="button" onClick={() => { setError(''); setMessage(''); setDraftId(crypto.randomUUID()); }}><Plus size={18}/>Добавить документ</button>}
      </div>
      {!removing && status}
      {message && <p className="admin-documents-success" role="status">{message}</p>}
      {adding && <form className="admin-editor admin-document-form" onSubmit={addDocument}>
        <h2>Добавление документа</h2>
        <label>Название<input ref={titleInput} name="title" placeholder="Например, лицензия МЧС" maxLength={150} required disabled={busy}/></label>
        <label>Номер <span>необязательно</span><input name="number" maxLength={75} disabled={busy}/></label>
        <label>Файл <span>PDF, JPG, PNG или WebP до 8 МБ</span><input name="file" type="file" accept={fileTypes} required disabled={busy}/></label>
        <div className="admin-document-actions">
          <button className="button" disabled={busy}>{busy ? 'Загружаем…' : 'Добавить на сайт'}</button>
          <button className="button button-outline" type="button" disabled={busy} onClick={() => { setDraftId(''); setError(''); }}>Отмена</button>
        </div>
      </form>}
      {loading && <p role="status">Загружаем документы…</p>}
      {!loading && !documents && <button className="button button-outline" type="button" onClick={() => void refresh()}>Обновить список</button>}
      {documents && (documents.length > 0 ? <ul className="admin-list admin-document-list">
        {documents.map(document => <li className="admin-item" key={document.id}>
          <div className="admin-item-icon"><FileText size={23} aria-hidden="true"/></div>
          <div className="admin-item-info">
            <a href={document.file} target="_blank" rel="noreferrer">{document.title}<ArrowUpRight size={14} aria-hidden="true"/></a>
            {(document.number || document.archived || !document.published) && <span>{[document.number && `№ ${document.number}`, document.archived && 'Архив', !document.published && 'Скрыт'].filter(Boolean).join(' · ')}</span>}
          </div>
          <button className="button button-outline danger-button" type="button" disabled={busy} aria-label={`Удалить «${document.title}»`} onClick={() => { setError(''); setMessage(''); setRemoving(document); }}><Trash2 size={16}/>Удалить</button>
        </li>)}
      </ul> : <p className="admin-document-empty">Документов пока нет.</p>)}
      {removing && <dialog ref={deleteDialog} className="admin-delete-dialog" aria-labelledby="admin-delete-title" onCancel={event => { if (busy) event.preventDefault(); }} onClose={() => setRemoving(null)}>
        <h2 id="admin-delete-title">Удалить документ?</h2>
        <p>«{removing.title}» исчезнет из реестра на сайте.</p>
        {status}
        <div className="admin-document-actions">
          <button className="button button-outline" type="button" autoFocus disabled={busy} onClick={() => deleteDialog.current?.close()}>Отмена</button>
          <button className="button button-outline danger-button" type="button" disabled={busy} onClick={() => removeDocument(removing)}>{busy ? 'Удаляем…' : 'Удалить документ'}</button>
        </div>
      </dialog>}
    </main>}
  </div>;
}
