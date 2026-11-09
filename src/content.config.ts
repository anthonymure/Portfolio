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
    fr: z.object({ title: z.string(), subtitle: z.string(), client: z.string(), year: z.string(), role: z.string(), context: z.string(), sticker: z.string() }).partial().default({}),
    tone: z.string().default('#E3D6C3'),
    // Fournis par Anthony : chemin dans /public (ex. /images/new-balance-550/cover.jpg) + texte alt
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    loop: z.string().optional(),
    vimeo: z.string().optional(), // ID Vimeo (ex. '123456789')
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), wide: z.boolean().default(false) })).default([]),
  }),
});
export const collections = { projects };
