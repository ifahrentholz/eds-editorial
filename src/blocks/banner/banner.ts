import { html, render } from "lit";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

interface TemplateArgs {
  headline: string;
  subline: string;
  text: string;
  buttons: HTMLAnchorElement[];
}

const template = ({ headline, subline, text, buttons }: TemplateArgs) => html`
  <section id="banner">
    <div class="content">
      <header>
        <h1>${headline}</h1>
        <p>${subline}</p>
      </header>
      ${unsafeHTML(text)}
      <ul class="actions">
        ${buttons.map(
          (button) =>
            html`<li>
              <a href="${button}" class="button big">Learn More</a>
            </li>`,
        )}
      </ul>
    </div>
    <span class="image object">
      <img src="images/pic10.jpg" alt="" />
    </span>
  </section>
`;

export default function (block: HTMLElement) {
  const firstRow = block.querySelector("div");
  const secondRow = block.children[1];
  const headline = firstRow?.querySelector("h1");
  const subline = firstRow?.querySelector("h3");
  const text = firstRow?.querySelectorAll("p");
  const buttons = secondRow?.querySelectorAll("a");

  console.log({
    firstRow,
    secondRow,
    headline,
    subline,
    text,
    buttons,
  });

  block.style.removeProperty("display");
  render(template, block);
}
