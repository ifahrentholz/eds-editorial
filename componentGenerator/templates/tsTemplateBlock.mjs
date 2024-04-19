export default function ({ kebabCase }) {
  return `import { html, render } from 'lit';
import './${kebabCase}.scss';

const template = () => {
  return html\`
    <h1>This is a heading.</h1>
    <p>This is text.</p>
  \`;
};

export default function decorate(block: HTMLElement) {
  block.style.removeProperty('display');
  render(template(), block);
}
`;
}
