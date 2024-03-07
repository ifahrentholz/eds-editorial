import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture.ts';
import { SheetsResponse, Sitemap, SiteMapEntry } from '../../shared.types.ts';
import FetchService from '../../services/fetch.service.ts';
import { DebuggerService } from '@kluntje/services';
import PlaceholderService from '../../services/placeholder.service.ts';

@customElement('sidebar-posts')
export class SidebarPosts extends LitElement {
  @state()
  private lastTreePosts: Sitemap;

  @state()
  error: string | null = null;

  constructor() {
    super();
  }

  async connectedCallback() {
    super.connectedCallback();
    const posts = await this.getPosts();
    this.lastTreePosts = this.getLastThreePosts(posts);
  }

  render() {
    if (!this.lastTreePosts) return;
    return html`
      <header class="major">
        <h2>Newest Posts</h2>
      </header>
      ${this.lastTreePosts.length === 0 && this.error === null
        ? this.getPlaceholder('no posts')
        : this.lastTreePosts.length === 0 && this.error !== null
          ? html`<div class="error">${this.error}</div>`
          : html`<div class="mini-posts">
              ${this.lastTreePosts.map((siteMapEntry) => this.renderPost(siteMapEntry))}
            </div>`}
    `;

    //TODO: Add overview if more button is needed
    /*
     <ul class="actions">
        <li><a href="#" class="button">More</a></li>
      </ul>
    */
  }

  // TODO: this string is not getting resolved correctly yet
  async getPlaceholder(key: string): Promise<TemplateResult> {
    const placeholder = await PlaceholderService.getPlaceHolder(key);
    return html`<div>${placeholder}</div>`;
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

  private renderPost(siteMapEntry: SiteMapEntry) {
    return html` <article>
      <a href="${siteMapEntry.path}" class="image">
        ${createOptimizedPicture({ src: siteMapEntry.image, alt: siteMapEntry.imagealt, width: 336, height: 224 })}
      </a>
      <p>${siteMapEntry.description}</p>
    </article>`;
  }

  private async getPosts() {
    const endpoint = '/query-index.json';

    try {
      this.error = null;
      const queryIndex = await FetchService.fetchJson<SheetsResponse<SiteMapEntry>>(endpoint);
      return queryIndex.data.filter((item) => item.path.includes('/posts'));
    } catch (error) {
      DebuggerService.error(`SidebarPost Component: Error while fetching ${endpoint}`, error);
      this.error = await PlaceholderService.getPlaceHolder('error');
      return [];
    }
  }
}
