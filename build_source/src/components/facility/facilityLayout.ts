/** Единые координаты для плана, оборудования и трубных присоединений. */
export const SITE_TANKS = [
  [-5.8, -2.8, 1.65, 3], [-1.8, -2.8, 1.65, 3],
  [-5.8, 1.8, 1.4, 2.45], [-1.8, 1.8, 1.4, 2.45],
] as const;
export const TANK_BUND = { west: -8.05, east: .45, north: -5.24, south: 4.1 };
export const ROAD = { x: 2.35, z: 0, width: 2.1, depth: 10.8 };
export const CONTROL_POST = { x: 6.12, z: 5.31, width: 4.25, depth: 4.08, height: 2.78 };
export const CONTROL_FRONT = CONTROL_POST.depth / 2;
export const CONTROL_FLOOR = .16;
export const CONTROL_DOOR = { width: 1.26, top: 2.28, hingeX: .626, hingeZ: CONTROL_FRONT - .152, angle: -Math.PI * .57 };
export const CONTROL_SCREEN_Z = -1.72;
export const CONTROL_ENTRY_AT = .81;
export const CONTROL_APRON = { x: 5.99, z: 6.97, width: 5.02, depth: 2.0 };
export const SITE_FENCE = [[-8.5, -5.5], [8.5, -5.5], [8.5, 7.89], [3.7, 7.89], [3.7, 5.5], [1, 5.5], [-8.5, 5.5], [-8.5, -5.5]];

type Triple = [number, number, number];
export type ControlBox = { name: string; size: Triple; at: Triple };
const wall = .12;
const jambWidth = (CONTROL_POST.width - CONTROL_DOOR.width) / 2;
export const CONTROL_SHELL: ControlBox[] = [
  { name: 'пол', size: [CONTROL_POST.width, CONTROL_FLOOR, CONTROL_POST.depth], at: [0, CONTROL_FLOOR / 2, 0] },
  { name: 'кровля', size: [CONTROL_POST.width + .16, .12, CONTROL_POST.depth + .16], at: [0, CONTROL_POST.height + .06, 0] },
  { name: 'задняя стена', size: [CONTROL_POST.width, CONTROL_POST.height - CONTROL_FLOOR, wall], at: [0, (CONTROL_POST.height + CONTROL_FLOOR) / 2, -CONTROL_FRONT + .06] },
  ...[-1, 1].flatMap(side => [
    { name: 'боковая стена', size: [wall, CONTROL_POST.height - CONTROL_FLOOR, CONTROL_POST.depth] as Triple, at: [side * (CONTROL_POST.width / 2 - .06), (CONTROL_POST.height + CONTROL_FLOOR) / 2, 0] as Triple },
    { name: 'стена у входа', size: [jambWidth, CONTROL_POST.height - CONTROL_FLOOR, wall] as Triple, at: [side * (CONTROL_DOOR.width + jambWidth) / 2, (CONTROL_POST.height + CONTROL_FLOOR) / 2, CONTROL_FRONT - .06] as Triple },
  ]),
  { name: 'перемычка', size: [CONTROL_DOOR.width, CONTROL_POST.height - CONTROL_DOOR.top, wall], at: [0, (CONTROL_POST.height + CONTROL_DOOR.top) / 2, CONTROL_FRONT - .06] },
];
export const CONTROL_FURNITURE: ControlBox[] = [
  { name: 'стена экранов', size: [3.96, 2.35, .29], at: [0, 1.55, CONTROL_SCREEN_Z - .115] },
  { name: 'шкафы', size: [3.96, .40, .47], at: [0, .36, CONTROL_SCREEN_Z - .03] },
  { name: 'консоль', size: [1.51, .79, .73], at: [1.23, .555, -.455] },
  { name: 'кресло', size: [.57, .90, .60], at: [1.34, .61, .31] },
  { name: 'шкаф связи', size: [.40, 1.43, .55], at: [-1.80, .88, .02] },
];
export function controlDoorOpening(progress: number) {
  const t = Math.min(1, Math.max(0, (progress - .863) / .059));
  return t * t * (3 - 2 * t);
}
export const PROCESS_HALL = { x: 5.65, z: -3.09, width: 3.7, depth: 3.8 };
export const HALL_ROOF = { width: PROCESS_HALL.width + .25, depth: PROCESS_HALL.depth + .25, height: 1.655 };
export const VESSEL_X = [4.4, 5.6, 6.8];
export const VESSEL_Z = 1.4;
export const VESSEL_RADIUS = .43;
export const PUMP_X = VESSEL_X.map(x => x - .1);
export const PUMP_PAD = { z: 2.5, width: .75, depth: 1.05 };
export const GAS_LOCATIONS = [
  { x: 3.64, z: 1.58, label: 'Трубная эстакада' },
  { x: 5.2, z: .36, label: 'Производственный корпус' },
  { x: 8.03, z: 1.63, label: 'Насосная' },
];
export const FEATURED_GAS = GAS_LOCATIONS[2];
export const HEADER_RISE_X = .73;
export const RACK_X = [1.12, 3.55, 5.5, 7.7];
export const RACK_FEET_Z = [-.9, .1];
export const HEADERS = [ { z: -.65, y: 2.43 }, { z: -.32, y: 2.15 } ];
export const HEADER_ROUTES = HEADERS.map(({ z, y }) => ({
  radius: .075,
  points: [[-7, .5, z], [HEADER_RISE_X, .5, z], [HEADER_RISE_X, y, z], [7.8, y, z]],
}));
export const VESSEL_SUPPLY_ROUTES = VESSEL_X.map(x => ({
  radius: .065,
  points: [[x, HEADERS[0].y, HEADERS[0].z], [x, HEADERS[0].y, .68], [x, .75, .68], [x, .75, 1.12]],
}));
export const PUMP_INTAKE_ROUTES = PUMP_X.map((x, i) => ({
  radius: .075,
  points: [[x, .35, 2.02], [x, .35, 1.88], [VESSEL_X[i], .65, 1.88], [VESSEL_X[i], .65, 1.7]],
}));
export const PUMP_DISCHARGE_ROUTES = PUMP_X.map(x => ({
  radius: .06,
  points: [[x + .1, .35, 2.12], [x + .65, .35, 2.12], [x + .65, HEADERS[1].y, 2.12], [x + .65, HEADERS[1].y, HEADERS[1].z]],
}));
export const tankOutletDirection = (index: number) => index < 2 ? 1 : -1;
export const tankLadderDirection = (index: number) => -tankOutletDirection(index);
export const tankLabelAngle = (index: number) => tankLadderDirection(index) > 0 ? Math.PI / 4 : Math.PI * 3 / 4;
export const roofHeightAt = (height: number, radius: number, distance: number) => height + .405 - .25 * Math.min(1, Math.max(0, (distance - .16) / (radius + .025 - .16)));
