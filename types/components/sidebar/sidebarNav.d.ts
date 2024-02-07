import { LitElement } from 'lit';
import '../icon';
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
    private sheetService;
    constructor();
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    groupByFirstLevelPath: () => Promise<MenuItem[]>;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private toggleSubmenu;
    private renderSubMenu;
    private renderMenuItem;
    private renderMenuItems;
    private getSubmenuName;
    private getNavTitle;
}
export {};
