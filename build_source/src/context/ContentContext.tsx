import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import initialContent from '../../public/content.json';
export interface License { id: string; title: string; description: string; number: string; file: string; archived: boolean; published: boolean; showOnHome?: boolean; homeOrder?: number; }
export interface Post { id: string; title: string; excerpt: string; body: string; date: string; category: string; cover: string; published: boolean; }
export interface SiteContent { version: number; revision?: number; licenses: License[]; posts: Post[]; }
export const API = './api/index.php';
export async function api<T = any>(action: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API}?action=${action}`, { credentials: 'same-origin', ...options });
  let result: any;
  try { result = await response.json(); } catch { throw new Error('Сервер временно недоступен. Попробуйте обновить страницу.'); }
  if (!response.ok) throw new Error(result.error || 'Не удалось выполнить запрос. Попробуйте ещё раз.');
  return result;
}
const Context = createContext<{ content: SiteContent; reload: () => Promise<void>; loading: boolean; fallback: boolean }>({ content: initialContent, reload: async () => {}, loading: true, fallback: false });
const refreshInterval = 30_000;

export function ContentProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  const sequence = useRef(0);
  const reload = useCallback(async () => {
    const request = ++sequence.current;
    try {
      const data = await api<SiteContent>('content', { cache: 'no-store' });
      if (!Array.isArray(data?.licenses)) throw new Error('Не удалось прочитать реестр документов.');
      if (request !== sequence.current) return;
      setContent(data);
      setFallback(false);
    }
    catch {
      if (request !== sequence.current) return;
      setFallback(true);
      try {
        const response = await fetch('./content.json', { cache: 'no-store' });
        if (!response.ok) return;
        const data: SiteContent = await response.json();
        if (request === sequence.current && Array.isArray(data?.licenses)) setContent(data);
      } catch { /* The last available registry remains visible. */ }
    }
    finally { if (request === sequence.current) setLoading(false); }
  }, []);

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/documents') return;
    void reload();
    const refresh = () => { if (document.visibilityState === 'visible') void reload(); };
    const timer = window.setInterval(refresh, refreshInterval);
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [pathname, reload]);

  return <Context.Provider value={{ content, reload, loading, fallback }}>{children}</Context.Provider>;
}
export const useContent = () => useContext(Context);
