import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../utils/fetchData';

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
  socialIcon: string;
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
      const response = await fetchData<HeaderResponseData>({ endpoint: 'header.json', getJson: true });
      this.headerData = { leftCol: response.leftCol.data[0], rightCol: response.rightCol.data };
    } catch (error) {
      console.error('HeaderComponent: ', error);
    }
  }

  render() {
    if (!this.headerData) return;
    const { leftCol, rightCol } = this.headerData;
    return html`
      <a href="${leftCol.logoLink}" class="logo">${leftCol.logoText}</a>
      <ul class="icons">
        ${rightCol.map((item) => {
          return html`
            <li>
              <a href="${item.socialLink}" class="icon brands" aria-label="${item.socialLabel}">
                <icon-component class="header-icon" name="${item.socialIcon}"></icon-component>
                <span class="label">${item.socialLabel}</span></a
              >
            </li>
          `;
        })}
      </ul>
    `;
  }
}
