"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32977,11272,42010,97438,1363,58520,89261,30151,89492,58198,63418],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14091:(e,t,n)=>{n.d(t,{Z:()=>T});var r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a={clickToLoad:function(e){return o("ctl",e)},devToolsHeight:function(e){return s("devtoolsheight",e)},forceEmbedLayout:function(e){return o("embed",e)},hideDevTools:function(e){return o("hidedevtools",e)},hideExplorer:function(e){return o("hideExplorer",e)},hideNavigation:function(e){return o("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return s("terminalHeight",e)},theme:function(e){return c("theme",["light","dark"],e)},view:function(e){return c("view",["preview","editor"],e)}};function i(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&a.hasOwnProperty(t)?a[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function o(e,t){return!0===t?e+"=1":""}function s(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function c(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function d(e,t){return""+p(t)+e+i(t)}function u(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+i(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function m(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function g(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function f(e){return e&&!1===e.newWindow?"_self":"_blank"}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=l();return new Promise((function(e,i){t.pending[a]={resolve:e,reject:i},t.port.postMessage({type:n,payload:v({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,i=a.__reqid,o=a.__error;this.pending[i]&&(a.__success?this.pending[i].resolve(function(e){var t=v({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[i].reject(o?r+": "+o:r),delete this.pending[i])}},e}(),w=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),k=[],b=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new w(n.ports[0],r.payload),e(t.vm),i())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var o=0,s=window.setInterval((function(){if(t.vm)i();else{if(o>=20)return i(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void k.forEach((function(e,n){e.id===t.id&&k.splice(n,1)}));o++,a()}}),500)})),k.push(this)};function y(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function E(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(y("project[title]",e.title)),a.appendChild(y("project[description]",e.description)),a.appendChild(y("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(y("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(y("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(y("project[files]["+t+"]",e.files[t]))})),a}function x(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=k.find((function(e){return e[a]===n})))?r:null)?t:new b(e)).pending:Promise.reject("Provided element is not an iframe.")}var T={connect:x,embedGithubProject:function(e,t,n){var r=g(e),a=document.createElement("iframe");return a.src=u("/github/"+t,n),m(r,a,n),x(a)},embedProject:function(e,t,n){var r,a=g(e),i=function(e,t){var n=E(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return m(a,o,n),null==(r=o.contentDocument)||r.write(i),x(o)},embedProjectId:function(e,t,n){var r=g(e),a=document.createElement("iframe");return a.src=u("/edit/"+t,n),m(r,a,n),x(a)},openGithubProject:function(e,t){var n=d("/github/"+e,t),r=f(t);window.open(n,r)},openProject:function(e,t){!function(e,t){var n=E(e);n.action=d("/run",t),n.target=f(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){var n=d("/edit/"+e,t),r=f(t);window.open(n,r)}}},2176:(e,t,n)=>{n.d(t,{Z:()=>o});var r,a=n(2784);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",i({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(731);function i(e){var t,n,i,o,s,c,l,d;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(i=n.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var n;return r.createElement(a.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(o=e.attribute)||null==(s=o.tags)?void 0:s.filter((e=>"deprecated"===e.type)).map((t=>{var n;return r.createElement(a.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(c=e.attribute)?void 0:c.description),r.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(d=l.definition)?void 0:d.map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const o=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});var r=n(2784);function a(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),s=n(90943);function c(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),c=(0,a.Z)("/"),[l,d]=(0,o.useState)(""),[u,p]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>y});var r,a=n(7267),i=n(90077),o=n(53849),s=n(2176),c=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return c.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?c.createElement("title",{id:n},t):null,r||(r=c.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let p;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(p||(p={}));var m=n(14091);const g="https://github.com/siemens/ix/tree/main/packages";function f(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===p.ANGULAR?`${g}/angular-test-app/src/preview-examples/${t}.ts`:n===p.JAVASCRIPT?`${g}/html-test-app/src/preview-examples/${t}.html`:n===p.REACT?`${g}/react-test-app/src/preview-examples/${t}.tsx`:n===p.VUE?`${g}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function v(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function h(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const i=await async function(e,t,n){const r=[];return(await v(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===p.REACT?async function(e,t){const[n,r,a,i,o]=await v([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[s]=t,c={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;c[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...c,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${s.filename.substring(0,s.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":i,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${s.filename}`})}(a,i):n===p.ANGULAR?async function(e,t,n){const[r,a,i,o,s,c,l,d,u,p,g]=await v([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),f=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&f.push(t)}));const h=`\n    ${f.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${f.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,w={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;w[`src/app/${t}`]=n})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":h,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":i,"src/app/app.module.ts":o,"src/index.html":s,"src/main.ts":c,"src/styles.css":l,"angular.json":d,"package.json":u,"tsconfig.app.json":p,"tsconfig.json":g,...w}},{openFile:`src/app/${t}.ts`})}(a,t,i):n===p.JAVASCRIPT?async function(e,t){const[n,r,a,i]=await v([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...s]=t,c={};s.forEach((e=>{c[`src/${e.filename}`]=e.sourceCode})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":i}},{openFile:["src/index.html"]})}(a,i):n===p.VUE?async function(e,t){const[n,r,a,i,o,s,c]=await v([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,d={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;d[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...d,"index.html":r,"src/main.ts":a,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":c,"package.json":i,"tsconfig.json":o,"vite.config.ts":s,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(a,i):void 0}function w(e){let{name:t,framework:n}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>f({name:t,framework:n})},c.createElement(s.Z,null))}function k(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return c.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>h({name:t,files:n,framework:r,baseUrl:a})},c.createElement(d,null))}function b(e){const[t,n]=(0,c.useState)(e.files[0].filename);return c.createElement(c.Fragment,null,c.createElement(o.Vp,null,e.files.map((e=>{e.node;return c.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?c.createElement(r,null):null}())}function y(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:l,availableFrameworks:d}=e;const{pathname:m}=(0,a.TH)(),g=(0,i.Z)("/"),[f,v]=(0,c.useState)(!0),[h,y]=(0,c.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||p.PREVIEW}(d)),[E,x]=(0,c.useState)();(0,c.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,c.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let r=t;n===p.REACT&&(r=r.concat(".tsx")),n===p.JAVASCRIPT&&(r=r.concat(".html")),n===p.ANGULAR&&(r=r.concat(".ts")),n===p.VUE&&(r=r.concat(".vue")),e[n]=[{filename:r,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),x(e))}),[l,x]);const T=e=>{y(e)};function D(e){return d?0===d.length||d.includes(e):Object.keys(l).some((t=>t===e))}return c.createElement("div",{className:"Playground"},f?c.createElement(c.Fragment,null,c.createElement("div",{className:"Playground__Toolbar Location__Bottom"},c.createElement(o.Vp,null,c.createElement(o.t3,{selected:h===p.PREVIEW,onClick:()=>T(p.PREVIEW)},"Preview"),D(p.ANGULAR)?c.createElement(o.t3,{selected:h===p.ANGULAR,onClick:()=>T(p.ANGULAR)},"Angular"):null,D(p.REACT)?c.createElement(o.t3,{selected:h===p.REACT,onClick:()=>T(p.REACT)},"React"):null,D(p.JAVASCRIPT)?c.createElement(o.t3,{selected:h===p.JAVASCRIPT,onClick:()=>T(p.JAVASCRIPT)},"JavaScript"):null,D(p.VUE)?c.createElement(o.t3,{selected:h===p.VUE,onClick:()=>T(p.VUE)},"Vue"):null),c.createElement("div",{className:"Playground__Toolbar__Actions"},h!==p.PREVIEW?c.createElement(c.Fragment,null,c.createElement(w,{name:t,framework:h}),c.createElement(k,{name:t,framework:h,baseUrl:g,files:E?h===p.PREVIEW?[]:E[h].map((e=>e.filename)):[]})):null)),function(){if(h===p.PREVIEW)return c.createElement(u.Z,{name:t,height:n,noMargin:r,theme:s});if(!E||!E[h])return null;if(1===E[h].length){const[{node:e}]=E[h];return e}return c.createElement(b,{files:E[h]})}()):null)}},89791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-date-picker/events",id:"auto-generated/ix-date-picker/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-date-picker/events.md",sourceDirName:"auto-generated/ix-date-picker",slug:"/auto-generated/ix-date-picker/events",permalink:"/docs/auto-generated/ix-date-picker/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-picker/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"dateChange",description:"Date change event\n\nIf datepicker is in range mode the event detail will be sperated with a `-` e.g.\n`2022/10/22 - 2022/10/24` (start and end). If range mode is chosen consider to use `dateRangeChange`.",definition:[{name:"Detail",value:"string | { from: string; to: string; }"}],tags:[{type:"deprecated",message:"String output will be removed. Set \xb4doneEventDelimiter\xb4 to undefined or null to get date change object instead of a string"}]},{name:"dateRangeChange",description:"Date range change.\nOnly triggered if datepicker is in range mode",definition:[{name:"Detail",value:"{ from: string; to: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"dateSelect",description:"Date selection confirmed via button action",definition:[{name:"Detail",value:"{ from: string; to: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"done",description:"Date selection confirmed via button action",definition:[{name:"Detail",value:"string"}],tags:[{type:"deprecated",message:"Will be removed in 2.0.0. Use `dateSelect`"}]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},21651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7896),a=(n(2784),n(30876)),i=n(63483);const o={},s=void 0,c={unversionedId:"auto-generated/ix-date-picker/props",id:"auto-generated/ix-date-picker/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-date-picker/props.md",sourceDirName:"auto-generated/ix-date-picker",slug:"/auto-generated/ix-date-picker/props",permalink:"/docs/auto-generated/ix-date-picker/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-picker/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{attributes:[{name:"corners",description:"Corner style",definition:[{name:"Attribute",value:"corners"},{name:"Type",value:'"left" \uff5c "right" \uff5c "rounded"'},{name:"Default",value:"'rounded'"}],tags:[]},{name:"eventDelimiter",description:"Default behavior of the done event is to join the two events (date and time) into one combined string output.\nThis combination can be configured over the delimiter",definition:[{name:"Attribute",value:"event-delimiter"},{name:"Type",value:"string"},{name:"Default",value:"' - '"}],tags:[{type:"since",message:"1.1.0"}]},{name:"format",description:"Date format string.\nSee @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.",definition:[{name:"Attribute",value:"format"},{name:"Type",value:"string"},{name:"Default",value:"'yyyy/LL/dd'"}],tags:[]},{name:"from",description:"Picker date. If the picker is in range mode this property is the start date.\nIf set to `null` no default start date will be pre-selected.\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"from"},{name:"Type",value:"string"},{name:"Default",value:"DateTime.now().toFormat(this.format)"}],tags:[{type:"since",message:"1.1.0"}]},{name:"individual",description:"",definition:[{name:"Attribute",value:"individual"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[{type:"deprecated",message:"Will be removed in 2.0.0"}]},{name:"maxDate",description:"The latest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"max-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"minDate",description:"The earliest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"min-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"since",message:"1.1.0"}]},{name:"range",description:"If true a range of dates can be selected.",definition:[{name:"Attribute",value:"range"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"textSelectDate",description:"Text of date select button",definition:[{name:"Attribute",value:"text-select-date"},{name:"Type",value:"string"},{name:"Default",value:"'Done'"}],tags:[{type:"since",message:"1.1.0"}]},{name:"to",description:"Picker date. If the picker is in range mode this property is the end date.\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"to"},{name:"Type",value:"string"},{name:"Default",value:"null"}],tags:[{type:"since",message:"1.1.0"}]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0},27597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/datepicker-range.ts",id:"auto-generated/previews/angular/datepicker-range.ts",title:"datepicker-range.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datepicker-range.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datepicker-range.ts",permalink:"/docs/auto-generated/previews/angular/datepicker-range.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datepicker-range.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-date-picker\n      [range]=\"isRange\"\n      [from]=\"fromDate\"\n      [to]=\"toDate\"\n    ></ix-date-picker>\n  `,\n})\nexport default class DatepickerRange {\n  isRange = true;\n\n  fromDate = '2022/12/15';\n  toDate = '2022/12/24';\n}\n")))}u.isMDXComponent=!0},45330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/datepicker.ts",id:"auto-generated/previews/angular/datepicker.ts",title:"datepicker.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datepicker.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datepicker.ts",permalink:"/docs/auto-generated/previews/angular/datepicker.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datepicker.ts.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  template: ` <ix-date-picker></ix-date-picker> `,\n})\nexport default class Datepicker {}\n")))}u.isMDXComponent=!0},60972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/datepicker-range",id:"auto-generated/previews/react/datepicker-range",title:"datepicker-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/datepicker-range.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/datepicker-range",permalink:"/docs/auto-generated/previews/react/datepicker-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/datepicker-range.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxDatePicker } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxDatePicker range={true} from=\"2022/12/15\" to=\"2022/12/24\" />;\n};\n")))}u.isMDXComponent=!0},30415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/datepicker",id:"auto-generated/previews/react/datepicker",title:"datepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/datepicker.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/datepicker",permalink:"/docs/auto-generated/previews/react/datepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/datepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IxDatePicker } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return <IxDatePicker />;\n};\n")))}u.isMDXComponent=!0},62659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/datepicker-range",id:"auto-generated/previews/vue/datepicker-range",title:"datepicker-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/datepicker-range.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/datepicker-range",permalink:"/docs/auto-generated/previews/vue/datepicker-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/datepicker-range.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxDatePicker } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxDatePicker range from="2022/12/15" to="2022/12/24" />\n</template>\n')))}u.isMDXComponent=!0},69912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/vue/datepicker",id:"auto-generated/previews/vue/datepicker",title:"datepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/datepicker.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/datepicker",permalink:"/docs/auto-generated/previews/vue/datepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/datepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxDatePicker } from '@siemens/ix-vue';\n<\/script>\n\n<template>\n  <IxDatePicker />\n</template>\n")))}u.isMDXComponent=!0},96720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/datepicker-range",id:"auto-generated/previews/web-component/datepicker-range",title:"datepicker-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/datepicker-range.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/datepicker-range",permalink:"/docs/auto-generated/previews/web-component/datepicker-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/datepicker-range.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-date-picker from="2022/12/15" to="2022/12/24"></ix-date-picker>\n<\/script>\n')))}u.isMDXComponent=!0},71124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/datepicker",id:"auto-generated/previews/web-component/datepicker",title:"datepicker",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/datepicker.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/datepicker",permalink:"/docs/auto-generated/previews/web-component/datepicker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/datepicker.md",tags:[],version:"current",frontMatter:{}},c={},l=[],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-date-picker></ix-date-picker>\n<\/script>\n")))}u.isMDXComponent=!0},11271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>E,frontMatter:()=>v,metadata:()=>w,toc:()=>b});var r=n(7896),a=(n(2784),n(30876)),i=n(6404),o=n(21651),s=n(89791),c=n(71124),l=n(30415),d=n(45330),u=n(96720),p=n(60972),m=n(27597),g=n(69912),f=n(62659);const v={},h="Date picker",w={unversionedId:"controls/date-picker",id:"controls/date-picker",title:"Date picker",description:"Usage",source:"@site/docs/controls/date-picker.md",sourceDirName:"controls",slug:"/controls/date-picker",permalink:"/docs/controls/date-picker",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/date-picker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Content Header",permalink:"/docs/controls/content-header"},next:{title:"Date time picker",permalink:"/docs/controls/date-time-picker"}},k={},b=[{value:"Usage",id:"usage",level:2},{value:"with range selection",id:"with-range-selection",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],y={toc:b};function E(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date-picker"},"Date picker"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(i.Z,{name:"datepicker",height:"35rem",frameworks:{react:l.default,angular:d.default,javascript:c.default,vue:g.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"with-range-selection"},"with range selection"),(0,a.kt)(i.Z,{name:"datepicker-range",height:"35rem",hideInitalCodePreview:!0,frameworks:{react:p.default,angular:m.default,javascript:u.default,vue:f.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(o.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(s.default,{mdxType:"Events"}))}E.isMDXComponent=!0}}]);