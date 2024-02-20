import { toClassName } from '../../utils/toClassName';

export interface FormField {
  name: string;
  type: any;
  label: string;
  placeholder: string;
  options: string[];
  value?: string;
  required: boolean;
  id: string;
  fieldset: string;
  rows: number;
  class: string;
}

const ids = [];
const generateFieldId = (field: FormField, suffix = '') => {
  const slug = toClassName(`form-${field.name}${suffix}`);
  ids[slug] = ids[slug] || 0;
  const idSuffix = ids[slug] ? `-${ids[slug]}` : '';
  ids[slug] += 1;
  return `${slug}${idSuffix}`;
};

const setCommonAttributes = (fieldElement, field: FormField) => {
  if (field.id) fieldElement.id = field.id;
  if (field.name) fieldElement.name = field.name;
  if (field.required) fieldElement.required = field.required;
  if (field.placeholder) fieldElement.placeholder = field.placeholder;
  if (field.value) fieldElement.value = field.value;
};

const renderFieldWrapper = (field: FormField) => {
  const fieldWrapper = document.createElement('div');
  if (field.class) fieldWrapper.className = field.class;
  if (field.fieldset) fieldWrapper.dataset.fieldset = field.fieldset;
  return fieldWrapper;
};

const renderFieldset = (field: FormField) => {
  const fieldElement = document.createElement('fieldset');
  fieldElement.className = 'row gtr-uniform';
  setCommonAttributes(fieldElement, field);

  if (field.label) {
    const legend = document.createElement('legend');
    legend.textContent = field.label;
    fieldElement.append(legend);
  }

  const fieldWrapper = renderFieldWrapper(field);
  fieldWrapper.append(fieldElement);

  return { fieldElement, fieldWrapper };
};

const renderHeading = (field: FormField) => {
  const fieldWrapper = renderFieldWrapper(field);
  const level = field.class && field.class.includes('sub-heading') ? 3 : 2;
  const heading = document.createElement(`h${level}`);
  heading.textContent = field.value || field.label;
  heading.id = field.id;
  fieldWrapper.append(heading);
  return { fieldElement: heading, fieldWrapper };
};

const renderLabel = (field: FormField) => {
  const label = document.createElement('label');
  label.id = generateFieldId(field, '-label');
  label.textContent = field.label || field.name;
  label.setAttribute('for', field.id);
  return label;
};

const renderPlaintext = (field: FormField) => {
  const fieldWrapper = renderFieldWrapper(field);
  const text = document.createElement('p');
  text.textContent = field.value || field.label;
  text.id = field.id;
  fieldWrapper.append(text);
  return { fieldElement: text, fieldWrapper };
};

const renderInputField = (field: FormField, hasLabelOnTop = true) => {
  const fieldElement = document.createElement('input');
  fieldElement.type = field.type;
  setCommonAttributes(fieldElement, field);

  const fieldWrapper = renderFieldWrapper(field);
  const label = renderLabel(field);
  fieldElement.setAttribute('aria-labelledby', label.id);

  if (hasLabelOnTop) {
    fieldWrapper.append(label);
    fieldWrapper.append(fieldElement);
  } else {
    fieldWrapper.append(fieldElement);
    fieldWrapper.append(label);
  }

  return { fieldElement, fieldWrapper };
};

const renderTextareaField = (field: FormField) => {
  const fieldElement = document.createElement('textarea');
  setCommonAttributes(fieldElement, field);

  const fieldWrapper = renderFieldWrapper(field);
  const label = renderLabel(field);
  fieldElement.setAttribute('aria-labelledby', label.id);
  fieldWrapper.append(label);
  fieldWrapper.append(fieldElement);

  return { fieldElement, fieldWrapper };
};

const renderCheckboxField = (field: FormField) => {
  const { fieldElement, fieldWrapper } = renderInputField(field, false);
  if (!field.value) fieldElement.value = 'checked';
  return { fieldElement, fieldWrapper };
};

const renderSelectField = (field: FormField) => {
  const select = document.createElement('select');
  setCommonAttributes(select, field);
  const addOption = ({ text, value }) => {
    const option = document.createElement('option');
    option.text = text.trim();
    option.value = value.trim();
    if (option.value === select.value) {
      option.setAttribute('selected', '');
    }
    select.add(option);
    return option;
  };

  if (field.placeholder) {
    const placeholder = addOption({ text: field.placeholder, value: '' });
    placeholder.setAttribute('disabled', '');
  }

  if (field.options) {
    const options = field.options.map((opt) => ({
      text: opt.trim(),
      value: opt.trim().toLowerCase(),
    }));

    options.forEach((opt) => addOption(opt));
  }

  const fieldWrapper = renderFieldWrapper(field);
  fieldWrapper.append(renderLabel(field));
  fieldWrapper.append(select);

  return { fieldElement: select, fieldWrapper };
};

const renderRadioField = (field: FormField) => {
  const { fieldElement, fieldWrapper } = renderInputField(field, false);
  if (!field.value) fieldElement.value = field.label || 'on';
  return { fieldElement, fieldWrapper };
};

const renderButtonField = (field: FormField) => {
  const button = document.createElement('button');
  button.textContent = field.label || field.name;
  button.classList.add(field.class);
  button.type = field.type;

  const fieldWrapper = renderFieldWrapper(field);
  fieldWrapper.append(button);
  return { field: button, fieldWrapper };
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
  submit: renderButtonField,
};

export const renderField = (field: FormField) => {
  field.id = field.id || generateFieldId(field);
  const type = field.type.toLowerCase();
  const renderFieldFunc = FIELD_RENDERER_FUNCTIONS[type] || renderInputField;
  const fieldElements = renderFieldFunc(field);

  return fieldElements.fieldWrapper;
};
