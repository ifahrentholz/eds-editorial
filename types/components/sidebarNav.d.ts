import { LitElement } from 'lit';
type SiteMapEntry = {
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
interface SubMenuItem {
  path: string;
  navtitle: string;
}
interface MenuItem {
  path: string;
  navtitle: string;
  children?: SubMenuItem[];
}
type Sitemap = SiteMapEntry[];
export declare class SidebarNav extends LitElement {
  items: MenuItem[];
  protected createRenderRoot(): HTMLElement | DocumentFragment;
  firstUpdated(): Promise<void>;
  render(): import('lit-html').TemplateResult<1> | undefined;
  private renderSubMenu;
  private renderMenuItem;
  private renderMenuItems;
  private fetchSitemap;
  private getSubmenuName;
  private getNavTitle;
  groupByFirstLevelPath: (data: Sitemap) => MenuItem[];
}
export {};
