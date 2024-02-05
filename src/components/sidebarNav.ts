import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

type SiteMapEntry = {
  path: string;
  title: string;
  description: string;
  lastModified: string; // Assuming this is a string representing a timestamp
  image: string;
  imagealt: string;
  navtitle: string;
  'nav-test': string;
  imageAlt: string;
};

type MenuItem = {
  path: string;
  navtitle: string;
};

type Sitemap = SiteMapEntry[];

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    const sitemap = await this.fetchSitemap();
    const items = this.groupByFirstLevelPath(sitemap);
    console.log('navItems', items);
  }

  render() {
    return html` <nav id="menu">
      <header class="major">
        <h2>Menu</h2>
      </header>
      ${this.renderMenuItems()}
    </nav>`;
  }

  private renderMenuItems() {
    return html` <ul>
      <li><a href="index.html">Homepage</a></li>
      <li><a href="generic.html">Generic</a></li>
      <li><a href="elements.html">Elements</a></li>
      <li>
        <span class="opener">Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Etiam Dolore</a></li>
      <li><a href="#">Adipiscing</a></li>
      <li>
        <span class="opener">Another Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Maximus Erat</a></li>
      <li><a href="#">Sapien Mauris</a></li>
      <li><a href="#">Amet Lacinia</a></li>
    </ul>`;
  }

  private async fetchSitemap(): Promise<Sitemap> {
    const response = await fetch(`${window.hlx.codeBasePath}/query-index.json`);
    const json = await response.json();
    return json.data;
  }

  private getSubmenuName = (entry: SiteMapEntry) => {
    return entry.path.split('/')[1];
  };

  groupByFirstLevelPath = (data: Sitemap) => {
    const groups = {};
    data.forEach((item) => {
      const firstLevelPath = this.getSubmenuName(item); // Extracting the first level of the path
      if (!groups[firstLevelPath]) {
        groups[firstLevelPath] = [];
      }
      groups[firstLevelPath].push({
        path: item.path,
        navtitle: item.navtitle,
      });
    });

    const groupedData = Object.values(groups);

    return groupedData.map((group: MenuItem[]) => {
      if (group.length === 1) {
        return group[0];
      }

      return {
        navtitle: group[0].path.split('/')[1], // posts
        children: group,
      };
    });
  };
}
