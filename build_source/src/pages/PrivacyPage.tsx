import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export function PrivacyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24">
      <Helmet>
        <title>Политика конфиденциальности | СБ+ - Защита персональных данных</title>
        <meta name="description" content="Политика обработки персональных данных ООО «СБ+» в соответствии с ФЗ-152. Мы обеспечиваем безопасность и конфиденциальность ваших данных." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-none"
        >
          <h1 className="section-title mb-12 pr-4 md:pr-0">Политика конфиденциальности</h1>
          <div className="space-y-8 text-industrial-text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">1. Общие положения</h2>
              <p>
                Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «СБ+».
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">2. Основные понятия</h2>
              <p>
                Оператор - государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">3. Цели обработки</h2>
              <p>
                Цель обработки персональных данных Пользователя - информирование Пользователя посредством отправки электронных писем; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">4. Правовые основания</h2>
              <p>
                Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-industrial-text uppercase tracking-tight mb-4">5. Безопасность</h2>
              <p>
                Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
