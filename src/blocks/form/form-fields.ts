import { html } from 'lit';

export interface FormField {
  name: string;
  type: any;
  placeholder: string;
  label: string;
  id: string;
  class: string;
  rows?: number;
  options?: string[];
}

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

const renderSubmitField = (field: FormField) => {
  return html`
    <button type="submit" class="${field.class}" id="${field.id}">${field.label ? field.label : field.name}</button>
  `;
};

const renderSelectField = (field: FormField) => {
  return html`
    <select name="${field.name}" id="${field.id}" class="${field.class}">
      ${field.options?.map((option) => html`<option>${option}</option>`)}
    </select>
  `;
};

export const renderField = (field: FormField) => {
  const fieldRenderers = {
    text: renderInputField,
    textarea: renderTextareaField,
    select: renderSelectField,
    button: renderButtonField,
    submit: renderSubmitField,
  };

  const renderer = fieldRenderers[field.type] || renderInputField;
  return renderer.call(this, field);
};
