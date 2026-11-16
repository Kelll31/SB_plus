import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Box3, CylinderGeometry, Mesh, MeshBasicMaterial, Raycaster, Vector3 } from 'three';
import { flightOrientation, sampleFacilityCamera, sampleFlight } from './facilityFlightPath';
import { pipeCurve } from './facilityGeometry';
import {
  CONTROL_DOOR, CONTROL_ENTRY_AT, CONTROL_FRONT, CONTROL_FURNITURE, CONTROL_POST, CONTROL_SHELL,
  GAS_LOCATIONS, HALL_ROOF, HEADERS, HEADER_ROUTES, PROCESS_HALL, PUMP_DISCHARGE_ROUTES,
  PUMP_INTAKE_ROUTES, PUMP_PAD, PUMP_X, RACK_FEET_Z, RACK_X, ROAD, SITE_TANKS,
  SITE_FENCE, TANK_BUND, VESSEL_RADIUS, VESSEL_SUPPLY_ROUTES, VESSEL_X, VESSEL_Z, controlDoorOpening, roofHeightAt, tankLadderDirection, tankOutletDirection,
} from './facilityLayout';
import { CAMERA_STOPS, CHANNEL_COUNT, chapterAt, clampProgress, demoTelemetry, tourChapters } from './facilityTour';
import { tankAccessLayout } from './facilityTankAccess';

test('each chapter button lands on its own chapter and exact camera stop', () => {
  tourChapters.forEach((chapter, index) => {
    assert.equal(chapterAt(chapter.progress), index);
    assert.equal(CAMERA_STOPS[index].at, chapter.progress);
  });
});

test('invalid and out-of-range progress cannot corrupt scene or telemetry', () => {
  for (const p of [NaN, Infinity, -Infinity, -20, 20]) {
    assert.ok(clampProgress(p) >= 0 && clampProgress(p) <= 1);
    assert.ok(chapterAt(p) >= 0 && chapterAt(p) < tourChapters.length);
    assert.ok(demoTelemetry(p).levels.every(Number.isFinite));
  }
});

test('readouts are reversible and remain valid for the complete flight', () => {
  const forward = Array.from({ length: 201 }, (_, i) => demoTelemetry(i / 200));
  for (let i = 200; i >= 0; i--) {
    const values = demoTelemetry(i / 200);
    assert.deepEqual(values, forward[i]);
    assert.equal(values.levels.length, 4); assert.equal(values.gases.length, 3);
    assert.ok(values.levels.every(value => value >= 0 && value <= 100));
    assert.ok(values.gases.every(value => value >= 0 && value < 1));
  }
  assert.notDeepEqual(demoTelemetry(.36), demoTelemetry(.52));
});

test('control wall accounts for all fourteen modeled channels', () => {
  assert.equal(CHANNEL_COUNT, 4 + 3 + 4 + 2 + 1);
});

test('flight stays outside tanks and the closed control-room roof', () => {
  const post = footprint(CONTROL_POST, CONTROL_POST.height + .16).expandByScalar(.08);
  for (let i = 0; i <= 1000; i++) {
    const t = i / 1000;
    const { eye } = sampleFlight(t);
    assert.ok(eye.y > .15);
    for (const [x, z, radius, height] of SITE_TANKS) {
      assert.ok(eye.y > height + .4 || Math.hypot(eye.x - x, eye.z - z) > radius + .15, `camera enters tank at ${t}`);
    }
    if (t < CONTROL_ENTRY_AT) assert.ok(!post.containsPoint(eye), `camera enters closed room at ${t}`);
  }
});

test('gas close-up has a clear line of sight past the control room', () => {
  const stop = CAMERA_STOPS[3];
  const eye = new Vector3(...stop.position), focus = new Vector3(...stop.target);
  const post = footprint(CONTROL_POST, CONTROL_POST.height + .16);
  for (let i = 0; i <= 100; i++) {
    const point = eye.clone().lerp(focus, i / 100);
    assert.ok(!post.containsPoint(point));
  }
});

