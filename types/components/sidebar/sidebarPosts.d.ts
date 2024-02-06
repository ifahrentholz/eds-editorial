import { LitElement } from 'lit';
export interface SheetsResponse<T> {
    type: string;
    data: T;
    offset: number;
    total: number;
}
export declare class SidebarPosts extends LitElement {
    private lastTreePosts;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private getLastThreePosts;
    private fetchSitemap;
    private renderPost;
    private getPosts;
}
