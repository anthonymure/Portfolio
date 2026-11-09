# Maquettes — comment les lire

Chaque fichier `.dc.html` est une page de la maquette validée. C'est du HTML presque standard, avec un petit langage de gabarit. **Ne les sers pas telles quelles** : elles dépendent d'un moteur (`support.js`) qui n'est pas fourni. Sers-t'en comme référence exacte de structure, de styles et de comportements, et reconstruis les pages dans la stack du projet.

## Correspondance fichiers → pages

| Fichier | Page | Nom dans les liens internes |
|---|---|---|
| `01-home-desktop.dc.html` | Home, ordinateur | `Main.dc.html` |
| `02-home-mobile.dc.html` | Home, mobile (390 px) | `HomeMobile.dc.html` |
| `03-work-desktop.dc.html` | Work, ordinateur | `Work.dc.html` |
| `04-work-mobile.dc.html` | Work, mobile | `WorkMobile.dc.html` |
| `05-projet-video.dc.html` | Page projet (modèle vidéo) | `Project.dc.html` |
| `06-projet-affiches-bar.dc.html` | Série d'affiches du bar | `Posters.dc.html` |
| `07-services.dc.html` | Services | `Services.dc.html` |
| `08-about.dc.html` | About | `About.dc.html` |
| `09-contact.dc.html` | Contact | `Contact.dc.html` |

Les pages 05 à 09 n'ont qu'une version ordinateur, mais elles sont fluides : reproduis leur comportement mobile en suivant les règles des maquettes 02 et 04 (une colonne, marges 16 px, rayons 24 px).

## Syntaxe

- `<x-dc>` : racine de la page. `<helmet>` : contenu à mettre dans le `<head>` (polices, styles globaux).
- `{{ nom }}` : valeur calculée dans `renderVals()` (script en bas du fichier).
- `<sc-for list="{{items}}" as="p">` : boucle sur une liste (ici, les projets).
- `<sc-if value="{{cond}}">` : affichage conditionnel.
- `onClick="{{pick}}"` : gestionnaire d'événement défini dans `renderVals()`.
- `data-props` sur le script : réglages de la maquette (couleur d'accent, arrondi). Valeurs par défaut : accent `#F26A1B`, bleu `#1D2BB8`, arrondi 28 px.
- Les blocs de couleur unie avec une pastille « Image · … » ou « Still 01 » sont des **emplacements d'images**.
- Les styles sont surtout en ligne (`style="…"`) : convertis-les en classes ou composants, en reprenant les valeurs de `design/tokens.css`.
