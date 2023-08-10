"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54994],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>w});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=i(r),w=o,d=f["".concat(c,".").concat(w)]||f[w]||u[w]||a;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7896),o=(r(2784),r(30876));const a={},p=void 0,l={unversionedId:"auto-generated/previews/vue/workflow",id:"auto-generated/previews/vue/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/workflow.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/workflow",permalink:"/version-dev/docs/auto-generated/previews/vue/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/workflow.md",tags:[],version:"current",frontMatter:{}},c={},i=[],s={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxWorkflowStep, IxWorkflowSteps } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxWorkflowSteps>\n    <IxWorkflowStep status="done">Step 1</IxWorkflowStep>\n    <IxWorkflowStep status="success">Step 2</IxWorkflowStep>\n    <IxWorkflowStep status="open">Step 3</IxWorkflowStep>\n    <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>\n    <IxWorkflowStep status="error">Step 5</IxWorkflowStep>\n    <IxWorkflowStep disabled>Step 6</IxWorkflowStep>\n  </IxWorkflowSteps>\n</template>\n')))}u.isMDXComponent=!0}}]);