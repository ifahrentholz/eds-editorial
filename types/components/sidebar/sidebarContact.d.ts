import { LitElement, nothing } from 'lit';
interface SidebarContactTemplateArgs {
    headline: HTMLElement | null;
    text: HTMLElement | null;
    contacts: Contact[];
}
interface Contact {
    icon: HTMLElement | null;
    markup: HTMLElement | null;
}
export declare class SidebarContact extends LitElement {
    contactTemplateArgs: SidebarContactTemplateArgs;
    connectedCallback(): Promise<void>;
    fetchContactsHtml(): Promise<Document>;
    renderHeader(headline: HTMLElement | null): typeof nothing | import("lit-html").TemplateResult<1>;
    renderText(text: HTMLElement | null): typeof nothing | import("lit-html").TemplateResult<1>;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private renderContact;
    private getContactsArgs;
    private getContactTemplateArgs;
    private renderContacts;
    private renderIcon;
    private renderContactMarkup;
}
export {};
