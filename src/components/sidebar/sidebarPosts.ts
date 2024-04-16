import { html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createOptimizedPicture } from 'Utils/createOptimizedPicture.ts';
import FetchService from 'Services/fetch.service.ts';
import { DebuggerService } from '@kluntje/services';
import PlaceholderService from 'Services/placeholder.service.ts';
import { Sitemap, SiteMapEntry } from 'Types/siteMap.types.ts';
import { SheetsResponse } from 'Types/sheetResponse.types.ts';

@customElement('sidebar-posts')
export class SidebarPosts extends LitElement {
  @state()
  private lastTreePosts: Sitemap;

  @state()
  error: string | null = null;

  @state()
  private noPostsPlaceholder: string;

  async connectedCallback() {
    super.connectedCallback();
    const posts = await this.getPosts();
    this.lastTreePosts = this.getLastThreePosts(posts);
    this.noPostsPlaceholder = await PlaceholderService.getPlaceHolder('no posts');
  }

  render() {
    if (!this.lastTreePosts) return;

    return html` ${this.renderHeader()} ${this.renderPosts()} `;

    //TODO: Add overview if more button is needed
    /*
     <ul class="actions">
        <li><a href="#" class="button">More</a></li>
      </ul>
    */
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  private getLastThreePosts(posts: Sitemap) {
    posts.sort((sitemapEntry: SiteMapEntry, nextSitemapEntry: SiteMapEntry) => {
      if (sitemapEntry.lastModified > nextSitemapEntry.lastModified) {
        return -1;
      } else if (sitemapEntry.lastModified < nextSitemapEntry.lastModified) {
        return 1;
      }

      return 0;
    });

    return posts.slice(0, 3);
  }

  private renderPicture(siteMapEntry: SiteMapEntry) {
    const picture = createOptimizedPicture({
      src: siteMapEntry.image,
      alt: siteMapEntry.imagealt,
      width: 336,
      height: 224,
    });
    if (!picture) return nothing;
    return html`<a href="${siteMapEntry.path}" class="image">${picture}</a>`;
  }

  private renderPost(siteMapEntry: SiteMapEntry) {
    return html` <article>
      ${this.renderPicture(siteMapEntry)}
      <p>${siteMapEntry.description}</p>
    </article>`;
  }

  private async getPosts() {
    const endpoint = '/query-index.json';

    try {
      this.error = null;
      const queryIndex = await FetchService.fetchJson<SheetsResponse<SiteMapEntry>>(endpoint);
      return queryIndex.data.filter((item) => item.path.startsWith('/posts'));
    } catch (error) {
      DebuggerService.error(`SidebarPost Component: Error while fetching ${endpoint}`, error);
      this.error = await PlaceholderService.getPlaceHolder('error');
      return [];
    }
  }

  private renderPosts() {
    if (this.error) return html`<div class="error">${this.error}</div>`;
    if (this.lastTreePosts.length === 0) return html`<div>${this.noPostsPlaceholder}</div>`;

    return html`<div class="mini-posts">
      ${this.lastTreePosts.map((siteMapEntry) => this.renderPost(siteMapEntry))}
    </div>`;
  }

  private renderHeader() {
    return html` <header class="major">
      <h2>Newest Posts</h2>
    </header>`;
  }
}
