import { html, LitElement, PropertyValueMap } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { replaceBySpecifier } from '../utils/replaceBySpecifier.ts';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import FetchService from '../services/fetch.service.ts';
import { renderIcon } from './icon/icon.template.ts';
import { IconName } from '../icons.types.ts';

export interface HeaderResponseData {
  leftCol: LeftCol;
  rightCol: RightCol;
}

export interface LeftCol {
  data: LeftColData[];
}

export interface LeftColData {
  logoText: string;
  logoLink: string;
}

export interface RightCol {
  data: RightColData[];
}

export interface RightColData {
  socialIcon: IconName;
  socialLabel: string;
  socialLink: string;
}

interface HeaderTemplateData {
  leftCol: LeftColData;
  rightCol: RightColData[];
}

@customElement('header-component')
export class HeaderComponent extends LitElement {
  @state()
  headerData: HeaderTemplateData;

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
    } catch (error) {
      console.error('HeaderComponent: ', error);
    }
  }

  render() {
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
