import { LitElement } from 'lit';
export declare class SidebarPosts extends LitElement {
    private lastTreePosts;
    constructor();
    connectedCallback(): Promise<void>;
    render(): import("lit-html").TemplateResult<1> | undefined;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private getLastThreePosts;
    private renderPicture;
    private renderPost;
    private getPosts;
}
