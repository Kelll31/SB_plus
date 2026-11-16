import { CatmullRomCurve3, CubicBezierCurve3, Matrix4, Quaternion, Vector3 } from 'three';
import { CAMERA_STOPS, clampProgress } from './facilityTour';
import { CONTROL_ENTRY_AT, CONTROL_FRONT, CONTROL_POST } from './facilityLayout';

const flight = new CatmullRomCurve3(CAMERA_STOPS.map(stop => new Vector3(...stop.position)), false, 'catmullrom', .25);
const attention = new CatmullRomCurve3(CAMERA_STOPS.map(stop => new Vector3(...stop.target)), false, 'catmullrom', .2);
const orientationMatrix = new Matrix4(), orientationUp = new Vector3();
const overview = CAMERA_STOPS[4], final = CAMERA_STOPS[5];
const doorwayAt = .906;
const threshold = new Vector3(CONTROL_POST.x, 1.66, CONTROL_POST.z + CONTROL_FRONT + 1.72);
const overviewEye = new Vector3(...overview.position), overviewFocus = new Vector3(...overview.target);
const finalEye = new Vector3(...final.position), finalFocus = new Vector3(...final.target);
const entryFocus = new Vector3(CONTROL_POST.x, 1.51, CONTROL_POST.z - .42);
const entrySpeed = new Vector3(0, 0, -33);

// Сохраняем направление и скорость на стыке с обзором и на подходе к двери.
const priorVelocity = (curve: CatmullRomCurve3, endpoint: Vector3) => endpoint.clone()
  .sub(curve.getPoint(.8 - .0001))
  .divideScalar(.0001 * 5 * (overview.at - CAMERA_STOPS[3].at));
const approachTime = doorwayAt - CONTROL_ENTRY_AT;
const approach = new CubicBezierCurve3(
  overviewEye,
  overviewEye.clone().addScaledVector(priorVelocity(flight, overviewEye), approachTime / 3),
  threshold.clone().addScaledVector(entrySpeed, -approachTime / 3),
  threshold,
);
const approachFocus = new CubicBezierCurve3(
  overviewFocus,
  overviewFocus.clone().addScaledVector(priorVelocity(attention, overviewFocus), approachTime / 3),
  entryFocus,
  entryFocus,
);
const intoRoom = new CubicBezierCurve3(
  threshold,
  threshold.clone().addScaledVector(entrySpeed, (1 - doorwayAt) / 3),
  finalEye,
  finalEye,
);

function smoothStep(t: number) {
  const value = Math.min(1, Math.max(0, t));
  return value * value * (3 - 2 * value);
}

/** Сохраняем север сверху при выходе из вертикального вида: world-up здесь вырождается. */
export function flightOrientation(progress: number, eye: Vector3, focus: Vector3, output = new Quaternion()) {
  const t = Math.min(1, clampProgress(progress) / .23);
  const blend = t * t * (3 - 2 * t);
  orientationUp.set(0, blend, -(1 - blend)).normalize();
  orientationMatrix.lookAt(eye, focus, orientationUp);
  return output.setFromRotationMatrix(orientationMatrix);
}

export function sampleFlight(input: number, eye = new Vector3(), focus = new Vector3()) {
  const progress = clampProgress(input);
  if (progress >= CONTROL_ENTRY_AT) {
    if (progress < doorwayAt) {
      const t = (progress - CONTROL_ENTRY_AT) / approachTime;
      approach.getPoint(t, eye);
      approachFocus.getPoint(t, focus);
    } else {
      const t = (progress - doorwayAt) / (1 - doorwayAt);
      intoRoom.getPoint(t, eye);
      focus.copy(entryFocus).lerp(finalFocus, smoothStep(t));
    }
    return { eye, focus };
  }
  let segment = CAMERA_STOPS.findIndex((stop, index) => index < CAMERA_STOPS.length - 1 && progress < CAMERA_STOPS[index + 1].at);
  if (segment < 0) segment = CAMERA_STOPS.length - 2;
  const local = Math.min(1, Math.max(0, (progress - CAMERA_STOPS[segment].at) / (CAMERA_STOPS[segment + 1].at - CAMERA_STOPS[segment].at)));
  const t = (segment + local) / (CAMERA_STOPS.length - 1);
  flight.getPoint(t, eye); attention.getPoint(t, focus);
  // Clear the control-room roof on the approach from tanks to the gas detectors.
  // Zero slope at both ends preserves the close-up positions and smooth motion.
  if (segment === 2) eye.y += Math.sin(Math.PI * local) ** 2 * 1.8;
  return { eye, focus };
}

/** Меняем угол обзора внутри, не двигая камеру за стены ради формата экрана. */
export function sampleFacilityCamera(progress: number, aspect: number, eye = new Vector3(), focus = new Vector3()) {
  sampleFlight(progress, eye, focus);
  const portrait = aspect < .85;
  const planFraming = portrait ? 1 - smoothStep((progress - .035) / .195) : 0;
  const screenDistance = Math.max(1, 1.2 / aspect);
  const distance = Math.min(1.65, screenDistance);
  const approachBlend = 1 - smoothStep((progress - .72) / .09);
  const portraitPlanDistance = Math.max(1, 1.11 / aspect);
  const compensation = 1 + (distance - 1) * approachBlend + Math.max(0, portraitPlanDistance - distance) * planFraming;
  eye.sub(focus).multiplyScalar(compensation).add(focus);

  const inside = smoothStep((progress - .921) / .079);
  const finalWidth = portrait ? 4.08 : aspect >= 1.2 ? 5.42 : 4.6;
  const finalDistance = finalEye.distanceTo(finalFocus);
  const finalFov = Math.min(116, Math.max(47, Math.atan(finalWidth / (2 * finalDistance * aspect)) * 360 / Math.PI));
  const fov = 48 + (finalFov - 48) * inside;
  return { eye, focus, fov, viewX: aspect >= 1.2 ? -.1 : 0, viewY: .08 * planFraming - .012 * inside };
}
