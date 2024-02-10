/*import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { fetchData } from '../utils/fetchData';

interface FormTemplateArgs {
  userDetails: UserDetails;
  states: StatesCol;
}

interface UserDetails {
  data: UserDetailsData[];
}

interface UserDetailsData {
  name: string;
  type: string;
  placeholder: string;
  gender: string;
  robots: string;
}

interface StatesCol {
  data: StatesColData[];
}

interface StatesColData {
  option: string;
  value: string;
}

interface FormTemplateData {
  detailsCol: UserDetailsData[];
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

  protected async firstUpdated(): Promise<void> {
    await this.fetchFormData();
  }

  async fetchFormData(): Promise<void> {
    try {
      const response = await fetchData<FormTemplateArgs>({ endpoint: 'form.json', getJson: true });
      this.formData = { statesCol: response.states.data, detailsCol: response.shared.data };
    } catch (error) {
      console.error('FormComponent Error: ', error);
    }
  }

  render() {
    if (!this.formData) return html``; // Return an empty template if formData is not yet available
    const { detailsCol, statesCol } = this.formData;

    return html`
      <h2>Form</h2>
      <form method="post" action="#">
        <div class="row gtr-uniform">
          ${detailsCol.map(
            (element) => html`
              <div class="col-6 col-12-xsmall">
                <input
                  type="${element.type}"
                  name="${element.name}"
                  id="${element.name}"
                  value=""
                  placeholder="${element.placeholder}"
                />
              </div>
            `
          )}
          <div class="col-12">
            <select name="demo-category" id="demo-category">
              <option value="">- States -</option>
              ${statesCol.map((state) => html` <option>${state.option}</option> `)}
            </select>
          </div>
          ${detailsCol.map(
            (element) => html`
              <div class="col-4 col-12-small">
                <input
                  type="radio"
                  id="${element.name}"
                  name="${element.name}"
                  ?checked="${element.robots === 'checked'}"
                />
                <label for="${element.name}">${element.gender}</label>
              </div>
            `
          )}
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
*/
