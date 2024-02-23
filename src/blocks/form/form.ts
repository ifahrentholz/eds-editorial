import { html, nothing, render } from 'lit';
import FetchService from '../../services/fetch.service.ts';
import { renderField, FormField, FormFieldType, FormFieldInput, FormFieldSelect } from '../form/form-fields';

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

const parseFieldData = (item: FormElement): FormField | FormFieldInput | FormFieldSelect => {
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
};

const fetchFormData = async (pathname: string) => {
  const data: SheetsResponse = await FetchService.fetchJson(pathname);
  const detailsData = data.data.map((item: FormElement) => parseFieldData(item));
  return detailsData;
};

const template = (templateArgs: FormField[]) => {
  if (!templateArgs) return nothing;

  return html`
    <div>
      <form method="post">
        <div class="row gtr-uniform">${templateArgs.map((element) => html`${renderField(element)}`)}</div>
      </form>
    </div>
  `;
};

function generatePayload(form: HTMLFormElement): FormPayload {
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

function handleSubmitError(form, error) {
  // eslint-disable-next-line no-console
  console.error(error);
  form.querySelector('button[type="submit"]').disabled = false;
}

async function handleSubmit(form: HTMLFormElement) {
  if (form.getAttribute('data-submitting') === 'true') return;

  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  try {
    form.setAttribute('data-submitting', 'true');
    if (submit) submit.disabled = true;

    // create payload
    const action = form.dataset.action ?? '';
    const payload = generatePayload(form);
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
    handleSubmitError(form, e);
  } finally {
    form.setAttribute('data-submitting', 'false');
    form.reset();
    if (submit) submit.disabled = false;
  }
}

export default async function decorate(block: HTMLElement) {
  const formLink = block.querySelector<HTMLElement>('a[href$=".json"]')?.innerText;
  if (!formLink) return;

  const { pathname } = new URL(formLink);
  const formData = await fetchFormData(pathname);

  block.innerHTML = '';
  block.style.removeProperty('display');
  render(template(formData), block);

  const form = block.querySelector('form');
  if (form) {
    // group fields into fieldsets
    const fieldsets = form.querySelectorAll('fieldset');
    fieldsets.forEach((fieldset) => {
      form.querySelectorAll(`[data-fieldset="${fieldset.name}"`).forEach((field) => {
        fieldset.append(field);
      });
    });

    form.dataset.action = pathname.split('.json')[0];
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const valid = form.checkValidity();
      if (valid) {
        handleSubmit(form);
      } else {
        const firstInvalidEl = form.querySelector<HTMLElement>(':invalid:not(fieldset)');
        if (firstInvalidEl) {
          firstInvalidEl.focus();
          firstInvalidEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
