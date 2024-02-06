import { LitElement, PropertyValueMap } from 'lit';
export declare class SidebarFooter extends LitElement {
    footerMarkup: HTMLParagraphElement | null;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void;
    fetchFooterData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
