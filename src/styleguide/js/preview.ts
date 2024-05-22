import { render } from 'lit';

/* const styleguideDummyData = {
  interface TemplateArgs {
    headers: string[];
    data: string [][];
  }
}
*/

const getTemplateName = () => {
  const url = new URLSearchParams(window.location.search);
  const templateName = url.get('template');
  return templateName;
};

import(`../components/${getTemplateName()}.ts`).then(async (module) => {
  const { template } = module;
  const app = document.getElementById('app')!;
  const html = await template();
  render(html, app);
  // initialize the main js but after the markup is rendered
  const mainScript = '/dist/main/main.js';
  await import(mainScript);
});
