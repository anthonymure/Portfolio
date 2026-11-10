// Convertit les originaux (dossier "images " à la racine, ignoré par git) en WebP légers dans public/images/.
// Usage : node scripts/optimize-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'images ';
const OUT = 'public/images';

// Affiches du bar (Soggy Bottom) : [fichier source, slug, titre provisoire]. Les 3 premières ouvrent la série.
const bar = [
  ['jam all styles.png', 'jam-all-styles-2', 'Jam all styles #2'],
  ['Saint valentin.png', 'saint-valentin', 'Saint-Valentin'],
  ['Illustration_sans_titre.png.webp', 'halloween', 'Halloween'],
  ['jam all style.png', 'jam-all-styles', 'Jam all styles'],
  ['post saint pat\'.png', 'saint-patrick', 'Saint Patrick'],
  ['saint pat.jpg', 'saint-patrick-2', 'Saint Patrick #2'],
  ['JAM JAZZ.png', 'jam-jazz', 'Jam jazz'],
  ['jam jazz juin.png', 'jam-jazz-juin', 'Jam jazz juin'],
  ['jam jazz mai_.png', 'jam-jazz-mai', 'Jam jazz mai'],
  ['affiche jam rock .png', 'jam-rock', 'Jam rock'],
  ['jam rock.png', 'jam-rock-2', 'Jam rock #2'],
  ['jam rock juin.png', 'jam-rock-juin', 'Jam rock juin'],
  ['jam metal.png', 'jam-metal', 'Jam metal'],
  ['jam metal 2.png', 'jam-metal-2', 'Jam metal #2'],
  ['jam metal 3.png', 'jam-metal-3', 'Jam metal #3'],
  ['jam metal 4.png', 'jam-metal-4', 'Jam metal #4'],
  ['jam_metal.png', 'jam-metal-5', 'Jam metal #5'],
  ['jam_pop_rock.png.webp', 'jam-pop-rock', 'Jam pop rock'],
  ['jamm_allstyle.png', 'jam-all-styles-3', 'Jam all styles #3'],
  ['halloween.png', 'halloween-2', 'Halloween #2'],
  ['Illustration_sans_titre_2.png.webp', 'inktober', 'Inktober'],
  ['IMG_1165.png.webp', 'ici-cest-le-soggy', 'Ici c’est le Soggy'],
  ['IMG_1235.png.webp', 'stand-up', 'Stand up'],
  ['Illustration_sans_titre.png-2.webp', 'illustration-soggy', 'Illustration Soggy'],
  ['beaujolais-2.png', 'beaujolais-nouveau', 'Soirée Beaujolais nouveau'],
  ['before.png', 'before-techno', 'Before techno'],
  ['delirium.png', 'delirium-paranoia', 'Délirium & Paranoïa'],
  ['goot.png', 'delirium-france-espagne', 'Délirium France-Espagne'],
  ['soirée delirium sept 26.png', 'soiree-delirium', 'Soirée Délirium'],
  ['jack d soiree 2 post.jpg.png', 'jack-d', 'Jack D'],
  ['tchno.png', 'dj-set-techno', 'DJ set techno'],
  ['velvet ripley.png', 'velvet-ripley', 'Concert Velvet Ripley'],
  ['what\'s my age.png', 'whats-my-age', 'Concert What’s my age'],
];
// Autres projets : [fichier source, dossier, nom]
const others = [
  ['avamind.png', 'avamind', 'poster-1'],
  ['avamind 2 .png', 'avamind', 'poster-2'],
  ['illustration Saint Etienne .jpg', 'saint-etienne-illustrations', 'illustration-1'],
  ['affiche saint etienne .png', 'saint-etienne-illustrations', 'illustration-2'],
];

async function convert(file, outBase, widths) {
  const input = path.join(SRC, file);
  if (!fs.existsSync(input)) { console.warn('MANQUANT', file); return null; }
  const img = sharp(input, { limitInputPixels: false }).flatten({ background: '#ffffff' });
  const meta = await sharp(input, { limitInputPixels: false }).metadata();
  const { channels } = await img.clone().resize(1, 1).stats().then((s) => ({ channels: s.channels }));
  const st = await img.clone().resize(1, 1).stats();
  const tone = '#' + st.channels.slice(0, 3).map((c) => Math.round(c.mean).toString(16).padStart(2, '0')).join('');
  fs.mkdirSync(path.dirname(outBase), { recursive: true });
  const res = {};
  for (const [label, w] of Object.entries(widths)) {
    const out = `${outBase}${label}.webp`;
    await img.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    res[label || 'full'] = '/' + out.replace(/^public\//, '');
  }
  return { ...res, tone, ratio: meta.width / meta.height };
}

const posters = [];
for (const [file, slug, title] of bar) {
  const r = await convert(file, `${OUT}/posters/${slug}`, { '': 1200, '-thumb': 560 });
  if (r) posters.push({ id: slug, title, year: null, src: r.full, thumb: r['-thumb'], tone: r.tone });
}
fs.writeFileSync('src/data/posters.json', JSON.stringify({ total: '60+', posters }, null, 1) + '\n');

for (const [file, dir, name] of others) await convert(file, `${OUT}/${dir}/${name}`, { '': 1600, '-thumb': 900 });

const size = (d) => { let n = 0; for (const f of fs.readdirSync(d, { recursive: true })) { const p = path.join(d, f); if (fs.statSync(p).isFile()) n += fs.statSync(p).size; } return n; };
console.log(`${posters.length} affiches, public/images = ${(size(OUT) / 1e6).toFixed(1)} Mo`);
