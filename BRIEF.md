# Brief — Portfolio Anthony Mure

Version du 9 novembre 2026. Remplace la direction « fond noir » du brief d'origine (`docs/brief-arborescence-original.md`) : l'arborescence et les règles de contenu restent valables, la direction visuelle change.

## 1. Objectif

Un portfolio clair qui montre le travail d'Anthony en photo, vidéo et graphisme, et qui transforme les visites en demandes de prestation.

- **Quatre entrées de menu** : Work, Services, About, Contact. Tout en deux clics maximum.
- **Le travail d'abord** : peu de texte, grandes images.
- **Personnalité** : base épurée façon « bento » (grandes vignettes arrondies), avec une touche funky : orange, bleu vif et petits motifs dessinés à la main.
- **Site en anglais.**

## 2. Arborescence et URLs

| Page | URL | Maquette |
|---|---|---|
| Home | `/` | `01-home-desktop`, `02-home-mobile` |
| Work | `/work` | `03-work-desktop`, `04-work-mobile` |
| Page projet (modèle) | `/work/[slug]` | `05-projet-video` |
| Série d'affiches du bar | `/work/[bar-slug]-posters` | `06-projet-affiches-bar` |
| Services | `/services` | `07-services` |
| About | `/about` | `08-about` |
| Contact | `/contact` | `09-contact` |
| Mentions légales | `/legal` | pas de maquette (page texte simple, lien dans le pied de page uniquement) |

## 3. Direction visuelle

Les valeurs exactes sont dans `design/tokens.css`.

### Couleurs

| Rôle | Valeur | Usage |
|---|---|---|
| Fond écru | `#F3EEE4` | fond de toutes les pages |
| Surface | `#E8E0D2` | cartes neutres, filtres inactifs, champs de formulaire (fond) |
| Encre | `#1A1714` | texte principal, boutons noirs |
| Texte secondaire | `#6B6257` | sous-titres, infos, pied de page |
| Texte courant | `#4F473E` | paragraphes |
| **Orange** (accent 1) | `#F26A1B` | bloc « What I do », boutons d'action, bouton play, étoiles |
| Orange texte | `#B8460B` | lien actif du menu, survol des liens (contraste AA sur écru) |
| **Bleu vif** (accent 2) | `#1D2BB8` | bloc « Get in touch », bandeaux de contact, filtre actif, stickers, soulignements |
| Texte sur bleu | `#D3D7F7` | texte secondaire sur fond bleu |
| Brun foncé | `#2E2924` | fond du showreel en attendant la vidéo |

Règle : texte encre sur orange, texte écru sur bleu. Jamais de petit texte orange sur écru (contraste insuffisant), utiliser `#B8460B`.

### Typographie

- **Inter Tight** (Google Fonts, 400/500/600/700) pour tout le site.
- **Caveat** 700 (Google Fonts) uniquement pour les annotations manuscrites (« press play! », « 60+ posters! », « pick your vibe ↓ »…). Jamais pour du texte de contenu.
- Grands titres : 600, interlettrage serré (-0.045em), interlignage 0.92. Le titre principal de la Home monte jusqu'à ~140 px sur grand écran (`clamp(3.5rem, 9vw, 8.75rem)`).

### Formes

- Vignettes et cartes : rayon **28 px** sur ordinateur, **24 px** sur mobile, **20 px** pour les affiches du mur.
- Boutons, filtres, étiquettes : pilule (rayon 999 px).
- Conteneur : largeur max 1360 px, marges 40 px (16 px sur mobile).
- Espacement entre blocs bento : 16 px. Entre sections : 120 px (72 px sur mobile).

### Motifs dessinés (`design/motifs/`)

À utiliser avec parcimonie, comme dans les maquettes :
- `sparkle.svg` : étincelle 4 branches (orange ou bleue), près des titres et dans les coins de cartes.
- `star.svg` : étoile 5 branches, sur le titre Work et le bloc « Get in touch ».
- `starburst.svg` : badge rond dentelé bleu avec texte manuscrit (« Made in Saint-Étienne! »), légèrement penché.
- `squiggle.svg` : vague à côté des intertitres (« Selected work », « The poster wall »…).
- `underline.svg` : soulignement manuscrit sous « Mure » (Home) et « Anthony » (About).
- `arrow.svg` : flèche courbe à côté de « press play! ».

Les stickers manuscrits sont des pilules légèrement tournées (5–8°), bleu + texte écru ou orange + texte encre.

### Mouvements

- Survol des vignettes : légère montée (`translateY(-4px)`, 0,4 s). Affiches : montée + rotation de -0,6°.
- Survol des vignettes vidéo : boucle muette de 3 à 5 s qui remplace l'image.
- Apparition des sections : léger fondu, rien de plus. Tout désactivé avec `prefers-reduced-motion`.

## 4. Éléments communs

- **En-tête collant** : « Anthony Mure » à gauche (retour Home), Work · Services · About · Contact à droite. Fond écru légèrement transparent avec flou. Lien de la page active en `#B8460B`.
- **Mobile** : nom à gauche, bouton pilule noir « Menu ». Il ouvre un panneau arrondi brun foncé avec les 4 liens en grand (Contact en orange) ; le bouton devient « Close ».
- **Pied de page** : e-mail, Instagram, YouTube, LinkedIn, Legal notice, © année.
- **Bloc d'appel au contact** en bas de presque chaque page (voir maquettes).

## 5. Détail des pages

