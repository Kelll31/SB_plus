import { ArrowUpRight, ClipboardList, Compass, Factory, Settings, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InnerAction, PagePath } from '../components/InnerPages';
import { Seo } from '../components/Shared';
import { PHONE, PHONE_HREF } from '../components/Layout';

const stages = [
  { name: 'Изучаем объект', icon: Compass, description: 'Уточняем, что нужно контролировать, как работает площадка и какие системы уже установлены.', result: 'Список задач и ограничений для проекта.' },
  { name: 'Согласовываем решение', icon: ClipboardList, description: 'Обсуждаем размещение оборудования, состав работ и порядок внедрения.', result: 'Понятный объём работ, который можно обсудить с вашей командой.' },
  { name: 'Устанавливаем и настраиваем', icon: Settings, description: 'Подключаем оборудование, проверяем согласованные сценарии и показываем, как пользоваться системой.', result: 'Работающая система и инструкции для сотрудников.' },
  { name: 'Сопровождаем', icon: Wrench, description: 'По согласованию обслуживаем оборудование, ищем причины сбоев и помогаем спланировать обновление.', result: 'План обслуживания или модернизации для действующей системы.' },
];

export function AboutPage() {
  return <div className="inner-page about-editorial">
    <Seo title="О компании" description="ООО «СБ+» работает с октября 2003 года. Системы безопасности и контроля для нефтебаз и химических предприятий. Серпухов."/>
    <div className="container"><PagePath current="О компании"/>
      <section className="about-masthead">
        <div className="about-masthead-copy"><span className="eyebrow">ООО «СБ+» · Серпухов</span><h1>Инженеры для объектов, где важна каждая деталь.</h1>
          <p>Проектируем, устанавливаем и обслуживаем системы безопасности. Наши основные заказчики — нефтебазы и химкомбинаты.</p>
          <InnerAction to="/documents">Посмотреть документы компании</InnerAction>
        </div>
        <figure className="about-industry"><img src="./images/chemical.jpg" alt="Резервуарный парк за ограждением промышленной площадки" fetchPriority="high"/><figcaption><Factory size={17}/> Промышленные площадки и резервуарные парки</figcaption></figure>
        <div className="about-year"><strong>2003</strong><p>В октябре этого года в Серпухове основана компания «СБ+».</p></div>
      </section>
    </div>
    <section className="inner-section about-process"><div className="container about-process-grid">
      <div className="inner-section-copy"><span className="eyebrow">Как работаем</span><h2>От первого осмотра до обслуживания</h2><p>Можно обсудить весь проект или подключить нас на конкретном этапе.</p></div>
      <div className="process-accordion">{stages.map(({ name, icon: Icon, description, result }, index) => <details key={name} open={index === 0 ? true : undefined}>
        <summary><span>{String(index + 1).padStart(2, '0')}</span><Icon size={21} aria-hidden="true"/><strong>{name}</strong><span className="process-toggle" aria-hidden="true"/></summary>
        <div><p>{description}</p><p><strong>Что вы получите</strong><br/>{result}</p></div>
      </details>)}</div>
    </div></section>
    <section className="container inner-section"><div className="about-director">
      <div><span className="eyebrow">Технический директор</span><h2>Эдуард Куприков</h2><p>Обсудите объект, состав работ или состояние действующей системы напрямую.</p></div>
      <div><a className="director-call" href={PHONE_HREF}>{PHONE}<ArrowUpRight size={22}/></a><Link to="/contacts" className="text-link">Все способы связи<ArrowUpRight size={16}/></Link></div>
    </div></section>
  </div>;
}