test('return to the vertical plan has no camera orientation discontinuity', () => {
  let previous = flightOrientation(0, sampleFlight(0).eye, sampleFlight(0).focus);
  for (let i = 1; i <= 1000; i++) {
    const p = i / 1000, { eye, focus } = sampleFlight(p);
    const next = flightOrientation(p, eye, focus);
    assert.ok(previous.angleTo(next) < .08, `camera snaps at ${p}`);
    previous = next;
  }
});

test('both tank rows connect from the inward side into the central corridor', () => {
  SITE_TANKS.forEach(([, z, radius], index) => {
    const out = tankOutletDirection(index), header = HEADERS[index < 2 ? 0 : 1].z;
    const shell = z + out * radius, outlet = z + out * (radius + .44);
    assert.ok((header - shell) * out > 0, `outlet points away from header on tank ${index + 1}`);
    assert.ok((header - outlet) * out > 0, 'outlet must stop before its header');
  });
});

function footprint({ x, z, width, depth }: { x: number; z: number; width: number; depth: number }, height: number) {
  return new Box3(new Vector3(x - width / 2, 0, z - depth / 2), new Vector3(x + width / 2, height, z + depth / 2));
}

const routeSamples = ({ points }: { points: number[][] }) => {
  const curve = pipeCurve(points);
  return curve.getSpacedPoints(Math.ceil(curve.getLength() / .018));
};

test('post including roof and entrance stays clear of the road, pump pads and fence', () => {
  const roof = footprint({ ...CONTROL_POST, width: CONTROL_POST.width + .16, depth: CONTROL_POST.depth + .16 }, CONTROL_POST.height + .12);
  const road = footprint(ROAD, 3);
  const entrance = footprint({ x: CONTROL_POST.x, z: CONTROL_POST.z + CONTROL_FRONT + .238, width: 1.48, depth: .48 }, .17);
  assert.ok(!roof.intersectsBox(road) && !entrance.intersectsBox(road));
  assert.ok(roof.max.x < 8.5 && roof.min.x > 3.7 && roof.max.z < 7.89 && entrance.max.z < 7.89);
  for (const x of PUMP_X) {
    const pad = footprint({ x, ...PUMP_PAD }, 3);
    assert.ok(!roof.intersectsBox(pad), 'roof overhangs a pump pad');
  }
});

test('camera enters through the open doorway with clearance from walls, door, fence and furniture', () => {
  const origin = new Vector3(CONTROL_POST.x, .04, CONTROL_POST.z);
  const localBox = (size: number[], at: number[]) => new Box3().setFromCenterAndSize(
    new Vector3(at[0], at[1], at[2]).add(origin), new Vector3(size[0], size[1], size[2]),
  );
  const obstacles = [...CONTROL_SHELL, ...CONTROL_FURNITURE].map(part => ({
    name: part.name, box: localBox(part.size, part.at),
  }));
  for (let i = 0; i < SITE_FENCE.length - 1; i++) {
    const [x1, z1] = SITE_FENCE[i], [x2, z2] = SITE_FENCE[i + 1];
    if (x1 === 3.7 && x2 === 1) continue;
    obstacles.push({ name: 'ограда', box: new Box3(
      new Vector3(Math.min(x1, x2) - .025, .04, Math.min(z1, z2) - .025),
      new Vector3(Math.max(x1, x2) + .025, 1.04, Math.max(z1, z2) + .025),
    ) });
  }
  const sampleAspects = [.40, .462, .75, 1.1, 1.51, 1.95, 2.4];
  for (const aspect of sampleAspects) {
    let previousZ = Infinity, crossings = 0;
    for (let i = 0; i <= 1000; i++) {
      const p = CONTROL_ENTRY_AT + (1 - CONTROL_ENTRY_AT) * i / 1000;
      const { eye, fov } = sampleFacilityCamera(p, aspect);
      assert.ok(fov <= 116 && fov >= 47);
      for (const { name, box } of obstacles) {
        assert.ok(box.distanceToPoint(eye) > .17, `${name} intersects the camera at ${p}, aspect ${aspect}`);
      }
      const hinge = origin.clone().add(new Vector3(CONTROL_DOOR.hingeX, 0, CONTROL_DOOR.hingeZ));
      const leaf = new Box3(new Vector3(-CONTROL_DOOR.width, .16, -.075), new Vector3(0, 2.28, .075));
      const relativeEye = eye.clone().sub(hinge).applyAxisAngle(new Vector3(0, 1, 0), -CONTROL_DOOR.angle * controlDoorOpening(p));
      assert.ok(leaf.distanceToPoint(relativeEye) > .17, `camera touches the moving door at ${p}`);
      const localZ = eye.z - CONTROL_POST.z;
      if (previousZ >= CONTROL_FRONT && localZ < CONTROL_FRONT) {
        crossings++;
        assert.ok(Math.abs(eye.x - CONTROL_POST.x) < .02 && eye.y < CONTROL_DOOR.top - .17);
        assert.equal(controlDoorOpening(p), 1);
      }
      previousZ = localZ;
    }
    assert.equal(crossings, 1);
    const final = sampleFacilityCamera(1, aspect);
    assert.ok(final.eye.z < CONTROL_POST.z + CONTROL_FRONT - .6);
  }
});

