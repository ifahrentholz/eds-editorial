import { LitElement } from 'lit';
interface SidebarContactTemplateArgs {
    headline: HTMLElement | null;
    text: HTMLElement | null;
    contacts: Contact[];
}
interface Contact {
    contactIcon: HTMLElement | null;
    contactMarkup: HTMLElement | null;
}
export declare class SidebarContact extends LitElement {
    contactTemplateArgs: SidebarContactTemplateArgs;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): Promise<void>;
    fetchContactsHtml(): Promise<Document>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    private renderContact;
    private getContactsArgs;
    private getContactTemplateArgs;
}
export {};
