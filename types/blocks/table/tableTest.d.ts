import { LitElement } from 'lit';
export declare class LitCounter extends LitElement {
    count: number;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    static styles: import("lit").CSSResult;
}
export default function (block: HTMLElement): void;
declare global {
    interface HTMLElementTagNameMap {
        'lit-counter': LitCounter;
    }
}
