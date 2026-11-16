import * as THREE from 'three';
import { CHANNEL_COUNT, SENSOR_COUNTS, demoTelemetry } from './facilityTour';
import { GAS_LOCATIONS } from './facilityLayout';

export function surfaceTexture(kind: 'metal' | 'concrete' | 'asphalt') {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  const image = ctx.createImageData(512, 512);
  let seed = 16273;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const base = kind === 'metal' ? 205 : kind === 'concrete' ? 153 : 81;
  for (let y = 0; y < 512; y++) for (let x = 0; x < 512; x++) {
    const i = (y * 512 + x) * 4;
    const n = (random() - .5) * (kind === 'metal' ? 12 : 32);
    const streak = kind === 'metal' ? Math.sin(x * .19) * 4 + Math.sin(x * .037) * 7 : 0;
    image.data[i] = base + n + streak;
    image.data[i + 1] = base + n + streak + 2;
    image.data[i + 2] = base + n + streak - 2;
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  if (kind === 'metal') {
    // Painted steel: broad uneven weathering, fine welds, rain runoff and a
    // darker foot course. Large-scale variation survives distant views.
    ctx.fillStyle = '#deded2'; ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 95; i++) {
      const x = random() * 512, y = random() * 512, radius = 18 + random() * 90;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `rgba(89,84,68,${.025 + random() * .07})`); gradient.addColorStop(1, 'rgba(89,84,68,0)');
      ctx.fillStyle = gradient; ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }
    for (let row = 0; row < 4; row++) {
      const y = row * 128;
      ctx.fillStyle = '#65665445'; ctx.fillRect(0, y, 512, 1.2);
      ctx.fillStyle = '#ffffff50'; ctx.fillRect(0, y + 2, 512, 1);
      for (let column = 0; column < 8; column++) {
        const x = (column * 64 + (row % 2) * 32) % 512;
        ctx.fillStyle = '#69716929'; ctx.fillRect(x, y, .8, 128);
        if (random() > .45) {
          const stain = ctx.createLinearGradient(0, y, 0, y + 70);
          stain.addColorStop(0, '#735e3f30'); stain.addColorStop(1, '#735e3f00');
          ctx.fillStyle = stain; ctx.fillRect(x - 2, y + 2, 4 + random() * 4, 70);
        }
      }
    }
    for (let i = 0; i < 300; i++) {
      ctx.fillStyle = `rgba(73,75,67,${random() * .055})`;
      ctx.fillRect(random() * 512, 0, .4 + random(), 40 + random() * 470);
    }
    const foot = ctx.createLinearGradient(0, 435, 0, 512);
    foot.addColorStop(0, '#555c4500'); foot.addColorStop(1, '#555c4555');
    ctx.fillStyle = foot; ctx.fillRect(0, 435, 512, 77);
  }
  if (kind === 'concrete') {
    ctx.strokeStyle = '#53585230'; ctx.lineWidth = 1;
    for (let y = 0; y < 512; y += 128) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke(); }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export function tankDecal(index: number) {
  const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 256;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#27382f'; ctx.textAlign = 'center';
  ctx.font = '600 78px Arial'; ctx.fillText(`РВС-0${index + 1}`, 256, 105);
  ctx.fillStyle = '#456553'; ctx.font = '26px Arial'; ctx.fillText('РЕЗЕРВУАРНЫЙ ПАРК', 256, 157);
  ctx.fillRect(50, 190, 412, 5);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function makeRoomSign(title: string, subtitle: string, aspect: number) {
  const canvas = document.createElement('canvas'); canvas.width = Math.round(128 * aspect); canvas.height = 128;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#172526'; ctx.fillRect(0, 0, canvas.width, 128);
  ctx.fillStyle = '#b9dca7'; ctx.fillRect(11, 21, 7, 85);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e5eee7'; ctx.font = '600 49px Arial'; ctx.fillText(title, canvas.width / 2, 61);
  ctx.fillStyle = '#a6c0b6'; ctx.font = '25px Arial'; ctx.fillText(subtitle, canvas.width / 2, 99);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

const controlGroups = [
  { short: 'Уровень', label: 'Уровнемеры', count: SENSOR_COUNTS.levels, color: '#76ccb9' },
  { short: 'Газ', label: 'Газоанализаторы', count: SENSOR_COUNTS.gases, color: '#e9bd7a' },
  { short: 'Камеры', label: 'Видеонаблюдение', count: SENSOR_COUNTS.cameras, color: '#91b5dc' },
  { short: 'Пожар', label: 'Пожарные извещатели', count: SENSOR_COUNTS.fire, color: '#e2a689' },
  { short: 'Доступ', label: 'Контроль доступа', count: SENSOR_COUNTS.access, color: '#b6ce91' },
];

export function makeControlScreen(index: number) {
  const canvas = document.createElement('canvas');
  canvas.width = 768; canvas.height = 410;
  const ctx = canvas.getContext('2d')!;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const format = (value: number, digits: number) => value.toFixed(digits).replace('.', ',');
  const label = (value: string, x: number, y: number, size: number, color: string, bold = false) => {
    ctx.fillStyle = color; ctx.font = `${bold ? '600' : '400'} ${size}px Arial`;
    ctx.fillText(value, x, y);
  };
  const panel = (x: number, y: number, w: number, h: number, color: string) => {
    ctx.fillStyle = color; ctx.fillRect(x, y, w, h);
  };
  let previous = '';
  const update = (progress: number, time = 0) => {
    const values = demoTelemetry(progress);
    const frame = Math.floor(time * 10);
    const key = [values.levels.join(), values.gases.join(), String(frame), 'static'][index];
    if (previous === key) return;
    previous = key;
    const titles = ['Уровни резервуаров', 'Газовый контроль', 'Передача сигналов', 'Состояние систем'];
    const accent = ['#76ccb9', '#e9bd7a', '#91b5dc', '#b6ce91'][index];
    panel(0, 0, 768, 410, '#0c1c1c');
    panel(0, 0, 768, 5, accent);
    label('СБ+  /  ПОСТ КОНТРОЛЯ', 28, 42, 17, '#9ab5b1', true);
    label(titles[index], 28, 84, 34, '#edf4ec', true);
    panel(28, 103, 712, 1, '#31514b');
    if (index === 0) values.levels.forEach((value, i) => {
      const y = 122 + i * 60;
      panel(28, y, 712, 50, '#142b2a');
      label(`РВС-0${i + 1}`, 48, y + 33, 23, '#d3e5de', true);
      panel(184, y + 19, 365, 12, '#2d4745');
      panel(184, y + 19, 365 * value / 100, 12, accent);
      label(`${format(value, 1)} %`, 594, y + 34, 26, '#f0f5ee', true);
    });
    if (index === 1) values.gases.forEach((value, i) => {
      const y = 122 + i * 78;
      panel(28, y, 712, 65, '#192c2a');
      panel(28, y, 4, 65, accent);
      label(`Г-0${i + 1}`, 48, y + 41, 23, accent, true);
      label(GAS_LOCATIONS[i].label, 132, y + 41, 21, '#d4e1d7');
      label(format(value, 2), 544, y + 42, 29, '#f2dec0', true);
      label('% НКПР', 628, y + 41, 19, '#b7bdb0');
    });
    if (index === 2) {
      controlGroups.forEach((group, i) => {
        const x = 28 + i * 145;
        panel(x, 129, 132, 77, '#172f2d');
        panel(x, 129, 132, 3, group.color);
        label(group.short, x + 12, 158, 18, '#d4e3da', true);
        const spacing = 18;
        for (let j = 0; j < group.count; j++) {
          const channelX = x + 66 + (j - (group.count - 1) / 2) * spacing;
          panel(channelX, 174, 8, 8, group.color);
          panel(channelX + 3, 182, 1, 68, '#50746d');
          const packet = ((frame + i * 4 + j * 3) % 20) / 20;
          panel(channelX + 1, 190 + packet * 54, 5, 5, group.color);
        }
      });
      panel(93, 250, 581, 2, '#50746d');
      panel(383, 250, 2, 40, '#91b5dc');
      panel(236, 286, 296, 57, '#233d40');
      label('Диспетчерский щит', 263, 323, 23, '#dce9e7', true);
    }
    if (index === 3) {
      panel(28, 122, 148, 230, '#21392f');
      label(String(CHANNEL_COUNT), 49, 226, 73, accent, true);
      label('каналов', 51, 260, 21, '#c5d4bd');
      controlGroups.forEach((group, i) => {
        const y = 122 + i * 46;
        panel(193, y, 547, 40, '#162d29');
        panel(209, y + 15, 9, 9, group.color);
        label(group.label, 231, y + 27, 22, '#d4e4da');
        label(String(group.count), 696, y + 27, 22, group.color, true);
      });
    }
    panel(28, 371, 712, 1, '#31514b');
    label('Демонстрационные показания', 28, 395, 16, '#a4beb2');
    texture.needsUpdate = true;
  };
  update(1);
  return { texture, update };
}
