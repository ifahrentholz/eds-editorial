const w=async(t,s)=>{const n=t.startsWith("/")?t:`/${t}`,m=`${window.hlx.codeBasePath}${n}`,r=new Request(m,s),d=await caches.open("fetch-cache"),a=await d.match(r);if(a)return a;const o=await fetch(r);return o.ok&&await d.put(r,o.clone()),o},f=async(t,s)=>await(await w(t,s)).json();class l{async getSiteMap(){return(await this.getQueryIndex()).data}async getQueryIndex(){return this.fetchPromis?this.fetchPromis:(this.fetchPromis=f("/query-index.json"),this.fetchPromis)}}const g=new l,$=async(t,s)=>(await w(t,s)).text();function y(t){const{src:s,alt:n,eager:m=!1,width:r,height:d,breakpoints:a=[{media:"(min-width: 600px)",width:"2000"},{width:"750"}]}=t,o=new URL(s,window.location.href),u=document.createElement("picture"),{pathname:h}=o,p=h.substring(h.lastIndexOf(".")+1);return a.forEach(i=>{const c=document.createElement("source");i.media&&c.setAttribute("media",i.media),c.setAttribute("type","image/webp"),c.setAttribute("srcset",`${h}?width=${i.width}&format=webply&optimize=medium`),u.appendChild(c)}),a.forEach((i,c)=>{if(c<a.length-1){const e=document.createElement("source");i.media&&e.setAttribute("media",i.media),e.setAttribute("srcset",`${h}?width=${i.width}&format=${p}&optimize=medium`),u.appendChild(e)}else{const e=document.createElement("img");e.setAttribute("loading",m?"eager":"lazy"),e.setAttribute("alt",n),e.setAttribute("width",r),e.setAttribute("height",d),u.appendChild(e),e.setAttribute("src",`${h}?width=${i.width}&format=${p}&optimize=medium`)}}),u}export{g as S,f as a,y as c,$ as f};
//# sourceMappingURL=createOptimizedPicture.FL3x6PMT.js.map
