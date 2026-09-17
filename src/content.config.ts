import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    category: z.enum(["AI Tools", "Developer Resources", "Design & Icons", "Marketing Tools"]),
    logo: z.string(),
    description: z.string(),
  }),
});

export const collections = { tools };
