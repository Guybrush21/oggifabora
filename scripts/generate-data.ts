import Parser from "rss-parser";
import * as fs from "fs/promises";
import * as path from "path";
import slugify from "slugify";
import yaml from "js-yaml";

import type { Episode } from "../src/content.config";

const args = process.argv.slice(2);
let overwrite = false;

args.forEach((arg, idx) => {
  if (arg === "--overwrite") {
    overwrite = true;
  }
});

const overwriteFlag = overwrite ? "w" : "wx";

const contentDir = path.join(process.cwd(), "src/data/episodes");

async function generate() {
  console.log("Generating data...");
  const rssUrl = "https://anchor.fm/s/1011a8694/podcast/rss";

  const parser = new Parser();
  const rss = await parser.parseURL(rssUrl);

  console.log(rss);

  await fs.mkdir(contentDir, { recursive: true });

  let i = rss.items.length;
  for (const item of rss.items) {
    const episode = parseEpisode(item, i);
    await saveMarkdown(episode);

    await saveImage(episode);

    i--;
  }
}

await generate();

function parseEpisode(item: { [key: string]: any } & Parser.Item, i: number) {
  if (!item.title) throw new Error("Item title is missing");
  if (!item.contentSnippet) throw new Error("Item contentSnippet is missing");
  if (!item.enclosure?.url) throw new Error("Item enclosure URL is missing");
  if (!item.itunes?.image) throw new Error("Item image URL is missing");
  if (!item.isoDate) throw new Error("Item isoDate is missing");
  const episode: Episode = {
    id: i,
    title: item.title,
    description: item.contentSnippet,
    url: item.enclosure.url,
    image: item.itunes.image,
    published: item.isoDate,
    cover: `${i}.${item.itunes.image.split(".").pop()}`,
  };
  return episode;
}

async function saveImage(episode: Episode) {
  const imageResponse = await fetch(episode.image);
  const imageBlob = await imageResponse.blob();
  const imageBuffer = Buffer.from(await imageBlob.arrayBuffer());
  const imageFileName = path.join(
    contentDir,
    `${episode.id}.${episode.image.split(".").pop()}`,
  );
  await fs.writeFile(imageFileName, imageBuffer, { flag: overwriteFlag });
  console.log(`Downloaded image: ${imageFileName} for episode ${episode.id}`);
}

async function saveMarkdown(item: Episode) {
  const slug = slugify(item.title, { lower: true, strict: true });
  const fileName = `${item.id}-${slug}.md`;

  const frontmatter = yaml.dump(
    {
      id: item.id,
      title: item.title,
      description: item.description,
      url: item.url,
      image: item.image,
      published: item.published,
      cover: item.cover,
    },
    { quotingType: '"', forceQuotes: true }, // ensures all strings are quoted
  );

  const markdown = `---\n${frontmatter}---\n`;

  await fs.writeFile(path.join(contentDir, fileName), markdown, {
    flag: overwriteFlag,
  });
  console.log(`Generated markdown file: ${fileName} for episode ${item.id}`);
}
