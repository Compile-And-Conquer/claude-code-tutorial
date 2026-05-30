import { defineCollection, z } from 'astro:content';

const topicSchema = z.object({
  title: z.string(),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  order: z.number(),
  summary: z.string(),
  proOnly: z.boolean().optional(),
});

const tutorialSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  chapter: z.number(),
  recap: z.string().optional(),
  artifact: z.object({
    filename: z.string(),
    description: z.string(),
    path: z.string(),
  }).optional(),
  refLinks: z.array(z.object({
    href: z.string(),
    title: z.string(),
  })).optional(),
});

export const collections = {
  tier1: defineCollection({ type: 'content', schema: topicSchema }),
  tier2: defineCollection({ type: 'content', schema: topicSchema }),
  tier3: defineCollection({ type: 'content', schema: topicSchema }),
  tutorial: defineCollection({ type: 'content', schema: tutorialSchema }),
};
