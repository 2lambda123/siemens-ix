"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14441],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>l});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),l=a,I=d["".concat(i,".").concat(l)]||d[l]||m[l]||o;return n?r.createElement(I,c(c({ref:t},p),{},{components:n})):r.createElement(I,c({ref:t},p))}));function l(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,c[1]=u;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7896),a=(n(2784),n(30876));const o={},c=void 0,u={unversionedId:"auto-generated/previews/vue/tabs-rounded",id:"auto-generated/previews/vue/tabs-rounded",title:"tabs-rounded",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tabs-rounded.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tabs-rounded",permalink:"/docs/auto-generated/previews/vue/tabs-rounded",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tabs-rounded.md",tags:[],version:"current",frontMatter:{}},i={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxIcon, IxTabItem, IxTabs } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxTabs rounded>\n    <IxTabItem>\n      <IxIcon name="success"></IxIcon>\n    </IxTabItem>\n    <IxTabItem :counter="200">\n      <IxIcon name="tree"></IxIcon>\n    </IxTabItem>\n    <IxTabItem>\n      <IxIcon name="maintenance"></IxIcon>\n    </IxTabItem>\n    <IxTabItem disabled :counter="24">\n      <IxIcon name="sound-loud"></IxIcon>\n    </IxTabItem>\n    <IxTabItem>\n      <IxIcon name="hierarchy"></IxIcon>\n    </IxTabItem>\n    <IxTabItem disabled>\n      <IxIcon name="calendar-settings"></IxIcon>\n    </IxTabItem>\n  </IxTabs>\n</template>\n')))}m.isMDXComponent=!0}}]);