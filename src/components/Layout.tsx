import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, Phone, Mail, MapPin, Sun, Moon } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../context/ThemeContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-industrial-dark/90 backdrop-blur-xl py-4 border-b border-border-subtle" 
          : "bg-transparent py-8 border-b border-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 p-1 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <img 
              src="/src/images/logo_SB+.png" 
              alt="СБ+" 
              className="w-full h-full object-contain"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('bg-industrial-accent');
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-[-0.05em] uppercase text-industrial-text leading-none">СБ+</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-industrial-accent animate-pulse rounded-full" />
              <span className="font-mono text-[10px] text-industrial-accent font-bold uppercase tracking-[0.3em]">Система под защитой</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              aria-current={location.pathname === link.href ? "page" : undefined}
              className={cn(
                "font-mono text-[13px] uppercase tracking-[0.3em] transition-all duration-300 relative py-2",
                location.pathname === link.href 
                  ? "text-industrial-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-industrial-accent" 
                  : "text-industrial-text/60 hover:text-industrial-text"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-border-subtle mx-2" />
          <a href="tel:84967760444" className="font-mono text-[13px] text-industrial-text hover:text-industrial-accent transition-colors">
            8(4967)760-444
          </a>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-none border border-border-subtle hover:bg-industrial-gray-light transition-colors text-industrial-text"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-none border border-border-subtle hover:bg-industrial-gray-light transition-colors text-industrial-text"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-industrial-text p-2 hover:bg-industrial-gray-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-industrial-dark/95 backdrop-blur-2xl border-b border-border-subtle p-8 flex flex-col gap-2 transition-all duration-300 origin-top",
          isMenuOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
      >
        <nav aria-label="Мобильная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              aria-current={location.pathname === link.href ? "page" : undefined}
              className={cn(
                "font-mono text-sm uppercase tracking-[0.3em] py-5 border-b border-border-subtle transition-colors block",
                location.pathname === link.href ? "text-industrial-accent" : "text-industrial-text"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-6 pt-8">
          <a href="tel:84967760444" className="flex items-center gap-4 text-industrial-accent font-mono text-sm uppercase tracking-widest">
            <Phone size={18} /> 8(4967)760-444
          </a>
          <a href="mailto:poligonsb@mail.ru" className="flex items-center gap-4 text-industrial-text-muted font-mono text-sm uppercase tracking-widest">
            <Mail size={18} /> poligonsb@mail.ru
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-industrial-dark text-industrial-text pt-24 pb-12 border-t border-border-subtle relative overflow-hidden">
      <div className="grid-accent" />
      <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-5">
          <Link to="/" className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 p-1">
              <img 
                src="/src/images/logo_SB+.png" 
                alt="СБ+" 
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter uppercase text-industrial-text">СБ+</span>
              <span className="font-mono text-[10px] text-industrial-accent font-bold uppercase tracking-[0.3em]">Промышленная безопасность</span>
            </div>
          </Link>
          <p className="text-industrial-text-muted max-w-md mb-10 leading-relaxed text-sm">
            Профессиональное проектирование, монтаж и техническое обслуживание систем безопасности на сложных индустриальных объектах. Работаем с 2003 года по всей России.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-industrial-accent uppercase tracking-widest mb-1">Статус</span>
              <span className="text-xs font-bold uppercase tracking-widest">Сертифицированный партнер</span>
            </div>
            <div className="w-px h-8 bg-border-subtle" />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-industrial-accent uppercase tracking-widest mb-1">Регион</span>
              <span className="text-xs font-bold uppercase tracking-widest">Российская Федерация</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <span className="mono-label">Навигация</span>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/" aria-current={location.pathname === "/" ? "page" : undefined} className="hover:text-industrial-accent transition-colors">Главная</Link></li>
            <li><Link to="/services" aria-current={location.pathname === "/services" ? "page" : undefined} className="hover:text-industrial-accent transition-colors">Услуги</Link></li>
            <li><Link to="/about" aria-current={location.pathname === "/about" ? "page" : undefined} className="hover:text-industrial-accent transition-colors">О компании</Link></li>
            <li><Link to="/contacts" aria-current={location.pathname === "/contacts" ? "page" : undefined} className="hover:text-industrial-accent transition-colors">Контакты</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <span className="mono-label">Штаб-квартира</span>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="w-5 h-5 text-industrial-accent shrink-0" />
              <span className="text-industrial-text-muted leading-relaxed">г. Серпухов, ул. Водонапорная, д. 36, офис 223</span>
            </li>
            <li className="flex gap-4">
              <Phone className="w-5 h-5 text-industrial-accent shrink-0" />
              <div className="font-mono">
                <p className="text-industrial-text">8(4967)760-444</p>
                <p className="text-industrial-text-muted">8(4967)355-692</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="w-5 h-5 text-industrial-accent shrink-0" />
              <span className="font-mono text-industrial-accent">poligonsb@mail.ru</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-6 mt-24 pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-industrial-text-muted uppercase tracking-[0.4em]">
        <p>© {new Date().getFullYear()} ООО «СБ+». Все права защищены.</p>
        <div className="flex gap-12">
          <Link to="/privacy" className="hover:text-industrial-text transition-colors">Политика конфиденциальности</Link>
          <Link to="/terms" className="hover:text-industrial-text transition-colors">Юридическая информация</Link>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
