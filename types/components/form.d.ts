import { LitElement } from 'lit';
interface FormTemplateData {
    detailsCol: FormField[];
}
interface FormField {
    name: string;
    type: 'text' | 'textarea' | 'select' | 'button';
    placeholder: string;
    label: string;
    id: string;
    class: string;
    rows?: number;
    options?: string[];
}
export declare class FormComponent extends LitElement {
    formData: FormTemplateData | null;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    connectedCallback(): void;
    fetchFormData(): Promise<void>;
    renderInputField(field: FormField): import("lit-html").TemplateResult<1>;
    renderButtonField(field: FormField): import("lit-html").TemplateResult<1>;
    renderTextareaField(field: FormField): import("lit-html").TemplateResult<1>;
    renderSelectField(field: FormField): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    renderField(field: FormField): any;
}
export {};
