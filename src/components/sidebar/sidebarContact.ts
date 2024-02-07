import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { fetchText } from '../../utils/fetch.ts';

interface SidebarContactTemplateArgs {
  headline: HTMLHeadingElement;
  text: HTMLParagraphElement;
  contacts: Contact[];
}

interface Contact {
  contactIcon: string;
  contactMarkup: string;
}

@customElement('sidebar-contact')
export class SidebarContact extends LitElement {
  @state()
  contactTemplateArgs: SidebarContactTemplateArgs;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchContactData();
  }

  async fetchContactData() {
    const response = await fetchText('contact.plain.html');
    const responseMarkup = document.createElement('div');
    responseMarkup.innerHTML = response;
    // TODO: refactor contactTemplateArgs
    this.contactTemplateArgs = {
      headline: responseMarkup.querySelector('h2') as HTMLHeadingElement,
      text: responseMarkup.querySelector('p') as HTMLParagraphElement,
      contacts: Array.from(responseMarkup.querySelectorAll('.contact > div:not(:first-child)')).map((item) => {
        return {
          contactIcon: item.querySelector('div')?.innerText as string,
          contactMarkup: item.querySelector('div:last-child')?.innerHTML as string,
        };
      }),
    };
  }

  render() {
    if (!this.contactTemplateArgs) return;

    const { headline, text, contacts } = this.contactTemplateArgs;

    return html`
      <section>
        <header class="major">${headline}</header>
        ${text}
        <ul class="contact">
          ${contacts.map((item) => {
            return html` <li class="icon solid">
              <icon-component name="${item.contactIcon}"></icon-component>
              ${unsafeHTML(item.contactMarkup)}
            </li>`;
          })}
        </ul>
      </section>
    `;
  }
}
