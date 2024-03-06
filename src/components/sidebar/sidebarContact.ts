import { html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import FetchService from '../../services/fetch.service.ts';
import { DebuggerService } from '@kluntje/services';
import PlaceholderService from '../../services/placeholder.service.ts';

interface SidebarContactTemplateArgs {
  headline: HTMLElement | null;
  text: HTMLElement | null;
  contacts: Contact[];
}

interface Contact {
  icon: HTMLElement | null;
  markup: HTMLElement | null;
}

@customElement('sidebar-contact')
export class SidebarContact extends LitElement {
  @state()
  contactTemplateArgs: SidebarContactTemplateArgs;

  @state()
  error: string | null = null;

  async connectedCallback() {
    super.connectedCallback();
    const contactHtml = await this.fetchContactsHtml();
    if (contactHtml !== null) {
      this.getContactTemplateArgs(contactHtml);
    }
  }

  async fetchContactsHtml() {
    const parser = new DOMParser();
    const endpoint = 'contact.plain.html';

    try {
      const contactHtmlString = await FetchService.fetchText(endpoint, {
        cacheOptions: { cacheType: 'runtime' },
      });
      this.error = null;
      return parser.parseFromString(contactHtmlString, 'text/html');
    } catch (error) {
      DebuggerService.error(`SidebarContacts Component: Error while fetching ${endpoint}`, error);
      this.error = await PlaceholderService.getPlaceHolder('error');

      return null;
    }
  }

  renderHeader(headline: HTMLElement | null) {
    if (!headline) return nothing;
    return html`<header class="major">
      <h2>${headline}</h2>
    </header>`;
  }

  renderText(text: HTMLElement | null) {
    if (!text) return nothing;
    return html`<p>${text}</p>`;
  }

  render() {
    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.contactTemplateArgs) return nothing;

    const { headline, text, contacts } = this.contactTemplateArgs;

    return html`
      <section>${this.renderHeader(headline)} ${this.renderText(text)} ${this.renderContacts(contacts)}</section>
    `;
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  private renderContact(contact: Contact) {
    const { icon, markup } = contact;
    if (!icon && !markup) return nothing;

    return html` <li class="icon solid">${this.renderIcon(icon)} ${this.renderContactMarkup(markup)}</li>`;
  }

  private getContactsArgs(contactHtml: Document): Contact[] {
    const contactsElement = contactHtml.querySelectorAll('.contact > div:not(:first-child)');
    const contactsArray = Array.from(contactsElement);

    return contactsArray.map((contactElement) => {
      return {
        icon: contactElement.querySelector('div'),
        markup: contactElement.querySelector('div:last-child'),
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

  private renderContacts(contacts: Contact[]) {
    if (contacts.length === 0) return nothing;
    return html`<ul class="contact">
      ${contacts.map((contact) => this.renderContact(contact))}
    </ul>`;
  }

  private renderIcon(icon: HTMLElement | null) {
    if (!icon) return nothing;
    return html`<icon-component class="icon-component" name="${icon.innerHTML}"></icon-component>`;
  }

  private renderContactMarkup(markup: HTMLElement | null) {
    if (!markup) return nothing;
    return unsafeHTML(markup.innerHTML);
  }
}