test('tank access is on the outside, with rungs and safety cage ending below the roof landing', () => {
  SITE_TANKS.forEach(([, z, radius, height], index) => {
    const ladder = tankAccessLayout(radius, height);
    assert.equal(tankLadderDirection(index), index < 2 ? -1 : 1);
    assert.ok(ladder.lastRung < ladder.landingTop && ladder.highestHoop < ladder.landingTop);
    assert.ok(ladder.railTop > ladder.landingTop);
    const endZ = z + tankLadderDirection(index) * ladder.outermostDepth;
    assert.ok(endZ > TANK_BUND.north + .07 && endZ < TANK_BUND.south - .07, 'ladder protrudes into the bund wall');
  });
});

test('hinged door leaf clears the solid facade and operator chair throughout the swing', () => {
  const obstacles = [...CONTROL_SHELL.filter(part => part.name === 'стена у входа'), CONTROL_FURNITURE[3]].map(({ size, at }) => new Box3().setFromCenterAndSize(new Vector3(...at), new Vector3(...size)));
  const hinge = new Vector3(CONTROL_DOOR.hingeX, 0, CONTROL_DOOR.hingeZ);
  const pivot = new Vector3(0, 1, 0);
  for (let frame = 0; frame <= 100; frame++) {
    const angle = frame / 100 * CONTROL_DOOR.angle;
    const leaf = new Box3();
    for (const x of [-(CONTROL_DOOR.width - .023), 0]) for (const z of [-.024, .024]) {
      for (const y of [.187, 2.267]) leaf.expandByPoint(new Vector3(x, y, z).applyAxisAngle(pivot, angle).add(hinge));
    }
    assert.ok(obstacles.every(obstacle => !obstacle.intersectsBox(leaf)), `door intersects facade or furniture at ${frame}%`);
  }
});

test('the pipes are horizontal where their saddles reach the bridge', () => {
  for (let index = 0; index < HEADER_ROUTES.length; index++) {
    const route = HEADER_ROUTES[index];
    const samples = routeSamples(route);
    for (const x of RACK_X) {
      const supported = samples.filter(point => Math.abs(point.x - x) < .05);
      assert.ok(supported.length > 0 && supported.every(point => Math.abs(point.y - HEADERS[index].y) < .001));
    }
  }
});

test('all gas detector bases, posts and heads clear the pipes and adjacent structures', () => {
  const routes = [...HEADER_ROUTES, ...VESSEL_SUPPLY_ROUTES, ...PUMP_INTAKE_ROUTES, ...PUMP_DISCHARGE_ROUTES];
  const pipes = routes.map(route => ({ radius: route.radius, samples: routeSamples(route) }));
  const rackBases = RACK_X.flatMap(x => RACK_FEET_Z.map(z => footprint({ x, z, width: .22, depth: .22 }, .16)));
  GAS_LOCATIONS.forEach(({ x, z }, index) => {
    const base = footprint({ x, z, width: .32, depth: .32 }, .15);
    const mast = footprint({ x, z, width: .08, depth: .08 }, 1.33);
    const head = new Box3(new Vector3(x - .12, .96, z + .027), new Vector3(x + .325, 1.49, z + .25));
    assert.ok(head.max.x < 8.5);
    for (const part of [base, mast, head]) {
      assert.ok(!part.intersectsBox(footprint(ROAD, .1)));
      assert.ok(!part.intersectsBox(footprint(PROCESS_HALL, 1.7)));
      assert.ok(!part.intersectsBox(footprint(CONTROL_POST, CONTROL_POST.height)));
      assert.ok(rackBases.every(rack => !part.intersectsBox(rack)));
      for (const cx of VESSEL_X) {
        const nearestX = Math.max(part.min.x, Math.min(cx, part.max.x));
        const nearestZ = Math.max(part.min.z, Math.min(VESSEL_Z, part.max.z));
        assert.ok(Math.hypot(cx - nearestX, VESSEL_Z - nearestZ) > VESSEL_RADIUS, `detector ${index + 1} overlaps a vessel`);
      }
      for (const pipe of pipes) assert.ok(pipe.samples.every(p => part.distanceToPoint(p) > pipe.radius + .01), `detector ${index + 1} overlaps a pipe`);
    }
  });
});

