import { html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture.ts';
import { SheetsResponse, Sitemap, SiteMapEntry } from '../../shared.types.ts';
import FetchService from '../../services/fetch.service.ts';

@customElement('sidebar-posts')
export class SidebarPosts extends LitElement {
  @state()
  private lastTreePosts: Sitemap;

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
      <div class="mini-posts">${this.lastTreePosts.map((siteMapEntry) => this.renderPost(siteMapEntry))}</div>
    `;

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
    const queryIndex = await FetchService.fetchJson<SheetsResponse>('/query-index.json');
    return queryIndex.data.filter((item) => item.path.startsWith('/posts'));
  }
}
