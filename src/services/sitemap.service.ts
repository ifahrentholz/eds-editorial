import { SheetsResponse, Sitemap } from '../shared.types.ts';
import { fetchJson } from '../utils/fetchJson.ts';

export class SitemapService {
  private fetchPromis: Promise<SheetsResponse>;

  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    if (this.fetchPromis) return this.fetchPromis; // Ensures only to start one promise for this fetch request at a time
    this.fetchPromis = fetchJson<SheetsResponse>('/query-index.json');
    return this.fetchPromis;
  }
}

export default new SitemapService();
