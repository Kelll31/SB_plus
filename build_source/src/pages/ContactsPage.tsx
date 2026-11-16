import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Clipboard, FileText, Mail, MapPin, Phone, Route } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { PagePath } from '../components/InnerPages';
import { Seo } from '../components/Shared';
import { EMAIL, PHONE, PHONE_HREF } from '../components/Layout';
import { SERVICES } from '../constants/services';

const OFFICE = 'Московская область, Серпухов, ул. Водонапорная, 36, офис 223';
const mapHref = `https://yandex.ru/maps/?text=${encodeURIComponent(OFFICE)}`;
const topics = [
  { id: 'project', label: 'Новый проект', subject: 'Обсуждение проекта', prompt: 'Какие зоны нужно контролировать и какие системы планируете установить?' },
  { id: 'maintenance', label: 'Обслуживание', subject: 'Обслуживание или модернизация', prompt: 'Какая система установлена? Что нужно проверить или обновить?' },
  { id: 'documents', label: 'Документы', subject: 'Запрос документов', prompt: 'Какие документы нужны и для каких работ?' },
];

async function copyText(text: string) {
  if (window.isSecureContext && navigator.clipboard) {
    try { await navigator.clipboard.writeText(text); return true; } catch { /* Try the browser's legacy clipboard action. */ }
  }
  const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const input = document.createElement('textarea');
  input.value = text; input.readOnly = true;
  input.style.cssText = 'position:fixed;left:-10000px;top:0;';
  document.body.append(input);
  input.select();
  try { return document.execCommand('copy'); } catch { return false; }
  finally { input.remove(); active?.focus({ preventScroll: true }); }
}

