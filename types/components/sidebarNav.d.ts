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
type MenuItem = {
    path: string;
    navtitle: string;
};
type Sitemap = SiteMapEntry[];
export declare class SidebarNav extends LitElement {
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    private renderMenuItems;
    private fetchSitemap;
    private getSubmenuName;
    groupByFirstLevelPath: (data: Sitemap) => (MenuItem | {
        navtitle: string;
        children: MenuItem[];
    })[];
}
export {};
