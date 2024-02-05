export declare class Icon extends HTMLElement {
    get name(): string;
    connectedCallback(): void;
    render(): Promise<string>;
    fetchIcon(): Promise<string>;
}
