import{j as h,x as m}from"../__chunks__/lit-element.XkUWx5ik.js";const u=t=>{const{postUrl:s,headline:n,text:r}=t;return m`
    <article>
      <!-- <a href="${s}" class="image"><img src="images/pic01.jpg" alt="" /></a> -->
      <h3>${n}</h3>
      <p>${r==null?void 0:r.slice(0,200)}</p>
      <ul class="actions">
        <li><a href="${s}" class="button">More</a></li>
      </ul>
    </article>
  `},w=t=>t.map(s=>u(s));async function y(t){t.innerHTML="";const r=(await(await fetch(`${window.hlx.codeBasePath}/query-index.json`)).json()).data.filter(e=>e.path.includes("/posts")).map(e=>e.path),c=(await Promise.all(r.map(async e=>(await fetch(`${window.hlx.codeBasePath}${e}.plain.html`)).text()))).map(e=>{var a=new DOMParser;return a.parseFromString(e,"text/html")}).map((e,a)=>{var o,i,l,p;return{postUrl:`${window.hlx.codeBasePath}${r[a]}`,headline:((o=e.querySelector("h1"))==null?void 0:o.innerText)||((i=e.querySelector("h2"))==null?void 0:i.innerText),text:(p=(l=e.querySelector("p"))==null?void 0:l.innerText)==null?void 0:p.trim()}});t.style.removeProperty("display"),h(w(c),t)}export{y as default};
//# sourceMappingURL=posts.js.map
