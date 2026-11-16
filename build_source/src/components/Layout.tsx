import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ScrollExperience } from './ScrollExperience';
import { ArrowUpRight, Menu, X, Phone, MapPin, ArrowUp } from 'lucide-react';
export const PHONE = '+7 (926) 580-51-79';
export const PHONE_HREF = 'tel:+79265805179';
export const EMAIL = 'poligonsb@mail.ru';
const navigation = [['Услуги', '/services'], ['О компании', '/about'], ['Лицензии', '/documents'], ['Контакты', '/contacts']];
export function Brand() { return <Link to="/" className="brand" aria-label="СБ+ — на главную"><img src="./logo_SB+.png" alt="" width="46" height="46" /><span className="brand-name">СБ<span>+</span><small>Системы безопасности</small></span></Link>; }
function Header() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation(); const toggleRef = useRef<HTMLButtonElement>(null);
  const [overScene, setOverScene] = useState(pathname === '/');
  useEffect(() => {
    if (pathname !== '/') { setOverScene(false); return; }
    const scene = document.querySelector('.facility-story');
    if (!scene) { setOverScene(false); return; }
    const update = () => { const rect = scene.getBoundingClientRect(); setOverScene(rect.top <= 90 && rect.bottom > 90); };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [pathname]);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { if (!open) return; const listener = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } }; document.addEventListener('keydown', listener); return () => document.removeEventListener('keydown', listener); }, [open]);
  return <><div className={`utility-bar${pathname === '/' ? ' utility-hidden' : ''}`}><div className="container utility-inner"><span><MapPin size={13} /> Серпухов · Работаем с 2003 года</span><a href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={12} /></a></div></div>
    <header className={`site-header${pathname === '/' ? ' header-home' : ''}${overScene && !open ? ' header-over-scene' : ''}`}><div className="container header-inner"><Brand /><nav className="desktop-nav" aria-label="Основная навигация">{navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav><a className="header-phone" href={PHONE_HREF}>{PHONE}<small>Обсудим вашу задачу</small></a><button className="menu-toggle icon-button" ref={toggleRef} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Закрыть меню' : 'Открыть меню'}>{open ? <X /> : <Menu />}</button></div>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Мобильная навигация">{navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}<ArrowUpRight size={18} /></NavLink>)}<a href={PHONE_HREF}><Phone size={18}/>{PHONE}</a></nav>}</header></>;
}
function Footer() { return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Brand /><p className="footer-description">Инженерные решения для безопасности<br />людей, объектов и вашего бизнеса.</p><span className="footer-since"><span className="status-dot" /> Работаем с октября 2003 года</span></div><div><span className="footer-label">Навигация</span>{navigation.map(([label, path]) => <Link className="footer-link" key={path} to={path}>{label}</Link>)}</div><div><span className="footer-label">На связи</span><a className="footer-phone" href={PHONE_HREF}>{PHONE}</a><a className="footer-link" href="tel:+74967760444">+7 (4967) 760-444</a><a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={16}/></a><address>Московская область, г. Серпухов,<br />ул. Водонапорная, 36, офис 223</address></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ООО «СБ+»</span><Link to="/privacy">Конфиденциальность</Link><Link to="/terms">Информация о компании</Link><button onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>Наверх <ArrowUp size={15}/></button></div></div></footer>; }
export function Layout({ children }: { children: ReactNode }) { return <><a className="skip-link" href="#main-content" onClick={e=>{e.preventDefault();document.getElementById('main-content')?.focus();document.getElementById('main-content')?.scrollIntoView();}}>Перейти к содержимому</a><Header /><ScrollExperience>{children}</ScrollExperience><Footer /></>; }
