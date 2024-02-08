import { LitElement } from 'lit';
export declare class SidebarContact extends LitElement {
    private text;
    private headline;
    private contacts;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): Promise<void>;
    fetchContactData(): Promise<string>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    private getContacts;
    private getContactText;
    private getContactMarkup;
    private getHeadline;
    private getContact;
}
