import './table.scss';
interface TemplateArgs {
    headers: string[];
    data: string[][];
}
export declare const template: (args: TemplateArgs) => import("lit-html").TemplateResult<1>;
export default function decorate(block: HTMLElement): void;
export {};
