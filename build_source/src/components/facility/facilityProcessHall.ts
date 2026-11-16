import type * as THREE from 'three';
import { HALL_ROOF, PROCESS_HALL } from './facilityLayout';

type Triple = [number, number, number];
type Material = THREE.MeshStandardMaterial;
type Face = 'south' | 'north' | 'east' | 'west';
type Opening = { center: number; width: number; bottom: number; top: number };

interface ProcessHallKit {
  box: (parent: THREE.Object3D, size: Triple, at: Triple, mat?: Material, outline?: boolean) => THREE.Mesh;
  pipe: (parent: THREE.Object3D, points: number[][], radius?: number, mat?: Material) => THREE.Mesh;
  materials: Record<'concrete' | 'cladding' | 'galvanized' | 'steel' | 'glass' | 'silver', Material>;
}

const WALL_BASE = .22;
const WALL_TOP = 1.5;
const WALL_DEPTH = .11;

export function buildProcessHall(hall: THREE.Group, { box, pipe, materials }: ProcessHallKit) {
  const { width, depth } = PROCESS_HALL;
  const { concrete, cladding, galvanized, steel, glass, silver } = materials;
  const facade = (face: Face, size: Triple, along: number, y: number, inset: number, mat: Material) => {
    const [span, height, thickness] = size;
    if (face === 'south' || face === 'north') {
      const side = face === 'south' ? 1 : -1;
      return box(hall, [span, height, thickness], [along, y, side * (depth / 2 + inset)], mat);
    }
    const side = face === 'east' ? 1 : -1;
    return box(hall, [thickness, height, span], [side * (width / 2 + inset), y, along], mat);
  };
  const wall = (face: Face, openings: Opening[]) => {
    const halfSpan = (face === 'south' || face === 'north' ? width : depth - WALL_DEPTH * 2) / 2;
    const panel = (left: number, right: number, bottom: number, top: number) => {
      if (right - left <= .001 || top - bottom <= .001) return;
      facade(face, [right - left, top - bottom, WALL_DEPTH], (left + right) / 2, (bottom + top) / 2, -WALL_DEPTH / 2, cladding);
    };
    let previous = -halfSpan;
    for (const { center, width, bottom, top } of openings) {
      const left = center - width / 2;
      const right = center + width / 2;
      panel(previous, left, WALL_BASE, WALL_TOP);
      panel(left, right, WALL_BASE, bottom);
      panel(left, right, top, WALL_TOP);
      previous = right;
    }
    panel(previous, halfSpan, WALL_BASE, WALL_TOP);
  };
  const surround = (face: Face, opening: Opening, frame: Material, border = .038) => {
    const { center, width, bottom, top } = opening;
    const y = (bottom + top) / 2;
    for (const direction of [-1, 1]) {
      facade(face, [border, top - bottom + border * 2, .056], center + direction * (width - border) / 2, y, -.010, frame);
    }
    facade(face, [width - border * 2, border, .056], center, top - border / 2, -.010, frame);
    facade(face, [width - border * 2, border, .056], center, bottom + border / 2, -.010, frame);
  };
  const window = (face: Face, opening: Opening) => {
    const { center, width, bottom, top } = opening;
    const y = (bottom + top) / 2;
    surround(face, opening, steel, .033);
    facade(face, [width - .064, top - bottom - .064, .019], center, y, -.048, glass);
    facade(face, [.022, top - bottom - .064, .029], center, y, -.026, galvanized);
    facade(face, [width + .044, .029, .069], center, bottom - .01, .013, galvanized);
  };
  const louver = (face: Face, opening: Opening) => {
    const { center, width, bottom, top } = opening;
    surround(face, opening, steel, .027);
    facade(face, [width - .052, top - bottom - .052, .022], center, (top + bottom) / 2, -.062, steel);
    for (let y = bottom + .051; y < top - .031; y += .052) {
      facade(face, [width - .06, .018, .026], center, y, -.027, galvanized);
    }
  };

  // A continuous foundation and metal drip edge carry the envelope.
  box(hall, [width + .17, .145, depth + .17], [0, .0725, 0], concrete, true);
  box(hall, [width + .055, WALL_BASE - .145, depth + .055], [0, (WALL_BASE + .145) / 2, 0], concrete);
  for (const face of ['south', 'north', 'east', 'west'] as const) {
    const span = face === 'south' || face === 'north' ? width : depth;
    if (face !== 'south') facade(face, [span, .033, .045], 0, .228, .015, steel);
    facade(face, [span + .064, .129, .072], 0, 1.55, .015, steel);
    const edge = span / 2 - .042;
    for (const side of [-1, 1]) {
      facade(face, [.053, 1.28, .037], side * edge, .865, .012, galvanized);
    }
  }

  const personnel = { center: -1.165, width: .52, bottom: WALL_BASE, top: 1.245 };
  const inspection = { center: -.439, width: .48, bottom: .878, top: 1.293 };
  const service = { center: .624, width: 1.21, bottom: WALL_BASE, top: 1.311 };
  const frontVent = { center: 1.537, width: .30, bottom: .778, top: 1.192 };
  wall('south', [personnel, inspection, service, frontVent]);
  const dripEdgeRuns = [
    [-width / 2, personnel.center - personnel.width / 2],
    [personnel.center + personnel.width / 2, service.center - service.width / 2],
    [service.center + service.width / 2, width / 2],
  ];
  for (const [left, right] of dripEdgeRuns) facade('south', [right - left, .033, .045], (left + right) / 2, .228, .015, steel);
  window('south', inspection);
  louver('south', frontVent);

  surround('south', personnel, galvanized);
  const doorY = (personnel.top + personnel.bottom) / 2;
  facade('south', [personnel.width - .074, personnel.top - personnel.bottom - .074, .036], personnel.center, doorY, -.056, steel);
  facade('south', [.313, .136, .014], personnel.center, .971, -.029, galvanized);
  facade('south', [.270, .099, .013], personnel.center, .971, -.019, glass);
  facade('south', [.121, .022, .028], personnel.center + .135, .669, -.021, silver);
  facade('south', [.703, .061, .164], personnel.center, .168, .041, concrete);

  surround('south', service, galvanized, .048);
  facade('south', [service.width - .094, service.top - service.bottom - .094, .034], service.center, .7655, -.056, steel);
  for (let y = .331; y < 1.25; y += .102) {
    facade('south', [service.width - .116, .013, .019], service.center, y, -.032, galvanized);
  }
  facade('south', [.153, .025, .032], service.center, .507, -.017, silver);
  facade('south', [1.375, .048, .137], service.center, .185, .045, concrete);
  facade('south', [1.291, .081, .087], service.center, 1.374, .015, steel);

  const eastVent = { center: -.991, width: .57, bottom: .633, top: 1.274 };
  const eastWindows = [-.175, .563, 1.301].map(center => ({ center, width: .565, bottom: .900, top: 1.323 }));
  wall('east', [eastVent, ...eastWindows]);
  louver('east', eastVent);
  for (const opening of eastWindows) window('east', opening);

  const westVent = { center: -.69, width: .68, bottom: .702, top: 1.301 };
  const westWindow = { center: .63, width: .92, bottom: .865, top: 1.326 };
  wall('west', [westVent, westWindow]);
  louver('west', westVent);
  window('west', westWindow);
  const rearVent = { center: .46, width: .84, bottom: .795, top: 1.326 };
  wall('north', [rearVent]);
  louver('north', rearVent);

  // Low standing-seam roof. Both slopes discharge into the eave gutters.
  const rise = .049;
  const sheetRun = HALL_ROOF.width / 2 - .022;
  const pitch = Math.atan2(rise, sheetRun);
  const ridge = HALL_ROOF.height - .018;
  for (const side of [-1, 1]) {
    const roofX = side * sheetRun / 2;
    const roofY = ridge - rise / 2 - .016;
    const sheet = box(hall, [Math.hypot(sheetRun, rise), .033, HALL_ROOF.depth - .023], [roofX, roofY, 0], galvanized);
    sheet.rotation.z = -side * pitch;
    for (let z = -1.79; z <= 1.8; z += .297) {
      const seam = box(hall, [sheetRun - .014, .012, .015], [roofX, roofY + .021, z], galvanized);
      seam.rotation.z = -side * pitch;
    }
    box(hall, [.068, .062, HALL_ROOF.depth - .014], [side * (HALL_ROOF.width / 2 - .041), ridge - rise - .026, 0], steel);
  }
  box(hall, [.071, .023, HALL_ROOF.depth - .01], [0, ridge + .003, 0], galvanized);

  // The ventilation terminals sit on roof curbs with a gap beneath each rain cap.
  for (const [x, z] of [[-.705, -.424], [.647, -.438]]) {
    box(hall, [.447, .047, .481], [x, 1.634, z], steel);
    box(hall, [.361, .161, .389], [x, 1.711, z], galvanized);
    box(hall, [.413, .055, .451], [x, 1.800, z], steel);
    box(hall, [.478, .034, .521], [x, 1.837, z], galvanized);
    for (const dx of [-.126, .126]) box(hall, [.035, .026, .035], [x + dx, 1.818, z + .168], galvanized);
  }

  // Galvanized downpipes are braced to the corner trim and lead into splash blocks.
  for (const side of [-1, 1]) {
    const cornerX = side * 1.902;
    const drainX = side * 1.774;
    const front = depth / 2;
    pipe(hall, [[cornerX, 1.555, front - .045], [drainX, 1.449, front + .045],
      [drainX, .191, front + .045], [drainX, .165, front + .079]], .017, galvanized);
    for (const y of [.485, 1.175]) facade('south', [.064, .034, .046], drainX, y, .023, galvanized);
    facade('south', [.152, .036, .111], drainX, .033, .059, concrete);
  }
}
