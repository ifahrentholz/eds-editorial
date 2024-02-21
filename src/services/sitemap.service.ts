import { SheetsResponse, Sitemap } from '../shared.types.ts';
import FetchService from './fetch.service.ts';

export class SitemapService {
  async getSiteMap(): Promise<Sitemap> {
    return <Sitemap>(await this.getQueryIndex()).data;
  }

  async getQueryIndex(): Promise<SheetsResponse> {
    return await FetchService.fetchJson('/query-index.json', {
      cacheOptions: {
        cacheType: 'runtime',
      },
    });
  }
}

export default new SitemapService();
