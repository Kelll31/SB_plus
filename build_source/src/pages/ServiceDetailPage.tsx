import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES } from "../constants/services";

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>{service.seoTitle}</title>
        <meta name="description" content={service.seoDescription} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-industrial-accent hover:text-industrial-text transition-colors mb-6 font-mono text-xs uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Назад к услугам
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-industrial-accent">
                {service.icon}
              </div>
              <span className="mono-label mb-0">Услуга СБ+</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              {service.title}
            </h1>
            
            <p className="text-lg md:text-xl text-industrial-text-muted mb-6 leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="space-y-3 mb-8">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Что мы предлагаем:</h3>
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-industrial-accent shrink-0 mt-1" size={18} />
                  <span className="text-industrial-text-muted text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to={`/contacts?service=${service.id}`} className="btn-primary px-8">
                Заказать расчет
              </Link>
              <Link to="/contacts" className="btn-secondary px-8">
                Консультация
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-industrial-gray border border-border-subtle p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
              <div className="grid-accent opacity-20" />
              <div className="relative z-10">
                <ShieldCheck size={48} className="text-industrial-accent mb-6 opacity-50" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Гарантия качества</h3>
                <p className="text-industrial-text-muted mb-6 leading-relaxed text-sm md:text-base">
                  Все работы выполняются в строгом соответствии с действующими ГОСТами и нормами безопасности. Мы используем только сертифицированное оборудование от ведущих мировых и отечественных производителей.
                </p>
                <div className="border-t border-border-subtle pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-industrial-accent/10 flex items-center justify-center text-industrial-accent font-bold text-sm">
                      20+
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-industrial-text-muted">
                      Лет опыта в <br /> промышленной безопасности
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-industrial-accent/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
