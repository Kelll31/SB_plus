import { motion } from "motion/react";
import { Shield, CheckCircle2, FileText, Download, Users, History } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function AboutPage() {
  const timeline = [
    { year: "2003", event: "Основание компании ООО «СБ+». Начало работы в Серпуховском регионе." },
    { year: "2008", event: "Получение первых лицензий МЧС на монтаж систем пожарной безопасности." },
    { year: "2012", event: "Выход на рынок крупных промышленных объектов и взрывоопасных производств." },
    { year: "2018", event: "Вступление в СРО. Расширение штата проектировщиков и инженеров." },
    { year: "2023", event: "20 лет безупречной работы. Более 500 реализованных проектов." },
  ];

  const documents = [
    { title: "Лицензия МЧС", desc: "На осуществление деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности." },
    { title: "Выписка СРО", desc: "Допуск к работам по подготовке проектной документации и строительно-монтажным работам." },
    { title: "Сертификат ISO 9001", desc: "Соответствие системы менеджмента качества международным стандартам." },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>О компании СБ+ - Эксперты в промышленной безопасности с 2003 года</title>
        <meta name="description" content="Узнайте больше об ООО «СБ+»: наша история, лицензии МЧС, допуски СРО и опыт реализации сложных проектов систем безопасности для промышленности." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="section-title">О компании</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-4 text-base md:text-lg text-industrial-text-muted leading-relaxed">
              <p>
                ООО «СБ+» - это команда профессионалов с более чем 20-летним опытом работы в сфере систем безопасности. Мы специализируемся на проектировании, монтаже и обслуживании сложных инженерных систем для промышленного сектора.
              </p>
              <p>
                Наша миссия - обеспечивать максимальную защиту жизни людей и сохранность материальных ценностей на объектах любой сложности, включая взрывоопасные и химически агрессивные среды.
              </p>
              <div className="bg-industrial-gray p-6 md:p-8 border-l-4 border-industrial-accent italic text-industrial-text">
                "Мы не просто устанавливаем камеры или датчики. Мы создаем интеллектуальный щит, который позволяет бизнесу работать стабильно и безопасно в самых суровых условиях."
                <div className="mt-4 not-italic text-sm font-bold uppercase tracking-widest text-industrial-accent">
                  - Куприков Э. И., Технический директор
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format,compress&fit=crop&q=75&w=1200&fm=webp" 
                alt="Промышленная безопасность" 
                className="rounded-sm grayscale hover:grayscale-0 transition-all duration-500 border border-border-subtle w-full"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-industrial-accent p-6 md:p-8 hidden md:block shadow-xl">
                <div className="text-4xl font-black text-white">20+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/80">Лет опыта</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-6 md:mb-8 flex items-center gap-3">
            <History className="text-industrial-accent" /> История развития
          </h2>
          <div className="space-y-6 relative before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-px before:bg-border-subtle">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-10 md:pl-12">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-industrial-dark border-2 border-industrial-accent rounded-full z-10" />
                <div className="text-industrial-accent font-black text-xl md:text-2xl mb-1">{item.year}</div>
                <p className="text-industrial-text-muted text-sm md:text-base">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-6 md:mb-8 flex items-center gap-3">
            <FileText className="text-industrial-accent" /> Лицензии и допуски
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {documents.map((doc, idx) => (
              <div key={idx} className="card-industrial flex flex-col h-full">
                <div className="bg-industrial-dark w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-6 text-industrial-accent">
                  <Shield className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 uppercase tracking-tight">{doc.title}</h3>
                <p className="text-industrial-text-muted text-xs md:text-sm mb-8 flex-grow">{doc.desc}</p>
                <button className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-industrial-accent hover:text-industrial-text transition-colors">
                  <Download className="w-4 h-4" /> Скачать PDF
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