export function ContactsPage() {
  const [params, setParams] = useSearchParams();
  const selectedService = SERVICES.find(item => item.id === params.get('service'));
  const topic = topics.find(item => item.id === params.get('topic')) || topics[selectedService?.id === 'maintenance' ? 1 : 0];
  const [preview, setPreview] = useState<{ subject: string; text: string } | null>(null);
  const [clipboardStatus, setClipboardStatus] = useState('');
  const previewText = useRef<HTMLTextAreaElement>(null);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    for (const key of ['name', 'contact', 'message']) {
      if (value(key)) continue;
      const field = form.elements.namedItem(key);
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.setCustomValidity('Заполните это поле.');
        field.reportValidity();
      }
      return;
    }
    const lines = [`Имя: ${value('name')}`, `Контакт для ответа: ${value('contact')}`];
    if (value('object')) lines.push(`Объект: ${value('object')}`);
    if (selectedService) lines.push(`Услуга: ${selectedService.title}`);
    setPreview({ subject: `${topic.subject} · СБ+`, text: `${lines.join('\n')}\n\n${value('message')}` });
    setClipboardStatus('');
    requestAnimationFrame(() => previewText.current?.focus());
  }

  return <div className="inner-page contact-editorial">
    <Seo title="Контакты" description="Связь с инженерами СБ+. Телефон, почта, адрес офиса в Серпухове и подготовка письма о проекте."/>
    <div className="container"><PagePath current="Контакты"/>
      <section className="contact-title"><span className="eyebrow">ООО «СБ+» · Контакты</span><h1>Обсудим ваш объект</h1><p>Позвоните техническому директору или подготовьте письмо с описанием задачи.</p>
        <button className="inner-action section-jump contact-jump" type="button" onClick={() => {
          const target = document.getElementById('compose-title');
          target?.focus({ preventScroll: true });
          target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        }}>Перейти к письму<ArrowUpRight size={17} aria-hidden="true"/></button>
      </section>
      <div className="contact-split">
        <div className="contact-side">
          <section className="contact-direct"><Phone size={22} aria-hidden="true"/><span className="eyebrow">Прямая связь с инженером</span><a className="contact-primary-phone" href={PHONE_HREF}>{PHONE}<ArrowUpRight size={22}/></a><p>Эдуард Игоревич Куприков<br/>Технический директор</p><a className="contact-mail" href={`mailto:${EMAIL}`}><Mail size={17}/>{EMAIL}<ArrowUpRight size={15}/></a></section>
          <section className="office-card"><MapPin size={22} aria-hidden="true"/><div><span className="eyebrow">Офис</span><h2>Серпухов, ул. Водонапорная, 36</h2><address>Московская область, офис 223</address><p>Согласуйте время встречи по телефону.</p>
            <div className="office-actions"><a href={mapHref} target="_blank" rel="noreferrer" className="text-link"><Route size={16}/> Построить маршрут</a><button className="icon-button" type="button" aria-label="Скопировать адрес" onClick={async () => setClipboardStatus(await copyText(OFFICE) ? 'Адрес скопирован' : 'Скопируйте адрес из текста выше') }><Clipboard size={17}/></button></div>
            <p className="office-copy-state" role="status">{clipboardStatus.startsWith('Адрес') || clipboardStatus.startsWith('Скопируйте адрес') ? clipboardStatus : ''}</p>
            <details className="office-more"><summary>Дополнительные телефоны</summary><a href="tel:+74967760444">+7 (4967) 760-444 <small>офис / факс</small></a><a href="tel:+74967355692">+7 (4967) 355-692</a></details>
          </div></section>
        </div>
        <section className="contact-composer" aria-labelledby="compose-title">
          <span className="eyebrow"><FileText size={17}/> Письмо в СБ+</span><h2 id="compose-title" tabIndex={-1}>Подготовить обращение</h2>
          <div className="inner-pills" role="group" aria-label="Тема обращения">{topics.map(item => <button key={item.id} type="button" aria-pressed={topic.id === item.id} onClick={() => {
            setPreview(null); setClipboardStatus(''); setParams({ topic: item.id }, { replace: true });
          }}>{item.label}</button>)}</div>
          {selectedService && <p className="composer-service">Услуга: <strong>{selectedService.title}</strong></p>}
          <form onSubmit={prepare} onChange={event => {
            const field = event.target;
            if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity('');
            if (preview) setPreview(null);
            if (clipboardStatus) setClipboardStatus('');
          }}>
            <div className="composer-grid"><label>Ваше имя<input name="name" maxLength={100} required autoComplete="name" placeholder="Как к вам обращаться"/></label>
              <label>Телефон или электронная почта<input name="contact" maxLength={200} required placeholder="Куда ответить"/></label></div>
            <label>Тип объекта<select name="object" defaultValue=""><option value="">Выберите, если уже известно</option><option>Нефтебаза</option><option>Химическое предприятие</option><option>Другое промышленное предприятие</option><option>Склад или логистический комплекс</option><option>Коммерческий объект</option><option>Другой объект</option></select></label>
            <label>{topic.id === 'documents' ? 'Какие документы нужны' : 'Ваша задача'}<textarea name="message" rows={4} maxLength={3000} required placeholder={topic.prompt}/></label>
            <button className="button" type="submit">Подготовить письмо<ArrowUpRight size={18}/></button>
            <p className="composer-privacy">Сайт не отправляет и не сохраняет данные формы. <Link to="/privacy">Конфиденциальность</Link></p>
          </form>
          {preview && <div className="composer-preview"><h3><Check size={19} aria-hidden="true"/> Письмо подготовлено</h3><label>Текст письма<textarea ref={previewText} readOnly rows={5} value={preview.text}/></label>
            <div><a className="button" href={`mailto:${EMAIL}?subject=${encodeURIComponent(preview.subject)}&body=${encodeURIComponent(preview.text)}`}>Открыть в почте<ArrowUpRight size={16}/></a>
              <button type="button" className="button button-outline" onClick={async () => {
                if (await copyText(preview.text)) setClipboardStatus('Текст письма скопирован');
                else { previewText.current?.focus(); previewText.current?.select(); setClipboardStatus('Текст выделен. Скопируйте его вручную'); }
              }}>Копировать текст<Clipboard size={16}/></button>
            </div><p role="status">{clipboardStatus.startsWith('Текст') ? clipboardStatus : ''}</p>
          </div>}
        </section>
      </div>
    </div>
  </div>;
}
