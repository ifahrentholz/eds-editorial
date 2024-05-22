export const template = async () => {
  const html = await fetch("https://hlx-feature-foo7--eds-aem--mbehzad.hlx.page/tools/sidekick/blocks/cards.plain.html").then(r => r.text());
 
  const parser = new DOMParser();
  const dom = parser.parseFromString(html, 'text/html');
  const banners = dom.querySelectorAll<HTMLElement>(".cards");
  console.log(banners);
  return banners;
};
 