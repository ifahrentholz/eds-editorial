import { LitElement } from 'lit';
interface SidebarContactTemplateArgs {
    headline: HTMLHeadingElement;
    text: HTMLParagraphElement;
    contacts: Contact[];
}
interface Contact {
    contactIcon: string;
    contactMarkup: string;
}
export declare class SidebarContact extends LitElement {
    contactTemplateArgs: SidebarContactTemplateArgs;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchContactData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
export {};
