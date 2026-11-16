import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** Surrounding infrastructure shares one draw call per material. Coordinates are
 * kept outside the existing instrument/camera corridor. */
export function createSurroundings(mats: { ground: THREE.Material; road: THREE.Material; concrete: THREE.Material; metal: THREE.Material; paint: THREE.Material; dark: THREE.Material; green: THREE.Material }) {
  const root = new THREE.Group();
  const buckets = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const transform = new THREE.Object3D();
  const add = (geometry: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, rx = 0, ry = 0, rz = 0) => {
    transform.position.set(x, y, z); transform.rotation.set(rx, ry, rz); transform.updateMatrix();
    geometry.applyMatrix4(transform.matrix);
    const list = buckets.get(mat) || []; list.push(geometry); buckets.set(mat, list);
  };
  const box = (x: number, y: number, z: number, w: number, h: number, d: number, mat: THREE.Material) => {
    const geometry = new THREE.BoxGeometry(w, h, d);
    if (mat === mats.road || mat === mats.concrete || mat === mats.ground || mat === mats.green || mat === mats.metal) {
      const uv = geometry.attributes.uv, normal = geometry.attributes.normal;
      for (let i = 0; i < uv.count; i++) {
        const nx = Math.abs(normal.getX(i)), ny = Math.abs(normal.getY(i));
        uv.setXY(i, uv.getX(i) * (nx > .5 ? d : w) / 2, uv.getY(i) * (ny > .5 ? d : h) / 2);
      }
    }
    add(geometry, mat, x, y, z);
  };
  const cylinder = (x: number, y: number, z: number, r: number, h: number, mat: THREE.Material, rz = 0) => add(new THREE.CylinderGeometry(r, r, h, 24), mat, x, y, z, 0, 0, rz);
  const tube = (a: number[], b: number[], radius: number, mat: THREE.Material) => {
    const from = new THREE.Vector3(...a as [number, number, number]), to = new THREE.Vector3(...b as [number, number, number]);
    const geometry = new THREE.CylinderGeometry(radius, radius, from.distanceTo(to), 6);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
    geometry.applyQuaternion(q); geometry.translate(...from.add(to).multiplyScalar(.5).toArray());
    const list = buckets.get(mat) || []; list.push(geometry); buckets.set(mat, list);
  };
  // Continuous land and approach roads remove the floating diorama edge.
  box(0, -.31, 0, 600, .12, 600, mats.ground);
  box(0, -.2, 0, 20, .15, 14.2, mats.concrete);
  box(0, -.18, 10.1, 170, .08, 3.8, mats.road);
  box(-12, -.18, -20, 3.8, .08, 62, mats.road);
  box(2.35, -.15, 6.8, 2.3, .1, 3.2, mats.road);
  box(21, -.18, -15, 3.8, .08, 54, mats.road);
  box(4, -.18, -12, 34, .08, 3.4, mats.road);
  for (let x = -80; x < 80; x += 3.1) box(x, -.13, 10.1, 1.3, .008, .045, mats.paint);
  for (const z of [8.35, 11.85]) box(0, -.13, z, 170, .008, .035, mats.paint);
  for (let z = -48; z < 8; z += 3) box(-12, -.13, z, .04, .01, 1.3, mats.paint);
  // Curbs, drains and cable trenches along the active plot.
  for (const z of [-6.8, 6.8]) {
    if (z > 0) box(-3.14, -.045, z, 13.42, .16, .12, mats.concrete);
    else box(0, -.045, z, 19.7, .16, .12, mats.concrete);
    box(-3.6, .001, z + .15, 9, .015, .18, mats.dark);
    for (let x = -8; x < 1; x += .14) box(x, .012, z + .15, .025, .015, .18, mats.metal);
  }
  // Wider terminal: secondary tank battery and loading gantry.
  for (let i = 0; i < 8; i++) {
    const x = -7 + (i % 4) * 5.3, z = -22 - Math.floor(i / 4) * 6;
    cylinder(x, .03, z, 2.1, .35, mats.concrete);
    cylinder(x, 1.9, z, 1.92, 3.55, mats.paint);
    add(new THREE.ConeGeometry(1.95, .3, 40), mats.metal, x, 3.82, z);
    for (const y of [.55, 1.6, 2.65, 3.65]) add(new THREE.TorusGeometry(1.935, .018, 4, 40), mats.metal, x, y, z, Math.PI / 2);
    tube([x - .15, .1, z + 1.96], [x - .15, 3.9, z + 1.96], .025, mats.metal);
    tube([x + .15, .1, z + 1.96], [x + .15, 3.9, z + 1.96], .025, mats.metal);
    for (let h = .3; h < 4; h += .25) tube([x - .15, h, z + 1.97], [x + .15, h, z + 1.97], .016, mats.metal);
  }
  box(1, -.1, -25, 23, .2, 13, mats.concrete);
  for (const x of [-9, -4, 1, 6, 11]) {
    box(x, 1.45, -16, .16, 3.1, .18, mats.metal);
    box(x, 1.45, -18, .16, 3.1, .18, mats.metal);
    box(x, 2.95, -17, .16, .16, 2.3, mats.metal);
  }
  for (let i = 0; i < 5; i++) tube([-10, 3.04, -17.8 + i * .34], [16, 3.04, -17.8 + i * .34], .09, mats.metal);
  // Background warehouses and refinery columns give a horizon and parallax.
  for (let i = 0; i < 5; i++) {
    const x = 28 + i * 12, z = -27 - (i % 2) * 13;
    box(x, 2, z, 9, 4.3, 16, mats.green);
    box(x, 4.2, z, 9.5, .2, 16.5, mats.metal);
    for (let dx = -3.7; dx <= 3.7; dx += .5) box(x + dx, 2.1, z + 8.02, .035, 4.1, .03, mats.metal);
    for (let dx = -3; dx < 4; dx += 3) box(x + dx, 1, z + 8.05, 1.9, 2.1, .08, mats.dark);
  }
  for (let i = 0; i < 10; i++) {
    const x = 4 + i * 3.7, z = -48 - (i % 3) * 4, h = 5 + (i % 4) * 2;
    cylinder(x, h / 2, z, .55 + (i % 2) * .2, h, mats.metal);
    for (let y = 2; y < h; y += 1.5) add(new THREE.TorusGeometry(.92, .035, 4, 18), mats.dark, x, y, z, Math.PI / 2);
    tube([x - .7, .2, z], [x - .7, h, z], .06, mats.dark);
  }
  // Lighting masts, realistic perimeter height and fence mesh.
  for (const x of [-17, -5, 8, 22, 38, 54]) {
    cylinder(x, 2.65, 13.1, .045, 5.6, mats.metal);
    tube([x, 5.4, 13.1], [x, 5.65, 12.2], .04, mats.metal);
    box(x, 5.62, 12.1, .26, .08, .45, mats.dark);
  }
  for (let x = -26; x <= 64; x += 2) {
    cylinder(x, .6, -34, .025, 1.5, mats.dark);
    tube([x, .2, -34], [x + 2, 1.15, -34], .008, mats.metal);
    tube([x, 1.15, -34], [x + 2, .2, -34], .008, mats.metal);
  }
  // Tanker in loading lane. Trailer, wheels, saddles and safety rails.
  const truckX = 13.7, truckZ = -7.1;
  box(truckX, .27, truckZ, 1.1, .2, 4.9, mats.dark);
  add(new THREE.CylinderGeometry(.55, .55, 3.5, 32), mats.metal, truckX, .95, truckZ - .4, Math.PI / 2);
  for (const z of [truckZ - 2.15, truckZ + 1.35]) add(new THREE.SphereGeometry(.55, 20, 12), mats.metal, truckX, .95, z);
  box(truckX, .77, truckZ + 2.45, 1.15, 1.05, 1.2, mats.paint);
  box(truckX, 1.01, truckZ + 3.06, .97, .38, .025, mats.dark);
  for (const x of [truckX - .59, truckX + .59]) for (const z of [-1.7, -1.1, 2.6]) {
    cylinder(x, .3, truckZ + z, .28, .16, mats.dark, Math.PI / 2);
    cylinder(x + (x < truckX ? -.09 : .09), .3, truckZ + z, .13, .02, mats.metal, Math.PI / 2);
  }
  for (const x of [truckX - .3, truckX + .3]) tube([x, 1.57, truckZ - 1.8], [x, 1.57, truckZ + 1], .018, mats.metal);
  // Mixed-height tree belt, kept away from process equipment.
  const foliage = new THREE.MeshStandardMaterial({ color: 0x3b4a2e, roughness: 1 });
  let seed = 7241; const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  for (let i = 0; i < 145; i++) {
    const x = -125 + random() * 250, z = i < 95 ? -86 - random() * 24 : 75 + random() * 40;
    const h = 3.1 + random() * 4;
    cylinder(x, h * .26, z, .08, h * .6, mats.dark);
    for (let j = 0; j < 5; j++) add(new THREE.IcosahedronGeometry(h * (.19 - j * .014), 0), foliage, x + (random() - .5) * h * .32, h * (.48 + j * .1), z + (random() - .5) * h * .32, 0, random() * 3);
  }
  // Merge static geometry to avoid hundreds of extra draw calls.
  for (const [mat, parts] of buckets) {
    const preserveIndex = parts.every(part => part.index);
    const compatible = parts.map(part => !preserveIndex && part.index ? part.toNonIndexed() : part);
    const geometry = mergeGeometries(compatible, false);
    new Set([...parts, ...compatible]).forEach(part => part.dispose());
    if (!geometry) continue;
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.castShadow = false;
    mesh.receiveShadow = mat !== foliage;
    root.add(mesh);
  }
  return root;
}
