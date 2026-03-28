import { motion, useScroll, useTransform } from "motion/react";
import { Activity, Shield, Flame, Zap, ArrowRight, Factory, Warehouse, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    { label: "Лет опыта", value: "20+" },
    { label: "Проектов", value: "500+" },
    { label: "Объектов", value: "150+" },
    { label: "Сертификатов", value: "12" },
  ];

  const services = [
    {
      id: "cctv",
      title: "Видеонаблюдение",
      desc: "Проектирование и монтаж систем для экстремальных условий: взрывозащита, тепловизоры.",
      icon: <Activity size={32} />,
      link: "/services/cctv"
    },
    {
      id: "skud",
      title: "Контроль доступа",
      desc: "Биометрия и интеграция с ERP.",
      icon: <Shield size={32} />,
      link: "/services/skud"
    },
    {
      id: "ops",
      title: "Пожарная безопасность",
      desc: "Системы ОПС для опасных производств.",
      icon: <Flame size={32} />,
      link: "/services/ops"
    },
    {
      id: "maintenance",
      title: "Техническое обслуживание",
      desc: "Регламентные работы и оперативный ремонт 24/7.",
      icon: <Zap size={32} />,
      link: "/services/maintenance"
    }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>СБ+ - Промышленные системы безопасности в Серпухове | Видеонаблюдение, СКУД, ОПС</title>
        <meta name="description" content="Компания СБ+ предлагает комплексные решения в области промышленной безопасности: проектирование, монтаж и обслуживание систем видеонаблюдения, контроля доступа и пожарной сигнализации." />
      </Helmet>
      <div className="scanline" />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: backgroundY, scale: backgroundScale }}
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format,compress&fit=crop&q=75&w=1920&fm=webp" 
            alt="Industrial Background" 
            className="w-full h-[120%] object-cover opacity-20 grayscale absolute -top-[10%]"
            referrerPolicy="no-referrer"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark via-transparent to-industrial-dark" />
          <div className="grid-accent" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="max-w-4xl"
          >
            <span className="mono-label">Решения промышленной безопасности</span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9] mb-8">
              Защита <br />
              <span className="text-industrial-accent">Промышленных</span> <br />
              Активов
            </h1>
            <p className="text-base md:text-xl text-industrial-text-muted mb-12 max-w-2xl leading-relaxed">
              Комплексные системы безопасности для взрывоопасных производств, заводов и логистических центров. Экспертиза с 2003 года.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link to="/contacts" className="btn-primary w-full sm:w-auto justify-center">
                Консультация инженера
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary w-full sm:w-auto justify-center">
                О компании
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Technical Sidebar Detail */}
        <div className="absolute right-12 bottom-12 hidden xl:flex flex-col items-end gap-4 font-mono text-[10px] text-industrial-text-muted uppercase tracking-[0.3em]">
          <div className="flex items-center gap-3">
            <span>Шир: 54.9189</span>
            <div className="w-12 h-px bg-border-subtle" />
          </div>
          <div className="flex items-center gap-3">
            <span>Дол: 37.4103</span>
            <div className="w-12 h-px bg-border-subtle" />
          </div>
          <span className="text-industrial-accent">Штаб: Серпухов, РФ</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-industrial-gray py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-4 top-0 w-px h-full bg-border-subtle group-hover:bg-industrial-accent transition-colors duration-500" />
                <div className="text-4xl md:text-5xl font-black text-industrial-text mb-2 tracking-tighter">{stat.value}</div>
                <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-industrial-text-muted font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Services Section */}
      <section className="py-12 md:py-20 bg-industrial-dark relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col mb-10 md:mb-12">
            <span className="mono-label">Наша экспертиза</span>
            <h2 className="section-title">Ключевые компетенции</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 card-industrial flex flex-col justify-between min-h-[350px] md:min-h-[400px]"
            >
              <div className="grid-accent" />
              <div>
                <div className="text-industrial-accent mb-6 md:mb-8">{services[0].icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">{services[0].title}</h3>
                <p className="text-industrial-text-muted max-w-md leading-relaxed text-sm md:text-base">
                  {services[0].desc}
                </p>
              </div>
              <Link to={services[0].link} className="font-mono text-[10px] uppercase tracking-[0.3em] text-industrial-accent flex items-center gap-3 hover:gap-5 transition-all mt-8">
                Подробнее <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              {services.slice(1, 3).map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="card-industrial flex flex-col justify-between"
                >
                  <div className="text-industrial-accent mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{service.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* Medium Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-3 card-industrial flex flex-col sm:flex-row items-start sm:items-center justify-between group gap-6"
            >
              <div className="flex items-center gap-6 md:gap-8">
                <div className="text-industrial-accent">{services[3].icon}</div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">{services[3].title}</h3>
                  <p className="text-industrial-text-muted text-xs md:text-sm mt-1">{services[3].desc}</p>
                </div>
              </div>
              <Link to={services[3].link} className="btn-secondary py-3 px-6 w-full sm:w-auto justify-center">
                Заявка на сервис
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industrial Standards Section */}
      <section className="py-12 md:py-20 bg-industrial-gray relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="mono-label">Соответствие стандартам</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none">
                Работаем по <br /> высшим стандартам
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  { t: "СРО & МЧС", d: "Полный пакет разрешительной документации для проектирования и монтажа." },
                  { t: "Взрывозащита", d: "Специализированное оборудование для зон 0, 1 и 2 (Ex-исполнение)." },
                  { t: "Поддержка 24/7", d: "Оперативное реагирование на инциденты и техническое сопровождение." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-6">
                    <div className="w-1 h-10 md:h-12 bg-industrial-accent shrink-0" />
                    <div>
                      <h4 className="text-base md:text-lg font-bold uppercase tracking-tight mb-1">{item.t}</h4>
                      <p className="text-industrial-text-muted text-xs md:text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-industrial-dark border border-border-subtle p-8 md:p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="border border-border-subtle p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <Factory size={32} className="text-industrial-accent mb-2 md:mb-4" />
                    <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest">Заводы</span>
                  </div>
                  <div className="border border-border-subtle p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <Flame size={32} className="text-industrial-accent mb-2 md:mb-4" />
                    <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest">НПЗ</span>
                  </div>
                  <div className="border border-border-subtle p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <Warehouse size={32} className="text-industrial-accent mb-2 md:mb-4" />
                    <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest">Логистика</span>
                  </div>
                  <div className="border border-border-subtle p-4 md:p-6 flex flex-col justify-center items-center text-center">
                    <Building2 size={32} className="text-industrial-accent mb-2 md:mb-4" />
                    <span className="font-mono text-[8px] md:text-[9px] uppercase tracking-widest">Офисы</span>
                  </div>
                </div>
                <div className="absolute inset-0 border border-industrial-accent/20 m-4 md:m-6 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-industrial-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="mono-label">Связаться с инженером</span>
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 md:mb-8">
            Готовы обсудить <br /> ваш проект?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link to="/contacts" className="btn-primary px-12 justify-center">
              Оставить заявку
            </Link>
            <a href="tel:84967760444" className="btn-secondary px-12 justify-center">
              Позвонить нам
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
