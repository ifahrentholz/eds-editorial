import { fetchJson } from '../utils/fetch.ts';

interface SheetsResponse {
  type: string;
  data: [];
  offset: number;
  total: number;
}

export type Sitemap = SiteMapEntry[];

export type SiteMapEntry = {
  path: string;
  title: string;
  description: string;
  lastModified: string; // Assuming this is a string representing a timestamp
  image: string;
  imagealt: string;
  navtitle: string;
  'nav-test': string;
  imageAlt: string;
};

export class SheetService {
  async getSiteMap():Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    return await fetchJson('/query-index.json');
  }
}
