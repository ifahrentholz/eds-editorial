import { LitElement } from 'lit';
import './sidebarNav.ts';
import './sidebarContact.ts';
import './sidebarFooter.ts';
export declare class SidebarComponent extends LitElement {
    toggle: HTMLAnchorElement;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    private setInitialVisibility;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
