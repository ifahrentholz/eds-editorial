import { html, nothing, render } from 'lit';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture';
import FetchService from '../../services/fetch.service.ts';
import { SheetsResponse } from '../../shared.types.ts';
import './posts.scss';

interface PostArgs {
  postUrl: string;
  headline?: string;
  text?: string;
  picture: HTMLPictureElement;
  buttontext?: string;
}

const renderHeadline = (headline?: string) => {
  if (!headline) return nothing;
  return html`<h3>${headline}</h3>`;
};

const renderText = (text?: string) => {
  if (!text) return nothing;
  if (text.length > 200) {
    return html`<p>${text.slice(0, 200)}...</p>`;
  }
  return html`<p>${text}</p>`;
};

const postTemplate = (args: PostArgs) => {
  const { postUrl, headline, text, picture, buttontext } = args;
  return html`
    <article>
      <a href="${postUrl}" class="image">${picture}</a>
      ${renderHeadline(headline)} ${renderText(text)}
      <ul class="actions">
        <li><a href="${postUrl}" class="button">${buttontext || 'Goto Post'}</a></li>
      </ul>
    </article>
  `;
};

const template = (posts: PostArgs[]) => {
  return posts.map((post) => postTemplate(post));
};

// TODO: Candidate for a EDS helper function???
const findFirstNonEmptyParagraph = (doc: Document): string | undefined => {
  const paragraphs = Array.from(doc.querySelectorAll('p'));
  return paragraphs.find((p) => p.innerText.trim().length > 0)?.innerText;
};

export default async function (block: HTMLElement) {
  block.innerHTML = '';

  const parser = new DOMParser();
  const queryIndex = await FetchService.fetchJson<SheetsResponse>('/query-index.json');
  const siteMapPostEntries = queryIndex.data.filter((item) => item.path.includes('/posts'));

  const postsPreview = await Promise.all(
    siteMapPostEntries.map(async (post) => await FetchService.fetchText(`${post.path}.plain.html`))
  );

  const postsPreviewHtml = postsPreview.map((res) => parser.parseFromString(res, 'text/html'));
  const posts = postsPreviewHtml.map((doc, index) => {
    return {
      postUrl: `${window.hlx.codeBasePath}${siteMapPostEntries[index].path}`,
      headline: doc.querySelector('h1')?.innerText || doc.querySelector('h2')?.innerText,
      text: findFirstNonEmptyParagraph(doc),
      buttontext: siteMapPostEntries[index].buttontext,
      picture: createOptimizedPicture({
        src: siteMapPostEntries[index].image,
        alt: siteMapPostEntries[index].imagealt,
        width: 323,
        height: 199,
      }),
    };
  });

  block.style.removeProperty('display');
  render(template(posts), block);
}
