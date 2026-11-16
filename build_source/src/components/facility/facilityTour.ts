import { CONTROL_POST, CONTROL_SCREEN_Z, FEATURED_GAS } from './facilityLayout';

export const tourChapters = [
  { label: 'План площадки', title: 'Защита начинается с проекта.', text: 'Изучаем площадку и технологические зоны. Продумываем, где нужен контроль и как объединить оборудование в одну систему.', tag: 'От чертежа к работающему объекту', stage: '01 / Генеральный план', progress: 0 },
  { label: 'Пролёт над объектом', title: 'Каждая зона — в поле зрения.', text: 'Резервуары, трубопроводы, производственные корпуса и проходная. Учитываем особенности всего предприятия.', tag: 'Нефтебазы · химические производства', stage: '02 / Обзор промышленной площадки', progress: .23 },
  { label: 'Уровнемеры', title: 'Видеть то, что внутри.', text: 'Уровнемеры передают показания по резервуарам. На модели показаны измерение уровня и поступление данных в общую систему контроля.', tag: 'Измерение уровня · передача показаний', stage: '03 / Контроль резервуаров', progress: .45 },
  { label: 'Газовый контроль', title: 'Контроль производственной среды.', text: 'Газоанализаторы собирают данные в технологических зонах. Их показания и состояния доступны оператору на едином посту.', tag: 'Газоанализаторы · контроль состояния', stage: '04 / Газоанализаторы', progress: .64 },
  { label: 'Связь систем', title: 'Все сигналы сходятся здесь.', text: 'Данные уровнемеров, газоанализаторов, камер, пожарных датчиков и контроля доступа передаются на диспетчерский щит.', tag: 'Датчики → линии связи → пост контроля', stage: '05 / Передача сигналов', progress: .81 },
  { label: 'Стена безопасности', title: 'Весь объект — перед оператором.', text: 'Четыре экрана показывают уровни в резервуарах, газовый контроль, передачу сигналов и состояние всех 14 каналов.', tag: 'Диспетчерский щит · единая картина объекта', stage: '06 / Стена безопасности', progress: 1 },
];

export const clampProgress = (p: number) => Math.min(1, Math.max(0, Number.isFinite(p) ? p : 0));
export function chapterAt(progress: number) {
  const p = clampProgress(progress);
  return p < .12 ? 0 : p < .34 ? 1 : p < .55 ? 2 : p < .72 ? 3 : p < .88 ? 4 : 5;
}

/** Illustrative values only. One source for the 3D instruments and HTML readouts. */
export function demoTelemetry(progress: number) {
  const p = clampProgress(progress);
  return {
    levels: [68.2, 74.6, 61.3, 57.8].map((base, index) => +(base + Math.sin(p * 10 + index) * 2.4).toFixed(1)),
    gases: [.2, .1, .3].map((base, index) => +(base + Math.sin(p * 13 + index) * .07).toFixed(2)),
  };
}

export const SENSOR_COUNTS = { levels: 4, gases: 3, cameras: 4, fire: 2, access: 1 };
export const CHANNEL_COUNT = Object.values(SENSOR_COUNTS).reduce((total, count) => total + count, 0);

export const CAMERA_STOPS = [
  { at: 0, position: [0, 22, .61], target: [0, 0, .6] },
  { at: .23, position: [-10.5, 5.8, 11.8], target: [-.5, 1.65, -.7] },
  { at: .45, position: [1.8, 4.4, 6.8], target: [-1.8, 2.1, 1.8] },
  { at: .64, position: [10.65, 2.15, 2.65], target: [FEATURED_GAS.x + .05, 1.17, FEATURED_GAS.z + .12] },
  { at: .81, position: [12.5, 8.6, 13], target: [.6, 1.3, .2] },
  { at: 1, position: [CONTROL_POST.x, 1.66, CONTROL_POST.z + 1.15], target: [CONTROL_POST.x, 1.53, CONTROL_POST.z + CONTROL_SCREEN_Z] },
] as const;
