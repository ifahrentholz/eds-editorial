import { html, render } from 'lit';

interface PostArgs {
  postUrl: string;
  headline?: string;
  text?: string;
}

const postTemplate = (args: PostArgs) => {
  const { postUrl, headline, text } = args;
  return html`
    <article>
      <a href="${postUrl}" class="image"><img src="images/pic01.jpg" alt="" /></a>
      <h3>${headline}</h3>
      <p>${text}</p>
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

  const req = await fetch(`${window.hlx.codeBasePath}/query-index.json`);
  const response = await req.json();
  const data = response.data
    .filter((item) => {
      return item.path.includes('/posts');
    })
    .map((item) => item.path);

  const postsPreview = await Promise.all(data.map((path) => fetch(`${window.hlx.codeBasePath}${path}.plain.html`)));

  const postsPreviewHtml = postsPreview.map((res) => {
    var parser = new DOMParser();
    return parser.parseFromString(res.text(), 'text/html');
  });

  console.log('postsPreviewHtml', postsPreviewHtml);

  const posts = postsPreviewHtml.map((doc, index) => {
    console.log('doc', doc);
    return {
      postUrl: `${window.hlx.codeBasePath}${data[index]}.html`,
      headline: doc.querySelector('h1')?.innerText || doc.querySelector('h2')?.innerText,
      text: doc.querySelector('p')?.innerText,
    };
  });

  console.log('posts', posts);

  block.style.removeProperty('display');
  render(template(posts), block);
}