export interface FormField {
    name: string;
    type: 'headline' | 'plaintext' | 'text' | 'button' | 'fieldset' | 'select' | 'toggle' | 'radio' | 'checkbox' | 'textarea' | 'reset' | 'submit';
    label: string;
    placeholder: string;
    options: string[];
    value?: string;
    required?: boolean;
    id: string;
    fieldset?: string;
    class: string;
}
export declare const renderField: (field: FormField) => any;
