import { LitElement, TemplateResult } from 'lit';
export declare class SidebarPosts extends LitElement {
    private lastTreePosts;
    error: string | null;
    private noPostsPlaceholder;
    connectedCallback(): Promise<void>;
    render(): TemplateResult<1> | undefined;
    renderPlaceholder(key: string): Promise<TemplateResult>;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    private getLastThreePosts;
    private renderPost;
    private getPosts;
    private renderPosts;
    private renderHeader;
}
