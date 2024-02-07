export type SiteMapEntry = {
    path: string;
    title: string;
    description: string;
    lastModified: string;
    image: string;
    imagealt: string;
    navtitle: string;
    'nav-test': string;
    imageAlt: string;
};
export type Sitemap = SiteMapEntry[];
export interface SitemapResponse {
    type: string;
    data: SiteMapEntry[];
    offset: number;
    total: number;
}