test('supply and return pipe crossings have a vertical gap', () => {
  const checkClearance = (a: typeof HEADER_ROUTES[number], b: typeof HEADER_ROUTES[number]) => {
    const other = routeSamples(b);
    const clearance = a.radius + b.radius + .02;
    assert.ok(routeSamples(a).every(p => other.every(q => p.distanceToSquared(q) > clearance ** 2)));
  };
  checkClearance(HEADER_ROUTES[0], HEADER_ROUTES[1]);
  for (const supply of VESSEL_SUPPLY_ROUTES) {
    checkClearance(supply, HEADER_ROUTES[1]);
    for (const discharge of PUMP_DISCHARGE_ROUTES) checkClearance(supply, discharge);
  }
});

test('rack posts and pipe runs stay clear of the production building and service road', () => {
  const building = footprint({ ...PROCESS_HALL, ...HALL_ROOF }, HALL_ROOF.height + .1);
  const road = footprint(ROAD, .16);
  for (const x of RACK_X) for (const z of RACK_FEET_Z) {
    const support = footprint({ x, z, width: .22, depth: .22 }, HEADERS[0].y);
    assert.ok(!building.intersectsBox(support), 'support inside the production building');
    assert.ok(!road.intersectsBox(support), 'support in the service road');
  }
  for (const pipe of [...HEADER_ROUTES, ...VESSEL_SUPPLY_ROUTES, ...PUMP_DISCHARGE_ROUTES]) {
    assert.ok(routeSamples(pipe).every(p => building.distanceToPoint(p) > pipe.radius), 'pipe through the production building');
  }
});

test('rail bases meet the actual conical roof surface on every tank', () => {
  for (const [, , radius, height] of SITE_TANKS) {
    const geometry = new CylinderGeometry(.16, radius + .025, .25, 96);
    const material = new MeshBasicMaterial(), roof = new Mesh(geometry, material);
    roof.position.y = height + .28; roof.updateMatrixWorld();
    for (let i = 0; i < 16; i++) {
      const angle = i * Math.PI / 8, r = radius * .88;
      const ray = new Raycaster(new Vector3(Math.cos(angle) * r, height + 1, Math.sin(angle) * r), new Vector3(0, -1, 0));
      const hit = ray.intersectObject(roof)[0];
      assert.ok(hit);
      assert.ok(Math.abs(hit.point.y - roofHeightAt(height, radius, r)) < .002, 'rail base floats above roof');
    }
    geometry.dispose(); material.dispose();
  }
});

test('rounded pipe route preserves connections and tangent continuity', () => {
  const curve = pipeCurve([[-7, .5, -.65], [1.05, .5, -.65], [1.05, 2.15, -.65], [7.8, 2.15, -.65]]);
  assert.ok(curve.getPoint(0).distanceTo(new Vector3(-7, .5, -.65)) < 1e-8);
  assert.ok(curve.getPoint(1).distanceTo(new Vector3(7.8, 2.15, -.65)) < 1e-8);
  for (let i = 1; i < curve.curves.length; i++) {
    const before = curve.curves[i - 1], after = curve.curves[i];
    assert.ok(before.getPoint(1).distanceTo(after.getPoint(0)) < 1e-8, 'gap in pipe');
    assert.ok(before.getTangent(1).dot(after.getTangent(0)) > .999, 'sharp corner in pipe');
  }
});
