import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import FetchService from '../../services/fetch.service.ts';
import { FormField, FormFieldInput, FormFieldSelect, FormFieldType, renderField } from './form.template.ts';

type FormElement = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  options: string;
  value: string;
  required: string;
  id: string;
  fieldset: string;
  class: string;
};

interface SheetsResponse {
  type: string;
  data: FormElement[];
  offset: number;
  total: number;
}

type FormPayload = Record<string, string>;

@customElement('form-component')
export class Form extends LitElement {
  @state()
  formData: FormField[];

  @property({ type: String })
  pathname: string = '';

  @query('form')
  form: HTMLFormElement;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchFormData();
    this.setFieldsets();
  }

  async fetchFormData() {
    const data: SheetsResponse = await FetchService.fetchJson(this.pathname);
    const detailsData = data.data.map((item: FormElement) => this.parseFieldData(item));
    this.formData = detailsData;
  }

  render() {
    if (!this.formData) return;
    return html`
      <form method="post" data-action="${this.pathname.split('.json')[0]}" @submit="${this.submitForm}">
        <div class="row gtr-uniform">${this.formData.map((element) => html`${renderField(element)}`)}</div>
      </form>
    `;
  }

  setFieldsets() {
    // group fields into fieldsets
    const fieldsets = this.form.querySelectorAll('fieldset');
    fieldsets.forEach((fieldset) => {
      this.form.querySelectorAll(`[data-fieldset="${fieldset.name}"`).forEach((field) => {
        fieldset.append(field);
      });
    });
  }

  parseFieldData(item: FormElement): FormField | FormFieldInput | FormFieldSelect {
    return {
      class: item.class !== '' ? item.class : undefined,
      id: item.id !== '' ? item.id : undefined,
      name: item.name,
      label: item.label,
      fieldset: item.fieldset !== '' ? item.fieldset : undefined,
      value: item.value !== '' ? item.value : undefined,
      type: item.type.toLowerCase() as FormFieldType,
      placeholder: item.placeholder || undefined,
      options: item.options ? item.options.split(',').map((option: string) => option.trim()) : [],
      required: item.required.toLowerCase() === 'true' || item.required.toLowerCase() === 'x' ? true : undefined,
    };
  }

  generatePayload(form: HTMLFormElement): FormPayload {
    const payload = {};

    [...(form.elements as HTMLCollectionOf<HTMLFormElement>)].forEach((field) => {
      if (field.name && field.type !== 'submit' && !field.disabled) {
        if (field.type === 'radio') {
          if (field.checked) payload[field.name] = field.value;
        } else if (field.type === 'checkbox') {
          if (field.checked)
            payload[field.name] = payload[field.name] ? `${payload[field.name]},${field.value}` : field.value;
        } else {
          payload[field.name] = field.value;
        }
      }
    });
    return payload;
  }

  handleSubmitError(form, error) {
    console.error(error);
    form.querySelector('button[type="submit"]').disabled = false;
  }

  submitForm(e: Event) {
    e.preventDefault();
    const valid = this.form.checkValidity();
    if (valid) {
      this.handleSubmit(this.form);
    } else {
      const firstInvalidEl = this.querySelector<HTMLElement>(':invalid:not(fieldset)');
      if (firstInvalidEl) {
        firstInvalidEl.focus();
        firstInvalidEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  async handleSubmit(form: HTMLFormElement) {
    if (form.getAttribute('data-submitting') === 'true') return;

    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    try {
      form.setAttribute('data-submitting', 'true');
      if (submit) submit.disabled = true;

      // create payload
      const action = form.dataset.action ?? '';
      const payload = this.generatePayload(form);
      const response = await fetch(action, {
        method: 'POST',
        body: JSON.stringify({ data: payload }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        console.log(payload);
        if (form.dataset.confirmation) {
          window.location.href = form.dataset.confirmation;
        }
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (e) {
      this.handleSubmitError(form, e);
    } finally {
      form.setAttribute('data-submitting', 'false');
      form.reset();
      if (submit) submit.disabled = false;
    }
  }
}
