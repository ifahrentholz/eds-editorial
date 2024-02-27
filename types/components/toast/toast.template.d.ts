import { Toast } from './toast.ts';
export declare const renderToast: (message: string, duration: number, cssClasses?: string) => import("lit-html").TemplateResult<1>;
export declare const createToast: (message: string, duration: number, cssClasses?: string) => Toast;
