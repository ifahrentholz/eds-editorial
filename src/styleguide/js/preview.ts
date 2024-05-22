import { render } from 'lit';
import { BlockService } from '../../services/block.service';
import { MainService } from '../../services/main.service';

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
  const markup = await template();
  render(markup, app);
  const blockService = new BlockService();
  const sectionService = new SectionService(blockService);
  const main = new MainService(sectionService, blockService);
  new BlockService().decorateBlock(markup[0]);
  main.loadBlockModules({
    name: "banner",
    element: markup[0],
  });
});
