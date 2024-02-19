import { SheetsResponse, Sitemap } from '../shared.types.ts';
import fetchService from './fetch.service.ts';

export class SitemapService {
  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  getQueryIndex(): Promise<SheetsResponse> {
    return fetchService.fetchJson<SheetsResponse>('/query-index.json');
  }
}

export default new SitemapService();
