export declare class Icon extends HTMLElement {
    shadowRoot: any;
    constructor();
    get name(): string;
    connectedCallback(): void;
    render(): Promise<void>;
    fetchIcon(): Promise<string>;
}
