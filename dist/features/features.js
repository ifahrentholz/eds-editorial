import{j as s,x as c}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as a}from"../__chunks__/unsafe-html.dKgBHtsI.js";import"../__chunks__/icon.tfEDDx5q.js";import"../__chunks__/property.0daVBkvz.js";const p=n=>c`${n.map(e=>c`<article><span class="icon"><icon-component class="icon-wc" name="${e.icon}"></icon-component></span><div class="content">${a(e.textBlock)}</div></article>`)}`;function u(n){const e=n.querySelectorAll(":scope > div");let t=[];[...e].forEach(o=>{const r=o.children[0].innerHTML,i=o.children[1].innerHTML;t.push({icon:r,textBlock:i})}),n.innerHTML="",n.style.removeProperty("display"),s(p(t),n)}export{u as default};
//# sourceMappingURL=features.js.map
