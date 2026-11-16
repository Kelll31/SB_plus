import { ArrowUpRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { InnerAction, PagePath } from '../components/InnerPages';
import { SERVICES } from '../constants/services';
import { Seo } from '../components/Shared';
import { NotFoundPage } from './ContentPages';

const preparation: Record<string, string[]> = {
  cctv: ['План территории и помещений', 'Какие зоны нужно видеть и фиксировать', 'Кто будет смотреть записи и зачем'],
  skud: ['Список входов, ворот и проходных', 'Кому и куда нужен доступ', 'Как оформляется пропуск посетителей'],
  ops: ['Планы и назначение помещений', 'Описание действующей системы, если она есть', 'График работы площадки и ограничения для выезда'],
  maintenance: ['Схема или перечень установленного оборудования', 'Описание сбоев и когда они проявляются', 'Какие участки важно сохранить в работе'],
  consulting: ['План или краткое описание площадки', 'Задачи, которые сейчас важнее всего', 'Что уже установлено на объекте'],
};

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = SERVICES.find(item => item.id === id);
  if (!service) return <NotFoundPage/>;
  const contact = `/contacts?service=${service.id}`;
  return <div className="inner-page service-detail-editorial"><Seo title={service.title} description={service.desc}/>
    <div className="service-detail-masthead"><div className="container"><PagePath current={service.title} parent={{ label: 'Услуги', href: '/services' }}/>
      <div><span className="eyebrow">{service.label}</span><h1>{service.title}</h1><p>{service.desc}</p><InnerAction to={contact}>Обсудить эту услугу</InnerAction></div>
      <service.icon size={194} strokeWidth={.55} aria-hidden="true"/>
    </div></div>
    <section className="container inner-section service-detail-layout"><div>
      <h2>Что входит в работу</h2><p>{service.fullDesc}</p>
      <ol className="work-checklist">{service.features.map((feature, index) => <li key={feature}><span>{String(index + 1).padStart(2, '0')}</span>{feature}</li>)}</ol>
      <div className="service-result"><Check size={24} aria-hidden="true"/><div><strong>Результат</strong><p>{service.result}</p></div></div>
    </div><aside className="service-preparation"><h2>Что подготовить для разговора</h2><ul>{preparation[service.id].map(item => <li key={item}>{item}</li>)}</ul><Link className="button" to={contact}>Написать инженеру<ArrowUpRight size={18}/></Link></aside></section>
    <section className="container related-services"><h2>Другие направления</h2><div>{SERVICES.filter(item => item.id !== service.id).map(item => <InnerAction to={`/services/${item.id}`} key={item.id}>{item.title}</InnerAction>)}</div></section>
  </div>;
}
