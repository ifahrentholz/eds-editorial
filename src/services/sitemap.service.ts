import { SheetsResponse, Sitemap } from '../shared.types.ts';
import { fetchJson } from "../utils/fetchJson.ts";

export class SitemapService {
  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    return await fetchJson('/query-index.json');
  }
}

export default new SitemapService();