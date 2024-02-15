import { html, nothing, render } from 'lit';

interface FormField {
  name: string;
  type: any;
  placeholder: string;
  label: string;
  id: string;
  class: string;
  rows?: number;
  options?: string[];
}

const createFiled = (item: any): FormField => {
  return {
    name: item.name,
    type: item.type,
    placeholder: item.placeholder,
    label: item.label,
    id: item.id,
    class: item.class,
    rows: item.rows || undefined,
    options: item.options ? item.options.split(',').map((option: string) => option.trim()) : undefined,
  };
};

const fetchFormData = async () => {
  const response = await fetch('form.json');
  const data = await response.json();
  const detailsData = data.data.map((item: any) => createFiled(item));
  return detailsData;
};

const renderInputField = (field: FormField) => {
  return html`
    <input
      type="${field.type}"
      name="${field.name}"
      id="${field.id}"
      class="${field.class}"
      placeholder="${field.placeholder}"
    />
  `;
};

const renderButtonField = (field: FormField) => {
  return html` <button type="${field.type}" class="${field.class}" id="${field.id}">${field.label}</button> `;
};
const renderTextareaField = (field: FormField) => {
  return html`
    <textarea
      name="${field.name}"
      id="${field.id}"
      class="${field.class}"
      placeholder="${field.placeholder}"
      rows="${field.rows || 3}"
    ></textarea>
  `;
};

const renderSelectField = (field: FormField) => {
  return html`
    <select name="${field.name}" id="${field.id}" class="${field.class}">
      ${field.options?.map((option) => html`<option>${option}</option>`)}
    </select>
  `;
};

const template = (templateArgs) => {
  if (!templateArgs) return nothing;

  return html`
    <div style="padding: 35px">
      <h2>Form</h2>
      <form method="post">
        <div class="row gtr-uniform">
          ${templateArgs.map(
            (element) => html`
              <div class="${element.class}">
                ${renderField(element)}
                <label for="${element.id}">${element.label}</label>
              </div>
            `
          )}
        </div>
      </form>
    </div>
  `;
};

const renderField = (field: FormField) => {
  const fieldRenderers = {
    text: renderInputField,
    textarea: renderTextareaField,
    select: renderSelectField,
    button: renderButtonField,
  };

  const renderer = fieldRenderers[field.type] || renderInputField;
  return renderer.call(this, field);
};
export default async function (block: HTMLElement) {
  const formData = await fetchFormData();
  block.style.removeProperty('display');
  render(template(formData), block);
}
