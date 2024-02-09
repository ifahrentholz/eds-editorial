import{_ as n}from"../__chunks__/tslib.es6.cver2Yc4.js";import{a as e,s as i,i as s}from"../__chunks__/private-ssr-support.uesIj2BQ.js";import{n as a,t as c}from"../__chunks__/property.1qlbxKtf.js";const{EventPart:u}=s,d=t=>t,l={h:d`\n      <div class="card">\n        <h3>Lit Counter</h3>\n        <button part="button">count is <?></button>\n      </div>\n    `,parts:[{type:1,index:2,name:"click",strings:["",""],ctor:u},{type:2,index:3}]};let o=class extends i{constructor(){super(...arguments),this.count=0}firstUpdated(){console.log("first updated")}render(){return{_$litType$:l,values:[this._onClick,this.count]}}_onClick(){this.count++}};o.styles=e`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #bada55;
      color: #333;
      cursor: pointer;
      transition: border-color 0.25s;
      width: 100%;
    }
    button:hover {
      background-color: #1a1a1a;
      color: #f9f9f9;
    }
  `;n([a({type:Number})],o.prototype,"count",void 0);o=n([c("lit-counter")],o);function b(t){const r=t.innerHTML;t.innerHTML=`<lit-counter>${r}</lit-counter>`,t.style.removeProperty("display")}export{o as LitCounter,b as default};
//# sourceMappingURL=counter.js.map
