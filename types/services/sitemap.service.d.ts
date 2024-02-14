import { SheetsResponse, Sitemap } from '../shared.types.ts';
export declare class SitemapService {
    private fetchPromis;
    getSiteMap(): Promise<Sitemap>;
    getQueryIndex(): Promise<SheetsResponse>;
}
declare const _default: SitemapService;
export default _default;
