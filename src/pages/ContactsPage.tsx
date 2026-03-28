import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ContactsPage() {
  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>Контакты СБ+ в Серпухове - Адрес, телефон, карта проезда</title>
        <meta name="description" content="Свяжитесь с нами для консультации по системам безопасности. Наш адрес: Серпухов, ул. Водонапорная, 36. Телефон: 8(4967)760-444. Работаем Пн-Пт с 9:00 до 18:00." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="section-title">Контакты</h1>
          <p className="text-lg md:text-xl text-industrial-text-muted max-w-3xl">
            Мы всегда готовы обсудить ваш проект и предложить оптимальное решение по безопасности.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <div className="card-industrial">
              <div className="flex gap-4 items-start">
                <div className="bg-industrial-dark p-3 text-industrial-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Адрес офиса</h3>
                  <p className="text-industrial-text-muted text-xs md:text-sm">
                    142200, Московская обл., г. Серпухов,<br />
                    ул. Водонапорная, д. 36, офис 223
                  </p>
                </div>
              </div>
            </div>

            <div className="card-industrial">
              <div className="flex gap-4 items-start">
                <div className="bg-industrial-dark p-3 text-industrial-accent border border-border-subtle">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Телефоны</h3>
                  <p className="text-industrial-text-muted text-xs md:text-sm font-bold text-industrial-text">
                    8(4967)760-444 (Телефон/факс)<br />
                    8(4967)355-692 (Телефон)
                  </p>
                </div>
              </div>
            </div>

            <div className="card-industrial">
              <div className="flex gap-4 items-start">
                <div className="bg-industrial-dark p-3 text-industrial-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Email</h3>
                  <p className="text-industrial-text-muted text-xs md:text-sm">
                    poligonsb@mail.ru
                  </p>
                </div>
              </div>
            </div>

            <div className="card-industrial">
              <div className="flex gap-4 items-start">
                <div className="bg-industrial-dark p-3 text-industrial-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-2">Режим работы</h3>
                  <p className="text-industrial-text-muted text-xs md:text-sm">
                    Пн - Пт: 09:00 – 18:00<br />
                    Сб - Вс: Выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <div className="bg-industrial-gray p-6 md:p-10 border border-border-subtle h-full">
              <h2 className="text-xl md:text-2xl font-bold uppercase mb-8 tracking-tight">Напишите нам</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-industrial-text-muted">Ваше имя</label>
                  <input type="text" className="w-full bg-industrial-dark border border-border-subtle p-4 text-sm focus:border-industrial-accent outline-none transition-colors text-industrial-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-industrial-text-muted">Компания</label>
                  <input type="text" className="w-full bg-industrial-dark border border-border-subtle p-4 text-sm focus:border-industrial-accent outline-none transition-colors text-industrial-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-industrial-text-muted">Телефон</label>
                  <input type="tel" className="w-full bg-industrial-dark border border-border-subtle p-4 text-sm focus:border-industrial-accent outline-none transition-colors text-industrial-text" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-industrial-text-muted">Email</label>
                  <input type="email" className="w-full bg-industrial-dark border border-border-subtle p-4 text-sm focus:border-industrial-accent outline-none transition-colors text-industrial-text" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-industrial-text-muted">Сообщение</label>
                  <textarea rows={5} className="w-full bg-industrial-dark border border-border-subtle p-4 text-sm focus:border-industrial-accent outline-none transition-colors text-industrial-text"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary w-full md:w-auto px-12 justify-center">
                    Отправить <Send className="w-4 h-4" />
                  </button>
                  <p className="mt-4 text-[10px] text-industrial-text-muted uppercase">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Interactive Yandex Map */}
        <div className="w-full h-[300px] md:h-[500px] bg-industrial-gray border border-border-subtle relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?text=Россия, Московская область, Серпухов, Водонапорная улица, 36&z=16" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen={true}
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            title="Яндекс.Карты - СБ+"
          ></iframe>
          <div className="absolute inset-0 bg-industrial-accent/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
        </div>
      </div>
    </div>
  );
}
