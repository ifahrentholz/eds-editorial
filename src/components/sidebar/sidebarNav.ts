import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { SheetsResponse, SiteMapEntry } from '../../shared.types';
import FetchService from '../../services/fetch.service.ts';
import { renderIcon } from '../icon/icon.template.ts';

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
        ${renderIcon('chevron-down', 'submenu__icon')}
      </span>
      <ul>
        ${item.children.map((child) => html` <li><a href="${child.path}">${child.navtitle}</a></li>`)}
      </ul>`;
  }

  private renderMenuItem(item: MenuItem) {
    return html` <li>
      ${item.children !== undefined ? this.renderSubMenu(item) : html`<a href="${item.path}">${item.navtitle}</a>`}
    </li>`;
  }

  private renderMenuItems() {
    return html` <ul>
      ${this.items.map((item: MenuItem) => this.renderMenuItem(item))}
    </ul>`;
  }

  private getSubmenuName = (entry: SiteMapEntry) => {
    return entry.path.split('/')[1];
  };

  private getNavTitle(item: SiteMapEntry) {
    if (item.path === '/') return 'Homepage';
    return item.navtitle || item.title;
  }

  private filterNavigation(queryIndex: SiteMapEntry[], filterValues: string[]): MenuItem[] {
    return queryIndex
      .filter((item) => filterValues.every((term) => !item.path.includes(term)))
      .map((item) => ({
        path: item.path,
        navtitle: this.getNavTitle(item),
      }));
  }

  private groupItemsByFirstLevelPath(queryIndex: SiteMapEntry[]): Record<string, SiteMapEntry[]> {
    const groups = {};
    queryIndex.forEach((item) => {
      const firstLevelPath = this.getSubmenuName(item); // Extracting the first level of the path
      if (!groups[firstLevelPath]) {
        groups[firstLevelPath] = [];
      }
      groups[firstLevelPath].push({
        path: item.path,
        navtitle: this.getNavTitle(item),
      });
    });
    return groups;
  }

  groupByFirstLevelPath = async () => {
    let queryIndex: SheetsResponse = await FetchService.fetchJson<SheetsResponse>('/query-index.json');
    const filterValues: string[] = ['sidekick', 'sidekick-library', 'tools', 'development', 'dev-', '__'];

    // filtering out all entries from blacklist from navigation
    const filteredNavigation = this.filterNavigation(queryIndex.data, filterValues);

    queryIndex.data = filteredNavigation as SiteMapEntry[];

    const groupItems = this.groupItemsByFirstLevelPath(queryIndex.data);

    const groupedData = Object.values(groupItems);

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
