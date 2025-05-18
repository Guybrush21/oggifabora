export interface ExternalLink {
  name: string;
  url: string;
  logo?: ImageMetadata;
}

export interface PageInfo {
  title: string;
  description: string;
  url?: string;
  image?: string;
}
