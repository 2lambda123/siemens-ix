"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34416],{30876:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(t),u=r,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return t?o.createElement(f,c(c({ref:n},s),{},{components:t})):o.createElement(f,c({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},19286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var o=t(7896),r=(t(2784),t(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/web-component/modal",id:"auto-generated/previews/web-component/modal",title:"modal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal",permalink:"/version-dev/docs/auto-generated/previews/web-component/modal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal.md",tags:[],version:"current",frontMatter:{}},l={},m=[],s={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ix-button>Show modal</ix-button>\n<template id=\"modal-example-template\">\n  <ix-modal-header>Message headline</ix-modal-header>\n  <ix-modal-content>Message text lorem ipsum</ix-modal-content>\n  <ix-modal-footer>\n    <ix-button outline>Cancel</ix-button>\n    <ix-button>OK</ix-button>\n  </ix-modal-footer>\n</template>\n<script type=\"module\">\n  import { showModal, closeModal, dismissModal } from '@siemens/ix';\n\n  function createExampleModal() {\n    const name = 'modal-example';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.getElementById(\n            'modal-example-template'\n          );\n          const template = modalTemplate.content.cloneNode(true);\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined('ix-button');\n    const button = document.querySelector('ix-button');\n\n    button.addEventListener('click', async () => {\n      const customModal = document.createElement(exampleModalName);\n\n      const modal = await showModal({\n        content: customModal,\n      });\n    });\n  })();\n<\/script>\n")))}d.isMDXComponent=!0}}]);