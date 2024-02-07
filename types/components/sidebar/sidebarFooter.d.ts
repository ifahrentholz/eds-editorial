import { LitElement } from 'lit';
export declare class SidebarFooter extends LitElement {
    footerMarkup: HTMLParagraphElement | null;
    connectedCallback(): void;
    fetchFooterData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
}
