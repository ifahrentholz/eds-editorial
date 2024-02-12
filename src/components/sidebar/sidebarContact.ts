import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { fetchText } from "../../utils/fetchText.ts";

interface SidebarContactTemplateArgs {
  headline: HTMLElement | null;
  text: HTMLElement | null;
  contacts: Contact[];
}

interface Contact {
  contactIcon: HTMLElement | null;
  contactMarkup: HTMLElement | null;
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
    const contactHtml = await this.fetchContactsHtml();
    this.getContactTemplateArgs(contactHtml);
  }

  async fetchContactsHtml() {
    const parser = new DOMParser();
    const contactHtmlString = await fetchText('contact.plain.html');
    return parser.parseFromString(contactHtmlString, 'text/html');
  }

  render() {
    if (!this.contactTemplateArgs) return;

    const { headline, text, contacts } = this.contactTemplateArgs;

    return html`
      <section>
        <header class="major">${headline}</header>
        ${text}
        <ul class="contact">
          ${contacts.map((contact) => this.renderContact(contact))}
        </ul>
      </section>
    `;
  }

  private renderContact(contact: Contact) {
    return html` <li class="icon solid">
      <icon-component name="${contact.contactIcon?.innerHTML}"></icon-component>
      ${unsafeHTML(contact.contactMarkup?.innerHTML)}
    </li>`;
  }

  private getContactsArgs(contactHtml: Document): Contact[] {
    const contactsElement = contactHtml.querySelectorAll('.contact > div:not(:first-child)');
    const contactsArray = Array.from(contactsElement);

    return contactsArray.map((contactElement) => {
      return {
        contactIcon: contactElement.querySelector('div'),
        contactMarkup: contactElement.querySelector('div:last-child'),
      };
    });
  }

  private getContactTemplateArgs(contactHtml: Document) {
    const headline = contactHtml.querySelector('h2');
    const text = contactHtml.querySelector('p');
    const contacts = this.getContactsArgs(contactHtml);

    this.contactTemplateArgs = {
      headline,
      text,
      contacts,
    };
  }
}
