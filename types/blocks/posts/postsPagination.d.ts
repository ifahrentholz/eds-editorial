import { LitElement } from 'lit';
export declare class PaginationComponent extends LitElement {
    toggle: HTMLAnchorElement;
    currentPage: number;
    totalPages: number;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchAndRenderData(): Promise<void>;
    nextPage(): Promise<void>;
    previousPage(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
