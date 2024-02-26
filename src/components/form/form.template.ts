import { html, nothing } from 'lit';
import { toClassName } from '../../utils/toClassName';
import { ifDefined } from 'lit-html/directives/if-defined.js';

export type FormFieldType =
  | 'headline'
  | 'plaintext'
  | 'text'
  | 'button'
  | 'fieldset'
  | 'select'
  | 'toggle'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'reset'
  | 'submit';

export interface FormField {
  class?: string;
  id?: string;
  name: string;
  label: string;
  fieldset?: string;
  value?: string;
  type: FormFieldType;
}

export interface FormFieldInput extends FormField {
  placeholder?: string;
  required?: boolean;
}

export interface FormFieldSelect extends FormField {
  options: string[];
  required?: boolean;
}

const ids = [];
const generateFieldId = (field: FormField, suffix = '') => {
  const slug = toClassName(`form-${field.name}${suffix}`);
  ids[slug] = ids[slug] || 0;
  const idSuffix = ids[slug] ? `-${ids[slug]}` : '';
  ids[slug] += 1;
  return `${slug}${idSuffix}`;
};

const renderLegend = (legend: string) => {
  return html` <legend>${legend}</legend> `;
};

const renderFieldset = (field: FormField) => {
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      <fieldset class="row gtr-uniform" id="${ifDefined(field.id)}" name="${ifDefined(field.name)}">
        ${field.label ? renderLegend(field.label) : nothing}
      </fieldset>
    </div>
  `;
};

const renderHeading = (field: FormFieldInput) => {
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      ${field.class && field.class.includes('sub-heading')
        ? html`<h3 id="${ifDefined(field.id)}">${field.value || field.label}</h3>`
        : html`<h2 id="${ifDefined(field.id)}">${field.value || field.label}</h2>`}
    </div>
  `;
};

const renderLabel = (id: string, field: FormField) => {
  return html` <label id="${id}" for="${field.id}">${field.label || field.name}</label> `;
};

const renderPlaintext = (field: FormFieldInput) => {
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      <p id="${ifDefined(field.id)}">${field.value || field.label}</p>
    </div>
  `;
};

const renderInputField = (field: FormFieldInput, hasLabelOnTop = true) => {
  const labelId = generateFieldId(field, '-label');
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      ${hasLabelOnTop ? renderLabel(labelId, field) : nothing}
      <input
        id="${ifDefined(field.id)}"
        name="${ifDefined(field.name)}"
        placeholder="${ifDefined(field.placeholder)}"
        value="${ifDefined(field.value)}"
        required="${ifDefined(field.required)}"
        type="${ifDefined(field.type)}"
        aria-labelledby="${labelId}"
      />
      ${!hasLabelOnTop ? renderLabel(labelId, field) : nothing}
    </div>
  `;
};

const renderTextareaField = (field: FormFieldInput) => {
  const labelId = generateFieldId(field, '-label');
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      ${field.label ? renderLabel(labelId, field) : nothing}
      <textarea
        id="${ifDefined(field.id)}"
        name="${ifDefined(field.name)}"
        placeholder="${ifDefined(field.placeholder)}"
        required="${ifDefined(field.required)}"
        aria-labelledby="${labelId}"
      ></textarea>
    </div>
  `;
};

const renderCheckboxField = (field: FormFieldInput) => {
  if (!field.value) field.value = 'checked';
  return renderInputField(field, false);
};

const renderSelectFieldOption = (option: string, selectValue) => {
  const text = option.trim();
  const value = option.trim().toLowerCase() ?? '';
  const selected = value === selectValue ? '' : undefined;
  return html`<option selected="${ifDefined(selected)}" value="${value}">${text}</option>`;
};

const renderSelectField = (field: FormFieldSelect) => {
  const labelId = generateFieldId(field, '-label');
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      ${field.label ? renderLabel(labelId, field) : nothing}
      <select id="${ifDefined(field.id)}" name="${ifDefined(field.name)}" required="${ifDefined(field.required)}">
        ${field.options.map((option) => renderSelectFieldOption(option, field.value))}
      </select>
    </div>
  `;
};

const renderRadioField = (field: FormFieldInput) => {
  if (!field.value) field.value = field.label || 'on';
  return renderInputField(field, false);
};

const renderButtonField = (field: FormField) => {
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      <button class="${ifDefined(field.class)}" type="${ifDefined(field.type)}">${field.label || field.name}</button>
    </div>
  `;
};

const renderResetField = (field: FormFieldInput) => {
  return html`
    <div class="${ifDefined(field.class)}" data-fieldset="${ifDefined(field.fieldset)}">
      <input id="${ifDefined(field.id)}" name="${ifDefined(field.name)}" type="reset" />
    </div>
  `;
};

const FIELD_RENDERER_FUNCTIONS = {
  headline: renderHeading,
  plaintext: renderPlaintext,
  text: renderInputField,
  textarea: renderTextareaField,
  checkbox: renderCheckboxField,
  select: renderSelectField,
  radio: renderRadioField,
  button: renderButtonField,
  fieldset: renderFieldset,
  reset: renderResetField,
  submit: renderButtonField,
};

export const renderField = (field: FormField) => {
  field.id = field.id || generateFieldId(field);
  const type = field.type;
  const renderFieldFunc = FIELD_RENDERER_FUNCTIONS[type] || renderInputField;
  const fieldElements = renderFieldFunc(field);

  return fieldElements;
};
