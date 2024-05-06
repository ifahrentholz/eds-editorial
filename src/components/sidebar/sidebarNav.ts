import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import FetchService from 'Services/fetch.service.ts';
import { DebuggerService } from '@kluntje/services';
import PlaceholderService from 'Services/placeholder.service.ts';
import { SiteMapEntry } from 'Types/siteMap.types.ts';
import { SheetsResponse } from 'Types/sheetResponse.types.ts';

import { renderIcon } from '../icon/icon.template.ts';

interface SubMenuItem {
  path: string;
  navtitle: string;
}

interface MenuItem {
  path: string;
  error?: string;
  navtitle: string;
  children?: SubMenuItem[];
}

@customElement('sidebar-nav')
export class SidebarNav extends LitElement {
  @state()
  items: MenuItem[];

  @state()
  error: string | null = null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async firstUpdated() {
    this.items = await this.groupByFirstLevelPath();
  }

  async getPlaceholder(key: string): Promise<any> {
    const placeholder = await PlaceholderService.getPlaceHolder(key);
    return placeholder;
  }

  render() {
    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }
    if (!this.items) return;

    return html` <nav id="menu">
      <header class="major">
        <h2>Menu</h2>
      </header>
      ${this.items.length === 0 ? this.getPlaceholder('no menu items') : this.renderMenuItems()}
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
    if (item.error) {
      return html`<p>${item.error}</p>`;
    } else {
      return html` <li>
        ${item.children !== undefined ? this.renderSubMenu(item) : html`<a href="${item.path}">${item.navtitle}</a>`}
      </li>`;
    }
  }

  private renderMenuItems() {
    return html` <ul>
      ${this.items.map((item: MenuItem) => this.renderMenuItem(item))}
    </ul>`;
  }

  private getSubmenuName = (entry: MenuItem) => {
    return entry.path.split('/')[1];
  };

  private getNavTitle(item: MenuItem | SiteMapEntry) {
    if (item.path === '/') return 'Homepage';
    return item['navtitle'] || item['title'];
  }

  private filterNavigation(queryIndex: SiteMapEntry[], filterValues: string[]): MenuItem[] {
    return queryIndex
      .filter((item) => filterValues.every((term) => !item.path.includes(term)))
      .map((item) => ({
        path: item.path,
        navtitle: this.getNavTitle(item),
      }));
  }

  private groupItemsByFirstLevelPath(siteMapEntries: MenuItem[]): Record<string, SiteMapEntry[]> {
    const groups = {};
    siteMapEntries.forEach((item) => {
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

  private async groupByFirstLevelPath() {
    const endpoint = '/query-index.json';
    const filterValues: string[] = ['sidekick', 'sidekick-library', 'tools', 'development', 'dev-', '__'];

    try {
      const queryIndex = await FetchService.fetchJson<SheetsResponse<SiteMapEntry>>(endpoint);

      this.error = null;

      const filteredNavigation = this.filterNavigation(queryIndex.data, filterValues);
      const groupItems = this.groupItemsByFirstLevelPath(filteredNavigation);
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
    } catch (error) {
      DebuggerService.error(`SidebarNav Component: Error while fetching ${endpoint}`, error);
      this.error = await PlaceholderService.getPlaceHolder('error');
      return [];
    }
  }
}
