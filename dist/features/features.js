import{j as s,x as c}from"../__chunks__/lit-element.XkUWx5ik.js";import{o as a}from"../__chunks__/unsafe-html.dKgBHtsI.js";import"../__chunks__/icon.PS61ZRz5.js";import"../__chunks__/property.0daVBkvz.js";const p=e=>c`
    ${e.map(n=>c`
        <article>
          <span class="icon"><icon-component class="icon-wc" name="${n.icon}"></icon-component></span>
          <div class="content"Test ${a(n.textBlock)}</div>
        </article>
      `)}
  `;function u(e){const n=e.querySelectorAll(":scope > div");let t=[];[...n].forEach(o=>{const r=o.children[0].innerHTML,i=o.children[1].innerHTML;t.push({icon:r,textBlock:i})}),e.innerHTML="",e.style.removeProperty("display"),s(p(t),e)}export{u as default};
//# sourceMappingURL=features.js.map
