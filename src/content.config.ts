import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    num: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };