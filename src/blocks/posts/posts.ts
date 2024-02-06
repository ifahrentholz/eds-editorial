import { html, render } from 'lit';
import { createOptimizedPicture } from '../../utils/createOptimizedPicture';
import { fetchData } from '../../utils/fetchData';

interface SheetsResponse<T> {
  type: string;
  data: T[];
  offset: number;
  total: number;
}
interface PostArgs {
  postUrl: string;
  headline?: string;
  text?: string;
  picture: HTMLPictureElement;
}

const postTemplate = (args: PostArgs) => {
  const { postUrl, headline, text, picture } = args;
  return html`
    <article>
      <a href="${postUrl}" class="image">${picture}</a>
      <h3>${headline}</h3>
      <p>${text?.slice(0, 200)}</p>
      <ul class="actions">
        <li><a href="${postUrl}" class="button">More</a></li>
      </ul>
    </article>
  `;
};

const template = (posts: PostArgs[]) => {
  return posts.map((post) => postTemplate(post));
};

export default async function (block: HTMLElement) {
  block.innerHTML = '';

  const response = await fetchData<SheetsResponse<Record<string, string>>>({
    endpoint: 'query-index.json',
    getJson: true,
  });

  const data = response.data.filter((item) => {
    return item.path.includes('/posts');
  });

  const postsPreview = await Promise.all(
    data.map(async (post) => await fetchData<string>({ endpoint: `${post.path}.plain.html` }))
  );

  const postsPreviewHtml = postsPreview.map((res) => {
    var parser = new DOMParser();
    return parser.parseFromString(res, 'text/html');
  });

  const posts = postsPreviewHtml.map((doc, index) => {
    return {
      postUrl: `${window.hlx.codeBasePath}${data[index].path}`,
      headline: doc.querySelector('h1')?.innerText || doc.querySelector('h2')?.innerText,
      text: doc.querySelector('p')?.innerText?.trim(),
      picture: createOptimizedPicture({ src: data[index].image, alt: data[index].imagealt }),
    };
  });

  block.style.removeProperty('display');
  render(template(posts), block);
}
