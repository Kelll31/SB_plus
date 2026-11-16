import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { createSurroundings } from './facilitySurroundings';
import { CHANNEL_COUNT, chapterAt, demoTelemetry } from './facilityTour';
import { flightOrientation, sampleFacilityCamera } from './facilityFlightPath';
import { makeControlScreen, makeRoomSign, surfaceTexture, tankDecal } from './facilityTextures';
import {
  CONTROL_APRON, CONTROL_DOOR, CONTROL_FRONT, CONTROL_FURNITURE, CONTROL_POST, CONTROL_SCREEN_Z, CONTROL_SHELL,
  GAS_LOCATIONS, HEADERS, HEADER_ROUTES, PROCESS_HALL, PUMP_DISCHARGE_ROUTES,
  PUMP_INTAKE_ROUTES, PUMP_PAD, PUMP_X, RACK_FEET_Z, RACK_X, ROAD, SITE_TANKS,
  SITE_FENCE, TANK_BUND, VESSEL_RADIUS, VESSEL_SUPPLY_ROUTES, VESSEL_X, VESSEL_Z, controlDoorOpening, roofHeightAt, tankLabelAngle, tankLadderDirection, tankOutletDirection,
} from './facilityLayout';
import { createSitePlan } from './facilityPlan';
import { buildTankAccess } from './facilityTankAccess';
import { buildProcessHall } from './facilityProcessHall';
import { batchStaticParts, pipeCurve, pipeGeometry } from './facilityGeometry';

export interface FacilityScene {
  render: (progress: number, still: boolean, time?: number) => void;
  prepare: (onProgress: (fraction: number) => void) => Promise<void>;
  adjustResolution: (scale: number) => void;
  resize: (width: number, height: number) => void;
  dispose: () => void;
}

