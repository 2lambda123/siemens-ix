const t="ix-brand-theme";let n;let e;let s=false;let o=false;const l=(t,n="")=>{{return()=>{}}};const c=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f={};const r="http://www.w3.org/2000/svg";const u="http://www.w3.org/1999/xhtml";const a=t=>t!=null;const d=t=>{t=typeof t;return t==="object"||t==="function"};function h(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const p=(t,n,...e)=>{let s=null;let o=false;let l=false;const c=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!d(s)){s=String(s)}if(o&&l){c[c.length-1].t+=s}else{c.push(o?y(null,s):s)}l=o}}};i(e);if(n){{const t=n.className||n.class;if(t){n.class=typeof t!=="object"?t:Object.keys(t).filter((n=>t[n])).join(" ")}}}const f=y(t,null);f.o=n;if(c.length>0){f.l=c}return f};const y=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const $={};const m=t=>t&&t.u===$;const w=(t,n)=>{if(t!=null&&!d(t)){if(n&1){return String(t)}return t}return t};const b=(t,n,e)=>{const s=ut.ce(n,e);t.dispatchEvent(s);return s};const g=new WeakMap;const v=(t,n,e)=>{let s=it.get(t);if(dt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}it.set(t,s)};const S=(t,n,e,s)=>{var o;let l=O(n);const c=it.get(l);t=t.nodeType===11?t:rt;if(c){if(typeof c==="string"){t=t.head||t;let n=g.get(t);let e;if(!n){g.set(t,n=new Set)}if(!n.has(l)){{{e=rt.createElement("style");e.innerHTML=c}const n=(o=ut.p)!==null&&o!==void 0?o:h(rt);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(l)}}}else if(!t.adoptedStyleSheets.includes(c)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,c]}}return l};const j=t=>{const n=t.$;const e=t.m;const s=n.i;const o=l("attachStyles",n.g);const c=S(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=c;e.classList.add(c+"-h")}o()};const O=(t,n)=>"sc-"+t.g;const M=(t,n,e,s,o,l)=>{if(e!==s){let c=st(t,n);n.toLowerCase();if(n==="class"){const n=t.classList;const o=C(e);const l=C(s);n.remove(...o.filter((t=>t&&!l.includes(t))));n.add(...l.filter((t=>t&&!o.includes(t))))}else{const i=d(s);if((c||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){c=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!c||l&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const k=/\s/;const C=t=>!t?[]:t.split(k);const x=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const l=t&&t.o||f;const c=n.o||f;{for(s in l){if(!(s in c)){M(o,s,l[s],undefined,e,n.i)}}}for(s in c){M(o,s,l[s],c[s],e,n.i)}};const P=(t,e,o,l)=>{const c=e.l[o];let i=0;let f;let d;if(c.t!==null){f=c.h=rt.createTextNode(c.t)}else{if(!s){s=c.u==="svg"}f=c.h=rt.createElementNS(s?r:u,c.u);if(s&&c.u==="foreignObject"){s=false}{x(null,c,s)}if(a(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(c.l){for(i=0;i<c.l.length;++i){d=P(t,c,i);if(d){f.appendChild(d)}}}{if(c.u==="svg"){s=false}else if(f.tagName==="foreignObject"){s=true}}}return f};const U=(t,n,s,o,l,c)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;l<=c;++l){if(o[l]){f=P(null,s,l);if(f){o[l].h=f;i.insertBefore(f,n)}}}};const E=(t,n,e,s,o)=>{for(;n<=e;++n){if(s=t[n]){o=s.h;o.remove()}}};const N=(t,n,e,s)=>{let o=0;let l=0;let c=n.length-1;let i=n[0];let f=n[c];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=c&&l<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--c]}else if(u==null){u=s[++l]}else if(a==null){a=s[--r]}else if(T(i,u)){A(i,u);i=n[++o];u=s[++l]}else if(T(f,a)){A(f,a);f=n[--c];a=s[--r]}else if(T(i,a)){A(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(T(f,u)){A(f,u);t.insertBefore(f.h,i.h);f=n[--c];u=s[++l]}else{{d=P(n&&n[l],e,l);u=s[++l]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>c){U(t,s[r+1]==null?null:s[r+1].h,e,s,l,r)}else if(l>r){E(n,o,c)}};const T=(t,n)=>{if(t.u===n.u){return true}return false};const A=(t,n)=>{const e=n.h=t.h;const o=t.l;const l=n.l;const c=n.u;const i=n.t;if(i===null){{s=c==="svg"?true:c==="foreignObject"?false:s}{if(c==="slot");else{x(t,n,s)}}if(o!==null&&l!==null){N(e,o,n,l)}else if(l!==null){if(t.t!==null){e.textContent=""}U(e,null,n,l,0,l.length-1)}else if(o!==null){E(o,0,o.length-1)}if(s&&c==="svg"){s=false}}else if(t.t!==i){e.data=i}};const H=(t,s)=>{const o=t.m;const l=t.v||y(null,null);const c=m(s)?s:p(null,null,s);e=o.tagName;c.u=null;c.i|=4;t.v=c;c.h=l.h=o.shadowRoot||o;{n=o["s-sc"]}A(l,c)};const L=(t,n)=>{if(n&&!t.S&&n["s-p"]){n["s-p"].push(new Promise((n=>t.S=n)))}};const R=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}L(t,t.j);const e=()=>W(t,n);return bt(e)};const W=(t,n)=>{const e=l("scheduleUpdate",t.$.g);const s=t.O;let o;e();return _(o,(()=>q(t,s,n)))};const q=async(t,n,e)=>{const s=t.m;const o=l("update",t.$.g);const c=s["s-rc"];if(e){j(t)}const i=l("render",t.$.g);{F(t,n)}if(c){c.map((t=>t()));s["s-rc"]=undefined}i();o();{const n=s["s-p"];const e=()=>I(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const F=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{H(t,n)}}}}catch(n){ot(n,t.m)}return null};const I=t=>{const n=t.$.g;const e=t.m;const s=l("postUpdate",n);const o=t.j;if(!(t.i&64)){t.i|=64;{z(e)}s();{t.M(e);if(!o){V()}}}else{s()}{if(t.S){t.S();t.S=undefined}if(t.i&512){wt((()=>R(t,false)))}t.i&=~(4|512)}};const V=n=>{{z(rt.documentElement)}wt((()=>b(ft,"appload",{detail:{namespace:t}})))};const _=(t,n)=>t&&t.then?t.then(n):n();const z=t=>t.classList.add("hydrated");const B=(t,n)=>tt(t).k.get(n);const D=(t,n,e,s)=>{const o=tt(t);const l=o.k.get(n);const c=o.i;const i=o.O;e=w(e,s.C[n][0]);const f=Number.isNaN(l)&&Number.isNaN(e);const r=e!==l&&!f;if((!(c&8)||l===undefined)&&r){o.k.set(n,e);if(i){if((c&(2|16))===2){R(o,false)}}}};const G=(t,n,e)=>{if(n.C){const s=Object.entries(n.C);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return B(this,t)},set(e){D(this,t,e,n)},configurable:true,enumerable:true})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){ut.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const J=async(t,n,e,s,o)=>{if((n.i&32)===0){{n.i|=32;o=ct(e);if(o.then){const t=c();o=await o;t()}if(!o.isProxied){G(o,e,2);o.isProxied=true}const t=l("createInstance",e.g);{n.i|=8}try{new o(n)}catch(t){ot(t)}{n.i&=~8}t()}if(o.style){let t=o.style;const n=O(e);if(!it.has(n)){const s=l("registerStyles",e.g);v(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>R(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const K=t=>{if((ut.i&1)===0){const n=tt(t);const e=n.$;const s=l("connectedCallback",e.g);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){L(n,n.j=e);break}}}if(e.C){Object.entries(e.C).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{J(t,n,e)}}s()}};const Q=t=>{if((ut.i&1)===0){tt(t)}};const X=(t,n={})=>{var e;const s=l();const o=[];const c=n.exclude||[];const f=ft.customElements;const r=rt.head;const u=r.querySelector("meta[charset]");const a=rt.createElement("style");const d=[];let p;let y=true;Object.assign(ut,n);ut.P=new URL(n.resourcesUrl||"./",rt.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],g:n[1],C:n[2],U:n[3]};{e.C=n[2]}const s=e.g;const l=class extends HTMLElement{constructor(t){super(t);t=this;et(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(y){d.push(this)}else{ut.jmp((()=>K(this)))}}disconnectedCallback(){ut.jmp((()=>Q(this)))}componentOnReady(){return tt(this).N}};e.T=t[0];if(!c.includes(s)&&!f.get(s)){o.push(s);f.define(s,G(l,e,1))}}))}));{a.innerHTML=o+i;a.setAttribute("data-styles","");const t=(e=ut.p)!==null&&e!==void 0?e:h(rt);if(t!=null){a.setAttribute("nonce",t)}r.insertBefore(a,u?u.nextSibling:r.firstChild)}y=false;if(d.length){d.map((t=>t.connectedCallback()))}else{{ut.jmp((()=>p=setTimeout(V,30)))}}s()};const Y=t=>ut.p=t;const Z=new WeakMap;const tt=t=>Z.get(t);const nt=(t,n)=>Z.set(n.O=t,n);const et=(t,n)=>{const e={i:0,m:t,$:n,k:new Map};{e.N=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}return Z.set(t,e)};const st=(t,n)=>n in t;const ot=(t,n)=>(0,console.error)(t,n);const lt=new Map;const ct=(t,n,e)=>{const s=t.g.replace(/-/g,"_");const o=t.T;const l=lt.get(o);if(l){return l[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{lt.set(o,t)}return t[s]}),ot)};const it=new Map;const ft=typeof window!=="undefined"?window:{};const rt=ft.document||{head:{}};const ut={i:0,P:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const at=t=>Promise.resolve(t);const dt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const ht=[];const pt=[];const yt=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&ut.i&4){wt(mt)}else{ut.raf(mt)}}};const $t=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){ot(t)}}t.length=0};const mt=()=>{$t(ht);{$t(pt);if(o=ht.length>0){ut.raf(mt)}}};const wt=t=>at().then(t);const bt=yt(pt,true);export{$ as H,X as b,p as h,at as p,nt as r,Y as s};
//# sourceMappingURL=p-96f9cc7b.js.map