import{i as w}from"./isSidekickLibraryActive.iN4ARc8o.js";function p(){if(!w())return window.location.href;const{location:a}=window.parent,n=new URLSearchParams(a.search);return`${a.origin}${n.get("path")}`}function g(a){const{src:n,alt:d,eager:m=!1,width:u,height:h,breakpoints:s=[{media:"(min-width: 600px)",width:2e3},{width:750}]}=a,l=new URL(n,p()),c=document.createElement("picture"),{pathname:r}=l,o=r.substring(r.lastIndexOf(".")+1);return s.forEach(e=>{const i=document.createElement("source");e.media&&i.setAttribute("media",e.media),i.setAttribute("type","image/webp"),i.setAttribute("srcset",`${r}?width=${e.width}&format=webply&optimize=medium`),c.appendChild(i)}),s.forEach((e,i)=>{if(i<s.length-1){const t=document.createElement("source");e.media&&t.setAttribute("media",e.media),t.setAttribute("srcset",`${r}?width=${e.width}&format=${o}&optimize=medium`),c.appendChild(t)}else{const t=document.createElement("img");t.setAttribute("loading",m?"eager":"lazy"),t.setAttribute("alt",d),t.setAttribute("width",u.toString()),t.setAttribute("height",h.toString()),c.appendChild(t),t.setAttribute("src",`${r}?width=${e.width}&format=${o}&optimize=medium`)}}),c}export{g as c};
//# sourceMappingURL=createOptimizedPicture.KzVHIohN.js.map
