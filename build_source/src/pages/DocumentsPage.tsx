import { useEffect, useRef, useState } from 'react';
import { Archive, ArrowUpRight, FileCheck2, FileText, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InnerAction, PagePath } from '../components/InnerPages';
import { Seo } from '../components/Shared';
import { useContent, type License } from '../context/ContentContext';

type Scope = 'all' | 'company' | 'archive';
const normalize = (value: string) => value.toLocaleLowerCase('ru-RU').replace(/ё/g, 'е').trim();
const isScan = (file: string) => /\.(?:jpe?g|png|webp)(?:$|[?#&])/i.test(file);

function DocumentPreview({ document, onClose }: { document: License; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [imageError, setImageError] = useState(false);
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} className="document-dialog" aria-labelledby="document-dialog-title" onClose={onClose}
    onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
    <div className="document-dialog-inner">
      <div className="document-dialog-head"><div><span className="eyebrow">{document.archived ? 'Архивный документ' : 'Документ компании'}</span><h2 id="document-dialog-title">{document.title}</h2></div>
        <button type="button" className="icon-button" aria-label="Закрыть документ" onClick={() => dialog.current?.close()}><X size={22}/></button>
      </div>
      {document.description && <p>{document.description}</p>}
      {isScan(document.file) && !imageError && <img src={document.file} alt={`Скан документа «${document.title}»`} onError={() => setImageError(true)}/>}
      {imageError && <p role="status">Скан не удалось загрузить. Можно открыть оригинал отдельно или запросить копию.</p>}
      {!isScan(document.file) && <div className="document-file-preview"><FileText size={34} aria-hidden="true"/><p>Документ открывается в отдельной вкладке.</p></div>}
      <a href={document.file} target="_blank" rel="noreferrer" className="button">Открыть оригинал<ArrowUpRight size={17}/></a>
    </div>
  </dialog>;
}

export function DocumentsPage() {
  const { content, loading, fallback } = useContent();
  const [scope, setScope] = useState<Scope>('all');
  const [query, setQuery] = useState('');
  const [preview, setPreview] = useState<License | null>(null);
  const published = content.licenses.filter(item => item.published);
  const archives = published.filter(item => item.archived).length;
  const counts: Record<Scope, number> = { all: published.length, archive: archives, company: published.length - archives };
  const scopes: { value: Scope; label: string }[] = [{ value: 'all', label: 'Все' }, { value: 'company', label: 'Документы СБ+' }, { value: 'archive', label: 'Архив' }];
  const results = published.filter(item => (scope === 'all' || item.archived === (scope === 'archive')) &&
    normalize(`${item.title} ${item.number} ${item.description}`).includes(normalize(query)))
    .sort((a, b) => Number(a.archived) - Number(b.archived));
  return <div className="inner-page documents-page">
    <Seo title="Лицензии и документы" description="Реестр опубликованных документов СБ+ и архивных материалов. Поиск по названию и номеру."/>
    <div className="container"><PagePath current="Лицензии"/>
      <section className="registry-heading"><div><span className="eyebrow"><FileCheck2 size={16}/> Реестр документов</span><h1>Лицензии и документы</h1><p>Опубликованные документы СБ+ и материалы с прежнего сайта. Архивные документы отмечены отдельно.</p></div>
        <div className="registry-counts"><div><strong>{counts.company}</strong><span>Документы СБ+</span></div><div><strong>{counts.archive}</strong><span>В архиве</span></div></div>
      </section>
      <section className="registry" aria-label="Поиск и просмотр документов">
        <div className="registry-toolbar"><div className="inner-pills" role="group" aria-label="Раздел реестра">
          {scopes.map(({ value, label }) => <button type="button" key={value} aria-pressed={scope === value} onClick={() => setScope(value)}>{label} <small>{counts[value]}</small></button>)}
        </div><label className="inner-search"><Search size={19} aria-hidden="true"/><input type="search" value={query} onChange={event => setQuery(event.target.value)} aria-label="Поиск документов" placeholder="Название или номер"/></label></div>
        <div className="registry-columns" aria-hidden="true"><span>Документ</span><span>Раздел</span><span>Просмотр</span></div>
        {results.length ? <ul className="registry-list">{results.map(item => <li key={item.id}>
          <div className="registry-file"><span className="registry-file-icon"><FileText size={21} aria-hidden="true"/></span><div><h2>{item.title}</h2>{item.number && <p>№ {item.number}</p>}{item.description && <p>{item.description}</p>}</div></div>
          <span className={`registry-status${item.archived ? ' is-archive' : ''}`}>{item.archived ? <Archive size={14}/> : <FileCheck2 size={14}/>} {item.archived ? 'Архив' : 'СБ+'}</span>
          <button className="registry-open" type="button" onClick={() => setPreview(item)} aria-label={`Просмотреть документ «${item.title}»`}>Просмотреть<ArrowUpRight size={16}/></button>
        </li>)}</ul> : <div className="registry-empty" role="status"><FileText size={32} aria-hidden="true"/><h2>{loading ? 'Проверяем документы' : query.trim() ? 'Совпадений нет' : 'В этом разделе пока нет документов'}</h2>
          {query.trim() ? <button type="button" className="button button-outline" onClick={() => setQuery('')}>Сбросить поиск</button> : !loading && <InnerAction to="/contacts?topic=documents">Запросить документы</InnerAction>}
        </div>}
        {fallback && <p className="directory-message" role="status">Сервер временно не ответил. Показана сохранённая копия реестра.</p>}
      </section>
      <aside className="registry-foot"><Archive size={23} aria-hidden="true"/><div><h2>О документах из архива</h2><p>Архивные материалы не подтверждают наличие действующих допусков. Документы для конкретного проекта можно запросить у компании.</p></div>
        <Link className="button button-outline" to="/contacts?topic=documents">Запросить документы<ArrowUpRight size={17}/></Link>
      </aside>
    </div>
    {preview && <DocumentPreview key={preview.id} document={preview} onClose={() => setPreview(null)}/>}
  </div>;
}
