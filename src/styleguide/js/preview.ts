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

import(`../components/${getTemplateName()}.ts`).then((module) => {
  const { template } = module;
  const app = document.getElementById('app')!;
  render(template(), app);
});
