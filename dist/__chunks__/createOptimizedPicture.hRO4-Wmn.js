class l{constructor(){this.responseMap=new Map}async fetchData(e,i){const c=e.startsWith("/")?e:`/${e}`,a=`${window.hlx.codeBasePath}${c}`;if(this.responseMap.has(a))return await this.responseMap.get(a);const h=fetch(a,i);this.responseMap.set(a,h);try{const n=await h;return n.ok,n}finally{this.responseMap.delete(a)}}async fetchJson(e,i){return await(await this.fetchData(e,i)).clone().json()}async fetchText(e,i){return(await this.fetchData(e,i)).clone().text()}}const w=new l;function f(u){const{src:e,alt:i,eager:c=!1,width:a,height:h,breakpoints:n=[{media:"(min-width: 600px)",width:"2000"},{width:"750"}]}=u,p=new URL(e,window.location.href),d=document.createElement("picture"),{pathname:o}=p,m=o.substring(o.lastIndexOf(".")+1);return n.forEach(s=>{const r=document.createElement("source");s.media&&r.setAttribute("media",s.media),r.setAttribute("type","image/webp"),r.setAttribute("srcset",`${o}?width=${s.width}&format=webply&optimize=medium`),d.appendChild(r)}),n.forEach((s,r)=>{if(r<n.length-1){const t=document.createElement("source");s.media&&t.setAttribute("media",s.media),t.setAttribute("srcset",`${o}?width=${s.width}&format=${m}&optimize=medium`),d.appendChild(t)}else{const t=document.createElement("img");t.setAttribute("loading",c?"eager":"lazy"),t.setAttribute("alt",i),t.setAttribute("width",a),t.setAttribute("height",h),d.appendChild(t),t.setAttribute("src",`${o}?width=${s.width}&format=${m}&optimize=medium`)}}),d}export{w as F,f as c};
//# sourceMappingURL=createOptimizedPicture.hRO4-Wmn.js.map
