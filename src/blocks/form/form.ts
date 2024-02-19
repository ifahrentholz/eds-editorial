import { html, nothing, render } from 'lit';
import { fetchJson } from '../../utils/fetch';
import { SheetsResponse } from '../../shared.types';

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

const parseFieldData = (item: any): FormField => {
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

const fetchFormData = async (pathname) => {
  const data: SheetsResponse = await fetchJson(pathname);
  const detailsData = data.data.map((item: any) => parseFieldData(item));
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

const renderField = (field: FormField) => {
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

function generatePayload(form) {
  const payload = {};

  [...form.elements].forEach((field) => {
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

function handleSubmitError(form, error) {
  // eslint-disable-next-line no-console
  console.error(error);
  form.querySelector('button[type="submit"]').disabled = false;
}

async function handleSubmit(form) {
  if (form.getAttribute('data-submitting') === 'true') return;

  const submit = form.querySelector('button[type="submit"]');
  try {
    form.setAttribute('data-submitting', 'true');
    submit.disabled = true;

    // create payload
    const payload = generatePayload(form);
    const response = await fetch(form.dataset.action, {
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
    handleSubmitError(form, e);
  } finally {
    form.setAttribute('data-submitting', 'false');
    form.reset.click();
    submit.disabled = false;
  }
}

export default async function decorate(block) {
  const formLink = block.querySelector('a[href$=".json"]');
  if (!formLink) return;

  const { pathname } = new URL(formLink);
  const formData = await fetchFormData(pathname);

  block.innerHTML = '';
  block.style.removeProperty('display');
  render(template(formData), block);

  const form = block.querySelector('form');
  form.dataset.action = pathname.split('.json')[0];
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = form.checkValidity();
    if (valid) {
      handleSubmit(form);
    } else {
      const firstInvalidEl = form.querySelector(':invalid:not(fieldset)');
      if (firstInvalidEl) {
        firstInvalidEl.focus();
        firstInvalidEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
