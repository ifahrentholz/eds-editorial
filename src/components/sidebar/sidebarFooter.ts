import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../../utils/fetchData';

@customElement('sidebar-footer')
export class SidebarFooter extends LitElement {
  @state()
  footerMarkup: HTMLParagraphElement | null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.fetchFooterData();
  }

  async fetchFooterData() {
    const response = await fetchData<string>({ endpoint: 'footer.plain.html' });
    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    this.footerMarkup = responseMarkup.querySelector('p');
  }

  render() {
    if (!this.footerMarkup) return;
    return html`${this.footerMarkup}`;
  }
}
