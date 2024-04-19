import { html, render } from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';

const getTemplateName = () => {
  const url = new URLSearchParams(window.location.search);
  const templateName = url.get('template');
  return templateName;
};

import(`./${getTemplateName()}.js`).then((module) => {
  const { template } = module;
  const app = document.getElementById('app');
  render(template(), app);
});
