import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { fetchText } from '../../utils/fetch.ts';

interface Contact {
  contactIcon: string;
  contactMarkup: string;
}

@customElement('sidebar-contact')
export class SidebarContact extends LitElement {
  @state()
  private text: HTMLParagraphElement;
  @state()
  private headline: HTMLHeadingElement;
  @state()
  private contacts: Contact[];

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    const contactData = await this.fetchContactData();
    const contactMarkup = this.getContactMarkup(contactData);

    this.text = this.getContactText(contactMarkup);
    this.headline = this.getHeadline(contactMarkup);
    this.contacts = this.getContacts(contactMarkup);
  }

  async fetchContactData() {
    return await fetchText('contact.plain.html');
  }

  render() {
    if (!this.contacts) return ;

    return html`
      <section>
        <header class="major">${this.headline}</header>
        ${this.text}
        <ul class="contact">
          ${this.contacts.map((contact) => {
      return html` <li class="icon solid">
              <icon-component name="${contact.contactIcon}"></icon-component>
              ${unsafeHTML(contact.contactMarkup)}
            </li>`;
    })}
        </ul>
      </section>
    `;
  }

  private getContacts(responseMarkup: HTMLDivElement) {
    const contactElements = Array.from(responseMarkup.querySelectorAll('.contact > div:not(:first-child)'));

    return contactElements.map((contactElement) => this.getContact(contactElement));
  }

  private getContactText(contactMarkup) {
    return contactMarkup.querySelector('p') as HTMLParagraphElement;
  }

  private getContactMarkup(contactData) {
    const contactMarkup = document.createElement('div');
    contactMarkup.innerHTML = contactData;

    return contactMarkup;
  }

  private getHeadline(contactMarkup: HTMLDivElement) {
    return contactMarkup.querySelector('h2') as HTMLHeadingElement;
  }

  private getContact(contactElement: Element) {
    return {
      contactIcon: contactElement.querySelector('div')?.innerText as string,
      contactMarkup: contactElement.querySelector('div:last-child')?.innerHTML as string,
    };
  }
}
