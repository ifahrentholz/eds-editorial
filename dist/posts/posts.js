import{j as h,x as s,T as m}from"../__chunks__/lit-element.XkUWx5ik.js";import{F as u,c as P,m as y,P as d}from"../__chunks__/createOptimizedPicture.YMTWlJc7.js";const $=e=>e?s`<h3>${e}</h3>`:m,g=e=>e?e.length>200?s`<p>${e.slice(0,200)}...</p>`:s`<p>${e}</p>`:m,w=e=>{const{postUrl:a,headline:n,text:t,picture:i,buttontext:c}=e;return s`<article><a href="${a}" class="image">${i}</a> ${$(n)} ${g(t)}<ul class="actions"><li><a href="${a}" class="button">${c||"Goto Post"}</a></li></ul></article>`},x=e=>e.length===0?s`<article>${d.getPlaceHolder("no posts")}</article>`:e.map(a=>w(a)),T=e=>{var n;return(n=Array.from(e.querySelectorAll("p")).find(t=>t.innerText.trim().length>0))==null?void 0:n.innerText};async function q(e){e.innerHTML="";const a=new DOMParser;try{const t=(await u.fetchJson("/query-index.json")).data.filter(r=>r.path.includes("/posts")),f=(await Promise.all(t.map(r=>u.fetchText(`${r.path}.plain.html`,{cacheOptions:{cacheType:"runtime"}})))).map(r=>a.parseFromString(r,"text/html")).map((r,o)=>{var l,p;return{postUrl:`${window.hlx.codeBasePath}${t[o].path}`,headline:((l=r.querySelector("h1"))==null?void 0:l.innerText)||((p=r.querySelector("h2"))==null?void 0:p.innerText),text:T(r),buttontext:t[o].buttontext,picture:P({src:t[o].image,alt:t[o].imagealt,width:323,height:199})}});e.style.removeProperty("display"),h(x(f),e)}catch{y.error("Error");const t=await d.getPlaceHolder("error"),i=document.createElement("div");h(s`<article style="width:100%"><p>${t}</p></article>`,i),e.innerHTML="",e.appendChild(i)}}export{q as default};
//# sourceMappingURL=posts.js.map
