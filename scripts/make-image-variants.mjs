#!/usr/bin/env node
/**
 * Generates responsive WebP + AVIF variants for real photos dropped into public/images/.
 *
 *   public/images/hero-cooktop.jpg  ->  hero-cooktop-640.webp, -1024.webp, -1600.webp, -2400.webp (+ .avif)
 *
 * The Photo component picks these up automatically on the next build. Widths larger than the
 * source are skipped. SVG art in public/images/art/ and og-default.jpg are left alone.
 *
 * Usage: npm run images            (only missing variants)
 *        npm run images -- --force (regenerate all)
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/images');
const widths = [640, 1024, 1600, 2400];
const force = process.argv.includes('--force');
const variantPattern = /-(\d{3,4})\.(webp|avif)$/;

const sources = fs
  .readdirSync(dir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .filter((f) => !variantPattern.test(f))
  .filter((f) => !f.startsWith('og-default'));

if (sources.length === 0) {
  console.log('No photos in public/images/ yet — the site is using SVG art fallbacks. Nothing to do.');
  process.exit(0);
}

for (const file of sources) {
  const name = file.replace(/\.[^.]+$/, '');
  const input = path.join(dir, file);
  const { width = 0 } = await sharp(input).metadata();
  const targets = widths.filter((w, i) => w <= width || i === 0);

  for (const w of targets) {
    for (const [ext, opts] of [
      ['webp', { quality: 78 }],
      ['avif', { quality: 55 }],
    ]) {
      const out = path.join(dir, `${name}-${w}.${ext}`);
      if (!force && fs.existsSync(out)) continue;
      await sharp(input).rotate().resize({ width: Math.min(w, width || w), withoutEnlargement: true })[ext](opts).toFile(out);
      console.log(`  ${path.relative(process.cwd(), out)}`);
    }
  }
  console.log(`✓ ${file} → ${targets.join(', ')}w`);
}
