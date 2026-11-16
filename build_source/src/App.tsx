import { HashRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { ContentProvider } from './context/ContentContext';
import { HomePage } from './pages/HomePage';
import { NotFoundPage, LegalPage } from './pages/ContentPages';

const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(module => ({ default: module.ServiceDetailPage })));
const ContactsPage = lazy(() => import('./pages/ContactsPage').then(module => ({ default: module.ContactsPage })));
const DocumentsPage = lazy(() => import('./pages/DocumentsPage').then(module => ({ default: module.DocumentsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(module => ({ default: module.PrivacyPage })));
const AdminPage = lazy(() => import('./pages/AdminPage'));
function SiteRoutes() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  if (pathname === '/admin') return <Suspense fallback={<div className="page-loading">Открываем панель управления…</div>}><AdminPage /></Suspense>;
  return <Layout><Suspense fallback={<div className="page-loading" role="status">Открываем страницу…</div>}><Routes>
    <Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<ServicesPage />} /><Route path="/services/:id" element={<ServiceDetailPage />} />
    <Route path="/contacts" element={<ContactsPage />} /><Route path="/documents" element={<DocumentsPage />} />
    <Route path="/journal/*" element={<Navigate to="/" replace />} />
    <Route path="/privacy" element={<PrivacyPage />} /><Route path="/terms" element={<LegalPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Suspense></Layout>;
}
export default function App() { return <HashRouter><ContentProvider><SiteRoutes /></ContentProvider></HashRouter>; }
