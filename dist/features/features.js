import"../__chunks__/lit-element.0TQwaCpT.js";import{j as s,x as c}from"../__chunks__/lit-html.6NN5RoO6.js";import{o as p}from"../__chunks__/unsafe-html.MkdK_ErS.js";import"../__chunks__/icon.SMNi1MuO.js";import"../__chunks__/property.ej8RZJaV.js";const a=n=>c`${n.map(t=>c`<article><span class="icon"><icon-component class="icon-wc" name="${t.icon}"></icon-component></span><div class="content">${p(t.textBlock)}</div></article>`)}`;function h(n){const t=n.querySelectorAll(":scope > div");let e=[];[...t].forEach(o=>{const r=o.children[0].innerHTML,i=o.children[1].innerHTML;e.push({icon:r,textBlock:i})}),n.innerHTML="",n.style.removeProperty("display"),s(a(e),n)}export{h as default};
//# sourceMappingURL=features.js.map
