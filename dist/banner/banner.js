import{T as p,j as L,x as h}from"../__chunks__/lit-element.XkUWx5ik.js";import{e as b,i as S,o as $}from"../__chunks__/unsafe-html.U1vgpvJh.js";import{i as y}from"../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";const d=r=>{const t={dataLibraryId:void 0,innerHTML:"",href:""};if(!r)return t;t.innerHTML=r.innerHTML,r instanceof HTMLAnchorElement&&r.href!==""&&(t.href=r.href);const e=r.getAttribute("data-library-id");return y()&&e!==null&&(t.dataLibraryId=e),t};class A extends S{update(t,e){this.part=t;const i=e[0];return this.render(i)}render(t){var c;if(y()===!1)return p;const e=(c=this.part)==null?void 0:c.element,{dataLibraryId:i,href:n}=t;return i&&(e==null||e.setAttribute("data-library-id",i)),i&&(e==null||e.setAttribute("contenteditable","true")),n&&e instanceof HTMLAnchorElement&&(e==null||e.setAttribute("href",n)),p}}const o=b(A),T=r=>{const{headline:t,subline:e,texts:i,buttons:n,picture:c}=r;return h`<div id="banner"><div class="content"><header><h1 ${o(t)}>${t.innerHTML}</h1><p ${o(e)}>${e.innerHTML}</p></header>${i==null?void 0:i.map(a=>h`<p ${o(a)}>${a.innerHTML}</p>`)}<ul class="actions">${n==null?void 0:n.map(a=>h`<li><a href="${a.href}" class="button big" ${o(a)}>${a.innerHTML}</a></li>`)}</ul></div><span class="image object">${c??$(c)}</span></div>`};function M(r){const t=r.querySelector("img");t&&t.setAttribute("loading","eager");const e=r.querySelector("div"),i=r.children[1],n=d(e==null?void 0:e.querySelector("h1")),c=d(e==null?void 0:e.querySelector("h3")),a=e?[...e.querySelectorAll("p")].map(l=>d(l)):[],f=i?[...i.querySelectorAll("a")].map(l=>d(l)):[],s=(e==null?void 0:e.querySelector("picture"))||void 0,u=s==null?void 0:s.querySelector("img");u==null||u.setAttribute("loading","eager"),r.innerHTML="",r.style.removeProperty("display"),L(T({headline:n,subline:c,texts:a,buttons:f,picture:s}),r)}export{M as default};
//# sourceMappingURL=banner.js.map
