// Gera versões WebP otimizadas das imagens da rota /teatod.
// Uso: node scripts/optimize-teatod.mjs
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const DIR = 'public/teatod';
const OUT = path.join(DIR, 'opt');

const jobs = [
  // Hero: exibida em até 630px (desktop) / ~360px (mobile)
  { src: 'heromobile.png', widths: [480, 760, 1013], quality: 78 },
  // Carrossel: slide ~300px no desktop, largura total no mobile
  ...Array.from({ length: 9 }, (_, i) => ({ src: `${i + 2}.jpeg`, widths: [480, 800], quality: 72 })),
];

await import('node:fs/promises').then((fs) => fs.mkdir(OUT, { recursive: true }));

for (const { src, widths, quality } of jobs) {
  const input = path.join(DIR, src);
  const base = path.parse(src).name;
  const before = (await stat(input)).size;
  for (const w of widths) {
    const out = path.join(OUT, `${base}-${w}.webp`);
    await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(out);
    const after = (await stat(out)).size;
    console.log(`${src} -> ${path.basename(out)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
  }
}

const meta = await Promise.all(
  jobs.map(async ({ src }) => {
    const m = await sharp(path.join(DIR, src)).metadata();
    return `${src}: ${m.width}x${m.height}`;
  }),
);
console.log(meta.join('\n'));
void readdir;
