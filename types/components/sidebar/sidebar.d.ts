import { LitElement } from 'lit';
import './sidebarNav.ts';
export declare class SidebarComponent extends LitElement {
    toggle: HTMLAnchorElement;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
