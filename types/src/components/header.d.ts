import { LitElement, PropertyValueMap } from 'lit';
<<<<<<<< HEAD:types/components/header.d.ts
import { IconName } from '../icons.types.ts';
========
import { IconName } from 'Types/icons.types.ts';
>>>>>>>> origin/develop:types/src/components/header.d.ts
export interface HeaderResponseData {
    leftCol: LeftCol;
    rightCol: RightCol;
}
export interface LeftCol {
    data: LeftColData[];
}
export interface LeftColData {
    logoText: string;
    logoLink: string;
}
export interface RightCol {
    data: RightColData[];
}
export interface RightColData {
    socialIcon: IconName;
    socialLabel: string;
    socialLink: string;
}
interface HeaderTemplateData {
    leftCol: LeftColData;
    rightCol: RightColData[];
}
export declare class HeaderComponent extends LitElement {
    headerData: HeaderTemplateData;
    error: string | null;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): Promise<void>;
    fetchHeaderData(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
}
export {};
