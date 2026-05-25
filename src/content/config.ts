import { defineCollection, z } from 'astro:content';

const topicSchema = z.object({
  title: z.string(),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  order: z.number(),
  summary: z.string(),
  proOnly: z.boolean().optional(),
});

export const collections = {
  tier1: defineCollection({ type: 'content', schema: topicSchema }),
  tier2: defineCollection({ type: 'content', schema: topicSchema }),
  tier3: defineCollection({ type: 'content', schema: topicSchema }),
};
