import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import './innerPages.css';

export function PagePath({ current, parent }: { current: string; parent?: { label: string; href: string } }) {
  return <nav className="inner-path" aria-label="Хлебные крошки">
    <Link to="/">Главная</Link><ChevronRight size={13} aria-hidden="true"/>
    {parent && <><Link to={parent.href}>{parent.label}</Link><ChevronRight size={13} aria-hidden="true"/></>}
    <span aria-current="page">{current}</span>
  </nav>;
}

export function InnerAction({ to, children }: { to: string; children: ReactNode }) {
  return <Link className="inner-action" to={to}>{children}<ArrowUpRight size={17} aria-hidden="true"/></Link>;
}
