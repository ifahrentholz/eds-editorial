import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface FormTemplateData {
  detailsCol: FormField[];
}

interface FormField {
  name: string;
  type: 'text' | 'textarea' | 'select' | 'button';
  placeholder: string;
  label: string;
  id: string;
  class: string;
  rows?: number;
  options?: string[];
}

@customElement('form-component')
export class FormComponent extends LitElement {
  @state()
  formData: FormTemplateData | null = null;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.fetchFormData();
  }

  async fetchFormData(): Promise<void> {
    try {
      const response = await fetch('form.json');
      const data = await response.json();
      const detailsData = data.data.map((item: any) => ({
        name: item.name,
        type: item.type,
        placeholder: item.placeholder,
        label: item.label,
        id: item.id,
        class: item.class,
        rows: item.rows || undefined,
        options: item.options ? item.options.split(',').map((option: string) => option.trim()) : undefined,
      }));
      this.formData = { detailsCol: detailsData };
    } catch (error) {
      console.error('FormComponent Error: ', error);
    }
  }

  renderInputField(field: FormField) {
    return html`
      <input
        type="${field.type}"
        name="${field.name}"
        id="${field.id}"
        class="${field.class}"
        placeholder="${field.placeholder}"
      />
    `;
  }

  renderButtonField(field: FormField) {
    return html` <button type="${field.type}" class="${field.class}" id="${field.id}">${field.label}</button> `;
  }
  renderTextareaField(field: FormField) {
    return html`
      <textarea
        name="${field.name}"
        id="${field.id}"
        class="${field.class}"
        placeholder="${field.placeholder}"
        rows="${field.rows || 3}"
      ></textarea>
    `;
  }

  renderSelectField(field: FormField) {
    return html`
      <select name="${field.name}" id="${field.id}" class="${field.class}">
        ${field.options?.map((option) => html`<option>${option}</option>`)}
      </select>
    `;
  }

  render() {
    if (!this.formData) return html``;
    const { detailsCol } = this.formData;

    return html`
      <div style="padding: 35px">
        <h2>Form</h2>
        <form method="post">
          <div class="row gtr-uniform">
            ${detailsCol.map(
              (element) => html`
                <div class="${element.class}">
                  ${this.renderField(element)}
                  <label for="${element.id}">${element.label}</label>
                </div>
              `
            )}
          </div>
        </form>
      </div>
    `;
  }

  renderField(field: FormField) {
    const fieldRenderers = {
      text: this.renderInputField,
      textarea: this.renderTextareaField,
      select: this.renderSelectField,
      button: this.renderButtonField,
    };

    const renderer = fieldRenderers[field.type] || this.renderInputField;
    return renderer.call(this, field);
  }
}
