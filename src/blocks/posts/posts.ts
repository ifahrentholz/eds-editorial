import { html, nothing, render } from 'lit';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture';
import FetchService from '../../services/fetch.service.ts';
import { SheetsResponse, SiteMapEntry } from '../../shared.types.ts';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { isSidekickLibraryActive } from '../../sidekickHelpers/isSidekickLibraryActive.ts';
import './posts.scss';
import { DebuggerService } from '@kluntje/services';
import PlaceholderService from '../../services/placeholder.service.ts';

interface PostArgs {
  postUrl?: string;
  headline?: string;
  text?: string;
  picture?: HTMLPictureElement;
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

const renderPicture = (postUrl?: string, picture?: HTMLPictureElement) => {
  if (!picture) return nothing;
  return html`<a href="${ifDefined(postUrl)}" class="image">${picture}</a>`;
};

const postTemplate = (args: PostArgs) => {
  const { postUrl, headline, text, picture, buttontext } = args;
  return html`
    <article>
      ${renderPicture(postUrl, picture)} ${renderHeadline(headline)} ${renderText(text)}
      <ul class="actions">
        <li><a href="${ifDefined(postUrl)}" class="button">${buttontext || 'Goto Post'}</a></li>
      </ul>
    </article>
  `;
};

const template = async (posts: PostArgs[]) => {
  if (posts.length === 0) {
    const placeholder = await PlaceholderService.getPlaceHolder('no posts');
    return html` <article>${placeholder}</article> `;
  }
  return posts.map((post) => postTemplate(post));
};

// TODO: Candidate for a EDS helper function???
const findFirstNonEmptyParagraph = (doc: Document): string | undefined => {
  const paragraphs = Array.from(doc.querySelectorAll('p'));
  return paragraphs.find((p) => p.innerText.trim().length > 0)?.innerText;
};

function fetchPost(post: SiteMapEntry) {
  try {
    return FetchService.fetchText(`${post.path}.plain.html`, {
      cacheOptions: {
        cacheType: 'runtime',
      },
    });
  } catch (error) {
    DebuggerService.error(`Post Block: Error while fetching ${post.path}.plain.html`, error);
    return;
  }
}

function createPostEntry(siteMapPostEntries: SiteMapEntry[], index: number, doc: Document) {
  return {
    postUrl: isSidekickLibraryActive() ? undefined : `${window.hlx.codeBasePath}${siteMapPostEntries[index].path}`,
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
}

export default async function (block: HTMLElement) {
  block.innerHTML = '';

  const parser = new DOMParser();
  try {
    const queryIndex = await FetchService.fetchJson<SheetsResponse<SiteMapEntry>>('/query-index.json');
    const siteMapPostEntries = queryIndex.data.filter((item) => item.path.includes('/posts'));
    const postsPreview: (string | undefined)[] = await Promise.all(siteMapPostEntries.map((post) => fetchPost(post)));
    const filteredPostPreview: string[] = postsPreview.filter((preview) => preview !== undefined) as string[];
    const postsPreviewHtml = filteredPostPreview.map((res) => parser.parseFromString(res, 'text/html'));
    const posts = postsPreviewHtml.map((doc, index) => createPostEntry(siteMapPostEntries, index, doc));

    block.style.removeProperty('display');

    const postsTemplate = await template(posts);

    render(postsTemplate, block);
  } catch (error) {
    DebuggerService.error('Post Block: Error while fetching posts.', error);

    const response = await PlaceholderService.getPlaceHolder('error');
    const placeholderBlock = document.createElement('div');
    const errorBlock = html`<article style="width: 100%"><p>${response}</p></article>`;
    render(errorBlock, placeholderBlock);

    block.innerHTML = '';
    block.appendChild(placeholderBlock);
  }
}
