import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const episodeSchema = z.object({
  title: z.string(),
  guest: z.string(),
  id: z.number().int(),
  description: z.string(),
  url: z.string().url(),
});

export type Episode = z.infer<typeof episodeSchema>;

const episodes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/episodes/",
  }),
  schema: episodeSchema,
});

export const collections = { episodes };
