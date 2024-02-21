export interface FormField {
    name: string;
    type: any;
    label: string;
    placeholder: string;
    options: string[];
    value?: string;
    required: boolean;
    id: string;
    fieldset: string;
    rows: number;
    class: string;
}
export declare const renderField: (field: FormField) => any;
