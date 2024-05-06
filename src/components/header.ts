import { html, LitElement, PropertyValueMap } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { customElement, state } from 'lit/decorators.js';
import { replaceBySpecifier } from 'Utils/replaceBySpecifier.ts';
import { DebuggerService } from '@kluntje/services';
import { IconName } from 'Types/icons.types.ts';
import PlaceholderService from 'Services/placeholder.service.ts';
import FetchService from 'Services/fetch.service.ts';

import { renderIcon } from './icon/icon.template.ts';

export interface RightColData {
  socialIcon: IconName;
  socialLabel: string;
  socialLink: string;
}

export interface RightCol {
  data: RightColData[];
}

export interface LeftColData {
  logoText: string;
  logoLink: string;
}

export interface LeftCol {
  data: LeftColData[];
}

export interface HeaderResponseData {
  leftCol: LeftCol;
  rightCol: RightCol;
}

interface HeaderTemplateData {
  leftCol: LeftColData;
  rightCol: RightColData[];
}

@customElement('header-component')
export class HeaderComponent extends LitElement {
  @state()
  headerData: HeaderTemplateData;

  @state()
  error: string | null = null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    await this.fetchHeaderData();
  }

  async fetchHeaderData() {
    try {
      const response = await FetchService.fetchJson<HeaderResponseData>('header.json', {
        cacheOptions: { cacheType: 'runtime' },
      });
      this.headerData = { leftCol: response.leftCol.data[0], rightCol: response.rightCol.data };
      this.error = null;
    } catch (error) {
      DebuggerService.error('Header Component: Error while fetching header.json', error);
      this.error = await PlaceholderService.getPlaceHolder('error');
    }
  }

  render() {
    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }
    if (!this.headerData) return;
    const { leftCol, rightCol } = this.headerData;
    const logoText = replaceBySpecifier({ input: leftCol.logoText, htmlTag: 'strong', specifier: ':::' });
    const logoTextHTML = unsafeHTML(logoText);
    return html`
      <a href="${leftCol.logoLink}" class="logo">${logoTextHTML}</a>
      <ul class="icons">
        ${rightCol.map((item) => {
          return html`
            <li>
              <a href="${item.socialLink}" class="icon brands" aria-label="${item.socialLabel}">
                ${renderIcon(item.socialIcon, 'header-icon')}
                <span class="label">${item.socialLabel}</span>
              </a>
            </li>
          `;
        })}
      </ul>
    `;
  }
}
