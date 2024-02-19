export interface FormField {
    name: string;
    type: any;
    placeholder: string;
    label: string;
    id: string;
    class: string;
    rows?: number;
    options?: string[];
}
export declare const renderField: (field: FormField) => any;
