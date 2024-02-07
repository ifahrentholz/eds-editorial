import { LitElement } from 'lit';
import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarPosts.ts';
import './sidebarFooter.ts';
export declare class SidebarComponent extends LitElement {
    toggle: HTMLAnchorElement;
    connectedCallback(): void;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private setInitialVisibility;
}
