import { LitElement, PropertyValueMap, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../utils/fetchData';

export interface FormTemplateArgs {
  shared: Shared;
  states: StatesCol;
}

export interface Shared {
  data: SharedData[];
}

export interface SharedData {
  name: string;
  type: string;
  placeholder: string;
  gender: string;
  robots: string;
}

export interface StatesCol {
  data: StatesColData[];
}

export interface StatesColData {
  option: string;
  value: string;
}

interface FormTemplateData {
  detailsCol: SharedData[];
  statesCol: StatesColData[];
}

@customElement('form-component')
export class FormComponent extends LitElement {
  @state()
  formData: FormTemplateData;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
  connectedCallback(): void {
    super.connectedCallback();
    this.fetchFormData();
  }

  protected async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    await this.fetchFormData();
  }

  async fetchFormData() {
    try {
      const response = await fetchData<FormTemplateArgs>({ endpoint: 'form.json', getJson: true });

      this.formData = { statesCol: response.states.data, detailsCol: response.shared.data };
    } catch (error) {
      console.error('HeaderComponent: ', error);
    }
  }
  render() {
    const { detailsCol, statesCol } = this.formData;
    console.log(detailsCol);
    return html`
      <h2>Form</h2>
      <form method="post" action="#">
        <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
            <input
              type="${detailsCol[0].type}"
              name="demo-name"
              id="demo-name"
              value=""
              placeholder="${detailsCol[0].placeholder}"
            />
          </div>
          <div class="col-6 col-12-xsmall">
            <input
              type="${detailsCol[1].type}"
              name="demo-email"
              id="demo-email"
              value=""
              placeholder="${detailsCol[1].placeholder}"
            />
          </div>

          <div class="col-12">
            <select name="demo-category" id="demo-category">
              <option value="">- States -</option>
              ${statesCol.map((state) => {
                return html` <option>${state.option}</option>`;
              })}
            </select>
          </div>
          ${detailsCol.map((element) => {
            const item = element.robots === 'checked';
            return html` <div class="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="demo-priority" ?checked="${item}" />
              <label for="demo-priority-low">${element.gender}</label>
            </div>`;
          })}
          <div class="col-6 col-12-small">
            <input type="checkbox" id="demo-copy" name="demo-copy" />
            <label for="demo-copy">Email me a copy</label>
          </div>
          <div class="col-6 col-12-small">
            <input type="checkbox" id="demo-human" name="demo-human" checked="" />
            <label for="demo-human">I am a human</label>
          </div>
          <div class="col-12">
            <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Send Message" class="primary" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </div>
        </div>
      </form>
    `;
  }
}
