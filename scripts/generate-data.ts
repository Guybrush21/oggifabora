import Parser from "rss-parser";
import * as fs from "fs/promises";
import * as path from "path";
import slugify from "slugify";

async function generate() {
  console.log("Generating data...");
  const rssUrl = "https://anchor.fm/s/1011a8694/podcast/rss";

  const parser = new Parser();
  const rss = await parser.parseURL(rssUrl);

  console.log(rss);

  const contentDir = path.join(process.cwd(), "src/data/episodes");
  await fs.mkdir(contentDir, { recursive: true });

  let i = rss.items.length;
  for (const item of rss.items) {
    if (!item.title) throw new Error("Item title is missing");
    if (!item.contentSnippet) throw new Error("Item contentSnippet is missing");
    if (!item.enclosure?.url) throw new Error("Item enclosure URL is missing");

    const slug = slugify(item.title, { lower: true, strict: true });
    const fileName = `${i}-${slug}.md`;

    const markdown = `---
id: ${i}
title: "${item.title}"
description: "${item.contentSnippet}"
url: "${item.enclosure?.url}" 
---`;

    await fs.writeFile(path.join(contentDir, fileName), markdown, {
      flag: "wx", // 'wx' flag to ensure the file is created and not overwritte
    });
    console.log(`Generated file: ${fileName}`);
    i--;
  }
}
await generate();
