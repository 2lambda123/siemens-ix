"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39849],{30876:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>d});var r=o(2784);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function m(e,t){if(null==e)return{};var o,r,c=function(e,t){if(null==e)return{};var o,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(c[o]=e[o]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}var l=r.createContext({}),h=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},i=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,c=e.mdxType,n=e.originalType,l=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=h(o),d=c,u=p["".concat(l,".").concat(d)]||p[d]||s[d]||n;return o?r.createElement(u,a(a({ref:t},i),{},{components:o})):r.createElement(u,a({ref:t},i))}));function d(e,t){var o=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=o.length,a=new Array(n);a[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:c,a[1]=m;for(var h=2;h<n;h++)a[h]=o[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},60033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>g});var r=o(7896),c=o(2784),n=o(30876),a=o(90077),m=o(2015);const l=["--theme-color-ghost","--theme-color-ghost--hover","--theme-color-ghost--active","--theme-color-primary","--theme-color-primary--contrast","--theme-color-primary--hover","--theme-color-primary--active","--theme-color-dynamic","--theme-color-secondary","--theme-color-secondary--hover","--theme-color-secondary--active","--theme-color-component-1","--theme-color-component-1--hover","--theme-color-component-1--active","--theme-color-component-2","--theme-color-component-3","--theme-color-component-4","--theme-color-component-5","--theme-color-component-6","--theme-color-component-7--hover","--theme-color-component-7","--theme-color-component-7--active","--theme-color-component-error","--theme-color-component-8","--theme-color-ghost--selected","--theme-color-ghost--selected-hover","--theme-color-ghost--selected-active","--theme-color-ghost-primary--active","--theme-color-ghost-primary--hover","--theme-color-ghost-alt","--theme-color-ghost-alt--hover","--theme-color-ghost-alt--active","--theme-color-ghost-alt--selected","--theme-color-ghost-alt--selected-hover","--theme-color-ghost-alt--selected-active","--theme-color-primary--disabled","--theme-color-dynamic--hover","--theme-color-dynamic--active","--theme-color-dynamic-alt","--theme-color-dynamic-alt--hover","--theme-color-dynamic-alt--active","--theme-color-component-8--hover","--theme-color-component-9","--theme-color-component-9--hover","--theme-color-component-9--active","--theme-color-component-9--disabled","--theme-color-component-10","--theme-color-component-10--hover","--theme-color-component-10--active","--theme-color-component-10--disabled","--theme-color-1--hover","--theme-color-1--active","--theme-color-component-11","--theme-color-0","--theme-color-1","--theme-color-2","--theme-color-3","--theme-color-4","--theme-color-5","--theme-color-6","--theme-color-7","--theme-color-8","--theme-color-std-bdr","--theme-color-soft-bdr","--theme-color-weak-bdr","--theme-color-x-weak-bdr","--theme-color-focus-bdr","--theme-color-contrast-bdr","--theme-color-alarm","--theme-color-alarm--hover","--theme-color-alarm--active","--theme-color-alarm--contrast","--theme-color-alarm-40","--theme-color-alarm-10","--theme-color-warning","--theme-color-warning--hover","--theme-color-warning--active","--theme-color-warning--contrast","--theme-color-warning-40","--theme-color-warning-10","--theme-color-critical","--theme-color-critical--hover","--theme-color-critical--active","--theme-color-critical--contrast","--theme-color-critical-40","--theme-color-success","--theme-color-success--hover","--theme-color-success--active","--theme-color-success--contrast","--theme-color-success-40","--theme-color-info","--theme-color-info--hover","--theme-color-info--active","--theme-color-info--contrast","--theme-color-info-40","--theme-color-neutral","--theme-color-neutral--hover","--theme-color-neutral--active","--theme-color-neutral--contrast","--theme-color-neutral-40","--theme-color-contrast-text","--theme-color-std-text","--theme-color-soft-text","--theme-color-weak-text","--theme-color-inv-contrast-text","--theme-color-inv-std-text","--theme-color-inv-soft-text","--theme-color-inv-weak-text","--theme-color-alarm-text","--theme-color-shadow-1","--theme-color-shadow-2","--theme-color-shadow-3","--theme-color-lightbox","--theme-color-backdrop","--theme-color-backdrop-3","--theme-chart-1","--theme-chart-1-40","--theme-chart-2","--theme-chart-2-40","--theme-chart-3","--theme-chart-3-40","--theme-chart-4","--theme-chart-4-40","--theme-chart-5","--theme-chart-5-40","--theme-chart-6","--theme-chart-6-40","--theme-chart-7","--theme-chart-7-40","--theme-chart-8","--theme-chart-8-40","--theme-chart-9","--theme-chart-9-40","--theme-chart-10","--theme-chart-10-40","--theme-chart-11","--theme-chart-11-40","--theme-chart-12","--theme-chart-12-40","--theme-chart-13","--theme-chart-13-40","--theme-chart-14","--theme-chart-14-40","--theme-chart-15","--theme-chart-15-40","--theme-chart-16","--theme-chart-16-40","--theme-chart-17","--theme-chart-17-40"];function h(e){return c.createElement(m.pZ,{style:{marginBottom:"2rem"}},c.createElement(m.RI,{name:"search",slot:"input-start",size:"16",color:"color-primary"}),c.createElement("input",{type:"text",placeholder:"Search",onChange:t=>{const o=t.target.value;e.onChange(o)}}))}function i(e){const t=(0,a.Z)("/");return c.createElement("div",{className:"Color__Preview"},c.createElement("img",{src:`${t}img/chessboard_pattern.png`}),c.createElement("div",{className:"Color__Value",style:{backgroundColor:e.color}}))}const s=()=>{const[e,t]=(0,c.useState)(l);return(0,c.useEffect)((()=>{window.addEventListener("theme-change",(()=>{t([...e])}))}),[]),c.createElement("div",{className:"Theme__Colors"},c.createElement(h,{onChange:e=>{return o=e,void t([...l.filter((e=>!o||e.toLowerCase().includes(o.toLowerCase())))]);var o}}),c.createElement(m.cu,null,e.map((e=>{const t=(e=>{if("undefined"==typeof window)return;return getComputedStyle(document.body).getPropertyValue(e)})(e);return c.createElement(m.DK,{key:e,className:"Section"},c.createElement(m.Tr,{size:"3"},c.createElement(i,{color:t})),c.createElement(m.Tr,{size:"5"},c.createElement("div",{className:"Color__Name"},e)),c.createElement(m.Tr,{size:"3"},c.createElement("div",{className:"Color__RGB"},t)),c.createElement(m.Tr,{size:"1"},c.createElement(m.AN,{icon:"copy",ghost:!0,style:{marginRight:"1rem"},className:"Copy__Icon",oval:!0,onClick:()=>(async e=>{await navigator.clipboard.writeText(e),await(0,m.CF)({message:"Copied to clipboard!",autoCloseDelay:800})})(e)})))}))))},p={},d="Colors",u={unversionedId:"theming/colors",id:"theming/colors",title:"Colors",description:"All colors are provided as custom properties.",source:"@site/docs/theming/colors.md",sourceDirName:"theming",slug:"/theming/colors",permalink:"/version-dev/docs/theming/colors",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/theming/colors.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Borders",permalink:"/version-dev/docs/theming/borders"},next:{title:"Fonts",permalink:"/version-dev/docs/theming/fonts"}},v={},g=[],y={toc:g};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"colors"},"Colors"),(0,n.kt)("p",null,"All colors are provided as custom properties.\nTo access them the ",(0,n.kt)("inlineCode",{parentName:"p"},"var()")," CSS function can be called with the color's name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".some-example {\n  background-color: var(--theme-color-primary);\n}\n")),(0,n.kt)(s,{mdxType:"ThemeColors"}))}f.isMDXComponent=!0}}]);