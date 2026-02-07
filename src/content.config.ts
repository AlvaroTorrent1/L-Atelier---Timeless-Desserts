import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects collection schema
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    location: z.string(),
    year: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    coverImage: image(),
    galleryImages: z.array(image()).optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
};
