import { html, nothing, render } from 'lit';
import { fetchJson } from '../../utils/fetch';
import { SheetsResponse } from '../../shared.types';
import { renderField, FormField } from '../form/form-fields';

const parseFieldData = (item: any): FormField => {
  return {
    name: item.name,
    type: item.type,
    label: item.label || undefined,
    placeholder: item.placeholder,
    options: item.options ? item.options.split(',').map((option: string) => option.trim()) : undefined,
    value: item.value || undefined,
    required: item.required && (item.required.toLowerCase() === 'true' || item.required.toLowerCase() === 'x'),
    id: item.id || undefined,
    fieldset: item.fieldset || undefined,
    rows: item.rows || undefined,
    class: item.class,
  };
};

const fetchFormData = async (pathname) => {
  const data: SheetsResponse = await fetchJson(pathname);
  const detailsData = data.data.map((item: any) => parseFieldData(item));
  return detailsData;
};

const template = (templateArgs: FormField[]) => {
  if (!templateArgs) return nothing;

  return html`
    <div style="padding: 35px">
      <form method="post">
        <div class="row gtr-uniform">${templateArgs.map((element) => html`${renderField(element)}`)}</div>
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
    form.reset();
    submit.disabled = false;
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