type GrowingPart = { group: THREE.Group; start: number; end: number };
const up = new THREE.Vector3(0, 1, 0);
const clamp = THREE.MathUtils.clamp;
const ramp = (value: number, start: number, end: number) => {
  const t = clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Procedural industrial site with locally served CC0 surface and daylight maps. */
export function createFacilityScene(canvas: HTMLCanvasElement, onAssetProgress: (fraction: number) => void): FacilityScene {
  let disposed = false;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth > 700 ? 1.75 : 1.35));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = .9;
  renderer.shadowMap.enabled = window.innerWidth > 700;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x10251f);
  const skyMaterial = new THREE.MeshBasicMaterial({ side: THREE.BackSide, transparent: true, opacity: 0, depthWrite: false, fog: false });
  const skyDome = new THREE.Mesh(new THREE.SphereGeometry(200, 32, 20), skyMaterial);
  skyDome.rotation.y = 1.2; skyDome.renderOrder = -10; scene.add(skyDome);
  const camera = new THREE.PerspectiveCamera(48, 1, .06, 450);
  const fog = new THREE.FogExp2(0xc2cbd0, .009);
  scene.fog = fog;
  scene.environmentIntensity = .75;
  let sky: THREE.DataTexture | null = null;
  const assetBase = './images/industrial/r2/';
  let assetsLoaded: () => void = () => {};
  const assets = new Promise<void>(resolve => { assetsLoaded = resolve; });
  let assetError = false;
  const manager = new THREE.LoadingManager(assetsLoaded, (_url, loaded, total) => {
    if (!disposed) onAssetProgress(loaded / total);
  }, () => { assetError = true; });
  const loader = new THREE.TextureLoader(manager);
  new RGBELoader(manager).load(assetBase + 'daylight-hdri.hdr', texture => {
    if (disposed) { texture.dispose(); return; }
    texture.mapping = THREE.EquirectangularReflectionMapping;
    sky = texture; scene.environment = texture;
    skyMaterial.map = texture; skyMaterial.needsUpdate = true;
    scene.backgroundBlurriness = 0; scene.backgroundIntensity = .8;
    scene.environmentRotation.y = scene.backgroundRotation.y = 1.2;
  });
  const textures: THREE.Texture[] = [];
  const world = new THREE.Group();
  scene.add(world);
  scene.add(new THREE.HemisphereLight(0xcbddea, 0x625c43, .75));
  const sun = new THREE.DirectionalLight(0xfff0da, 2.5);
  sun.position.set(-12, 16, -8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1536, 1536);
  Object.assign(sun.shadow.camera, { left: -20, right: 20, top: 20, bottom: -20, near: .5, far: 65 });
  sun.shadow.normalBias = .018; sun.shadow.bias = -.00015;
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0xc2dbe8, .25);
  rim.position.set(7, 6, -8);
  scene.add(rim);

  const materials: THREE.MeshStandardMaterial[] = [];
  const material = (color: number, metalness = .15, roughness = .52) => {
    const result = new THREE.MeshStandardMaterial({ color, metalness, roughness, transparent: true });
    materials.push(result);
    return result;
  };
  const concrete = material(0xc0bdb0, .03, .93);
  const silver = material(0xe9e9e2, .04, .74);
  const roof = material(0xbec5c3, .5, .4);
  const steel = material(0x344c43, .5, .4);
  const green = material(0x496c5b, .25, .5);
  const pipeMetal = material(0xa69d83, .6, .36);
  const white = material(0xe0e9db, .15, .4);
  const glass = material(0x254d45, .4, .24);
  const metalMap = surfaceTexture('metal');
  textures.push(metalMap);
  silver.map = silver.bumpMap = metalMap; silver.bumpScale = .012;
  roof.map = metalMap; roof.roughness = .58;
  green.map = metalMap; green.roughness = .75;
  const asphalt = material(0xa1a7a1, .05, .96);
  const loadMap = (name: string, color = false) => {
    const texture = loader.load(assetBase + name + '.webp', loaded => { if (disposed) loaded.dispose(); });
    texture.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.anisotropy = Math.min(color ? 4 : 2, renderer.capabilities.getMaxAnisotropy());
    textures.push(texture); return texture;
  };
  concrete.map = loadMap('concrete-diffuse', true);
  concrete.normalMap = loadMap('concrete-nor_gl'); concrete.normalScale.set(.5, .5);
  concrete.roughnessMap = loadMap('concrete-rough'); concrete.color.setHex(0xb5b3a4);
  asphalt.map = loadMap('asphalt-diffuse', true); asphalt.color.setHex(0x999b9a);
  asphalt.normalMap = loadMap('asphalt-nor_gl'); asphalt.normalScale.set(.35, .35);
  asphalt.roughnessMap = loadMap('asphalt-rough');
  const terrain = new THREE.MeshStandardMaterial({ color: 0x8a8b68, roughness: 1, map: loadMap('terrain-diffuse', true), normalMap: loadMap('terrain-nor_gl') });
  terrain.normalScale.set(.5, .5);
  const cladding = material(0xb3b8af, .12, .78);
  cladding.map = loadMap('wall-diffuse', true); cladding.normalMap = loadMap('wall-nor_gl');
  cladding.normalScale.set(.6, .6); cladding.roughnessMap = loadMap('wall-rough');
  const galvanized = material(0xc5cdca, .8, .65);
  galvanized.map = loadMap('zinc-diffuse', true); galvanized.normalMap = loadMap('zinc-nor_gl');
  galvanized.normalScale.set(.15, .15); galvanized.roughnessMap = loadMap('zinc-rough');
  const signalBlue = material(0x508ba1, .5, .33);
  const weatheredRed = material(0x9c4935, .3, .58);
  const wireMaterial = new THREE.LineBasicMaterial({ color: 0x9ed7c0, transparent: true, opacity: .7 });
  const groundWire = new THREE.LineBasicMaterial({ color: 0x87b7a0, transparent: true, opacity: .55 });
  const model = new THREE.Group();
  const security = new THREE.Group();
  const growing: GrowingPart[] = [];
  world.add(model, security);
  const surroundings = createSurroundings({ ground: terrain, road: asphalt.clone(), concrete: concrete.clone(), metal: galvanized.clone(), paint: silver.clone(), dark: steel.clone(), green: cladding.clone() });
  scene.add(surroundings);
  const outsideMaterials = [...new Set(surroundings.children.map(child => (child as THREE.Mesh).material as THREE.Material))];
  outsideMaterials.forEach(mat => { mat.transparent = true; });
  const plan = createSitePlan(); textures.push(plan.texture); world.add(plan.mesh);

  const mesh = (geometry: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0, outline = false) => {
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(x, y, z);
    object.castShadow = true; object.receiveShadow = true;
    parent.add(object);
    if (outline) object.add(new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 28), wireMaterial));
    return object;
  };
  const box = (parent: THREE.Object3D, size: [number, number, number], at: [number, number, number], mat = steel, outline = false) => {
    const geometry = new THREE.BoxGeometry(...size);
    if (mat === concrete || mat === asphalt || mat === cladding || mat === galvanized) {
      const uv = geometry.attributes.uv, n = geometry.attributes.normal;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (Math.abs(n.getX(i)) > .5 ? size[2] : size[0]) / 2, uv.getY(i) * (Math.abs(n.getY(i)) > .5 ? size[2] : size[1]) / 2);
    }
    return mesh(geometry, mat, parent, ...at, outline);
  };
  const line = (points: number[][], parent: THREE.Object3D, mat = groundWire) => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p as [number, number, number])));
    const object = new THREE.Line(geometry, mat); parent.add(object); return object;
  };
  const ring = (parent: THREE.Object3D, radius: number, y: number, tube = .025, mat = steel) => {
    const object = mesh(new THREE.TorusGeometry(radius, tube, 5, 48), mat, parent, 0, y, 0);
    object.rotation.x = Math.PI / 2;
    return object;
  };
  const rod = (parent: THREE.Object3D, a: number[], b: number[], radius = .035, mat = steel) => {
    const start = new THREE.Vector3(...a as [number, number, number]);
    const end = new THREE.Vector3(...b as [number, number, number]);
    const delta = end.clone().sub(start);
    const object = mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 12), mat, parent);
    object.position.copy(start.add(end).multiplyScalar(.5));
    object.quaternion.setFromUnitVectors(up, delta.normalize());
    return object;
  };
  const pipe = (parent: THREE.Object3D, points: number[][], radius = .075, mat = pipeMetal) => mesh(pipeGeometry(points, radius), mat, parent);
  const flange = (parent: THREE.Object3D, at: number[], direction: number[], radius = .13) => {
    const center = new THREE.Vector3(...at as [number, number, number]);
    const normal = new THREE.Vector3(...direction as [number, number, number]).normalize();
    const body = mesh(new THREE.CylinderGeometry(radius, radius, .055, 24), galvanized, parent, ...at as [number, number, number]);
    body.quaternion.setFromUnitVectors(up, normal);
    const axis = new THREE.Vector3(1, 0, 0); if (Math.abs(normal.x) > .9) axis.set(0, 0, 1);
    const other = new THREE.Vector3().crossVectors(normal, axis).normalize();
    for (let i = 0; i < 6; i++) {
      const angle = i * Math.PI / 3;
      const position = center.clone().addScaledVector(axis, Math.cos(angle) * radius * .78).addScaledVector(other, Math.sin(angle) * radius * .78);
      const bolt = mesh(new THREE.CylinderGeometry(.018, .018, .078, 6), steel, parent, position.x, position.y, position.z);
      bolt.quaternion.copy(body.quaternion);
    }
  };
  const valve = (parent: THREE.Object3D, x: number, y: number, z: number) => {
    rod(parent, [x, y, z - .19], [x, y, z + .19], .115, weatheredRed);
    flange(parent, [x, y, z - .18], [0, 0, 1], .16); flange(parent, [x, y, z + .18], [0, 0, 1], .16);
    mesh(new THREE.SphereGeometry(.135, 16, 10), weatheredRed, parent, x, y, z);
    rod(parent, [x, y, z], [x, y + .2, z], .075, weatheredRed);
    rod(parent, [x, y + .2, z], [x, y + .38, z], .025, galvanized);
    const wheel = mesh(new THREE.TorusGeometry(.14, .018, 6, 24), weatheredRed, parent, x, y + .39, z); wheel.rotation.x = Math.PI / 2;
    for (let i = 0; i < 3; i++) { const a = i * Math.PI * 2 / 3; rod(parent, [x, y + .39, z], [x + Math.cos(a) * .14, y + .39, z + Math.sin(a) * .14], .012, weatheredRed); }
  };
  const part = (x: number, z: number, start: number, end: number) => {
    const group = new THREE.Group(); group.position.set(x, .04, z); model.add(group);
    growing.push({ group, start, end }); return group;
  };

  const slab = box(world, [18, .16, 12], [0, -.1, 0], concrete);
  slab.castShadow = false;
  const apron = box(world, [CONTROL_APRON.width, .15, CONTROL_APRON.depth], [CONTROL_APRON.x, -.106, CONTROL_APRON.z], concrete);
  apron.castShadow = false;
  box(model, [ROAD.width, .035, ROAD.depth], [ROAD.x, .02, ROAD.z], asphalt);
  for (let z = -4.8; z <= 5; z += 1.1) box(model, [.045, .015, .48], [2.35, .05, z], roof);

  // Four storage tanks: bunds, shell seams, roofs, service rails and ladders.
  const tanks = SITE_TANKS;
  const tankShells: THREE.MeshStandardMaterial[] = [];
  const tankParts: THREE.Group[] = [];
  const levelLiquids: THREE.Mesh[] = [];
  const levelWaves: THREE.Mesh[] = [];
  const levelSensorPositions: THREE.Vector3[] = [];
  const fluidMaterial = new THREE.MeshStandardMaterial({ color: 0x4aacae, emissive: 0x153d3e, roughness: .22, transparent: true, opacity: .65, depthWrite: false });
  const radarMaterial = new THREE.MeshBasicMaterial({ color: 0x84dad4, transparent: true, opacity: .75, depthWrite: false });
  tanks.forEach(([x, z, radius, height], index) => {
    const tank = part(x, z, .1 + index * .035, .34 + index * .035);
    tankParts.push(tank);
    mesh(new THREE.CylinderGeometry(radius + .12, radius + .16, .16, 48), concrete, tank, 0, .08);
    const shell = silver.clone(); materials.push(shell); tankShells.push(shell);
    mesh(new THREE.CylinderGeometry(radius, radius, height, 96), shell, tank, 0, height / 2 + .16, 0, true);
    const tankRoof = mesh(new THREE.CylinderGeometry(.16, radius + .025, .25, 96), roof, tank, 0, height + .28);
    tankRoof.userData.revealRoof = index === 3;
    const labelMap = tankDecal(index); textures.push(labelMap);
    const labelMaterial = new THREE.MeshStandardMaterial({ map: labelMap, transparent: true, depthWrite: false, roughness: .8, polygonOffset: true, polygonOffsetFactor: -1 });
    const labelRadius = radius + .006;
    const labelArc = .95 / labelRadius;
    const labelGeometry = new THREE.CylinderGeometry(labelRadius, labelRadius, .48, 20, 1, true, tankLabelAngle(index) - labelArc / 2, labelArc);
    mesh(labelGeometry, labelMaterial, tank, 0, height * .7).castShadow = false;
    ring(tank, radius + .012, .34, .016, green);
    for (let h = .8; h < height; h += .65) ring(tank, radius + .005, h, .006, roof);
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
      rod(tank, [Math.cos(angle) * .18, height + .405, Math.sin(angle) * .18], [Math.cos(angle) * radius, height + .17, Math.sin(angle) * radius], .009, roof);
    }
    buildTankAccess(tank, radius, height, tankLadderDirection(index), { box, rod, mesh, materials: { steel, galvanized, silver, roof } });
    const hatchY = roofHeightAt(height, radius, Math.hypot(.45, .15));
    mesh(new THREE.CylinderGeometry(.18, .18, .18, 24), galvanized, tank, .45, hatchY + .085, .15);
    const out = tankOutletDirection(index);
    pipe(tank, [[0, .5, out * (radius - .08)], [0, .5, out * (radius + .46)]], .09);
    flange(tank, [0, .5, out * (radius + .055)], [0, 0, 1], .16);
    valve(tank, 0, .5, out * (radius + .23));
    // Roof-mounted radar level transmitter, flange, display and cable gland.
    mesh(new THREE.CylinderGeometry(.14, .14, .055, 24), silver, tank, -.38, height + .36, .3);
    rod(tank, [-.38, height + .38, .3], [-.38, height + .64, .3], .052, silver);
    mesh(new THREE.CylinderGeometry(.15, .15, .25, 24), signalBlue, tank, -.38, height + .76, .3);
    box(tank, [.17, .11, .025], [-.38, height + .78, .453], glass);
    rod(tank, [-.24, height + .76, .3], [.1, height + .76, .3], .024, steel);
    levelSensorPositions.push(new THREE.Vector3(x - .38, height + .8, z + .3));
    const fluid = mesh(new THREE.CylinderGeometry(radius * .97, radius * .97, 1, 64), fluidMaterial, tank);
    fluid.visible = false; fluid.castShadow = false; levelLiquids.push(fluid);
    for (let i = 0; i < 3; i++) {
      const wave = mesh(new THREE.TorusGeometry(.2, .012, 5, 40), radarMaterial, tank, -.38, height, .3);
      wave.rotation.x = Math.PI / 2; wave.visible = false; wave.castShadow = false;
      wave.userData = { tank: index, offset: i / 3 }; levelWaves.push(wave);
    }
  });

  // Processing hall and three vertical vessels.
  const hall = part(PROCESS_HALL.x, PROCESS_HALL.z, .21, .46);
  buildProcessHall(hall, { box, pipe, materials: { concrete, cladding, galvanized, steel, glass, silver } });
  for (const x of VESSEL_X) {
    const vessel = part(x, VESSEL_Z, .29, .48);
    mesh(new THREE.CylinderGeometry(VESSEL_RADIUS, VESSEL_RADIUS, 2.3, 32), silver, vessel, 0, 1.6, 0, true);
    mesh(new THREE.SphereGeometry(VESSEL_RADIUS, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), roof, vessel, 0, 2.75);
    for (const dx of [-.25, .25]) {
      rod(vessel, [dx, .02, 0], [dx, .6, 0], .055);
      box(vessel, [.19, .06, .24], [dx, .03, 0], galvanized);
    }
    ring(vessel, .45, 1.3, .026, pipeMetal);
  }
  const utilities = part(0, 0, .33, .52);
  HEADER_ROUTES.forEach(({ points, radius }, index) => {
    pipe(utilities, points, radius);
    const { y, z } = HEADERS[index];
    flange(utilities, [-7, .5, z], [1, 0, 0]);
    flange(utilities, [7.8, y, z], [1, 0, 0]);
  });
  tanks.forEach(([x, z, radius], index) => {
    const out = tankOutletDirection(index);
    pipe(utilities, [[x, .5, z + out * (radius + .44)], [x, .5, HEADERS[index < 2 ? 0 : 1].z]], .09);
  });
  for (const x of [-7, -4, -1]) box(utilities, [.18, .425, .8], [x, .2125, -.45], concrete);
  VESSEL_SUPPLY_ROUTES.forEach(({ points, radius }, index) => {
    pipe(utilities, points, radius);
    flange(utilities, [VESSEL_X[index], .75, .93], [0, 0, 1], .12);
  });

  const controlRoom = part(CONTROL_POST.x, CONTROL_POST.z, .31, .51);
  const roomHeight = CONTROL_POST.height;
  const trim = material(0x34413f, .24, .56);
  const graphite = material(0x1b2829, .18, .65);
  const cabinet = material(0x657472, .12, .67);
  const liner = material(0x8f9a97, .08, .76);
  const screenFrame = material(0x0f1819, .24, .54);
  const desk = material(0xbab8a5, .07, .58);
  const rubber = material(0x293334, .04, .87);
  const indicator = material(0xbcdfaf, 0, .6);
  indicator.emissive.setHex(0x698b56);
  indicator.emissiveIntensity = .8;
  const luminaire = material(0xc4d9ce, .0, .5);
  luminaire.emissive.setHex(0xdfefe6);
  luminaire.emissiveIntensity = 1.3;
  CONTROL_SHELL.forEach(({ name, size, at }) => {
    box(controlRoom, size, at, name === 'пол' ? concrete : name === 'кровля' ? galvanized : cladding);
    if (name === 'боковая стена') {
      const x = at[0] - Math.sign(at[0]) * .07;
      box(controlRoom, [.022, 2.4, 3.93], [x, 1.43, 0], liner);
      box(controlRoom, [.04, .19, 3.93], [x, .25, 0], graphite);
      for (const z of [-1.26, -.5, .26, 1.02, 1.78]) box(controlRoom, [.023, 2.23, .012], [x * .995, 1.42, z], trim);
    }
  });
  box(controlRoom, [4.01, .03, 3.84], [0, .162, 0], graphite);
  for (const x of [-1.48, -.74, 0, .74, 1.48]) box(controlRoom, [.009, .004, 3.82], [x, .179, 0], rubber);
  for (const z of [-1.44, -.72, 0, .72, 1.44]) box(controlRoom, [3.99, .004, .008], [0, .179, z], rubber);
  box(controlRoom, [.58, .008, 1.62], [0, .184, 1.18], rubber);
  box(controlRoom, [1.48, .17, .48], [0, .085, CONTROL_FRONT + .238], concrete);
  box(controlRoom, [1.42, .028, .14], [0, .181, CONTROL_FRONT + .01], galvanized);
  for (const x of [-.646, .646]) box(controlRoom, [.041, 2.1, .072], [x, 1.222, CONTROL_FRONT + .015], trim);
  box(controlRoom, [1.34, .073, .095], [0, 2.301, CONTROL_FRONT + .02], trim);
  box(controlRoom, [.12, .22, .062], [-.834, 1.30, CONTROL_FRONT + .038], graphite);
  box(controlRoom, [.054, .023, .012], [-.834, 1.361, CONTROL_FRONT + .074], indicator);
  const doorLeaf = new THREE.Group();
  controlRoom.add(doorLeaf);
  doorLeaf.position.set(CONTROL_DOOR.hingeX, 0, CONTROL_DOOR.hingeZ);
  const leafWidth = CONTROL_DOOR.width - .023;
  box(doorLeaf, [leafWidth, 2.08, .048], [-leafWidth / 2, 1.227, 0], cabinet);
  box(doorLeaf, [leafWidth - .05, .22, .014], [-leafWidth / 2, .337, .028], galvanized);
  for (const side of [-1, 1]) {
    box(doorLeaf, [.04, .168, .016], [-leafWidth + .13, 1.154, side * .031], trim);
    box(doorLeaf, [.113, .032, .043], [-leafWidth + .174, 1.154, side * .052], galvanized);
  }
  for (const y of [.34, 1.24, 2.105]) {
    box(controlRoom, [.08, .101, .087], [.645, y, CONTROL_DOOR.hingeZ + .037], galvanized);
    rod(controlRoom, [CONTROL_DOOR.hingeX, y - .048, CONTROL_DOOR.hingeZ], [CONTROL_DOOR.hingeX, y + .048, CONTROL_DOOR.hingeZ], .026, galvanized);
  }
  doorLeaf.traverse(object => { if (object instanceof THREE.Mesh) object.castShadow = false; });
  const entrySign = makeRoomSign('ПОСТ КОНТРОЛЯ', 'СБ+  /  ВХОД', 1.02 / .225);
  textures.push(entrySign);
  const entrySignMesh = mesh(new THREE.PlaneGeometry(1.02, .225), new THREE.MeshBasicMaterial({ map: entrySign, toneMapped: false }), controlRoom, -1.337, 1.87, CONTROL_FRONT + .015);
  entrySignMesh.castShadow = false;

  // Кабельный ввод проходит к основанию стены по закрытому каналу под полом.
  pipe(controlRoom, [[0, 2.47, -CONTROL_FRONT - .064], [0, .09, -CONTROL_FRONT - .064], [0, .09, CONTROL_SCREEN_Z + .09]], .038, galvanized);
  box(controlRoom, [.23, .22, .17], [0, 2.4, -CONTROL_FRONT - .09], graphite);
  box(controlRoom, [3.98, 2.38, .19], [0, 1.49, CONTROL_SCREEN_Z - .147], graphite);
  box(controlRoom, [3.91, .145, .153], [0, 2.62, CONTROL_SCREEN_Z - .12], trim);
  const wallSign = makeRoomSign('СБ+  /  ПОСТ КОНТРОЛЯ', 'РЕЗЕРВУАРНЫЙ ПАРК', 2.34 / .16);
  textures.push(wallSign);
  const wallSignMesh = mesh(new THREE.PlaneGeometry(2.34, .16), new THREE.MeshBasicMaterial({ map: wallSign, toneMapped: false }), controlRoom, 0, 2.625, CONTROL_SCREEN_Z - .04);
  wallSignMesh.castShadow = false;
  for (const x of [-1.65, 1.65]) box(controlRoom, [.52, .013, .016], [x, 2.621, CONTROL_SCREEN_Z - .025], indicator);
  const screens = [0, 1, 2, 3].map(makeControlScreen);
  screens.forEach(({ texture }, index) => {
    textures.push(texture);
    const x = index % 2 === 0 ? -.963 : .963;
    const y = index < 2 ? 2.011 : 1.024;
    box(controlRoom, [1.91, .97, .12], [x, y, CONTROL_SCREEN_Z - .062], screenFrame);
    const display = mesh(new THREE.PlaneGeometry(1.867, .93), new THREE.MeshBasicMaterial({ map: texture, toneMapped: false }), controlRoom, x, y, CONTROL_SCREEN_Z + .002);
    display.castShadow = false;
    display.receiveShadow = false;
  });
  const rackZ = CONTROL_SCREEN_Z + .125;
  box(controlRoom, [3.91, .045, .47], [0, .519, rackZ - .17], trim);
  for (const x of [-1.56, -.78, 0, .78, 1.56]) {
    box(controlRoom, [.76, .315, .376], [x, .342, rackZ - .11], cabinet);
    box(controlRoom, [.67, .114, .015], [x, .409, rackZ + .083], screenFrame);
    for (let i = 0; i < 4; i++) box(controlRoom, [.022, .014, .014], [x - .19 + i * .093, .425, rackZ + .094], indicator);
    for (let i = 0; i < 5; i++) box(controlRoom, [.29, .009, .016], [x - .083, .366 - i * .026, rackZ + .085], trim);
    box(controlRoom, [.032, .087, .026], [x + .28, .326, rackZ + .098], galvanized);
  }
  const networkCabinet = CONTROL_FURNITURE[4];
  box(controlRoom, networkCabinet.size, networkCabinet.at, graphite);
  box(controlRoom, [.354, 1.362, .019], [-1.8, .88, .302], trim);
  for (let i = 0; i < 8; i++) {
    box(controlRoom, [.266, .043, .012], [-1.8, 1.39 - i * .092, .318], screenFrame);
    box(controlRoom, [.024, .013, .011], [-1.713, 1.393 - i * .092, .326], indicator);
  }
  const deskZ = CONTROL_FURNITURE[2].at[2];
  box(controlRoom, [1.51, .056, .73], [1.23, .818, deskZ], desk);
  box(controlRoom, [1.47, .11, .058], [1.23, .749, deskZ + .335], graphite);
  for (const x of [.57, 1.88]) {
    box(controlRoom, [.104, .58, .53], [x, .476, deskZ - .02], trim);
    box(controlRoom, [.162, .039, .57], [x, .20, deskZ - .02], cabinet);
  }
  box(controlRoom, [.59, .021, .22], [1.076, .856, deskZ + .09], graphite);
  for (let row = 0; row < 4; row++) for (let column = 0; column < 12; column++) {
    box(controlRoom, [.033, .012, .032], [.833 + column * .044, .869, deskZ + .015 + row * .043], cabinet);
  }
  box(controlRoom, [.188, .005, .224], [1.627, .849, deskZ + .106], rubber);
  const mouse = mesh(new THREE.SphereGeometry(.054, 16, 8), trim, controlRoom, 1.627, .869, deskZ + .11);
  mouse.scale.set(1, .48, 1.41);
  const [chairX, , chairZ] = CONTROL_FURNITURE[3].at;
  rod(controlRoom, [chairX, .206, chairZ], [chairX, .523, chairZ], .041, galvanized);
  box(controlRoom, [.48, .102, .461], [chairX, .55, chairZ], graphite);
  const chairBack = box(controlRoom, [.446, .445, .085], [chairX, .788, chairZ + .199], graphite);
  chairBack.rotation.x = .13;
  for (const x of [chairX - .26, chairX + .26]) {
    box(controlRoom, [.037, .16, .045], [x, .645, chairZ + .031], trim);
    box(controlRoom, [.053, .044, .242], [x, .727, chairZ + .02], graphite);
  }
  for (let i = 0; i < 5; i++) {
    const angle = i * Math.PI * 2 / 5;
    const x = chairX + Math.cos(angle) * .252, z = chairZ + Math.sin(angle) * .252;
    rod(controlRoom, [chairX, .252, chairZ], [x, .221, z], .018, trim);
    mesh(new THREE.SphereGeometry(.026, 10, 8), rubber, controlRoom, x, .21, z);
  }
  box(controlRoom, [4.01, .032, 3.91], [0, roomHeight - .018, 0], liner);
  for (const z of [-.94, .8]) {
    box(controlRoom, [3.97, .032, .058], [0, roomHeight - .033, z], trim);
    for (const x of [-1.12, 1.12]) box(controlRoom, [1.47, .017, .108], [x, roomHeight - .055, z], luminaire);
  }
  const interiorLight = new THREE.PointLight(0xe6f4ed, 4.1, 4.1, 2);
  interiorLight.position.set(0, 2.63, .39);
  controlRoom.add(interiorLight);

  // Site details anchor the scale: bunding, pipe racks, pump skids and a service vehicle.
  const details = part(0, 0, .25, .5);
  const { west, east, north, south } = TANK_BUND;
  for (const z of [north, south]) box(details, [east - west, .38, .14], [(west + east) / 2, .19, z], concrete);
  for (const x of [west, east]) box(details, [.14, .38, south - north], [x, .19, (north + south) / 2], concrete);
  for (const wallZ of [north, south]) {
    const z = wallZ + (wallZ < 0 ? .1 : -.1);
    rod(details, [-7.8, .6, z], [.2, .6, z], .045, weatheredRed);
    for (const x of [-7.65, -5.15, -2.65, -.15]) {
      box(details, [.14, .035, .14], [x, .392, wallZ], galvanized);
      rod(details, [x, .41, wallZ], [x, .552, z], .023, galvanized);
    }
  }
  for (const x of RACK_X) {
    const [back, front] = RACK_FEET_Z;
    for (const z of [back, front]) {
      box(utilities, [.22, .12, .22], [x, .06, z], concrete);
      box(utilities, [.152, .028, .149], [x, .132, z], galvanized);
      box(utilities, [.085, 1.895, .087], [x, 1.066, z], steel);
    }
    box(utilities, [.15, .13, front - back + .105], [x, 2.01, (back + front) / 2], steel);
    for (const { y, z } of HEADERS) {
      const shoeHeight = y - .075 - 2.075;
      if (shoeHeight > .01) box(utilities, [.12, shoeHeight, .15], [x, 2.075 + shoeHeight / 2, z], galvanized);
      const clampBand = mesh(new THREE.TorusGeometry(.078, .007, 5, 20), galvanized, utilities, x, y, z);
      clampBand.rotation.y = Math.PI / 2;
    }
  }
  PUMP_X.forEach((x, i) => {
    box(details, [PUMP_PAD.width, .12, PUMP_PAD.depth], [x, .1, PUMP_PAD.z], concrete);
    const motor = mesh(new THREE.CylinderGeometry(.18, .18, .5, 24), signalBlue, details, x, .35, 2.55); motor.rotation.x = Math.PI / 2;
    for (const dx of [-.104, .104]) box(details, [.082, .073, .36], [x + dx, .196, 2.56], signalBlue);
    for (let z = 2.35; z < 2.8; z += .09) {
      const fin = mesh(new THREE.TorusGeometry(.19, .014, 4, 24), silver, details, x, .35, z);
      fin.castShadow = false;
    }
    // Motor shaft, pump casing and both connected branches.
    rod(details, [x, .35, 2.12], [x, .35, 2.36], .055, galvanized);
    mesh(new THREE.SphereGeometry(.17, 20, 12), signalBlue, details, x, .35, 2.12);
    box(details, [.24, .2, .25], [x, .23, 2.12], signalBlue);
    pipe(details, PUMP_INTAKE_ROUTES[i].points, PUMP_INTAKE_ROUTES[i].radius);
    flange(details, [VESSEL_X[i], .65, 1.86], [0, 0, 1]);
    pipe(details, PUMP_DISCHARGE_ROUTES[i].points, PUMP_DISCHARGE_ROUTES[i].radius);
    flange(details, [x + .26, .35, 2.12], [1, 0, 0], .11);
  });
  const truck = new THREE.Group(); truck.position.set(2.35, .1, -3.4); details.add(truck);
  box(truck, [.58, .25, 1.35], [0, .23, 0], white);
  box(truck, [.55, .26, .5], [0, .45, -.3], white);
  box(truck, [.48, .17, .025], [0, .49, -.56], glass);
  for (const x of [-.3, .3]) for (const z of [-.4, .43]) {
    const wheel = mesh(new THREE.CylinderGeometry(.14, .14, .09, 16), steel, truck, x, .14, z); wheel.rotation.z = Math.PI / 2;
  }
  // Perimeter mesh stays light: lines rather than hundreds of fence meshes.
  const fence = part(0, 0, .39, .57);
  const fencePoints = SITE_FENCE;
  const fenceSegments: number[] = [];
  const fenceMaterial = new THREE.LineBasicMaterial({ color: 0x8bafa0, transparent: true, opacity: .55 });
  for (let side = 0; side < fencePoints.length - 1; side++) {
    const [x1, z1] = fencePoints[side]; const [x2, z2] = fencePoints[side + 1];
    if (x1 === 3.7 && x2 === 1) continue;
    const count = Math.ceil(Math.hypot(x2 - x1, z2 - z1) / .6);
    for (let i = 0; i <= count; i++) {
      const x = THREE.MathUtils.lerp(x1, x2, i / count), z = THREE.MathUtils.lerp(z1, z2, i / count);
      fenceSegments.push(x, 0, z, x, 1, z);
    }
    for (const h of [.25, .55, .95]) fenceSegments.push(x1, h, z1, x2, h, z2);
  }
  const fenceGeometry = new THREE.BufferGeometry();
  fenceGeometry.setAttribute('position', new THREE.Float32BufferAttribute(fenceSegments, 3));
  fence.add(new THREE.LineSegments(fenceGeometry, fenceMaterial));

  // Camera masts and translucent fields of view appear during commissioning.
  const securityMaterials: THREE.Material[] = [];
  const glow = new THREE.MeshBasicMaterial({ color: 0xc3eb9a, transparent: true, opacity: .85 });
  securityMaterials.push(glow);
  const coverageMaterial = new THREE.MeshBasicMaterial({ color: 0xa3d988, transparent: true, opacity: .12, side: THREE.DoubleSide, depthWrite: false });
  securityMaterials.push(coverageMaterial);
  const networkMat = new THREE.LineBasicMaterial({ color: 0xc6ed9d, transparent: true, opacity: .8 });
  securityMaterials.push(networkMat);
  const cameraLocations = [[-7.8, 4.8, -.5], [7.83, -4.8, Math.PI * .8], [-7.59, -4.54, -Math.PI * .8], [.96, 5.05, .5]];
  cameraLocations.forEach(([x, z, direction]) => {
    const mast = new THREE.Group(); mast.position.set(x, .05, z); mast.rotation.y = direction; security.add(mast);
    box(mast, [.35, .08, .35], [0, .04, 0], concrete);
    rod(mast, [0, 0, 0], [0, 2.65, 0], .055, silver);
    rod(mast, [0, 2.55, 0], [.36, 2.55, 0], .045, silver);
    box(mast, [.32, .2, .55], [.36, 2.63, -.14], white);
    box(mast, [.23, .13, .025], [.36, 2.63, -.425], glass);
    mesh(new THREE.SphereGeometry(.055, 8, 6), glow, mast, .36, 2.65, -.45);
    const fan = new THREE.Shape(); fan.moveTo(.36, 0); fan.lineTo(-1.8, -3.7); fan.quadraticCurveTo(.36, -4.8, 2.5, -3.7); fan.closePath();
    const field = mesh(new THREE.ShapeGeometry(fan, 20), coverageMaterial, mast, 0, .02, 0);
    field.rotation.x = Math.PI / 2;
    line([[.36, .04, 0], [-1.8, .04, -3.7], [.36, .04, -4.25], [2.5, .04, -3.7], [.36, .04, 0]], mast, networkMat);
  });
  const perimeter = line(SITE_FENCE.map(([x, z]) => [x, .1, z]), security, networkMat);
  perimeter.renderOrder = 2;
  box(security, [.2, .85, .2], [3.65, .43, 5.4], white);
  box(security, [2.6, .08, .08], [2.35, .85, 5.4], green);
  for (let x = 1.2; x < 3.5; x += .45) box(security, [.2, .09, .09], [x, .85, 5.4], roof);
  // Fire detection is represented by warm-colored roof markers, not live data.
  const fireMat = new THREE.MeshBasicMaterial({ color: 0xe1b970, transparent: true, opacity: .9 });
  securityMaterials.push(fireMat);
  for (const [x, z] of [[4.8, -2.8], [6.4, -1.8]]) mesh(new THREE.SphereGeometry(.1, 12, 8), fireMat, security, x, 1.85, z);

  const instruments = new THREE.Group(); world.add(instruments);
  const gasWaves: THREE.Mesh[] = [];
  const gasMaterial = new THREE.MeshBasicMaterial({ color: 0xf1c584, transparent: true, opacity: .5, depthWrite: false });
  GAS_LOCATIONS.forEach(({ x, z }, index) => {
    const detector = new THREE.Group(); detector.position.set(x, .05, z); instruments.add(detector);
    box(detector, [.32, .09, .32], [0, .045, 0], concrete);
    rod(detector, [0, .08, 0], [0, 1.27, 0], .035, silver);
    box(detector, [.17, .24, .065], [0, 1.2, .045], steel);
    const head = mesh(new THREE.CylinderGeometry(.17, .17, .18, 32), signalBlue, detector, .05, 1.28, .12); head.rotation.x = Math.PI / 2;
    const display = mesh(new THREE.CircleGeometry(.125, 24), glass, detector, .05, 1.28, .217);
    display.castShadow = false;
    mesh(new THREE.CylinderGeometry(.07, .07, .24, 16), silver, detector, .05, 1.04, .12);
    for (let y = .94; y < 1.13; y += .04) {
      const grille = mesh(new THREE.TorusGeometry(.073, .009, 4, 16), steel, detector, .05, y, .12); grille.rotation.x = Math.PI / 2;
    }
    rod(detector, [.19, 1.28, .12], [.29, 1.28, .12], .035, silver);
    mesh(new THREE.SphereGeometry(.028, 8, 6), glow, detector, .08, 1.28, .228);
    for (let i = 0; i < 3; i++) {
      const wave = mesh(new THREE.TorusGeometry(.18, .008, 4, 32), gasMaterial, detector, .05, 1, .12);
      wave.rotation.x = Math.PI / 2; wave.castShadow = false; wave.userData.offset = i / 3 + index * .11; gasWaves.push(wave);
    }
  });

  const signals = new THREE.Group(); world.add(signals);
  const signalMaterial = new THREE.LineBasicMaterial({ color: 0x8ee3d5, transparent: true, opacity: .6, depthWrite: false });
  const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xdbffd3, transparent: true, opacity: 1, depthWrite: false });
  const sensorSources = [
    ...levelSensorPositions,
    ...GAS_LOCATIONS.map(({ x, z }) => new THREE.Vector3(x + .05, 1.33, z + .12)),
    ...cameraLocations.map(([x, z]) => new THREE.Vector3(x, 2.7, z)),
    new THREE.Vector3(4.8, 1.85, -2.8), new THREE.Vector3(6.4, 1.85, -1.8),
    new THREE.Vector3(3.65, .9, 5.4),
  ];
  const packets: ReturnType<typeof pipeCurve>[] = [];
  const signalSegments: number[] = [];
  if (sensorSources.length !== CHANNEL_COUNT) throw new Error('Control wall channel count must match the model');
  sensorSources.forEach((source, index) => {
    const high = Math.max(3.8, source.y + .4) + index * .035;
    const inletZ = CONTROL_POST.z - CONTROL_FRONT - .064;
    const path = pipeCurve([
      source.toArray(), [source.x, high, source.z], [1.4, high, source.z],
      [2.8, high, inletZ], [CONTROL_POST.x, high, inletZ],
      [CONTROL_POST.x, .13, inletZ], [CONTROL_POST.x, .13, CONTROL_POST.z + CONTROL_SCREEN_Z + .09],
    ], .2);
    const points = path.getPoints(12);
    for (let i = 1; i < points.length; i++) signalSegments.push(...points[i - 1].toArray(), ...points[i].toArray());
    packets.push(path);
  });
  const signalsGeometry = new THREE.BufferGeometry();
  signalsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(signalSegments, 3));
  signals.add(new THREE.LineSegments(signalsGeometry, signalMaterial));
  const beads = new THREE.InstancedMesh(new THREE.SphereGeometry(.055, 8, 6), packetMaterial, packets.length * 2);
  beads.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  beads.frustumCulled = false;
  signals.add(beads);
  const beadPosition = new THREE.Vector3(), beadMatrix = new THREE.Matrix4();
  const eye = new THREE.Vector3(), focus = new THREE.Vector3();
  const moving = new Set<THREE.Object3D>([...levelLiquids, ...levelWaves, ...gasWaves]);
  const meshCount = () => { let count = 0; scene.traverse(object => { if (object instanceof THREE.Mesh) count++; }); return count; };
  canvas.dataset.meshesBefore = String(meshCount());
  for (const root of [model, security, instruments]) batchStaticParts(root, moving);
  canvas.dataset.meshesAfter = String(meshCount());
  const planColor = new THREE.Color(0x10251f), daylightColor = new THREE.Color(0xc2cbd0);
  let shadowReady = false, indoors = false, lastScreenTime = -1, lastScreenProgress = -1;
  let width = 0, height = 0, resolution = 1, initialized = false;
  const resizeBuffer = () => {
    const maxPixels = width < 600 ? 580_000 : 1_650_000;
    const dpr = Math.min(window.devicePixelRatio || 1, width < 600 ? 1.3 : 1.4, Math.sqrt(maxPixels / (width * height))) * resolution;
    renderer.setDrawingBufferSize(width, height, dpr);
    renderer.domElement.dataset.renderScale = resolution.toFixed(2);
  };
  let frameNumber = 0;
  const render = (input: number, still: boolean, time = 0) => {
    if (disposed) return;
    const p = still ? 1 : clamp(input, 0, 1);
    const build = Math.min(1, p * 2.4);
    const inside = p > .982;
    if (inside !== indoors) {
      indoors = inside;
      for (const child of model.children) child.visible = child === controlRoom || !inside;
    }
    const solid = ramp(build, .12, .48);
    const daylight = ramp(p, .035, .18);
    skyMaterial.opacity = daylight; skyDome.visible = daylight > .001 && !inside;
    surroundings.visible = daylight > .001 && !inside;
    outsideMaterials.forEach(mat => {
      mat.opacity = daylight; mat.depthWrite = daylight > .98;
      if (mat.transparent !== (daylight < 1)) { mat.transparent = daylight < 1; mat.needsUpdate = true; }
    });
    fog.color.copy(planColor).lerp(daylightColor, daylight);
    fog.density = .009 * daylight;
    plan.material.opacity = 1 - ramp(p, .07, .195);
    plan.mesh.visible = plan.material.opacity > .001;
    model.visible = solid > .001;
    materials.forEach(mat => {
      mat.opacity = solid; mat.depthWrite = solid > .98;
      const transparent = solid < 1 || mat === tankShells[3];
      if (mat.transparent !== transparent) { mat.transparent = transparent; mat.needsUpdate = true; }
    });
    wireMaterial.opacity = .72 * (1 - ramp(build, .28, .6));
    wireMaterial.visible = wireMaterial.opacity > .001;
    groundWire.opacity = .34 * (1 - ramp(build, .15, .6));
    slab.visible = solid > .01 && !inside;
    apron.visible = slab.visible;
    growing.forEach(({ group, start, end }) => { group.scale.y = Math.max(.001, ramp(build, start, end)); });
    const systems = ramp(build, .57, .79);
    security.visible = systems > .01 && !inside;
    security.scale.y = Math.max(.001, systems);
    securityMaterials.forEach(mat => { mat.opacity = mat === coverageMaterial ? systems * .07 : mat === fireMat ? systems * .9 : systems * .6; });
    instruments.visible = systems > .9 && !inside;
    const levelFocus = still ? 0 : ramp(p, .33, .39) * (1 - ramp(p, .52, .56));
    tankShells[3].opacity = solid * (1 - levelFocus * .82);
    tankShells[3].depthWrite = levelFocus < .1;
    const liquid = levelLiquids[3];
    liquid.visible = levelFocus > .05;
    if (liquid.visible) {
      const level = demoTelemetry(p).levels[3] / 100 * tanks[3][3];
      liquid.scale.y = level;
      liquid.position.y = .16 + level / 2;
    }
    levelWaves.forEach(wave => {
      wave.visible = wave.userData.tank === 3 && levelFocus > .1;
      if (!wave.visible) return;
      const cycle = (p * 24 + time * .42 + wave.userData.offset) % 1;
      wave.position.y = 2.65 - cycle * 1.05;
      wave.scale.setScalar(.4 + cycle * 3.4);
    });
    radarMaterial.opacity = levelFocus * .8;
    const gasFocus = still ? 0 : ramp(p, .53, .58) * (1 - ramp(p, .7, .74));
    gasWaves.forEach(wave => {
      wave.visible = gasFocus > .05;
      if (!wave.visible) return;
      const cycle = (p * 27 + time * .36 + wave.userData.offset) % 1;
      wave.scale.setScalar(.5 + cycle * 3.5);
      wave.position.y = .95 + cycle * .15;
    });
    gasMaterial.opacity = gasFocus * .35;
    const linked = ramp(p, .69, .77);
    signals.visible = linked > .01 && !inside;
    signalMaterial.opacity = linked * .45 * (1 - ramp(p, .88, 1) * .8);
    packetMaterial.opacity = linked * (1 - ramp(p, .91, 1));
    beads.visible = signals.visible && packetMaterial.opacity > .01;
    if (beads.visible) {
      packets.forEach((path, index) => {
        for (let j = 0; j < 2; j++) {
          path.getPoint((p * 9 + time * .17 + index / packets.length + j * .5) % 1, beadPosition);
          beads.setMatrixAt(index * 2 + j, beadMatrix.makeTranslation(beadPosition.x, beadPosition.y, beadPosition.z));
        }
      });
      beads.instanceMatrix.needsUpdate = true;
    }
    const opening = controlDoorOpening(p);
    fenceMaterial.opacity = .55 * (1 - .84 * Math.max(gasFocus, ramp(p, .87, .91)));
    doorLeaf.rotation.y = CONTROL_DOOR.angle * opening;
    sun.shadow.intensity = ramp(p, .23, .28);
    if (!shadowReady && sun.shadow.intensity > 0 && !inside && renderer.shadowMap.enabled) {
      renderer.shadowMap.needsUpdate = true;
      shadowReady = true;
    }
    if (p > .87 && p !== lastScreenProgress && (time - lastScreenTime > .085 || p === 1 || time === 0)) {
      screens.forEach(screen => screen.update(p, still ? 0 : time));
      lastScreenProgress = p;
      lastScreenTime = time;
    }
    const framing = sampleFacilityCamera(p, camera.aspect, eye, focus);
    camera.position.copy(eye);
    camera.fov = framing.fov;
    flightOrientation(p, camera.position, focus, camera.quaternion);
    // Reserve a small left margin for the story without shrinking the world.
    camera.setViewOffset(canvas.width, canvas.height, canvas.width * framing.viewX, canvas.height * framing.viewY, canvas.width, canvas.height);
    renderer.render(scene, camera);
    canvas.dataset.frames = String(++frameNumber);
    canvas.dataset.drawCalls = String(renderer.info.render.calls);
    canvas.dataset.triangles = String(renderer.info.render.triangles);
    canvas.dataset.phase = ['plan', 'flyover', 'levels', 'gas', 'signals', 'control'][chapterAt(p)];
  };
  return {
    render,
    async prepare(onProgress) {
      await assets;
      if (disposed) return;
      if (assetError) throw new Error('Не удалось загрузить материалы сцены');
      await Promise.all(textures.flatMap(texture => texture.image instanceof HTMLImageElement ? [texture.image.decode()] : []));
      const stages = [.10, .23, .30, .45, .64, .81, .92, 1];
      try {
        for (const [index, stage] of stages.entries()) {
          await new Promise(resolve => setTimeout(resolve, 0));
          if (disposed) return;
          // Компилируем материалы в том же режиме вывода, что и при пролёте.
          renderer.setViewport(0, 0, 80, 80);
          render(stage, false);
          onProgress((index + 1) / stages.length);
        }
      } finally {
        if (!disposed) renderer.setViewport(0, 0, width, height);
      }
    },
    resize(nextWidth, nextHeight) {
      if (disposed || !nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return;
      width = nextWidth;
      height = nextHeight;
      if (!initialized) {
        renderer.shadowMap.enabled = width >= 600;
        initialized = true;
      }
      resizeBuffer();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    },
    adjustResolution(scale) {
      if (disposed || !width || !height || scale === resolution) return;
      resolution = scale;
      resizeBuffer();
    },
    dispose() {
      disposed = true;
      const geometries = new Set<THREE.BufferGeometry>();
      const allMaterials = new Set<THREE.Material>();
      scene.traverse(object => {
        const drawable = object as THREE.Mesh;
        if (drawable.geometry) geometries.add(drawable.geometry);
        if (drawable.material) (Array.isArray(drawable.material) ? drawable.material : [drawable.material]).forEach(mat => allMaterials.add(mat));
      });
      geometries.forEach(geometry => geometry.dispose()); allMaterials.forEach(mat => mat.dispose());
      textures.forEach(texture => texture.dispose()); sky?.dispose();
      sun.shadow.map?.dispose(); renderer.dispose(); renderer.forceContextLoss();
    },
  };
}