### Home (`01`, `02`)
1. Titre géant « Anthony Mure. » (point orange), « Mure » souligné en bleu, deux étincelles. À droite : badge « Made in Saint-Étienne! » et une phrase : *Photographer, videographer & content creator based in Saint-Étienne, France.*
2. Bento :
   - grande carte showreel (560 px de haut) : vidéo en boucle plein cadre, bouton play orange, annotation « press play! » ;
   - bloc orange « What I do » : Photography → / Video → / Graphic design →, chaque lien ouvre Work avec le filtre correspondant (`/work?filter=video`) ;
   - bloc bleu « Available for new projects » + « Get in touch → » + e-mail.
3. « Selected work » : 4 projets phares en 2 colonnes (1 sur mobile), lien « View all work → ».
4. Bandeau bleu « Got a project in mind? Let's talk. » + bouton orange.

### Work (`03`, `04`)
- Titre « Work » + nombre de projets affichés en exposant.
- Filtre : All · Photography · Video · Graphic design. Actif = pilule bleue, inactifs = pilules surface. Annotation « pick your vibe ↓ ». Sur mobile, le filtre défile horizontalement.
- Le filtre met à jour l'URL (`?filter=`) pour qu'on puisse partager un lien filtré.
- Grille 2 colonnes (1 sur mobile), vignettes en 3:2. Sur chaque vignette : étiquette de catégorie ; pastille play orange pour les vidéos ; sticker éventuel (« 60+ posters! »). Sous la vignette : titre, type ou client, année à droite.
- Un projet mixte apparaît dans plusieurs filtres. Ordre : les meilleurs d'abord (champ `order` dans les données).
- Bandeau orange « Interested? Let's make something together. »

### Page projet (`05`)
Même structure pour tous les projets :
1. « ← All work », étiquette de catégorie, titre, ligne d'infos (Client · Année · Rôle).
2. Une ou deux phrases de contexte (facultatives).
3. Contenu selon le type :
   - **Vidéo** : lecteur Vimeo en 16:9, puis quelques images extraites.
   - **Photo** : images en grand l'une sous l'autre, en mêlant pleine largeur et deux images côte à côte.
   - **Graphisme** : visuels en grand + une ou deux images de déclinaisons.
4. En bas : carte « Next project → » (titre + mini-vignette) et carte orange « Interested? Get in touch → ».

### Série d'affiches du bar (`06`)
Seule page projet avec une grille et un agrandissement au clic.
- En-tête : titre « [Bar name] Poster series », ligne d'infos « Client: [Bar name] · 2023–2026 · 60+ posters · Design », sticker « one bar, 60+ posters! ».
- 3 affiches en grand (format 2:3).
- « The poster wall » : grille 4 colonnes (2 sur mobile), tri « Best first / By year » (par année = intertitres 2026, 2025…). Une ou deux photos du bar avec les affiches en place, sur 2 colonnes, glissées dans la grille.
- Au-delà de 40 affiches : sélection de 20 à 30, bouton « Show all ».
- Clic sur une affiche : agrandissement par-dessus la page, avec titre, année, bouton Close, fermeture par Échap et clic sur le fond, navigation clavier ← →, focus piégé dans la fenêtre.

### Services (`07`)
Trois cartes : **Photography** (surface), **Video** (orange, sticker « action! »), **Content creation** (bleue). Pour chacune : numéro, mini-vignette, 2–3 lignes, « What you get » (3 puces), prix « From [PRICE] » ou « On request », bouton « Get in touch → ». Le graphisme n'est **pas** proposé comme prestation.
En bas : « Not sure what you need? *let's figure it out* » + bouton.

### About (`08`)
- Carte orange avec portrait d'Anthony en arche (haut arrondi), sticker « that's me! ».
- Carte surface : « Hi, I'm Anthony. » (souligné bleu), court texte, deux boutons.
- « They trusted me » : grille de logos ou noms de clients.

### Contact (`09`)
- Bloc bleu : « Let's talk. », une phrase, e-mail cliquable (`mailto:`), boutons Instagram / YouTube / LinkedIn.
- Formulaire : Name, Email, Project type (Photography / Video / Content creation / Something else), Message. Bouton orange « Send message → ». Validation et message de confirmation « message received! ».
- Le type de projet peut être pré-rempli depuis les boutons de Services (`/contact?type=video`).

## 6. Contenu

### Connu
- Nom : Anthony Mure. Ville : Saint-Étienne, France.
- E-mail : mure.anthony@gmail.com.
- Réseaux actuels (site Wix) : Instagram `instagram.com/honoo_agency`, YouTube `youtube.com/@B.Berry3`, LinkedIn `linkedin.com/in/anthony-mure-3044a9130`. **À confirmer avec Anthony** (pas de Vimeo trouvé, et une seconde adresse Instagram « photographe_imposteur » apparaît sur l'ancien site).
- Projets : voir `content/projects.json` (repris de l'ancien site mureanthony.wixsite.com/honoo).

### À fournir par Anthony (laisser les crochets visibles en attendant)
- Toutes les images, le showreel et les boucles vidéo (les images de l'ancien site Wix n'ont pas pu être récupérées automatiquement).
- Nom du bar, années, clients et rôles de chaque projet.
- Une ou deux séries photo (aucune n'apparaît sur l'ancien site).
- Prix des prestations, délai de réponse, texte About complété, logos clients.
- Mentions légales.

## 7. Critères de fin

- Les 7 pages + mentions légales fonctionnent, sur ordinateur et à 390 px.
- Ajouter un projet = ajouter un fichier de contenu + ses images, sans toucher au code.
- Lighthouse ≥ 90 en performance, accessibilité, SEO.
- Déployé sur Vercel, domaine à brancher (honoo.fr ou un nouveau domaine, à confirmer).
