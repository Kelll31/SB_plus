import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SERVICES } from "../constants/services";

export function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>Услуги по обеспечению безопасности в Серпухове | СБ+ - Видеонаблюдение, СКУД, ОПС</title>
        <meta name="description" content="Полный спектр услуг по проектированию, монтажу и обслуживанию систем безопасности: видеонаблюдение, контроль доступа, пожарная сигнализация и аудит." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="section-title">Наши услуги</h1>
          <p className="text-lg md:text-xl text-industrial-text-muted max-w-3xl">
            Мы обеспечиваем полный цикл работ: от предпроектного обследования и разработки документации до монтажа «под ключ» и последующего сервисного обслуживания.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                y: -5, 
                borderColor: "var(--color-industrial-accent)", 
                backgroundColor: "var(--industrial-gray-light)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-industrial-gray border border-border-subtle flex flex-col lg:flex-row overflow-hidden group cursor-default relative z-10"
            >
              <div className="lg:w-1/3 bg-industrial-dark p-6 md:p-8 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-border-subtle">
                <div className="text-industrial-accent mb-4 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">{service.title}</h2>
                <div className="flex flex-col gap-2 w-full">
                  <Link to={`/services/${service.id}`} className="btn-secondary py-2 px-4 text-xs w-full justify-center">
                    Подробнее
                  </Link>
                  <Link to={`/contacts?service=${service.id}`} className="btn-primary py-2 px-4 text-xs w-full justify-center">
                    Заказать услугу
                  </Link>
                </div>
              </div>
              <div className="lg:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <p className="text-base md:text-lg text-industrial-text-muted mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs md:text-sm">
                      <div className="w-1 h-1 bg-industrial-accent rounded-full shrink-0" />
                      <span className="text-industrial-text-muted group-hover:text-industrial-text transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
