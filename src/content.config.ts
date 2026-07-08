import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const builds = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/builds' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    status: z.string().default('Shipped'),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { builds, notes };
