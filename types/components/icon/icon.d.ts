import { LitElement } from 'lit';
export declare class Icon extends LitElement {
    name: string;
    getSvg(name: string): Promise<import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/unsafe-svg").UnsafeSVGDirective>>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
