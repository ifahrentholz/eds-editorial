import { fetchJson } from '../utils/fetch.ts';
import { SheetsResponse, SiteMapEntry } from "../shared.types.ts";



export type Sitemap = SiteMapEntry[];

export class SheetService {
  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    return await fetchJson('/query-index.json');
  }
}
