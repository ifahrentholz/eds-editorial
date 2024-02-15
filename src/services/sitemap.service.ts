import { SheetsResponse, Sitemap } from '../shared.types.ts';
import { fetchJson } from '../utils/fetchJson.ts';

export class SitemapService {
  private fetchPromise: Promise<SheetsResponse>;

  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    // Ensures only to start one promise for this fetch request at a time
    if (this.fetchPromise) return this.fetchPromise;
    this.fetchPromise = fetchJson<SheetsResponse>('/query-index.json');
    return this.fetchPromise;
  }
}

export default new SitemapService();
