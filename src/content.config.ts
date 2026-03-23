import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    project: z.string().optional(), // e.g. "haven-phone", "paragondao"
    paper_url: z.string().optional(), // link to ResearchGate/arXiv
  }),
})

export const collections = { blog }
