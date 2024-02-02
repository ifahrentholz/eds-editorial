import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class LitCounter extends LitElement {
    /**
     * The number of times the button has been clicked.
     */
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
