// Génère les vignettes 3:2 (*-card.webp) des cartes projet à partir du champ "image" de chaque projet.
// Usage : node scripts/make-cards.mjs (à relancer quand une image de couverture change)
import sharp from 'sharp';
import fs from 'node:fs';
const dir = 'src/content/projects';
for (const f of fs.readdirSync(dir)) {
  const p = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
  if (!p.image) continue;
  const out = 'public' + p.image.replace(/(-thumb)?\.webp$/, '-card.webp');
  await sharp('public' + p.image).resize(800, 533, { fit: 'cover' }).webp({ quality: 78 }).toFile(out);
}
console.log('vignettes générées');
