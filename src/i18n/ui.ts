export type Lang = 'fr' | 'en';
export const languages: Lang[] = ['fr', 'en'];

/** Chemin localisé : le français est à la racine, l'anglais sous /en. */
export function localePath(lang: Lang, path: string): string {
  if (lang === 'fr') return path;
  return path === '/' ? '/en/' : `/en${path}`;
}

/** Même page dans l'autre langue (sans query string). */
export function switchPath(lang: Lang, pathname: string): string {
  if (lang === 'en') return pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return pathname === '/' ? '/en/' : `/en${pathname}`;
}

export const categoryLabels: Record<string, Record<Lang, string>> = {
  Photography: { fr: 'Photographie', en: 'Photography' },
  Video: { fr: 'Vidéo', en: 'Video' },
  'Graphic design': { fr: 'Design graphique', en: 'Graphic design' },
};

export const ui = {
  fr: {
    'meta.home.desc': 'Photographe, vidéaste et créateur de contenu basé à Saint-Étienne. Photo, vidéo et design graphique.',
    'nav.work': 'Travaux', 'nav.services': 'Services', 'nav.about': 'À propos', 'nav.contact': 'Contact',
    'nav.menu': 'Menu', 'nav.close': 'Fermer', 'nav.main': 'Navigation principale', 'nav.lang': 'Changer de langue',
    'footer.legal': 'Mentions légales',
    'home.tagline': 'Photographe, vidéaste & créateur de contenu basé à Saint-Étienne.',
    'home.badge': 'Made in<br>Saint-Étienne !',
    'home.showreelAria': 'Voir le showreel', 'home.press': 'lance la vidéo !', 'home.showreel': 'Showreel 2026',
    'home.whatIDo': 'Ce que je fais', 'home.available': 'Disponible pour de nouveaux projets', 'home.getInTouch': 'Me contacter →',
    'home.selected': 'Projets choisis', 'home.viewAll': 'Voir tous les travaux →',
    'home.ctaTitle': 'Un projet en tête ?', 'home.ctaAccent': 'Parlons-en.', 'home.ctaBtn': 'Me contacter',
    'work.title': 'Travaux', 'work.desc': 'Sélection de projets photo, vidéo et design graphique par Anthony Mure, basé à Saint-Étienne.',
    'work.pick': 'choisis ton style ↓', 'work.filterAria': 'Filtrer les projets', 'work.all': 'Tous',
    'work.empty': 'Aucun projet dans cette catégorie pour le moment.',
    'work.ctaTitle': 'Intéressé ? Faisons quelque chose ensemble.', 'work.ctaBtn': 'Me contacter',
    'proj.back': '← Tous les travaux', 'proj.client': 'Client', 'proj.imagePh': 'Image', 'proj.stills': 'Images du film', 'proj.images': 'Images',
    'proj.videoSoon': 'Vidéo bientôt disponible', 'proj.sound': 'son activé !', 'proj.videoTitle': 'vidéo',
    'proj.next': 'Projet suivant →', 'proj.interested': 'Intéressé ?', 'proj.touch': 'Me contacter →',
    'proj.metaDesc': 'Projet {cat} par Anthony Mure.', 'proj.fullWidth': 'pleine largeur',
    'posters.title': 'Série d’affiches', 'posters.barName': '[Nom du bar]', 'posters.count': 'affiches',
    'posters.sticker': 'un bar, 60+ affiches !',
    'posters.intro': 'Événements, soirées à thème, nouvelles boissons : chacun a eu son affiche. Trois ans de design pour le même bar.',
    'posters.wall': 'Le mur d’affiches', 'posters.sort': 'Trier les affiches', 'posters.best': 'Les meilleures', 'posters.byYear': 'Par année',
    'posters.showAll': 'Voir les {n} affiches', 'posters.showLess': 'Voir une sélection',
    'posters.enlarge': 'Agrandir', 'posters.preview': 'Aperçu de l’affiche', 'posters.prev': 'Affiche précédente', 'posters.nextP': 'Affiche suivante',
    'posters.close': 'Fermer ✕', 'posters.photoPh': 'Photo · affiches en place au bar', 'posters.wild': 'sur place', 'posters.placeholder': '[Titre de l’affiche]',
    'services.title': 'Services', 'services.desc': 'Photographie, vidéo et création de contenu par Anthony Mure à Saint-Étienne.',
    'services.intro': 'Trois façons de travailler ensemble, pour les marques, les lieux et les événements qui veulent des images qui arrêtent le scroll.',
    'services.gets': 'Ce que vous obtenez', 'services.touch': 'Me contacter →',
    'services.photo.title': 'Photographie', 'services.photo.text': 'Photographie de produit, de portrait et d’événement. Lumière naturelle ou installations simples, retouchées dans un style cohérent.',
    'services.photo.g1': 'Photos retouchées en haute résolution', 'services.photo.g2': 'Formats web et réseaux sociaux', 'services.photo.g3': 'Galerie en ligne à télécharger',
    'services.video.title': 'Vidéo', 'services.video.sticker': 'action !', 'services.video.text': 'Reels, films produit et teasers d’événement. De l’idée au montage final, pensés pour l’écran sur lequel ils seront vus.',
    'services.video.g1': 'Vidéo montée avec musique et étalonnage', 'services.video.g2': 'Versions verticale et horizontale', 'services.video.g3': 'Formats courts pour les réseaux sociaux',
    'services.content.title': 'Création de contenu', 'services.content.text': 'Du contenu photo et vidéo régulier pour vos réseaux sociaux, pensé autour de votre actualité et de vos événements.',
    'services.content.g1': 'Un plan de contenu pour le mois', 'services.content.g2': 'Photos et reels prêts à publier', 'services.content.g3': 'Formats adaptés à chaque plateforme',
    'services.priceFrom': 'À partir de [PRIX]', 'services.priceReq': 'Sur demande',
    'services.notSure': 'Pas sûr de ce qu’il vous faut ?', 'services.notSureHand': 'on va le trouver ensemble',
    'about.title': 'À propos', 'about.desc': 'Anthony Mure est photographe, vidéaste et créateur de contenu basé à Saint-Étienne.',
    'about.portraitPh': 'Photo · portrait d’Anthony', 'about.me': 'c’est moi !',
    'about.hi': 'Salut, moi c’est', 'about.p1': 'Je suis photographe, vidéaste et créateur de contenu basé à Saint-Étienne.',
    'about.p2': 'Je réalise des images pour des marques, des bars et des événements : photos, courts films, reels et affiches. [Une ou deux phrases de plus sur ta manière de travailler.]',
    'about.btnTouch': 'Me contacter →', 'about.btnWork': 'Voir mes travaux',
    'about.clients': 'Ils m’ont fait confiance', 'about.more': 'et d’autres à venir', 'about.logo': '[Logo client]',
    'contact.title': 'Contact', 'contact.desc': 'Contactez Anthony Mure pour un projet photo, vidéo ou de création de contenu à Saint-Étienne.',
    'contact.h1a': 'Parlons', 'contact.h1b': 'ensemble', 'contact.lead': 'Un shooting, un film, un plan de contenu mensuel ? Racontez-moi.',
    'contact.formAria': 'Formulaire de contact', 'contact.name': 'Nom', 'contact.namePh': 'Votre nom', 'contact.email': 'E-mail',
    'contact.type': 'Type de projet', 'contact.t.photo': 'Photographie', 'contact.t.video': 'Vidéo', 'contact.t.content': 'Création de contenu', 'contact.t.other': 'Autre chose',
    'contact.message': 'Message', 'contact.messagePh': 'Quoi, quand, où : tout ce qui peut aider.', 'contact.noBrief': 'pas besoin d’un long brief ✓',
    'contact.send': 'Envoyer le message →', 'contact.done': 'message reçu !', 'contact.thanks': 'Merci, je vous réponds sous [DÉLAI].', 'contact.again': 'Envoyer un autre message',
    'contact.required': 'Champ obligatoire.', 'contact.invalidEmail': 'Saisissez une adresse e-mail valide.',
    'contact.fallback': 'Votre application de messagerie devrait s’ouvrir avec le message prêt à envoyer. Sinon, écrivez à mure.anthony@gmail.com.',
    'contact.error': 'Une erreur est survenue. Écrivez directement à mure.anthony@gmail.com.', 'contact.subject': 'Projet : ',
    'legal.title': 'Mentions légales', 'legal.desc': 'Mentions légales du site portfolio d’Anthony Mure.',
    'legal.publisher': 'Éditeur', 'legal.publisherText': 'Anthony Mure, [statut / raison sociale], [SIRET], [adresse], Saint-Étienne, France.', 'legal.email': 'E-mail',
    'legal.hosting': 'Hébergement', 'legal.hostingText': '[Nom et adresse de l’hébergeur]', 'legal.ip': 'Propriété intellectuelle', 'legal.data': 'Données personnelles', 'legal.tbd': '[Texte à fournir]',
  },
  en: {
    'meta.home.desc': 'Photographer, videographer & content creator based in Saint-Étienne, France. Photo, video and graphic design work.',
    'nav.work': 'Work', 'nav.services': 'Services', 'nav.about': 'About', 'nav.contact': 'Contact',
    'nav.menu': 'Menu', 'nav.close': 'Close', 'nav.main': 'Main', 'nav.lang': 'Switch language',
    'footer.legal': 'Legal notice',
    'home.tagline': 'Photographer, videographer & content creator based in Saint-Étienne, France.',
    'home.badge': 'Made in<br>Saint-Étienne!',
    'home.showreelAria': 'Watch the showreel', 'home.press': 'press play!', 'home.showreel': 'Showreel 2026',
    'home.whatIDo': 'What I do', 'home.available': 'Available for new projects', 'home.getInTouch': 'Get in touch →',
    'home.selected': 'Selected work', 'home.viewAll': 'View all work →',
    'home.ctaTitle': 'Got a project in mind?', 'home.ctaAccent': 'Let’s talk.', 'home.ctaBtn': 'Get in touch',
    'work.title': 'Work', 'work.desc': 'Selected photography, video and graphic design projects by Anthony Mure, based in Saint-Étienne.',
    'work.pick': 'pick your vibe ↓', 'work.filterAria': 'Filter projects', 'work.all': 'All',
    'work.empty': 'No project in this category yet.',
    'work.ctaTitle': 'Interested? Let’s make something together.', 'work.ctaBtn': 'Get in touch',
    'proj.back': '← All work', 'proj.client': 'Client', 'proj.imagePh': 'Image', 'proj.stills': 'Stills from the film', 'proj.images': 'Images',
    'proj.videoSoon': 'Video coming soon', 'proj.sound': 'sound on!', 'proj.videoTitle': 'video',
    'proj.next': 'Next project →', 'proj.interested': 'Interested?', 'proj.touch': 'Get in touch →',
    'proj.metaDesc': '{cat} project by Anthony Mure.', 'proj.fullWidth': 'full width',
    'posters.title': 'Poster series', 'posters.barName': '[Bar name]', 'posters.count': 'posters',
    'posters.sticker': 'one bar, 60+ posters!',
    'posters.intro': 'Events, theme nights, new drinks: each one got its own poster. Three years of design for the same bar.',
    'posters.wall': 'The poster wall', 'posters.sort': 'Sort posters', 'posters.best': 'Best first', 'posters.byYear': 'By year',
    'posters.showAll': 'Show all {n} posters', 'posters.showLess': 'Show a selection',
    'posters.enlarge': 'Enlarge', 'posters.preview': 'Poster preview', 'posters.prev': 'Previous poster', 'posters.nextP': 'Next poster',
    'posters.close': 'Close ✕', 'posters.photoPh': 'Photo · posters in place at the bar', 'posters.wild': 'in the wild', 'posters.placeholder': '[Poster title]',
    'services.title': 'Services', 'services.desc': 'Photography, video and content creation services by Anthony Mure in Saint-Étienne, France.',
    'services.intro': 'Three ways to work together, for brands, venues and events that want images people stop scrolling for.',
    'services.gets': 'What you get', 'services.touch': 'Get in touch →',
    'services.photo.title': 'Photography', 'services.photo.text': 'Product, portrait and event photography. Natural light or simple setups, edited in a consistent style.',
    'services.photo.g1': 'Edited high-resolution photos', 'services.photo.g2': 'Web and social media formats', 'services.photo.g3': 'Online gallery to download',
    'services.video.title': 'Video', 'services.video.sticker': 'action!', 'services.video.text': 'Reels, product films and event teasers. From idea to final edit, made for the screen it will be watched on.',
    'services.video.g1': 'Edited video with music and color grading', 'services.video.g2': 'Vertical and horizontal versions', 'services.video.g3': 'Short cut-downs for social media',
    'services.content.title': 'Content creation', 'services.content.text': 'Regular photo and video content for your social media, planned around your news and events.',
    'services.content.g1': 'A content plan for the month', 'services.content.g2': 'Photos and reels ready to post', 'services.content.g3': 'Formats for each platform',
    'services.priceFrom': 'From [PRICE]', 'services.priceReq': 'On request',
    'services.notSure': 'Not sure what you need?', 'services.notSureHand': 'let’s figure it out',
    'about.title': 'About', 'about.desc': 'Anthony Mure is a photographer, videographer and content creator based in Saint-Étienne, France.',
    'about.portraitPh': 'Photo · portrait of Anthony', 'about.me': 'that’s me!',
    'about.hi': 'Hi, I’m', 'about.p1': 'I’m a photographer, videographer and content creator based in Saint-Étienne, France.',
    'about.p2': 'I make images for brands, bars and events: photos, short films, reels and posters. [One or two more sentences about how you work.]',
    'about.btnTouch': 'Get in touch →', 'about.btnWork': 'See my work',
    'about.clients': 'They trusted me', 'about.more': 'and more to come', 'about.logo': '[Client logo]',
    'contact.title': 'Contact', 'contact.desc': 'Get in touch with Anthony Mure for photography, video or content creation projects in Saint-Étienne.',
    'contact.h1a': 'Let’s', 'contact.h1b': 'talk', 'contact.lead': 'A shoot, a film, a monthly content plan? Tell me about it.',
    'contact.formAria': 'Contact form', 'contact.name': 'Name', 'contact.namePh': 'Your name', 'contact.email': 'Email',
    'contact.type': 'Project type', 'contact.t.photo': 'Photography', 'contact.t.video': 'Video', 'contact.t.content': 'Content creation', 'contact.t.other': 'Something else',
    'contact.message': 'Message', 'contact.messagePh': 'What, when, where — anything that helps.', 'contact.noBrief': 'no long brief needed ✓',
    'contact.send': 'Send message →', 'contact.done': 'message received!', 'contact.thanks': 'Thanks — I’ll get back to you within [DELAY].', 'contact.again': 'Send another message',
    'contact.required': 'Required.', 'contact.invalidEmail': 'Enter a valid email address.',
    'contact.fallback': 'Your email app should open with the message ready to send. If nothing happens, write to mure.anthony@gmail.com.',
    'contact.error': 'Something went wrong. Please email mure.anthony@gmail.com directly.', 'contact.subject': 'Project: ',
    'legal.title': 'Legal notice', 'legal.desc': 'Legal notice for the Anthony Mure portfolio website.',
    'legal.publisher': 'Publisher', 'legal.publisherText': 'Anthony Mure, [status / company name], [SIRET], [address], Saint-Étienne, France.', 'legal.email': 'Email',
    'legal.hosting': 'Hosting', 'legal.hostingText': '[Hosting provider name and address]', 'legal.ip': 'Intellectual property', 'legal.data': 'Personal data', 'legal.tbd': '[Text to be provided]',
  },
} as const;

export type Key = keyof typeof ui.fr;
export function useT(lang: Lang) {
  return (key: Key, vars: Record<string, string | number> = {}) =>
    Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), ui[lang][key] as string);
}
