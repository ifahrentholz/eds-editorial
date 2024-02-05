import { LitElement } from 'lit';
import './sidebarNav.ts';
export declare class SidebarComponent extends LitElement {
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    toggle: HTMLAnchorElement;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
