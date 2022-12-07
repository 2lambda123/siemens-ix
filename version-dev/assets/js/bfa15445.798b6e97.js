"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[127],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),v=o,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/angular/event-list",id:"auto-generated/previews/angular/event-list",title:"event-list",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/event-list.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/event-list",permalink:"/version-dev/docs/auto-generated/previews/angular/event-list",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/event-list.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-event-list\',\n  template: `\n    <ix-event-list>\n      <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>\n      <ix-event-list-item color="color-primary">Text 2</ix-event-list-item>\n      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>\n      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>\n    </ix-event-list>\n  `,\n})\nexport class EventList {}\n')))}u.isMDXComponent=!0}}]);