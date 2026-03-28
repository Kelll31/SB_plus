import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export function TermsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>Юридическая информация и реквизиты ООО «СБ+» | Серпухов</title>
        <meta name="description" content="Официальные реквизиты ООО «СБ+», юридический адрес в Серпухове, информация о лицензиях МЧС и допусках СРО на проведение работ по безопасности." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-none"
        >
          <h1 className="section-title mb-8">Юридическая информация</h1>
          <div className="space-y-8 text-industrial-text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">Реквизиты организации</h2>
              <div className="bg-industrial-gray p-6 md:p-8 border border-border-subtle space-y-4 font-mono text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-industrial-accent uppercase tracking-widest text-[10px] mb-1">Наименование</span>
                    <span className="text-industrial-text">ООО «СБ+»</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-industrial-accent uppercase tracking-widest text-[10px] mb-1">ИНН</span>
                    <span className="text-industrial-text">5043023000</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-industrial-accent uppercase tracking-widest text-[10px] mb-1">КПП</span>
                    <span className="text-industrial-text">504301001</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-industrial-accent uppercase tracking-widest text-[10px] mb-1">ОГРН</span>
                    <span className="text-industrial-text">1035008750000</span>
                  </div>
                  <div className="md:col-span-2 flex flex-col">
                    <span className="text-industrial-accent uppercase tracking-widest text-[10px] mb-1">Юридический адрес</span>
                    <span className="text-industrial-text">142200, Московская обл., г. Серпухов, ул. Водонапорная, д. 36, офис 223</span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">Лицензии и допуски</h2>
              <p>
                Компания обладает всеми необходимыми лицензиями МЧС и допусками СРО на проектирование и монтаж систем противопожарной защиты, охранных систем и систем видеонаблюдения на особо опасных и технически сложных объектах.
              </p>
              <p className="mt-4">
                Все работы проводятся в строгом соответствии с ГОСТ и СНиП, действующими на территории Российской Федерации.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">Интеллектуальная собственность</h2>
              <p>
                Все материалы, размещенные на данном сайте, являются интеллектуальной собственностью ООО «СБ+». Копирование и использование материалов без письменного согласия правообладателя запрещено.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
