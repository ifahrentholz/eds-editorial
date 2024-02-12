import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../../utils/fetchData';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { undefinedOnEmpty } from '../../utils/undefinedOnEmpty';

interface SidebarContactTemplateArgs {
  headline?: string;
  text?: string;
  contacts: Contact[];
}

interface Contact {
  contactIcon?: string;
  contactMarkup?: string;
}

@customElement('sidebar-contact')
export class SidebarContact extends LitElement {
  @state()
  contactTemplateArgs: SidebarContactTemplateArgs;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchContactData();
  }

  async fetchContactData() {
    const response = await fetchData<string>({ endpoint: 'contact.plain.html' });
    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    this.contactTemplateArgs = {
      headline: undefinedOnEmpty(responseMarkup.querySelector('h2')?.innerText || ''),
      text: undefinedOnEmpty(responseMarkup.querySelector('p')?.innerText || ''),
      contacts: Array.from(responseMarkup.querySelectorAll('.contact > div:not(:first-child)')).map((item) => {
        return {
          contactIcon: undefinedOnEmpty(item.querySelector('div')?.innerText || ''),
          contactMarkup: undefinedOnEmpty(item.querySelector('div:last-child')?.innerHTML || ''),
        };
      }),
    };
  }

  renderHeader(headline?: string) {
    if (!headline) return nothing;
    return html`<header class="major"><h2>Contact</h2></header>`;
  }

  renderText(text?: string) {
    if (!text) return nothing;
    return html`<p>${text}</p>`;
  }

  render() {
    if (!this.contactTemplateArgs) return;
    const { headline, text, contacts } = this.contactTemplateArgs;
    return html`
      <section>
        ${this.renderHeader(headline)} ${this.renderText(text)}
        <ul class="contact">
          ${contacts.map((item) => {
            return html` <li class="icon solid">
              <icon-component class="icon-component" name="${item.contactIcon}"></icon-component>
              ${unsafeHTML(item.contactMarkup)}
            </li>`;
          })}
        </ul>
      </section>
    `;
  }
}
