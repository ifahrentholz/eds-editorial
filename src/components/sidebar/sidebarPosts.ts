import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture.ts';
import { SheetService, Sitemap, SiteMapEntry } from '../../services/sheet.service.ts';

@customElement('sidebar-posts')
export class SidebarPosts extends LitElement {
  @state()
  private lastTreePosts: Sitemap;
  private sheetService: SheetService;

  constructor() {
    super();
    this.sheetService = new SheetService();
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

  private renderPost(siteMapEntry: SiteMapEntry) {
    return html` <article>
      <a href="${siteMapEntry.path}" class="image">
        ${createOptimizedPicture({ src: siteMapEntry.image, alt: siteMapEntry.imageAlt })}
      </a>
      <p>${siteMapEntry.description}</p>
    </article>`;
  }

  private async getPosts() {
    const sitemap = await this.sheetService.getSiteMap();
    return sitemap.filter((item) => item.path.includes('/posts'));
  }
}
