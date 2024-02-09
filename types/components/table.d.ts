import { LitElement } from 'lit';
interface TableTemplateArgs {
    headline: HTMLHeadingElement;
    name: HTMLParagraphElement;
    description: HTMLParagraphElement;
    price: HTMLParagraphElement;
    input: Input[];
}
interface Input {
    tableName: string;
    tableDescription: string;
    tablePrice: string;
}
export declare class Table extends LitElement {
    tableTemplateArgs: TableTemplateArgs;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchTableData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
