import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { fetchText } from '../../utils/fetch.ts';

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
    await this.fetchContactData();
  }

  async fetchContactData() {
    const parser = new DOMParser();
    const contactHtmlString = await fetchText('contact.plain.html');
    const contactHtml = parser.parseFromString(contactHtmlString, 'text/html');

    const headline = contactHtml.querySelector('h2');
    const text = contactHtml.querySelector('p');
    const contactsElement = contactHtml.querySelectorAll('.contact > div:not(:first-child)');
    const contactsArray = Array.from(contactsElement);

    const contacts = this.getContactsArgs(contactsArray);
    const responseMarkup = document.createElement('div');

    responseMarkup.innerHTML = contactHtmlString;

    this.contactTemplateArgs = {
      headline,
      text,
      contacts,
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

  private getContactsArgs(contactsArray: Element[]): Contact[] {
    return contactsArray.map((contactElement) => {
      return {
        contactIcon: contactElement.querySelector('div'),
        contactMarkup: contactElement.querySelector('div:last-child'),
      };
    });
  }
}
