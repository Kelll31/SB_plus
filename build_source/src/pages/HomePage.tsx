import { ParallaxPhoto } from '../components/ScrollExperience';
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Factory, Warehouse, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndustrialStory } from '../components/IndustrialStory';
import { SERVICES } from '../constants/services';
import { useContent } from '../context/ContentContext';
import { ContactCta, LicenseCard, Seo } from '../components/Shared';

function homePosition(order?: number) {
  return typeof order === 'number' && Number.isInteger(order) && order >= 1 && order <= 100 ? order : 101;
}

export function HomePage() {
  const { content } = useContent();
  const licenses = content.licenses.filter(item => item.published &&
    (item.showOnHome === undefined ? !item.archived : item.showOnHome === true))
    .sort((a, b) => homePosition(a.homeOrder) - homePosition(b.homeOrder));
  return <><Seo title="Системы безопасности нефтебаз и химических производств" description="СБ+ — проектирование, монтаж и обслуживание видеонаблюдения, контроля доступа и пожарной сигнализации в Серпухове. Работаем с 2003 года."/>
    <IndustrialStory/>
    <section className="expertise-strip"><div className="container expertise-inner"><p>Безопасность начинается<br /><strong>с понимания вашего объекта.</strong></p><div><Factory/>Нефтебазы и<br />резервуарные парки</div><div><Warehouse/>Химические<br />производства</div><div><Building2/>Промышленные<br />предприятия</div></div></section>
    <section id="solutions" className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">01 / Наши решения</span><h2>Системы, которые<br />работают вместе.</h2></div><div><p>От конкретной задачи до комплексной защиты.<br />Подбираем решение под ваш объект.</p><Link to="/services" className="text-link">Все услуги<ArrowUpRight size={17}/></Link></div></div><div className="services-grid">{SERVICES.slice(0,4).map(service => <Link to={`/services/${service.id}`} className="service-card" key={service.id}><div className="service-card-top"><service.icon size={30} strokeWidth={1.5}/><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.desc}</p><span className="service-card-bottom">Подробнее<ArrowUpRight size={19}/></span></Link>)}</div><div className="consultation-line"><span><ShieldCheck size={20}/> Не знаете, с чего начать? Разберёмся в задаче вместе.</span><Link to="/services/consulting">Получить консультацию<ArrowRight size={17}/></Link></div></div></section>
    <section className="about-section"><div className="container about-grid"><div className="about-image"><ParallaxPhoto src="./images/industrial.jpg" alt="Резервуары и коммуникации промышленного объекта" loading="lazy"/><div className="image-caption">ОПЫТ РАБОТЫ СО СЛОЖНЫМИ ОБЪЕКТАМИ<ArrowUpRight size={20}/></div></div><div className="about-copy"><span className="eyebrow">02 / О компании</span><h2>За технологиями —<br />люди и опыт.</h2><p>ООО «СБ+» работает с октября 2003 года. Мы занимаемся системами безопасности и контроля, в том числе для промышленных объектов с повышенной опасностью.</p><p>Вникаем в особенности площадки, объясняем принятые решения и остаёмся на связи после установки оборудования.</p><div className="about-points"><span><Check size={17}/> Полный цикл работ</span><span><Check size={17}/> Решение под ваш объект</span><span><Check size={17}/> Сервис и модернизация</span><span><Check size={17}/> Прямая связь с инженером</span></div><Link to="/about" className="text-link">Познакомиться с компанией<ArrowUpRight size={18}/></Link></div></div></section>
    <section className="section process-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">03 / Как мы работаем</span><h2>От первого разговора<br />до работающей системы.</h2></div><p>Последовательно. Прозрачно.<br />С вниманием к деталям.</p></div><div className="process-grid">{[['Обсуждаем задачу','Знакомимся с объектом, выясняем приоритеты и собираем исходные данные.'],['Предлагаем решение','Подбираем оборудование, согласовываем состав работ, сроки и стоимость.'],['Воплощаем проект','Монтируем и настраиваем систему, проверяем работу и объясняем управление.'],['Остаёмся на связи','Обсуждаем обслуживание, помогаем с эксплуатацией и развитием системы.']].map(([title,desc],i) => <div className="process-step" key={title}><div className="process-number">0{i+1}<ArrowRight size={18}/></div><h3>{title}</h3><p>{desc}</p></div>)}</div></div></section>
    <section className="section documents-section" aria-labelledby="home-documents-title">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">04 / Документы</span><h2 id="home-documents-title">Лицензии и документы</h2></div>
          <div><p>Свидетельства и лицензии компании. Архивные материалы доступны в реестре.</p><Link to="/documents" className="text-link">Все документы<ArrowUpRight size={17}/></Link></div>
        </div>
        {licenses.length > 0 && <div className="license-grid">{licenses.map(license => <LicenseCard key={license.id} license={license}/>)}</div>}
      </div>
    </section>
    <section className="section faq-section"><div className="container faq-grid"><div><span className="eyebrow">Есть вопросы?</span><h2>Давайте<br />разберёмся.</h2><p>Не нашли ответ? Свяжитесь с нами —<br />обсудим вашу ситуацию.</p><Link to="/contacts" className="text-link">Задать вопрос<ArrowUpRight size={17}/></Link></div><div className="faq-list">{[['Как узнать стоимость работ?','Стоимость зависит от задач, площади и особенностей объекта, состава оборудования и монтажа. Расскажите о вашей задаче — обсудим исходные данные и подготовку предложения.'],['Можно ли обновить уже установленную систему?','Да, мы занимаемся обслуживанием и модернизацией существующих систем. Сначала оцениваем состояние оборудования и возможность его дальнейшего использования.'],['Работаете ли вы с промышленными объектами?','Да. У компании есть опыт работы с системами безопасности и контроля на промышленных объектах, в том числе связанных с повышенной опасностью. Условия и состав работ обсуждаем для каждого объекта.'],['Что происходит после монтажа?','Проверяем и настраиваем систему, объясняем, как ей пользоваться. Условия дальнейшего обслуживания и поддержки согласовываем отдельно.']].map(([q,a]) => <details key={q}><summary>{q}<span className="faq-plus">+</span></summary><p>{a}</p></details>)}</div></div></section><ContactCta/>
  </>;
}
