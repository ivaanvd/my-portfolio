import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    id: z.string(),
    num: z.string(),
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    description: z.string(),
    fullDescription: z.string(),
    authors: z.array(z.string()),
    year: z.string(),
    institution: z.string(),
    architecture: z.array(z.string()),
    features: z.array(z.string()),
    tags: z.array(z.string()),
    repoUrl: z.string().url(),
    demoUrl: z.string().url(),
    documentationUrl: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
