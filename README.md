# Oggi fa bora - Podcast Website

A simple, elegant podcast website built with Astro and Tailwind CSS. This site automatically fetches and displays episode data from your podcast's RSS feed.

![Preview](./preview.png)

## Features

- 🚀 Built with [Astro](https://astro.build) for fast, optimized static site generation
- 💅 Styled with [Tailwind CSS](https://tailwindcss.com) for responsive design
- 📡 Automatic episode data fetching from podcast RSS feed
- 🎧 Audio player for episode streaming
- 📱 Mobile-friendly design
- 🔍 SEO optimized
- 🔄 Easy to update with new episodes
- 📤 GitHub workflow for simple FTP upload

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Guybrush21/oggifabora.git
cd oggifabora
```

2. Install dependencies:

```bash
npm install
```

### Configuration

Update the RSS feed URL in `scripts/generate-data.ts` to point to your podcast feed:

```typescript
const rssUrl = "https://your-podcast-feed-url.com/rss";
```

and then generate episode data:

```bash
npm run generate-data
```

The scripts will not

### Development

Start the development server:

```bash
npm run dev
```

### Building for Production

Generate episode data and build the site:

```bash
npm run build
```

## Project Structure

```
oggifabora/
├── public/             # Static assets
├── scripts/            # Data generation scripts
│   └── generate-data.ts # RSS feed parser
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components
│   ├── content/        # Generated episode content
│   ├── data/           # Generated data files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page components
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json        # Project dependencies
```

## How It Works

The site uses a data pipeline to:

1. Fetch the podcast RSS feed
2. Parse the XML data
3. Generate markdown files for each episode
4. Use Astro to build static pages from these files

## Customization

To customize for your own podcast:

- Update podcast details in `Layout.astro`
- Replace the logo in `src/assets/`
- Adjust the color scheme in `tailwind.config.mjs`

## License

[MIT License](LICENSE)

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- RSS parsing with [rss-parser](https://github.com/rbren/rss-parser)
