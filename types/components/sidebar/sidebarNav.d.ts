import { LitElement } from 'lit';
interface SubMenuItem {
    path: string;
    navtitle: string;
}
interface MenuItem {
    path: string;
    navtitle: string;
    children?: SubMenuItem[];
}
export declare class SidebarNav extends LitElement {
    items: MenuItem[];
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    private toggleSubmenu;
    private renderSubMenu;
    private renderMenuItem;
    private renderMenuItems;
    private getSubmenuName;
    private getNavTitle;
    private filterNavigation;
    private groupItemsByFirstLevelPath;
    groupByFirstLevelPath: () => Promise<MenuItem[]>;
}
export {};
