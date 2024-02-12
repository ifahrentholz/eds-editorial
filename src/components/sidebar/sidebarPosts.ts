import { html, LitElement } from 'lit';
import { fetchData } from '../../utils/fetchData.ts';
import { customElement, state } from 'lit/decorators.js';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture.ts';
import { Sitemap, SiteMapEntry, SitemapResponse } from '../../shared.types.ts';

@customElement('sidebar-posts')
export class SidebarPosts extends LitElement {
  @state()
  private lastThreePosts: SiteMapEntry[];

  async connectedCallback() {
    super.connectedCallback();
    const sitemap = await this.fetchSitemap();
    const posts = this.getPosts(sitemap);
    this.lastThreePosts = this.getLastThreePosts(posts);
  }

  render() {
    if (!this.lastThreePosts) return;
    return html`
      <header class="major">
        <h2>Newest Posts</h2>
      </header>
      <div class="mini-posts">${this.lastThreePosts.map((siteMapEntry) => this.renderPost(siteMapEntry))}</div>
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

  private getLastThreePosts(sitemap: Sitemap) {
    sitemap.sort((sitemapEntry: SiteMapEntry, nextSitemapEntry: SiteMapEntry) => {
      if (sitemapEntry.lastModified > nextSitemapEntry.lastModified) {
        return -1;
      } else if (sitemapEntry.lastModified < nextSitemapEntry.lastModified) {
        return 1;
      }

      return 0;
    });

    return sitemap.slice(0, 3);
  }

  private async fetchSitemap() {
    return <Sitemap>(await fetchData<SitemapResponse>({ endpoint: '/query-index.json', getJson: true })).data;
  }

  private renderPost(siteMapEntry: SiteMapEntry) {
    return html` <article>
      <a href="${siteMapEntry.path}" class="image">
        ${createOptimizedPicture({ src: siteMapEntry.image, alt: siteMapEntry.imagealt, width: '336', height: '224' })}
      </a>
      <p>${siteMapEntry.description}</p>
    </article>`;
  }

  private getPosts(sitemap: SiteMapEntry[]) {
    return sitemap.filter((item) => item.path.includes('/posts'));
  }
}
