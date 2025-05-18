import { defineCollection, z, type ImageFunction } from "astro:content";

import { glob } from "astro/loaders";

const episodeSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    id: z.number().int(),
    description: z.string(),
    url: z.string().url(),
    image: z.string().url(),
    cover: image(),
    published: z.string().datetime(),
  });

export type Episode = z.infer<ReturnType<typeof episodeSchema>>;

const episodes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/episodes/",
  }),
  schema: ({ image }) => episodeSchema(image),
});

export const collections = { episodes };
