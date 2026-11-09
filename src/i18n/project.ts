import type { Lang } from './ui';
import { categoryLabels } from './ui';

/** Renvoie les champs d'un projet dans la langue demandée (le français surcharge l'anglais de base). */
export function localize(project: any, lang: Lang) {
  const d = project.data;
  const o = lang === 'fr' ? d.fr ?? {} : {};
  return {
    ...d,
    ...o,
    categoryLabels: d.categories.map((c: string) => categoryLabels[c]?.[lang] ?? c),
  } as typeof d & { categoryLabels: string[] };
}
