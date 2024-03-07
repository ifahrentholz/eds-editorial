import{j as l,x as i,T as c}from"../__chunks__/lit-element.XkUWx5ik.js";import{P as p,c as y}from"../__chunks__/createOptimizedPicture.qvYhVI7M.js";import{F as h,m}from"../__chunks__/fetch.service.a5x817jL.js";import{o as u}from"../__chunks__/if-defined.JfW-uEqn.js";import{i as w}from"../__chunks__/isSidekickLibraryActive.iN4ARc8o.js";const $=e=>e?i`<h3>${e}</h3>`:c,g=e=>e?e.length>200?i`<p>${e.slice(0,200)}...</p>`:i`<p>${e}</p>`:c,v=(e,t)=>t?i`<a href="${u(e)}" class="image">${t}</a>`:c,x=e=>{const{postUrl:t,headline:r,text:o,picture:a,buttontext:s}=e;return i`<article>${v(t,a)} ${$(r)} ${g(o)}<ul class="actions"><li><a href="${u(t)}" class="button">${s||"Goto Post"}</a></li></ul></article>`},T=async e=>{if(e.length===0){const t=await p.getPlaceHolder("no posts");return i`<article>${t}</article>`}return e.map(t=>x(t))},H=e=>{var r;return(r=Array.from(e.querySelectorAll("p")).find(o=>o.innerText.trim().length>0))==null?void 0:r.innerText};function S(e){try{return h.fetchText(`${e.path}.plain.html`,{cacheOptions:{cacheType:"runtime"}})}catch(t){m.error(`Post Block: Error while fetching ${e.path}.plain.html`,t);return}}function q(e,t,r){var o,a;return{postUrl:w()?void 0:`${window.hlx.codeBasePath}${e[t].path}`,headline:((o=r.querySelector("h1"))==null?void 0:o.innerText)||((a=r.querySelector("h2"))==null?void 0:a.innerText),text:H(r),buttontext:e[t].buttontext,picture:y({src:e[t].image,alt:e[t].imagealt,width:323,height:199})}}async function j(e){e.innerHTML="";const t=new DOMParser;try{const o=(await h.fetchJson("/query-index.json")).data.filter(n=>n.path.includes("/posts")),d=(await Promise.all(o.map(n=>S(n)))).filter(n=>n!==void 0).map(n=>t.parseFromString(n,"text/html")).map((n,P)=>q(o,P,n));e.style.removeProperty("display");const f=await T(d);l(f,e)}catch(r){m.error("Post Block: Error while fetching posts.",r);const o=await p.getPlaceHolder("error"),a=document.createElement("div"),s=i`<article style="width:100%"><p>${o}</p></article>`;l(s,a),e.innerHTML="",e.appendChild(a)}}export{j as default};
//# sourceMappingURL=posts.js.map
