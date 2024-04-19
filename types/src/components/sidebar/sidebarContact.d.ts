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
    error: string | null;
    connectedCallback(): Promise<void>;
<<<<<<<< HEAD:types/components/sidebar/sidebarContact.d.ts
    fetchContactsHtml(): Promise<Document>;
    renderHeader(headline: HTMLElement | null): typeof nothing | import("lit-html").TemplateResult<1>;
    renderText(text: HTMLElement | null): typeof nothing | import("lit-html").TemplateResult<1>;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
========
    fetchContactsHtml(): Promise<Document | null>;
    renderHeader(headline: HTMLElement | null): import("lit-html").TemplateResult<1> | typeof nothing;
    renderText(text: HTMLElement | null): import("lit-html").TemplateResult<1> | typeof nothing;
    render(): import("lit-html").TemplateResult<1> | typeof nothing;
>>>>>>>> origin/develop:types/src/components/sidebar/sidebarContact.d.ts
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private renderContact;
    private getContactsArgs;
    private getContactTemplateArgs;
    private renderContacts;
    private renderIcon;
    private renderContactMarkup;
}
export {};
