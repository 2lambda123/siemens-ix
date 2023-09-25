"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67636,47187],{30876:(e,r,o)=>{o.d(r,{Zo:()=>x,kt:()=>I});var t=o(2784);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function y(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),i=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},x=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,x=y(e,["components","mdxType","originalType","parentName"]),c=i(o),I=n,u=c["".concat(l,".").concat(I)]||c[I]||s[I]||a;return o?t.createElement(u,p(p({ref:r},x),{},{components:o})):t.createElement(u,p({ref:r},x))}));function I(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=c;var y={};for(var l in r)hasOwnProperty.call(r,l)&&(y[l]=r[l]);y.originalType=e,y.mdxType="string"==typeof e?e:n,p[1]=y;for(var i=2;i<a;i++)p[i]=o[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},47187:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>a,metadata:()=>y,toc:()=>i});var t=o(7896),n=(o(2784),o(30876));const a={},p=void 0,y={unversionedId:"auto-generated/previews/vue/grid",id:"auto-generated/previews/vue/grid",title:"grid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/grid.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/grid",permalink:"/version-dev/docs/auto-generated/previews/vue/grid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/grid.md",tags:[],version:"current",frontMatter:{}},l={},i=[],x={toc:i};function s(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},x,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-vue\';\n// Example styling for documentation\nimport \'./grid.css\';\n<\/script>\n\n<template>\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n\n  <IxLayoutGrid>\n    <IxRow>\n      <IxCol><IxTypography format="display">1</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">2</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">3</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">4</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">5</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">6</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">7</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">8</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">9</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">10</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">11</IxTypography></IxCol>\n      <IxCol><IxTypography format="display">12</IxTypography></IxCol>\n    </IxRow>\n  </IxLayoutGrid>\n</template>\n')))}s.isMDXComponent=!0}}]);