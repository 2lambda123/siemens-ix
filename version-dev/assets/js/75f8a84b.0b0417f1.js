"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55368,16258,78852,46098,38245,63263,26620],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>x});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return o("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return o("embed",e)},hideDevTools:function(e){return o("hidedevtools",e)},hideExplorer:function(e){return o("hideExplorer",e)},hideNavigation:function(e){return o("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return c("theme",["light","dark"],e)},view:function(e){return c("view",["preview","editor"],e)}};function i(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function o(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function c(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){return""+m(t)+e+i(t)}function d(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+m(n)+e+i(n)}function m(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function p(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function v(e){return e&&!1===e.newWindow?"_self":"_blank"}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=l();return new Promise((function(e,i){t.pending[a]={resolve:e,reject:i},t.port.postMessage({type:n,payload:g({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,i=a.__reqid,o=a.__error;this.pending[i]&&(a.__success?this.pending[i].resolve(function(e){var t=g({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[i].reject(o?r+": "+o:r),delete this.pending[i])}},e}(),y=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),b=[],w=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new y(n.ports[0],r.payload),e(t.vm),i())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var o=0,s=window.setInterval((function(){if(t.vm)i();else{if(o>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach((function(e,n){e.id===t.id&&b.splice(n,1)}));o++,a()}}),500)})),b.push(this)};function k(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function E(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(k("project[title]",e.title)),a.appendChild(k("project[description]",e.description)),a.appendChild(k("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(k("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(k("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(k("project[files]["+t+"]",e.files[t]))})),a}function T(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=b.find((function(e){return e[a]===n})))?r:null)?t:new w(e)).pending:Promise.reject("Provided element is not an iframe.")}var x={connect:T,embedGithubProject:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/github/"+t,n),p(r,a,n),T(a)},embedProject:function(e,t,n){var r,a=f(e),i=function(e,t){var n=E(e);return n.action=d("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return p(a,o,n),null==(r=o.contentDocument)||r.write(i),T(o)},embedProjectId:function(e,t,n){var r=f(e),a=document.createElement("iframe");return a.src=d("/edit/"+t,n),p(r,a,n),T(a)},openGithubProject:function(e,t){var n=u("/github/"+e,t),r=v(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=E(e);n.action=u("/run",t),n.target=v(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=u("/edit/"+e,t),r=v(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>o});var r,a=n(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",i({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(731);function i(e){var t,n,i,o,s,c,l,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(o=e.attribute)||null==(s=o.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),r.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(u=l.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),c=(0,a.Z)("/"),[l,u]=(0,o.useState)(""),[d,m]=(0,o.useState)((0,s.V)(t)),{preferredVersion:p}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>k});var r,a=n(7267),i=n(90077),o=n(53849),s=n(2176),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...a}=e;return c.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var d=n(77942);let m;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(m||(m={}));var p=n(14091);const f="https://github.com/siemens/ix/tree/main/packages";function v(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===m.ANGULAR?`${f}/angular-test-app/src/preview-examples/${t}.ts`:n===m.JAVASCRIPT?`${f}/html-test-app/src/preview-examples/${t}.html`:n===m.REACT?`${f}/react-test-app/src/preview-examples/${t}.tsx`:n===m.VUE?`${f}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function h(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await g(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===m.REACT?async function(e,t){const[n,r,a,i,o]=await g([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,i):n===m.ANGULAR?async function(e,t,n){const[r,a,i,o,s,c,l,u,d,m,f]=await g([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&v.push(t)}));const h=`\n    ${v.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,y={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;y[`src/app/${t}`]=n})),p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":u,"package.json":d,"tsconfig.app.json":m,"tsconfig.json":f,...y}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===m.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await g([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):n===m.VUE?async function(e,t){const[n,r,a,i,o,s,c]=await g([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,u={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;u[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...u,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":i,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(a,i):void 0}function y(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>v({name:t,framework:n})},c.createElement(s.Z,null))}function b(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>h({name:t,files:n,framework:r,baseUrl:a})},c.createElement(u,null))}function w(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(o.Vp,null,e.files.map((e=>{e.node;return c.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function k(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:l,availableFrameworks:u}=e;const{pathname:p}=(0,a.TH)(),f=(0,i.Z)("/"),[v,g]=(0,c.useState)(!0),[h,k]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||m.PREVIEW}(u)),[E,T]=(0,c.useState)();(0,c.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(p+t)),[t,p]);(0,c.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===m.REACT&&(r=r.concat(".tsx")),n===m.JAVASCRIPT&&(r=r.concat(".html")),n===m.ANGULAR&&(r=r.concat(".ts")),n===m.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),T(e))}),[l,T]);const x=e=>{k(e)};function _(e){return u?0===u.length||u.includes(e):Object.keys(l).some((t=>t===e))}return c.createElement("div",{className:"Playground"},v?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},c.createElement(o.Vp,null,c.createElement(o.t3,{selected:h===m.PREVIEW,onClick:()=>x(m.PREVIEW)},"Preview"),_(m.ANGULAR)?c.createElement(o.t3,{selected:h===m.ANGULAR,onClick:()=>x(m.ANGULAR)},"Angular"):null,_(m.REACT)?c.createElement(o.t3,{selected:h===m.REACT,onClick:()=>x(m.REACT)},"React"):null,_(m.JAVASCRIPT)?c.createElement(o.t3,{selected:h===m.JAVASCRIPT,onClick:()=>x(m.JAVASCRIPT)},"JavaScript"):null,_(m.VUE)?c.createElement(o.t3,{selected:h===m.VUE,onClick:()=>x(m.VUE)},"Vue"):null),c.createElement("div",{className:"Playground__Toolbar__Actions"},h!==m.PREVIEW?c.createElement(c.Fragment,null,c.createElement(y,{name:t,framework:h}),c.createElement(b,{name:t,framework:h,baseUrl:f,files:E?h===m.PREVIEW?[]:E[h].map((e=>e.filename)):[]})):null)),function(){if(h===m.PREVIEW)return c.createElement(d.Z,{name:t,height:n,noMargin:r,theme:s});if(!E||!E[h])return null;if(1===E[h].length){const[{node:e}]=E[h];return e}return c.createElement(w,{files:E[h]})}()):null)}},23965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-datetime-picker/events",id:"auto-generated/ix-datetime-picker/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-datetime-picker/events.md",sourceDirName:"auto-generated/ix-datetime-picker",slug:"/auto-generated/ix-datetime-picker/events",permalink:"/version-dev/docs/auto-generated/ix-datetime-picker/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-datetime-picker/events.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"dateChange",description:"Date change",definition:[{name:"Detail",value:"string | { from: string; to: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"dateSelect",description:"Date selection event is fired after confirm button is pressend",definition:[{name:"Detail",value:"{ from: string; to: string; time: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"done",description:"Done event\n\nSet `doneEventDelimiter` to null or undefine to get the typed event",definition:[{name:"Detail",value:"string"}],tags:[]},{name:"timeChange",description:"Time change",definition:[{name:"Detail",value:"string"}],tags:[{type:"since",message:"1.1.0"}]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},95251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-datetime-picker/props",id:"auto-generated/ix-datetime-picker/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-datetime-picker/props.md",sourceDirName:"auto-generated/ix-datetime-picker",slug:"/auto-generated/ix-datetime-picker/props",permalink:"/version-dev/docs/auto-generated/ix-datetime-picker/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-datetime-picker/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"dateFormat",description:"Date format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.",definition:[{name:"Attribute",value:"date-format"},{name:"Type",value:"string"},{name:"Default",value:"'yyyy/LL/dd'"}],tags:[{type:"since",message:"1.1.0"}]},{name:"eventDelimiter",description:"Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter",definition:[{name:"Attribute",value:"event-delimiter"},{name:"Type",value:"string"},{name:"Default",value:"' - '"}],tags:[{type:"since",message:"1.1.0"}]},{name:"from",description:"Picker date. If the picker is in range mode this property is the start date.\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"from"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"maxDate",description:"The latest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"max-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"minDate",description:"The earliest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"min-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"range",description:"Set range size",definition:[{name:"Attribute",value:"range"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"showHour",description:"Show hour input",definition:[{name:"Attribute",value:"show-hour"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showMinutes",description:"Show minutes input",definition:[{name:"Attribute",value:"show-minutes"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showSeconds",description:"Show seconds input",definition:[{name:"Attribute",value:"show-seconds"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"showTimeReference",description:"Show time reference input\nTime reference is default aligned with @see {this.timeFormat}",definition:[{name:"Attribute",value:"show-time-reference"},{name:"Type",value:"any"},{name:"Default",value:"undefined"}],tags:[{type:"since",message:"1.1.0"}]},{name:"textSelectDate",description:"Text of date select button",definition:[{name:"Attribute",value:"text-select-date"},{name:"Type",value:"string"},{name:"Default",value:"'Done'"}],tags:[{type:"since",message:"1.1.0"}]},{name:"time",description:"Select time with format string",definition:[{name:"Attribute",value:"time"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"timeFormat",description:"Time format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.",definition:[{name:"Attribute",value:"time-format"},{name:"Type",value:"string"},{name:"Default",value:"'TT'"}],tags:[{type:"since",message:"1.1.0"}]},{name:"timeReference",description:"Set time reference",definition:[{name:"Attribute",value:"time-reference"},{name:"Type",value:'"AM" \uff5c "PM"'},{name:"Default"}],tags:[]},{name:"to",description:"Picker date. If the picker is in range mode this property is the end date.\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"to"},{name:"Type",value:"string"},{name:"Default",value:"null"}],tags:[{type:"since",message:"1.1.0"}]}],mdxType:"ApiTable"}))}m.isMDXComponent=!0},56483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/datetimepicker.ts",id:"auto-generated/previews/angular/datetimepicker.ts",title:"datetimepicker.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datetimepicker.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datetimepicker.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/datetimepicker.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datetimepicker.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `<ix-datetime-picker></ix-datetime-picker>`,\n})\nexport default class Datetimepicker {}\n")))}d.isMDXComponent=!0},43972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/datetimepicker",id:"auto-generated/previews/react/datetimepicker",title:"datetimepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/datetimepicker.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/datetimepicker",permalink:"/version-dev/docs/auto-generated/previews/react/datetimepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/datetimepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxDatetimePicker } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxDatetimePicker />;\n};\n")))}d.isMDXComponent=!0},73695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/datetimepicker",id:"auto-generated/previews/vue/datetimepicker",title:"datetimepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/datetimepicker.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/datetimepicker",permalink:"/version-dev/docs/auto-generated/previews/vue/datetimepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/datetimepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxDatetimePicker } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxDatetimePicker />\n</template>\n")))}d.isMDXComponent=!0},66462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/datetimepicker",id:"auto-generated/previews/web-component/datetimepicker",title:"datetimepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/datetimepicker.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/datetimepicker",permalink:"/version-dev/docs/auto-generated/previews/web-component/datetimepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/datetimepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-datetime-picker></ix-datetime-picker>\n")))}d.isMDXComponent=!0},67146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>p,default:()=>y,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var r=n(7896),a=(n(2784),n(30876)),i=n(6404),o=n(95251),s=n(23965),c=n(66462),l=n(43972),u=n(56483),d=n(73695);const m={},p="Date time picker",f={unversionedId:"controls/date-time-picker",id:"controls/date-time-picker",title:"Date time picker",description:"Usage",source:"@site/docs/controls/date-time-picker.md",sourceDirName:"controls",slug:"/controls/date-time-picker",permalink:"/version-dev/docs/controls/date-time-picker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/date-time-picker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Date picker",permalink:"/version-dev/docs/controls/date-picker"},next:{title:"Drawer",permalink:"/version-dev/docs/controls/drawer"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],h={toc:g};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date-time-picker"},"Date time picker"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"datetimepicker",height:"35rem",frameworks:{react:l.default,angular:u.default,javascript:c.default,vue:d.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}y.isMDXComponent=!0}}]);