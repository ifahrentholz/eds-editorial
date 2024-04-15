export type SiteMapEntry = {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  image: string;
  imagealt: string;
  navtitle: string;
  buttontext: string;
};

export type Sitemap = SiteMapEntry[];
