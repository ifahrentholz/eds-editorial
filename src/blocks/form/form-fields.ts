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
  value?: string;
  required: boolean;
}

const renderInputField = (field: FormField) => {
  return html`
    <input
      type="${field.type}"
      name="${field.name}"
      id="${field.id}"
      class="${field.class}"
      placeholder="${field.placeholder}"
      ?required="${field.required}"
    />
  `;
};

const renderTextareaField = (field: FormField) => {
  return html`
    <textarea
      name="${field.name}"
      id="${field.id}"
      class="${field.class}"
      placeholder="${field.placeholder}"
      rows="${field.rows || 3}"
      ?required="${field.required}"
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

const renderRadioField = (field: FormField) => {
  return html`
    <input
      type="radio"
      name="${field.name}"
      id="${field.id}"
      class="${field.class}"
      placeholder="${field.placeholder}"
      value="${field.value ? field.value : 'on'}"
      ?required="${field.required}"
    />
  `;
};

const renderButtonField = (field: FormField) => {
  return html` <button type="${field.type}" class="${field.class}" id="${field.id}">${field.label}</button> `;
};

const renderSubmitField = (field: FormField) => {
  return html`
    <button type="submit" class="${field.class}" id="${field.id}">${field.label ? field.label : field.name}</button>
  `;
};

export const renderField = (field: FormField) => {
  const fieldRenderers = {
    text: renderInputField,
    textarea: renderTextareaField,
    select: renderSelectField,
    radio: renderRadioField,
    checkBox: renderInputField,
    button: renderButtonField,
    submit: renderSubmitField,
  };

  const renderer = fieldRenderers[field.type] || renderInputField;
  return renderer.call(this, field);
};
