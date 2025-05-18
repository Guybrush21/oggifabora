import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import spotify from "../assets/spotify.svg";
import applepodcasts from "../assets/applepodcasts.svg";
import amazonmusics from "../assets/amazonmusic.svg";
import type { ExternalLink } from "../types";

export const siteInfo = {
  title: "Oggi fa bora - il podcast su Trieste",
  description:
    "Il podcast che ti racconta quello che fa muovere Trieste e il suo territorio.",
  email: "info@oggifabora.it",
  url: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://www.oggifabora.it",
  image: "/logo.webp",
};

export const socialLinks: ExternalLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/oggifabora.podcast",
    logo: instagram,
  },
  {
    name: "GitHub",
    url: "https://github.com/Guybrush21/oggifabora",
    logo: github,
  },
];

export const podcastLinks: ExternalLink[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/21XphXWp2fuYShhpgzs6pN",
    logo: spotify,
  },
  {
    name: "Amazon Music",
    url: "https://music.amazon.it/podcasts/5a45d986-b520-49a8-90dd-bc7f5135c656/oggi-fa-bora",
    logo: amazonmusics,
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/oggi-fa-bora/id1806491928",
    logo: applepodcasts,
  },
];
