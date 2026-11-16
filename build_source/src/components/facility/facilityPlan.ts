import * as THREE from 'three';
import { CONTROL_APRON, CONTROL_POST, GAS_LOCATIONS, HEADER_RISE_X, HEADERS, PROCESS_HALL, PUMP_PAD, PUMP_X, ROAD, SITE_FENCE, SITE_TANKS, TANK_BUND, VESSEL_RADIUS, VESSEL_X, VESSEL_Z, tankLadderDirection, tankOutletDirection } from './facilityLayout';

export function createSitePlan() {
  const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1536;
  const ctx = canvas.getContext('2d')!;
  const scale = 76, ox = 1024, oy = 768;
  const x = (n: number) => ox + n * scale, z = (n: number) => oy + n * scale;
  ctx.fillStyle = '#102922'; ctx.fillRect(0, 0, 2048, 1536);
  const path = (points: number[][], color = '#96b7a3', width = 2, dash: number[] = []) => {
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash); ctx.beginPath();
    points.forEach((p, i) => { if (i) ctx.lineTo(x(p[0]), z(p[1])); else ctx.moveTo(x(p[0]), z(p[1])); }); ctx.stroke(); ctx.setLineDash([]);
  };
  const rect = (cx: number, cz: number, w: number, d: number, color: string, fill?: string) => {
    if (fill) { ctx.fillStyle = fill; ctx.fillRect(x(cx - w / 2), z(cz - d / 2), w * scale, d * scale); }
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.strokeRect(x(cx - w / 2), z(cz - d / 2), w * scale, d * scale);
  };
  const text = (label: string, cx: number, cz: number, size = 22, color = '#c9dccb', align: CanvasTextAlign = 'center') => {
    ctx.fillStyle = color; ctx.font = `500 ${size}px Arial`; ctx.textAlign = align; ctx.fillText(label, x(cx), z(cz));
  };
  for (let i = -12; i <= 12; i++) path([[i, -8.8], [i, 8.8]], '#7d9d8d13', 1);
  for (let i = -8; i <= 8; i++) path([[-12.8, i], [12.8, i]], '#7d9d8d13', 1);
  rect(0, 0, 18, 12, '#b6ceb3');
  rect(CONTROL_APRON.x, CONTROL_APRON.z, CONTROL_APRON.width, CONTROL_APRON.depth, '#b6ceb3', '#19332b');
  const { west, east, north, south } = TANK_BUND;
  rect((west + east) / 2, (north + south) / 2, east - west, south - north, '#8fa59a', '#1b342b');
  // Та же внутренняя дорога и сооружения, что в объёмной сцене.
  rect(ROAD.x, ROAD.z, ROAD.width, ROAD.depth, '#536d61', '#263d33');
  path([[ROAD.x, -ROAD.depth / 2], [ROAD.x, ROAD.depth / 2]], '#c2cdb494', 2, [18, 17]);
  SITE_TANKS.forEach(([cx, cz, radius], index) => {
    ctx.fillStyle = '#29473a'; ctx.strokeStyle = '#c3d5ba'; ctx.lineWidth = 2.8;
    ctx.beginPath(); ctx.arc(x(cx), z(cz), radius * scale, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#799d88'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x(cx), z(cz), radius * scale * .88, 0, Math.PI * 2); ctx.stroke();
    path([[cx - radius - .18, cz], [cx + radius + .18, cz]], '#78998a88', 1, [12, 6]);
    path([[cx, cz - radius - .18], [cx, cz + radius + .18]], '#78998a88', 1, [12, 6]);
    text(`РВС-0${index + 1}`, cx, cz + .1, 25);
    const sign = tankOutletDirection(index);
    path([[cx, cz + sign * radius], [cx, HEADERS[index < 2 ? 0 : 1].z]], '#c3b38a', 4);
    const ladder = tankLadderDirection(index);
    rect(cx, cz + ladder * (radius + .10), .44, .28, '#a7c1ad', '#315043');
  });
  rect(PROCESS_HALL.x, PROCESS_HALL.z, PROCESS_HALL.width, PROCESS_HALL.depth, '#a9c0b0', '#304b3e');
  for (let dx = 4; dx < 7.4; dx += .28) {
    path([[dx, PROCESS_HALL.z - PROCESS_HALL.depth / 2], [dx, PROCESS_HALL.z + PROCESS_HALL.depth / 2]], '#a3b8a340', 1);
  }
  text('ПРОИЗВОДСТВЕННЫЙ', PROCESS_HALL.x, PROCESS_HALL.z - .15, 17);
  text('КОРПУС', PROCESS_HALL.x, PROCESS_HALL.z + .2, 17);
  for (const header of HEADERS) {
    path([[-7, header.z], [HEADER_RISE_X, header.z]], '#c3b38a', 4);
    path([[HEADER_RISE_X, header.z], [7.8, header.z]], '#c3b38a', 3, [8, 5]);
  }
  rect(CONTROL_POST.x, CONTROL_POST.z, CONTROL_POST.width, CONTROL_POST.depth, '#b3d1b6', '#29493a');
  text('ПОСТ КОНТРОЛЯ', CONTROL_POST.x, CONTROL_POST.z + .08, 21);
  for (const cx of VESSEL_X) {
    path([[cx, HEADERS[0].z], [cx, VESSEL_Z - VESSEL_RADIUS]], '#c3b38aa3', 2);
    ctx.strokeStyle = '#a1b9a9'; ctx.beginPath(); ctx.arc(x(cx), z(VESSEL_Z), VESSEL_RADIUS * scale, 0, Math.PI * 2); ctx.stroke();
  }
  for (const cx of PUMP_X) rect(cx, PUMP_PAD.z, PUMP_PAD.width, PUMP_PAD.depth, '#a1b9a9', '#294436');
  GAS_LOCATIONS.forEach((location, index) => {
    ctx.fillStyle = '#e2bd84'; ctx.beginPath(); ctx.arc(x(location.x), z(location.z), 4.8, 0, Math.PI * 2); ctx.fill();
    if (index === 2) text('Г-03', location.x + .08, location.z - .18, 14, '#e2bd84');
  });
  text('НАСОСНАЯ', 7.84, 2.73, 14);
  path(SITE_FENCE.slice(0, 5), '#789888', 2, [6, 5]);
  path(SITE_FENCE.slice(5), '#789888', 2, [6, 5]);
  path([[2.35, 7], [2.35, 5.9]], '#d2dfc1', 4); path([[2.05, 6.2], [2.35, 5.9], [2.65, 6.2]], '#d2dfc1', 3);
  text('ВЪЕЗД', 2.35, 7.4, 19);
  // Размерные линии обозначают границы схемы, без вымышленных размеров.
  path([[-9, -6.6], [9, -6.6]], '#718e7e');
  for (const cx of [-9, 9]) path([[cx, -6.3], [cx, -6.9]], '#aac3ac');
  text('РЕЗЕРВУАРНЫЙ ПАРК', -3.8, -5.4, 21, '#d1ddba');
  text('С', 11.4, -6.7, 24); path([[11.4, -5.4], [11.4, -6.4]], '#b8d1b7', 3);
  path([[11.1, -6.05], [11.4, -6.4], [11.7, -6.05]], '#b8d1b7', 3);
  path([[-9, 7.5], [-7.9, 7.5]], '#c3b38a', 4); text('Трубопроводы', -7.7, 7.57, 17, '#aac3ac', 'left');
  path([[-4.6, 7.5], [-3.5, 7.5]], '#789888', 2, [6, 5]); text('Ограждение', -3.3, 7.57, 17, '#aac3ac', 'left');
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, toneMapped: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2048 / scale, 1536 / scale), material);
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = .04;
  return { mesh, material, texture };
}
