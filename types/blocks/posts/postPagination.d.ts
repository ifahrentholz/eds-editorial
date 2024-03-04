import { LitElement } from 'lit';
import './posts.ts';
export declare class PaginationComponent extends LitElement {
    toggle: HTMLAnchorElement;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    private setInitialVisibility;
    firstUpdated(): void;
    handleToggleClick: (e: Event) => void;
    render(): import("lit-html").TemplateResult<1>;
}
