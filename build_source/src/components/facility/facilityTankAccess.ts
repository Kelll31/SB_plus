import * as THREE from 'three';
import { roofHeightAt } from './facilityLayout';

type Point = [number, number, number];
type AccessKit = {
  box: (parent: THREE.Object3D, size: Point, at: Point, mat?: THREE.MeshStandardMaterial, outline?: boolean) => THREE.Mesh;
  rod: (parent: THREE.Object3D, a: number[], b: number[], radius?: number, mat?: THREE.MeshStandardMaterial) => THREE.Mesh;
  mesh: (geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x?: number, y?: number, z?: number, outline?: boolean) => THREE.Mesh;
  materials: { steel: THREE.MeshStandardMaterial; galvanized: THREE.MeshStandardMaterial; silver: THREE.MeshStandardMaterial; roof: THREE.MeshStandardMaterial };
};

const openingHalfWidth = .255;
const ladderHalfWidth = .193;
const hoopRadius = .238;

export function tankAccessLayout(radius: number, height: number) {
  const railRadius = radius * .88;
  const openingDepth = Math.sqrt(railRadius ** 2 - openingHalfWidth ** 2);
  const landingInside = openingDepth - .067;
  const ladderDepth = radius + .145;
  const landingOutside = ladderDepth - .016;
  const roofAtRail = roofHeightAt(height, radius, railRadius);
  const landingTop = roofHeightAt(height, radius, landingInside) + .029;
  return {
    railRadius, openingDepth, landingInside, landingOutside, ladderDepth, roofAtRail, landingTop,
    railTop: roofAtRail + .365,
    railMiddle: roofAtRail + .192,
    lastRung: landingTop - .158,
    highestHoop: landingTop - .174,
    outermostDepth: ladderDepth + hoopRadius + .011,
  };
}

/** Общий выход с лестницы на крышу. Направление меняет сторону всего узла. */
export function buildTankAccess(tank: THREE.Group, radius: number, height: number, direction: number, kit: AccessKit) {
  const { box, rod, mesh, materials: { steel, galvanized, silver, roof } } = kit;
  const layout = tankAccessLayout(radius, height);
  const { railRadius, openingDepth, roofAtRail, railTop, railMiddle, landingTop } = layout;
  const { ladderDepth, landingInside, landingOutside, lastRung, highestHoop } = layout;
  const at = (x: number, y: number, depth: number): Point => [x, y, direction * depth];
  const openAngle = Math.asin(openingHalfWidth / railRadius);
  const railStart = direction * Math.PI / 2 + openAngle;
  const railArc = 2 * Math.PI - 2 * openAngle;

  for (const [y, thickness] of [[railMiddle, .013], [railTop, .016]]) {
    const rail = mesh(new THREE.TorusGeometry(railRadius, thickness, 5, 60, railArc), galvanized, tank, 0, y);
    rail.rotation.set(Math.PI / 2, 0, railStart);
  }
  // Концевые стойки совпадают с кромками прохода, остальные опираются на кровлю.
  for (let i = 0; i <= 14; i++) {
    const angle = railStart + i * railArc / 14;
    const x = Math.cos(angle) * railRadius;
    const z = Math.sin(angle) * railRadius;
    box(tank, [.066, .02, .066], [x, roofAtRail + .004, z], steel);
    rod(tank, [x, roofAtRail, z], [x, railTop, z], .013, galvanized);
  }

  // Плоский решётчатый настил перекрывает кромку конуса до верхней ступени.
  const landingDepth = landingOutside - landingInside;
  const landingCenter = (landingInside + landingOutside) / 2;
  const edgeWidth = .498;
  for (const x of [-.237, .237]) box(tank, [.039, .048, landingDepth], at(x, landingTop - .024, landingCenter), steel);
  for (const depth of [landingInside + .014, landingOutside - .014]) {
    box(tank, [edgeWidth, .045, .029], at(0, landingTop - .0225, depth), galvanized);
  }
  const gratingCount = Math.ceil(landingDepth / .032);
  for (let i = 1; i < gratingCount; i++) {
    const depth = landingInside + i * landingDepth / gratingCount;
    box(tank, [.456, .019, .012], at(0, landingTop - .01, depth), galvanized);
  }
  for (const x of [-.115, .115]) box(tank, [.012, .016, landingDepth - .022], at(x, landingTop - .019, landingCenter), steel);
  for (const x of [-.224, .224]) {
    // Подкосы опираются на обечайку ниже кровли.
    const shell = Math.sqrt(radius ** 2 - x ** 2);
    rod(tank, at(x, height - .08, shell - .018), at(x, landingTop - .042, landingOutside - .025), .016, steel);
  }

  const baseY = -.06; // Плита площадки относительно группы резервуара.
  const firstRung = .175;
  const rungIntervals = Math.ceil((lastRung - firstRung) / .223);
  const uprightSize = .036;
  for (const x of [-ladderHalfWidth, ladderHalfWidth]) {
    box(tank, [.094, .079, .114], at(x, baseY + .0395, ladderDepth + .033), steel);
    const startY = baseY + .069;
    box(tank, [uprightSize, railTop - startY, .033], at(x, (railTop + startY) / 2, ladderDepth), galvanized);
    const shell = Math.sqrt(radius ** 2 - x ** 2);
    for (const y of [.49, height * .54, height + .113]) {
      box(tank, [.087, .095, .029], at(x, y, shell - .002), roof);
      rod(tank, at(x, y, shell), at(x, y, ladderDepth), .015, steel);
    }
    const side = Math.sign(x);
    for (const y of [railMiddle, railTop]) {
      rod(tank, at(x, y, ladderDepth), at(side * openingHalfWidth, y, openingDepth), .015, galvanized);
    }
  }
  for (let i = 0; i <= rungIntervals; i++) {
    const y = firstRung + i * (lastRung - firstRung) / rungIntervals;
    box(tank, [ladderHalfWidth * 2 + .02, .021, .039], at(0, y, ladderDepth), silver);
  }

  // Защитная обойма остаётся ниже настила, чтобы не пересекать выход.
  const cageBottom = 1.37;
  const hoopCount = Math.ceil((highestHoop - cageBottom) / .565);
  for (let i = 0; i <= hoopCount; i++) {
    const y = cageBottom + i * (highestHoop - cageBottom) / hoopCount;
    const cage = mesh(new THREE.TorusGeometry(hoopRadius, .011, 4, 18, Math.PI), roof, tank, 0, y, direction * ladderDepth);
    cage.rotation.x = direction * Math.PI / 2;
    for (const side of [-1, 1]) rod(tank, at(side * ladderHalfWidth, y, ladderDepth), at(side * hoopRadius, y, ladderDepth), .011, roof);
  }
  for (const angle of [Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4]) {
    const x = Math.cos(angle) * hoopRadius;
    const depth = ladderDepth + Math.sin(angle) * hoopRadius;
    const strap = box(tank, [.021, highestHoop - cageBottom, .013], at(x, (highestHoop + cageBottom) / 2, depth), roof);
    strap.rotation.y = direction * (angle - Math.PI / 2);
  }
}
