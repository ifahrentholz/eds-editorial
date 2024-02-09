import { LitElement, PropertyValueMap } from 'lit';
export interface FormTemplateArgs {
    shared: Shared;
    states: StatesCol;
}
export interface Shared {
    data: SharedData[];
}
export interface SharedData {
    name: string;
    type: string;
    placeholder: string;
    gender: string;
    robots: string;
}
export interface StatesCol {
    data: StatesColData[];
}
export interface StatesColData {
    option: string;
    value: string;
}
interface FormTemplateData {
    detailsCol: SharedData[];
    statesCol: StatesColData[];
}
export declare class FormComponent extends LitElement {
    formData: FormTemplateData;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
    fetchFormData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
