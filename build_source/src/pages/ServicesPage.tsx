import { useState } from 'react';
import { ArrowUpRight, ChevronRight, Factory, SlidersHorizontal, Waypoints } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/services';
import { PagePath } from '../components/InnerPages';
import { Seo } from '../components/Shared';

const tasks = [
  { name: 'Все направления', summary: 'От обследования и проекта до обслуживания.', ids: SERVICES.map(service => service.id) },
  { name: 'Оснастить площадку', summary: 'Начните с обследования, чтобы определить зоны контроля и состав систем.', ids: ['consulting', 'cctv', 'skud', 'ops'] },
  { name: 'Обновить систему', summary: 'Разберите, что можно оставить, и определите порядок замены оборудования.', ids: ['maintenance', 'consulting'] },
  { name: 'Защитить периметр', summary: 'Согласуйте наблюдение за территорией и правила прохода или въезда.', ids: ['cctv', 'skud'] },
];

export function ServicesPage() {
  const [taskIndex, setTaskIndex] = useState(0);
  const task = tasks[taskIndex];
  const services = task.ids.map(id => SERVICES.find(service => service.id === id)!);
  return <div className="inner-page services-page">
    <Seo title="Услуги и решения" description="Проектирование, монтаж и обслуживание систем безопасности для нефтебаз, химических и других промышленных предприятий."/>
    <section className="services-intro">
      <div className="container">
        <PagePath current="Услуги"/>
        <div className="services-intro-grid">
          <div className="services-intro-copy">
            <span className="eyebrow"><Factory size={16}/> Системы безопасности предприятий</span>
            <h1>Хорошая система начинается с задачи.</h1>
            <p>Проектируем, устанавливаем и обслуживаем системы безопасности для нефтебаз, химкомбинатов и других предприятий.</p>
            <button className="inner-action section-jump" type="button" onClick={() => {
              const target = document.getElementById('choose-service');
              target?.focus({ preventScroll: true });
              target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
            }}>Подобрать решение<ChevronRight size={18} aria-hidden="true"/></button>
          </div>
          <figure className="services-photo">
            <img src="./images/industrial.jpg" alt="Резервуары и трубопроводы на промышленной площадке" fetchPriority="high"/>
            <figcaption><Waypoints size={19}/> Территория, оборудование и персонал</figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section className="inner-section container" aria-labelledby="choose-service">
      <div className="inner-section-copy"><span className="eyebrow"><SlidersHorizontal size={15}/> Подбор по задаче</span><h2 id="choose-service" tabIndex={-1}>Что нужно сделать на объекте?</h2></div>
      <div className="inner-pills" role="group" aria-label="Задача на объекте">
        {tasks.map(({ name }, index) => <button key={name} type="button" aria-pressed={index === taskIndex} onClick={() => setTaskIndex(index)}>{name}</button>)}
      </div>
      <p className="selector-description" role="status">{task.summary}</p>
      <div className="solution-list">{services.map(service => <Link to={`/services/${service.id}`} className="solution-line" key={service.id}>
        <span className="solution-line-icon"><service.icon size={26} strokeWidth={1.55} aria-hidden="true"/></span>
        <div><h3>{service.title}</h3><p>{service.desc}</p></div><ChevronRight size={23} aria-hidden="true"/>
      </Link>)}</div>
    </section>
    <section className="inner-band"><div className="container inner-band-grid">
      <div><span className="eyebrow">Для нового объекта и модернизации</span><h2>Объединим системы в понятный план работ</h2><p>Расскажите, какая площадка у вас и что уже установлено. Обсудим, с чего начать.</p></div>
      <Link className="button button-light" to="/contacts">Подготовить обращение<ArrowUpRight size={18}/></Link>
    </div></section>
  </div>;
}
