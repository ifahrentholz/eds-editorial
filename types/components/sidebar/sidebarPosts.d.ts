import { LitElement } from 'lit';
export declare class SidebarPosts extends LitElement {
    private lastThreePosts;
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private getLastThreePosts;
    private fetchSitemap;
    private renderPost;
    private getPosts;
}
