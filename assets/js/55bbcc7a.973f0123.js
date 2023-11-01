"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15133,8326],{30876:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(2784);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||a;return t?n.createElement(m,p(p({ref:r},c),{},{components:t})):n.createElement(m,p({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8326:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(7896),o=(t(2784),t(30876));const a={},p=void 0,i={unversionedId:"auto-generated/previews/vue/grid-size",id:"auto-generated/previews/vue/grid-size",title:"grid-size",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/grid-size.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/grid-size",permalink:"/docs/auto-generated/previews/vue/grid-size",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/grid-size.md",tags:[],version:"current",frontMatter:{}},l={},s=[],c={toc:s};function y(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-vue\';\n<\/script>\n\n<style scoped>\nix-layout-grid {\n  margin-bottom: 1rem;\n}\n\nix-col {\n  background-color: var(--theme-color-primary);\n  border: var(--theme-std-bdr-2);\n  text-align: center;\n  color: var(--theme-color-inv-contrast-text);\n}\n\n.example-parent {\n  padding-top: 1rem;\n  padding-bottom: 0.25rem;\n  background-color: var(--theme-color-info-40);\n}\n</style>\n\n<template>\n  <h4>Column 6 takes up more space to a max of 12 columns total</h4>\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n      <IxCol size="6"><IxTypography format="display">6</IxTypography></IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n\n  <h4>Stack columns on smaller screens</h4>\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol size="12" size-md="3">\n        <IxTypography format="display">1</IxTypography>\n      </IxCol>\n      <IxCol size="12" size-md="3">\n        <IxTypography format="display">2</IxTypography>\n      </IxCol>\n      <IxCol size="12" size-md="3">\n        <IxTypography format="display">3</IxTypography>\n      </IxCol>\n      <IxCol size="12" size-md="3">\n        <IxTypography format="display">4</IxTypography>\n      </IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n</template>\n')))}y.isMDXComponent=!0}}]);