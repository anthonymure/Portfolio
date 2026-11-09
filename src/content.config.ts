import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    slug: z.string(),
    title: z.string(),
    subtitle: z.string(),
    categories: z.array(z.enum(['Photography', 'Video', 'Graphic design'])),
    client: z.string(),
    year: z.string(),
    role: z.string(),
    featured: z.boolean().default(false),
    sticker: z.string().optional(),
    layout: z.string().optional(),
    duration: z.string().optional(),
    context: z.string().optional(),
    knownPosters: z.array(z.string()).optional(),
    tone: z.string().default('#E3D6C3'),
    // Fournis par Anthony : chemin dans /public (ex. /images/new-balance-550/cover.jpg) + texte alt
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    loop: z.string().optional(),
  }),
});
export const collections = { projects };
