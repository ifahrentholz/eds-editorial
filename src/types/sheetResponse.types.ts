import { SiteMapEntry } from './siteMap.types.ts';

export interface SheetsResponse {
  type: string;
  data: SiteMapEntry[];
  offset: number;
  total: number;
}
