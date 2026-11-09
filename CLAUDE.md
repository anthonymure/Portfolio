# Portfolio Anthony Mure — instructions pour Claude Code

Tu construis le site portfolio d'Anthony Mure (photo, vidéo, graphisme), basé à Saint-Étienne.
Le site est **en anglais**. Les échanges avec Anthony se font **en français**.

## À lire avant de coder

1. `BRIEF.md` : le cahier des charges complet (pages, design, comportements, contenu).
2. `maquettes/` : les maquettes validées, une par page. Lis `maquettes/LIRE-MOI.md` pour comprendre leur format.
3. `design/tokens.css` : couleurs, typo, arrondis, espacements.
4. `design/motifs/` : les motifs dessinés en SVG (étoiles, vague, soulignement, badge, flèche).
5. `content/projects.json` : la liste des projets et leurs infos.

## Stack suggérée

- **Astro** (site statique, rapide, pages en `.astro`) + CSS simple basé sur `design/tokens.css`. Pas de framework CSS lourd nécessaire.
- Contenu des projets en **Content Collections** Astro (un fichier Markdown ou JSON par projet), pour qu'Anthony ajoute un projet sans toucher au code.
- Images via `astro:assets` (formats modernes, tailles responsives, lazy loading).
- Vidéos : embed Vimeo (ou YouTube) sur les pages projet ; boucles muettes `.mp4` courtes (3–5 s) pour le survol des vignettes.
- Formulaire de contact : Formspree, Netlify Forms ou une route serveur simple (à confirmer avec Anthony).
- Déploiement : **Vercel**.

Si tu proposes une autre stack, explique pourquoi à Anthony avant de commencer.

## Règles

- Respecte les maquettes : mise en page, couleurs, arrondis, motifs. En cas de doute, la maquette fait foi sur le brief ; signale le conflit.
- **N'invente pas de contenu.** Tout ce qui est entre crochets (`[Bar name]`, `[PRICE]`, `[Year]`, `[Client]`…) est à demander à Anthony ou à laisser en place visiblement.
- Les vignettes de couleur dans les maquettes sont des **emplacements d'images**. Utilise de vraies images dès qu'Anthony les fournit (dossier `public/` ou `src/assets/`).
- Mobile soigné : une colonne, même contenu, menu replié. Vérifie chaque page à 390 px de large.
- Accessibilité : vrais `<a>` et `<button>`, `alt` sur toutes les images, contraste AA, cibles tactiles ≥ 44 px, focus visible, `prefers-reduced-motion` respecté.
- Animations : un léger fondu suffit. Pas d'apparitions marquées, pas de lightbox (sauf la page des affiches du bar).
- SEO de base : `<title>` et meta description par page, Open Graph, sitemap, URLs propres (`/work`, `/work/new-balance-550`…).
