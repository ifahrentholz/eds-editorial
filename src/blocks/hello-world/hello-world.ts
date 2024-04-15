import { html, render, TemplateResult } from 'lit';

/**
 * These are the imported styles for the block.
 * They need to be imported so that Vite will bundle them as chunks that can be loaded.
 * Otherwise, the styles would not be built into the dist directory.
 */
import './hello-world.scss';
import { renderIcon } from '../../components/icon/icon.template.ts';

interface HelloWorldArgs {
  message: string;
}

/**
 * The block rows enum is used to avoid magic numbers,
 * and makes it easier to change the index of your block argument in each row.
 * It mirrors the table/block structure you created in Google Docs.
 */
enum blockRows {
  message,
}

/**
 * The template function is used to generate the markup for your block and
 * respond to the arguments coming from your table/block.
 * @param {HelloWorldArgs}
 */
const template = ({ message }: HelloWorldArgs): TemplateResult => {
  return html`<div class="container">
    <div class="hello-world">
      <h1>Hello, World!</h1>
      <p>Welcome to your first EDS Block. ${renderIcon('rocket-lunch')}</p>
      <p class="message">This message comes from your block: ${message}</p>
    </div>
  </div>`;
};

/**
 * Each block has an exported default function. It receives the raw block
 * provided by EDS and is used to extract the arguments from it.
 * @param {HTMLImageElement} block The raw block element provided by EDS.
 */
export default function (block: HTMLImageElement) {
  const args = {
    message: getChildNodeText(block, blockRows.message),
  };

  render(template(args), block);
}
