"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11389],{2176:(e,t,n)=>{n.d(t,{Z:()=>i});var o,r=n(2784);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return r.createElement("svg",a({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?r.createElement("title",{id:n},t):null,o||(o=r.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))}},63483:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(2784),r=n(731);function a(e){var t,n,a,i,d,s,l,p;return o.createElement("div",{className:"row with--border"},o.createElement("div",{className:"col-sm-6"},o.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(n=e.attribute)||null==(a=n.tags)?void 0:a.filter((e=>"since"===e.type)).map((t=>{var n;return o.createElement(r.h,{message:t.message,key:`Tag_Since_${null==e||null==(n=e.attribute)?void 0:n.name}`})})),null==e||null==(i=e.attribute)||null==(d=i.tags)?void 0:d.filter((e=>"deprecated"===e.type)).map((t=>{var n;return o.createElement(r.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(n=e.attribute)?void 0:n.name}`})})))),o.createElement("div",{className:"col-sm-6"},o.createElement("div",{className:"ApiTable__Content"},o.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),o.createElement("div",{className:"container-fluid"},null==e||null==(l=e.attribute)||null==(p=l.definition)?void 0:p.filter((e=>void 0!==e.value)).map((e=>o.createElement("div",{className:"row Attribute",key:e.name},o.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),o.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const i=function(e){var t;return o.createElement("div",{className:"container-fluid ApiTable"},o.createElement("div",{className:"row with--border"},o.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),o.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>o.createElement(a,{attribute:e,key:e.name}))))}},731:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>a});var o=n(2784);function r(e){return o.createElement("div",{className:"ApiTableTag"},o.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),o.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function a(e){return o.createElement("div",{className:"ApiTableTag"},o.createElement("div",{className:"Tag"},"Since ",e.message))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(37949),r=n(90077),a=n(37614),i=n(2784),d=n(90943);function s(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),s=(0,r.Z)("/"),[l,p]=(0,i.useState)(""),[c,u]=(0,i.useState)((0,d.V)(t)),{preferredVersion:m}=(0,o.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;p(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,d.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:c}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},6404:(e,t,n)=>{n.d(t,{Z:()=>h});var o,r=n(7267),a=n(90077),i=n(53849),d=n(2176),s=n(2784);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...r}=e;return s.createElement("svg",l({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?s.createElement("title",{id:n},t):null,o||(o=s.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var c=n(77942);let u;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview"}(u||(u={}));var m=n(14091);const w="https://github.com/siemens/ix/tree/main/packages";function v(e){let{name:t,framework:n}=e;const o=function(e){let{name:t,framework:n}=e;return n===u.ANGULAR?`${w}/angular-test-app/src/preview-examples/${t}.ts`:n===u.JAVASCRIPT?`${w}/html-test-app/src/preview-examples/${t}.html`:n===u.REACT?`${w}/react-test-app/src/preview-examples/${t}.tsx`:n===u.VUE?`${w}/vue-test-app/src/preview-examples/${t}.vue`:void 0}({framework:n,name:t});window.open(o,"_blank")}async function b(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e){let{name:t,framework:n,files:o,baseUrl:r}=e;const a=await async function(e,t,n){const o=[];return(await b(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{o.push({filename:n[t],sourceCode:e})})),o}(r,n,o);return n===u.REACT?async function(e,t){const[n,o,r,a,i]=await b([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[d]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":o,"src/index.tsx":r,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename.substring(0,d.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":a,"tsconfig.json":i,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${d.filename}`})}(r,a):n===u.ANGULAR?async function(e,t,n){const[o,r,a,i,d,s,l,p,c,u,w]=await b([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),v=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&v.push(t)}));const g=`\n    ${v.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${v.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,x={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;x[`src/app/${t}`]=n})),m.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":g,"src/app/app.component.css":o,"src/app/app.component.html":r,"src/app/app.component.ts":a,"src/app/app.module.ts":i,"src/index.html":d,"src/main.ts":s,"src/styles.css":l,"angular.json":p,"package.json":c,"tsconfig.app.json":u,"tsconfig.json":w,...x}},{openFile:`src/app/${t}.ts`})}(r,t,a):n===u.JAVASCRIPT?async function(e,t){const[n,o,r,a]=await b([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[i,...d]=t,s={};d.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),m.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",i.sourceCode),"src/main.js":o,"package.json":r,"vite.config.ts":a}},{openFile:["src/index.html"]})}(r,a):n===u.VUE?async function(e,t){const[n,o,r,a,i,d,s]=await b([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[l]=t,p={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;p[`src/${t}`]=n})),m.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...p,"index.html":o,"src/main.ts":r,"src/App.vue":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":s,"package.json":a,"tsconfig.json":i,"vite.config.ts":d,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${l.filename}`})}(r,a):void 0}function x(e){let{name:t,framework:n}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>v({name:t,framework:n})},s.createElement(d.Z,null))}function f(e){let{name:t,files:n,framework:o,baseUrl:r}=e;return s.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>g({name:t,files:n,framework:o,baseUrl:r})},s.createElement(p,null))}function I(e){const[t,n]=(0,s.useState)(e.files[0].filename);return s.createElement(s.Fragment,null,s.createElement(i.Vp,null,e.files.map((e=>{e.node;return s.createElement(i.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const o=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return o?s.createElement(o,null):null}())}function h(e){let{name:t,height:n,noMargin:o,theme:d,frameworks:l,availableFrameworks:p}=e;const{pathname:m}=(0,r.TH)(),w=(0,a.Z)("/"),[v,b]=(0,s.useState)(!0),[g,h]=(0,s.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||u.PREVIEW}(p)),[D,k]=(0,s.useState)();(0,s.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(m+t)),[t,m]);(0,s.useEffect)((()=>{const e={};l&&(Object.keys(l).forEach((n=>{if("function"==typeof l[n]){let o=t;n===u.REACT&&(o=o.concat(".tsx")),n===u.JAVASCRIPT&&(o=o.concat(".html")),n===u.ANGULAR&&(o=o.concat(".ts")),n===u.VUE&&(o=o.concat(".vue")),e[n]=[{filename:o,node:l[n]({})}]}"object"==typeof l[n]&&(e[n]||(e[n]=[]),Object.keys(l[n]).forEach((t=>{e[n].push({filename:t,node:l[n][t]})})))})),k(e))}),[l,k]);const y=e=>{h(e)};function E(e){return p?0===p.length||p.includes(e):Object.keys(l).some((t=>t===e))}return s.createElement("div",{className:"Playground"},v?s.createElement(s.Fragment,null,s.createElement("div",{className:"Playground__Toolbar Location__Bottom"},s.createElement(i.Vp,null,s.createElement(i.t3,{selected:g===u.PREVIEW,onClick:()=>y(u.PREVIEW)},"Preview"),E(u.ANGULAR)?s.createElement(i.t3,{selected:g===u.ANGULAR,onClick:()=>y(u.ANGULAR)},"Angular"):null,E(u.REACT)?s.createElement(i.t3,{selected:g===u.REACT,onClick:()=>y(u.REACT)},"React"):null,E(u.JAVASCRIPT)?s.createElement(i.t3,{selected:g===u.JAVASCRIPT,onClick:()=>y(u.JAVASCRIPT)},"JavaScript"):null,E(u.VUE)?s.createElement(i.t3,{selected:g===u.VUE,onClick:()=>y(u.VUE)},"Vue"):null),s.createElement("div",{className:"Playground__Toolbar__Actions"},g!==u.PREVIEW?s.createElement(s.Fragment,null,s.createElement(x,{name:t,framework:g}),s.createElement(f,{name:t,framework:g,baseUrl:w,files:D?g===u.PREVIEW?[]:D[g].map((e=>e.filename)):[]})):null)),function(){if(g===u.PREVIEW)return s.createElement(c.Z,{name:t,height:n,noMargin:o,theme:d});if(!D||!D[g])return null;if(1===D[g].length){const[{node:e}]=D[g];return e}return s.createElement(I,{files:D[g]})}()):null)}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(82009),r=n(77336),a=n(2784),i=n(77942);const d={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return a.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[a.createElement(o.Z,{value:"preview",key:"preview"},a.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>d[e.props.value]-d[t.props.value])))}},3087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown-button/events",id:"auto-generated/ix-dropdown-button/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-dropdown-button/events.md",sourceDirName:"auto-generated/ix-dropdown-button",slug:"/auto-generated/ix-dropdown-button/events",permalink:"/version-dev/docs/auto-generated/ix-dropdown-button/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-button/events.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No events available for this component."))}c.isMDXComponent=!0},66475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown-button/overview",id:"auto-generated/ix-dropdown-button/overview",title:"overview",description:"",source:"@site/docs/auto-generated/ix-dropdown-button/overview.md",sourceDirName:"auto-generated/ix-dropdown-button",slug:"/auto-generated/ix-dropdown-button/overview",permalink:"/version-dev/docs/auto-generated/ix-dropdown-button/overview",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-button/overview.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}))}c.isMDXComponent=!0},61662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7896),r=(n(2784),n(30876)),a=n(63483);const i={},d=void 0,s={unversionedId:"auto-generated/ix-dropdown-button/props",id:"auto-generated/ix-dropdown-button/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-dropdown-button/props.md",sourceDirName:"auto-generated/ix-dropdown-button",slug:"/auto-generated/ix-dropdown-button/props",permalink:"/version-dev/docs/auto-generated/ix-dropdown-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-button/props.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{attributes:[{name:"active",description:"Active button (has no effect)",definition:[{name:"Attribute",value:"active"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"deprecated",message:"Will be removed in 3.0.0"}]},{name:"disabled",description:"Disable button",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"ghost",description:"Button with no background or outline",definition:[{name:"Attribute",value:"ghost"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"icon",description:"Button icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"label",description:"Set label",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"outline",description:"Outline button",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"placement",description:"Placement of the dropdown",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom-end" \uff5c "bottom-start" \uff5c "left-end" \uff5c "left-start" \uff5c "right-end" \uff5c "right-start" \uff5c "top-end" \uff5c "top-start"'},{name:"Default"}],tags:[{type:"since",message:"2.0.0"}]},{name:"variant",description:"Button variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"primary" \uff5c "secondary"'},{name:"Default",value:"'primary'"}],tags:[]}],mdxType:"ApiTable"}))}u.isMDXComponent=!0},49612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown-button/tags",id:"auto-generated/ix-dropdown-button/tags",title:"tags",description:"Since: 1.3.0",source:"@site/docs/auto-generated/ix-dropdown-button/tags.md",sourceDirName:"auto-generated/ix-dropdown-button",slug:"/auto-generated/ix-dropdown-button/tags",permalink:"/version-dev/docs/auto-generated/ix-dropdown-button/tags",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown-button/tags.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"Api__Table Docs__Tag"},"Since: 1.3.0"))}c.isMDXComponent=!0},38542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown-button-icon.ts",id:"auto-generated/previews/angular/dropdown-button-icon.ts",title:"dropdown-button-icon.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-button-icon.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/dropdown-button-icon.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-button-icon.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-button-icon\',\n  template: `\n    <ix-dropdown-button label="" variant="primary" icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" outline icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" ghost icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button label="" variant="primary" disabled icon="checkboxes">\n    </ix-dropdown-button>\n  `,\n})\nexport class Dropdown {}\n')))}c.isMDXComponent=!0},27145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown-button.ts",id:"auto-generated/previews/angular/dropdown-button.ts",title:"dropdown-button.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-button.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-button.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/dropdown-button.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-button.ts.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-button\',\n  template: `\n    <ix-dropdown-button label="Dropdown" variant="primary" icon="checkboxes">\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      outline\n      icon="checkboxes"\n    >\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      ghost\n      icon="checkboxes"\n    >\n      <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n    </ix-dropdown-button>\n    <ix-dropdown-button\n      label="Dropdown"\n      variant="primary"\n      disabled\n      icon="checkboxes"\n    >\n    </ix-dropdown-button>\n  `,\n})\nexport class Dropdown {}\n')))}c.isMDXComponent=!0},22276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown-button-icon",id:"auto-generated/previews/react/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-button-icon",permalink:"/version-dev/docs/auto-generated/previews/react/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxDropdownButton, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxDropdownButton label="" variant="primary" icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton label="" variant="primary" outline icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton label="" variant="primary" ghost icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label=""\n        variant="primary"\n        disabled\n        icon="checkboxes"\n      ></IxDropdownButton>\n    </>\n  );\n};\n')))}c.isMDXComponent=!0},97610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown-button",id:"auto-generated/previews/react/dropdown-button",title:"dropdown-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/dropdown-button.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-button",permalink:"/version-dev/docs/auto-generated/previews/react/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/dropdown-button.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxDropdownButton, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <>\n      <IxDropdownButton label="Dropdown" variant="primary" icon="checkboxes">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        outline\n        icon="checkboxes"\n      >\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        ghost\n        icon="checkboxes"\n      >\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n      </IxDropdownButton>\n      <IxDropdownButton\n        label="Dropdown"\n        variant="primary"\n        disabled\n        icon="checkboxes"\n      ></IxDropdownButton>\n    </>\n  );\n};\n')))}c.isMDXComponent=!0},96451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/vue/dropdown-button-icon",id:"auto-generated/previews/vue/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/dropdown-button-icon",permalink:"/version-dev/docs/auto-generated/previews/vue/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxDropdownButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxDropdownButton label="" variant="primary" icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="" variant="primary" ghost icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="" variant="primary" disabled icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n</template>\n')))}c.isMDXComponent=!0},34173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/vue/dropdown-button",id:"auto-generated/previews/vue/dropdown-button",title:"dropdown-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/dropdown-button.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/dropdown-button",permalink:"/version-dev/docs/auto-generated/previews/vue/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/dropdown-button.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxDropdownButton } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxDropdownButton label="Dropdown" variant="primary" icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton label="Dropdown" variant="primary" ghost icon="checkboxes">\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n\n  <IxDropdownButton\n    label="Dropdown"\n    variant="primary"\n    disabled\n    icon="checkboxes"\n  >\n    <IxDropdownItem label="Item 1"></IxDropdownItem>\n    <IxDropdownItem label="Item 2"></IxDropdownItem>\n  </IxDropdownButton>\n</template>\n')))}c.isMDXComponent=!0},51368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown-button-icon",id:"auto-generated/previews/web-component/dropdown-button-icon",title:"dropdown-button-icon",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown-button-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-button-icon",permalink:"/version-dev/docs/auto-generated/previews/web-component/dropdown-button-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown-button-icon.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-dropdown-button label="" variant="primary" icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="primary" outline icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="primary" ghost icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button label="" variant="primary" disabled icon="checkboxes">\n  </ix-dropdown-button>\n</div>\n')))}c.isMDXComponent=!0},51779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown-button",id:"auto-generated/previews/web-component/dropdown-button",title:"dropdown-button",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown-button.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-button",permalink:"/version-dev/docs/auto-generated/previews/web-component/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown-button.md",tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-dropdown-button label="Dropdown" variant="primary" icon="checkboxes">\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button\n    label="Dropdown"\n    variant="primary"\n    outline\n    icon="checkboxes"\n  >\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button\n    label="Dropdown"\n    variant="primary"\n    ghost\n    icon="checkboxes"\n  >\n    <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>\n    <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>\n  </ix-dropdown-button>\n  <ix-dropdown-button\n    label="Dropdown"\n    variant="primary"\n    disabled\n    icon="checkboxes"\n  >\n  </ix-dropdown-button>\n</div>\n')))}c.isMDXComponent=!0},41192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>y,frontMatter:()=>x,metadata:()=>I,toc:()=>D});var o=n(7896),r=(n(2784),n(30876)),a=n(6404),i=(n(82009),n(64176),n(66475)),d=n(49612),s=n(61662),l=n(3087),p=n(51779),c=n(51368),u=n(97610),m=n(22276),w=n(27145),v=n(38542),b=n(34173),g=n(96451);const x={},f="Dropdown button",I={unversionedId:"controls/dropdown-button",id:"controls/dropdown-button",title:"Dropdown button",description:"Usage",source:"@site/docs/controls/dropdown-button.md",sourceDirName:"controls",slug:"/controls/dropdown-button",permalink:"/version-dev/docs/controls/dropdown-button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/dropdown-button.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Drawer",permalink:"/version-dev/docs/controls/drawer"},next:{title:"Dropdown",permalink:"/version-dev/docs/controls/dropdown"}},h={},D=[{value:"Usage",id:"usage",level:2},{value:"Icon",id:"icon",level:3},{value:"Properties (ix-dropdown-button)",id:"properties-ix-dropdown-button",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],k={toc:D};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dropdown-button"},"Dropdown button"),(0,r.kt)(d.default,{mdxType:"Tags"}),(0,r.kt)(i.default,{mdxType:"Overview"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(a.Z,{name:"dropdown-button",height:"16rem",frameworks:{react:u.default,angular:w.default,javascript:p.default,vue:b.default},mdxType:"Playground"}),(0,r.kt)("h3",{id:"icon"},"Icon"),(0,r.kt)(a.Z,{name:"dropdown-button-icon",height:"16rem",frameworks:{react:m.default,angular:v.default,javascript:c.default,vue:g.default},mdxType:"Playground"}),(0,r.kt)("h2",{id:"properties-ix-dropdown-button"},"Properties (ix-dropdown-button)"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(s.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}))}y.isMDXComponent=!0}}]);