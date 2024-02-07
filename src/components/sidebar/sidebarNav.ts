import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../icon';
import { SheetService, SiteMapEntry } from '../../services/sheet.service.ts';

interface SubMenuItem {
  path: string;
  navtitle: string;
}

interface MenuItem {
  path: string;
  navtitle: string;
  children?: SubMenuItem[];
}

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
  @state()
  items: MenuItem[];
  private sheetService: SheetService;

  constructor() {
    super();
    this.sheetService = new SheetService();
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async firstUpdated() {
    this.items = await this.groupByFirstLevelPath();
  }

  render() {
    if (!this.items) return;
    return html` <nav id="menu">
      <header class="major">
        <h2>Menu</h2>
      </header>
      ${this.renderMenuItems()}
    </nav>`;
  }

  private toggleSubmenu({ currentTarget }: Event) {
    if (!(currentTarget instanceof HTMLElement) || !currentTarget.classList.contains('opener')) return;
    currentTarget.classList.toggle('active');
  }

  private renderSubMenu(item) {
    return html`<span @click="${this.toggleSubmenu}" class="opener submenu">
        <span class="submenu__text">${item.navtitle} </span>
        <icon-component class="submenu__icon" name="chevron-down"></icon-component>
      </span>
      <ul>
        ${item.children.map((child) => html` <li><a href="${child.path}">${child.navtitle}</a></li>`)}
      </ul>`;
  }

  private renderMenuItem(item) {
    return html` <li>
      ${item.children !== undefined ? this.renderSubMenu(item) : html`<a href="${item.path}">${item.navtitle}</a>`}
    </li>`;
  }

  private renderMenuItems() {
    return html` <ul>
      ${this.items.map((item) => this.renderMenuItem(item))}
    </ul>`;
  }

  private getSubmenuName = (entry: SiteMapEntry) => {
    return entry.path.split('/')[1];
  };

  private getNavTitle(item: SiteMapEntry) {
    if (item.path === '/') return 'Homepage';
    return item.navtitle || item.title;
  }

  groupByFirstLevelPath = async () => {
    const groups = {};
    const sitemap = await this.sheetService.getSiteMap();

    sitemap.forEach((item) => {
      const firstLevelPath = this.getSubmenuName(item); // Extracting the first level of the path
      if (!groups[firstLevelPath]) {
        groups[firstLevelPath] = [];
      }
      groups[firstLevelPath].push({
        path: item.path,
        navtitle: this.getNavTitle(item),
      });
    });

    const groupedData = Object.values(groups);

    return groupedData.map((group: MenuItem[]) => {
      if (group.length === 1) {
        return group[0];
      }

      return {
        navtitle: group[0].path.split('/')[1],
        path: group[0].path,
        children: group,
      };
    });
  };
}
