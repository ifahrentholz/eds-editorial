import { LitElement, nothing } from 'lit';
interface SidebarContactTemplateArgs {
    headline?: string;
    text?: string;
    contacts: Contact[];
}
interface Contact {
    contactIcon?: string;
    contactMarkup?: string;
}
export declare class SidebarContact extends LitElement {
    contactTemplateArgs: SidebarContactTemplateArgs;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchContactData(): Promise<void>;
    renderHeader(headline?: string): typeof nothing | import("lit-html").TemplateResult<1>;
    renderText(text?: string): typeof nothing | import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
export {};
