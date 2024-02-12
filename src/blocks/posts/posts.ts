import { html, nothing, render } from 'lit';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture';

interface PostArgs {
  postUrl: string;
  headline?: string;
  text?: string;
  picture: HTMLPictureElement;
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
  const { postUrl, headline, text, picture } = args;
  return html`
    <article>
      <a href="${postUrl}" class="image">${picture}</a>
      ${renderHeadline(headline)} ${renderText(text)}
      <ul class="actions">
        <li><a href="${postUrl}" class="button">Goto Post</a></li>
      </ul>
    </article>
  `;
};

const template = (posts: PostArgs[]) => {
  return posts.map((post) => postTemplate(post));
};

export default async function (block: HTMLElement) {
  block.innerHTML = '';

  const req = await fetch(`${window.hlx.codeBasePath}/query-index.json`);
  const response = await req.json();

  const data = response.data.filter((item) => {
    return item.path.includes('/posts');
  });

  const postsPreview = await Promise.all(
    data.map(async (post) => {
      const result = await fetch(`${window.hlx.codeBasePath}${post.path}.plain.html`);
      return result.text();
    })
  );

  const postsPreviewHtml = postsPreview.map((res) => {
    var parser = new DOMParser();
    return parser.parseFromString(res, 'text/html');
  });

  // TODO: Candidate for a EDS helper function???
  const getFirstParagraph = (doc: Document): string | undefined => {
    const paragraphs = Array.from(doc.querySelectorAll('p'));
    return paragraphs.find((p) => p.innerText.trim().length > 0)?.innerText || undefined;
  };

  const posts = postsPreviewHtml.map((doc, index) => {
    return {
      postUrl: `${window.hlx.codeBasePath}${data[index].path}`,
      headline: doc.querySelector('h1')?.innerText || doc.querySelector('h2')?.innerText,
      text: getFirstParagraph(doc),
      picture: createOptimizedPicture({
        src: data[index].image,
        alt: data[index].imagealt,
        width: '323',
        height: '199',
      }),
    };
  });

  block.style.removeProperty('display');
  render(template(posts), block);
}
