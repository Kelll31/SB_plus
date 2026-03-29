import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function ContactsPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const initMap = () => {
      if (!mapRef.current || !(window as any).ymaps) return;

      (window as any).ymaps.ready(() => {
        if (!isMounted) return;

        // Очищаем контейнер перед повторной инициализацией (на случай HMR)
        mapRef.current!.innerHTML = '';

        const map = new (window as any).ymaps.Map(mapRef.current, {
          center: [54.919104, 37.434136],
          zoom: 17,
          controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
        });

        // Отключаем зум скроллом только на мобильных, чтобы страница не "залипала" при прокрутке
        if (window.innerWidth < 768) {
          map.behaviors.disable('scrollZoom');
        } else {
          map.behaviors.enable('scrollZoom');
        }

        // Создаем макет кастомной пульсирующей метки (HTML + CSS)
        const CustomLayout = (window as any).ymaps.templateLayoutFactory.createClass(
          `<div class="yandex-custom-pin">
             <div class="yandex-custom-pin-label">СБ+</div>
           </div>`
        );

        // Размещаем метку
        const placemark = new (window as any).ymaps.Placemark([54.919104, 37.434136], {
          hintContent: 'Офис СБ+'
        }, {
          iconLayout: 'default#imageWithContent',
          // Прозрачный пиксель, так как мы используем только HTML макет
          iconImageHref: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          iconImageSize: [0, 0],
          iconImageOffset: [0, 0],
          iconContentLayout: CustomLayout
        });

        map.geoObjects.add(placemark);
      });
    };

    // Загружаем скрипт Яндекс.Карт, если он еще не загружен
    if (!(window as any).ymaps) {
      const script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=c18dae1d-c4d3-4e89-9e8c-55dcbfebc023&lang=ru_RU";
      script.type = "text/javascript";
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <Helmet>
        <title>Контакты СБ+ в Серпухове - Адрес, телефон, карта проезда</title>
        <meta name="description" content="Свяжитесь с нами для консультации по системам безопасности. Наш адрес: Серпухов, ул. Водонапорная, 36. Телефон: 8(4967)760-444. Работаем Пн-Пт с 9:00 до 18:00." />
      </Helmet>

      {/* Стили для нашей красивой анимированной метки */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pulse-pin {
          0% { box-shadow: 0 0 0 0 rgba(0, 143, 69, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(0, 143, 69, 0); }
          100% { box-shadow: 0 0 rgba(0, 143, 69, 0); }
        }
        .yandex-custom-pin {
          position: absolute;
          width: 24px;
          height: 24px;
          background-color: #008f45;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-pin 2s infinite;
          border: 3px solid white;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .yandex-custom-pin:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }
        .yandex-custom-pin-label {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 14px;
          color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          white-space: nowrap;
        }
        .yandex-custom-pin-label::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 6px 6px 0;
          border-style: solid;
          border-color: white transparent transparent transparent;
        }
      `}} />

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
                    8(4967)760-444 (Телефон/факс)
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

          {/* Interactive Yandex Map with JS API */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="w-full h-full min-h-[400px] md:min-h-[500px] bg-industrial-gray border border-border-subtle relative overflow-hidden hover:grayscale-0 transition-all duration-700 group">
              <div ref={mapRef} className="w-full h-full opacity-60 md:opacity-100 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-industrial-accent/5 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}