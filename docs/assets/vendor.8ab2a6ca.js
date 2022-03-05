function U(e,t){let i=e.length;if(i!==t.length)return!1;for(let s=0;s<i;s++)if(e[s]!==t[s])return!1;return!0}const E=e=>typeof e=="function",d=e=>typeof e=="object",{isArray:$}=Array;class Q{constructor(t,i,s){this.message=i,this.target=t,this.value=s}}const L=null,W={true:1,"":1,1:1};function x(e,t,i,s,n){let{type:r,reflect:o,event:c,value:l,attr:f=V(t)}=d(i)&&i!=L?i:{type:i},h=!(r==Function||r==L);Object.defineProperty(e,t,{configurable:!0,set(a){let u=this[t],{error:g,value:m}=st(r,h&&E(a)?a(u):a);if(g&&m!=null)throw new Q(this,`The value defined for prop '${t}' must be of type '${r.name}'`,m);u!=m&&(this.update({[t]:m}),c&&Y(this,c),this.updated.then(()=>{o&&(this._ignoreAttr=f,tt(this,r,f,this[t]),this._ignoreAttr=null)}))},get(){return this._props[t]}}),l!=null&&(n[t]=l),s[f]={prop:t,type:r}}const Y=(e,{type:t,base:i=CustomEvent,...s})=>e.dispatchEvent(new i(t,s)),V=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),tt=(e,t,i,s)=>s==null||t==Boolean&&!s?e.removeAttribute(i):e.setAttribute(i,d(s)?JSON.stringify(s):t==Boolean?"":s),et=(e,t)=>e==Boolean?!!W[t]:e==Number?Number(t):e==Array||e==Object?JSON.parse(t):t,st=(e,t)=>e==null||t==null?{value:t,error:!1}:e!=String&&t===""?{value:null,error:!1}:e==Object||e==Array||e==Symbol?{value:t,error:{}.toString.call(t)!==`[object ${e.name}]`}:t instanceof e?{value:t,error:e==Number&&Number.isNaN(t.valueOf())}:e==String||e==Number||e==Boolean?{value:t,error:e==Number?typeof t!="number"?!0:Number.isNaN(t):e==String?typeof t!="string":typeof t!="boolean"}:{value:t,error:!0};let y,v;function H(){return S((e={current:y.host})=>e)}function S(e,t,i){return y.use(e,t,i)}function it(){return y.update}function rt(e,t){let i={},s={use:n,host:t,update:e};function n(l,f,h){let a=v++;return i[a]=[l(i[a]?i[a][0]:void 0),f,h],i[a][0]}function r(l,f){for(let h in i){let a=i[h];a[l]&&(a[0]=a[l](a[0],f))}}function o(l){v=0,y=s;let f;try{f=l()}finally{y=null}return f}function c(l){return r(1,l),()=>{r(2,l),l&&(i={})}}return{load:o,cleanEffects:c}}const nt={id:1,className:1,checked:1,value:1,selected:1},lt={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},ot={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},O={},J=[],ft=3,T=document;class F extends Text{get nodeType(){return-1}}let j=Symbol.for;const ct=j("Atomico.ID"),M=j("Atomico.$$"),R=j("Atomico.REF");function ut(e,t,...i){let s=t||O,{children:n}=s;n=n??(i.length?i:J);const r=e?e instanceof Node?1:e.prototype instanceof HTMLElement&&2:!1;return{$$:M,type:e,props:s,children:n,key:s.key,shadow:s.shadowDom,static:s.staticNode,raw:r,is:s.is,clone:s.cloneNode}}function q(e,t,i=ct,s,n){let r;if(t&&t[i]&&t[i].vnode==e||e.$$!=M)return t;(e||!t)&&(n=n||e.type=="svg",r=e.type!="host"&&(e.raw==1?(t&&e.clone?t[R]:t)!=e.type:e.raw==2?!(t instanceof e.type):t?t[R]||t.localName!=e.type:!t),r&&e.type!=null&&(e.raw==1&&e.clone?(s=!0,t=e.type.cloneNode(!0),t[R]=e.type):t=e.raw==1?e.type:e.raw==2?new e.type:n?T.createElementNS("http://www.w3.org/2000/svg",e.type):T.createElement(e.type,e.is?{is:e.is}:void 0)));let{vnode:o=O,cycle:c=0,fragment:l,handlers:f}=t[i]?t[i]:O,{children:h=J,props:a=O}=o;if(f=r?{}:f||{},e.static&&!r)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open"}),e.props!=a&&pt(t,a,e.props,f,n),e.children!==h){let u=e.shadow?t.shadowRoot:t;l=ht(e.children,l,u,i,!c&&s,n&&e.type=="foreignObject"?!1:n)}return c++,t[i]={vnode:e,handlers:f,fragment:l,cycle:c},t}function at(e,t){const i=new F(""),s=new F("");return e[t?"prepend":"append"](i),e.append(s),{markStart:i,markEnd:s}}function ht(e,t,i,s,n,r){e=e==null?null:$(e)?e:[e];let o=t||at(i,n),{markStart:c,markEnd:l,keyes:f}=o,h,a=f&&new Set,u=c;function g(m){let{length:G}=m;for(let _=0;_<G;_++){let b=m[_],C=typeof b;if(b==null||C=="boolean"||C=="function")continue;if($(b)){g(b);continue}else if(C=="object"&&b.$$!=M)continue;let A=b.$$&&b.key,w=f&&A!=null&&f.get(A);u!=l&&u===w?a.delete(u):u=u==l?l:u.nextSibling;let N=f?w:u,p=N;if(b.$$)p=q(b,N,s,n,r);else{let P=b+"";p.nodeType!=ft?p=new Text(P):p.data!=P&&(p.data=P)}p!=u&&(f&&a.delete(p),!N||f?(i.insertBefore(p,u),f&&u!=l&&a.add(u)):N==l?i.insertBefore(p,l):(i.replaceChild(p,N),u=p)),A!=null&&(h=h||new Map,h.set(A,p))}}if(e&&g(e),u=u==l?l:u.nextSibling,t&&u!=l)for(;u!=l;){let m=u;u=u.nextSibling,m.remove()}return a&&a.forEach(m=>m.remove()),o.keyes=h,o}function pt(e,t,i,s,n){for(let r in t)r in i||I(e,r,t[r],null,n,s);for(let r in i)I(e,r,t[r],i[r],n,s)}function I(e,t,i,s,n,r){if(t=t=="class"&&!n?"className":t,i=i??null,s=s??null,t in e&&nt[t]&&(i=e[t]),!(s===i||ot[t]||t[0]=="_"))if(t[0]=="o"&&t[1]=="n"&&(E(s)||E(i)))mt(e,t.slice(2),s,r);else if(t=="ref")s&&(E(s)?s(e):s.current=e);else if(t=="style"){let o=e.style;i=i||"",s=s||"";let c=d(i),l=d(s);if(c)for(let f in i)if(l)f in s||B(o,f,null);else break;if(l)for(let f in s){let h=s[f];c&&i[f]===h||B(o,f,h)}else o.cssText=s}else{let o=t[0]=="$"?t.slice(1):t;o===t&&(!n&&!lt[t]&&t in e||E(s)||E(i))?e[t]=s??"":s==null?e.removeAttribute(o):e.setAttribute(o,d(s)?JSON.stringify(s):s)}}function mt(e,t,i,s){if(s.handleEvent||(s.handleEvent=n=>s[n.type].call(e,n)),i){if(!s[t]){let n=i.capture||i.once||i.passive?Object.assign({},i):null;e.addEventListener(t,s,n)}s[t]=i}else s[t]&&(e.removeEventListener(t,s),delete s[t])}function B(e,t,i){let s="setProperty";i==null&&(s="removeProperty",i=null),~t.indexOf("-")?e[s](t,i):e[t]=i}const k={sheet:!!document.adoptedStyleSheets,ssr:null};function dt(e,t=HTMLElement){let i={},s={},{props:n,styles:r}=e;return class extends t{constructor(){super();this._setup(),this._render=()=>e({...this._props});for(let c in s)this[c]=s[c]}static get styles(){return[super.styles,r]}async _setup(){if(this._props)return;this._props={},this.mounted=new Promise(a=>this.mount=a),this.unmounted=new Promise(a=>this.unmount=a),this.symbolId=this.symbolId||Symbol();let c=rt(()=>this.update(),this),l,f=!0,h="hydrate"in this.dataset;this.update=a=>{if(l||(l=!0,this.updated=(this.updated||this.mounted).then(()=>{try{return q(c.load(this._render),this,this.symbolId,f&&h),l=!1,f&&(f=!1,bt(this)),!k.ssr&&c.cleanEffects()}finally{l=!1}}).then(u=>{u&&u()})),a)for(let u in a)this._props[u]=a[u];return this.updated},this.update(),await this.unmounted,c.cleanEffects(!0)()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),await this.mounted,!this.isConnected&&this.unmount()}attributeChangedCallback(c,l,f){if(i[c]){if(c===this._ignoreAttr||l===f)return;let{prop:h,type:a}=i[c];this[h]=et(a,f)}else super.attributeChangedCallback(c,l,f)}static get observedAttributes(){let c=super.observedAttributes||[];for(let l in n)x(this.prototype,l,n[l],i,s);return Object.keys(i).concat(c)}}}function bt(e){let{styles:t}=e.constructor,{shadowRoot:i}=e;i&&t.length&&(t=t.reduce(function s(n,r){return $(r)?r.reduce(s,n):r&&n.push(r),n},[]),k.sheet?i.adoptedStyleSheets=[...t]:t.map(s=>i.appendChild(s.cloneNode(!0))))}let z=e=>(t,i)=>{let s=([n,r],o)=>{if(o)E(n)&&n();else return[n||t(r),r]};S(([n,r]=[])=>((r||!r)&&(r&&U(r,i)?n=n||!0:(E(n)&&n(),n=null)),[n,i]),e==1&&s,e==2&&s)},yt=z(1),St=z(2);function gt(e){let t=H();if(e in t.current){if(!t[e]){let i=[null,s=>t.current[e]=s];t[e]=i}return t[e][0]=t.current[e],t[e]}}function At(e,t={}){let i=H();return i[e]||(i[e]=(s=t.detail)=>Y(i.current,{type:e,...t,detail:s})),i[e]}function Ot(e){let t=it();return S((i=[])=>(i[1]||(i[0]=E(e)?e():e,i[1]=s=>{s=E(s)?s(i[0]):s,s!=i[0]&&(i[0]=s,t())}),i))}function _t(e){return S((t={current:e})=>t)}function Ct(e,t){let[i]=S(([s,n,r=0]=[])=>((!n||n&&!U(n,t))&&(s=e(t)),[s,t,r]));return i}const D={};function Pt(e,...t){let i=(e.raw||e).reduce((s,n,r)=>s+n+(t[r]||""),"");return D[i]=D[i]||Et(i)}function Et(e){if(k.sheet){let t=new CSSStyleSheet;return t.replaceSync(e),t}else{let t=T.createElement("style");return t.textContent=e,t}}var X=function(e,t,i,s){var n;t[0]=0;for(var r=1;r<t.length;r++){var o=t[r++],c=t[r]?(t[0]|=o?1:2,i[t[r++]]):t[++r];o===3?s[0]=c:o===4?s[1]=Object.assign(s[1]||{},c):o===5?(s[1]=s[1]||{})[t[++r]]=c:o===6?s[1][t[++r]]+=c+"":o?(n=e.apply(c,X(e,c,i,["",null])),s.push(n),c[0]?t[0]|=2:(t[r-2]=0,t[r]=n)):s.push(c)}return s},K=new Map;function Nt(e){var t=K.get(this);return t||(t=new Map,K.set(this,t)),(t=X(this,t.get(e)||(t.set(e,t=function(i){for(var s,n,r=1,o="",c="",l=[0],f=function(u){r===1&&(u||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,u,o):r===3&&(u||o)?(l.push(3,u,o),r=2):r===2&&o==="..."&&u?l.push(4,u,0):r===2&&o&&!u?l.push(5,0,!0,o):r>=5&&((o||!u&&r===5)&&(l.push(r,0,o,n),r=6),u&&(l.push(r,u,0,n),r=6)),o=""},h=0;h<i.length;h++){h&&(r===1&&f(),f(h));for(var a=0;a<i[h].length;a++)s=i[h][a],r===1?s==="<"?(f(),l=[l],r=3):o+=s:r===4?o==="--"&&s===">"?(r=1,o=""):o=s+o[0]:c?s===c?c="":o+=s:s==='"'||s==="'"?c=s:s===">"?(f(),r=1):r&&(s==="="?(r=5,n=o,o=""):s==="/"&&(r<5||i[h][a+1]===">")?(f(),r===3&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):s===" "||s==="	"||s===`
`||s==="\r"?(f(),r=2):o+=s),r===3&&o==="!--"&&(r=4,l=l[0])}return f(),l}(e)),t),arguments,[])).length>1?t:t[0]}Nt.bind(ut);var Z={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function i(){for(var s=[],n=0;n<arguments.length;n++){var r=arguments[n];if(!!r){var o=typeof r;if(o==="string"||o==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var c=i.apply(null,r);c&&s.push(c)}}else if(o==="object")if(r.toString===Object.prototype.toString)for(var l in r)t.call(r,l)&&r[l]&&s.push(l);else s.push(r.toString())}}return s.join(" ")}e.exports?(i.default=i,e.exports=i):window.classNames=i})()})(Z);var Rt=Z.exports;export{dt as a,St as b,Pt as c,Rt as d,_t as e,Ot as f,H as g,ut as h,Ct as i,yt as j,gt as k,q as r,At as u};