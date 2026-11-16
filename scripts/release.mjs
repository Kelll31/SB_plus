import { cp, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'build_source', 'dist');
for (const entry of await readdir(dist, { withFileTypes: true })) {
  const destination = path.join(root, entry.name);
  if (entry.isDirectory()) await mkdir(destination, { recursive: true });
  await cp(path.join(dist, entry.name), destination, { recursive: true, filter: source => path.basename(source) !== 'config.php' });
}
console.log('Готовый сайт обновлён в корне проекта. Приватная конфигурация не копировалась.');
