"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91710],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7896),o=(t(2784),t(30876));const r={},l=void 0,i={unversionedId:"auto-generated/previews/angular/modal-by-template.ts",id:"auto-generated/previews/angular/modal-by-template.ts",title:"modal-by-template.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal-by-template.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal-by-template.ts",permalink:"/docs/auto-generated/previews/angular/modal-by-template.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal-by-template.ts.md",tags:[],version:"current",frontMatter:{}},s={},c=[],d={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component, TemplateRef, ViewChild } from \'@angular/core\';\nimport { ModalService } from \'@siemens/ix-angular\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button (click)="openModal()">Show modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <div class="modal-header">\n          Message headline\n          <ix-icon-button\n            data-button-close\n            ghost\n            icon="close"\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          ></ix-icon-button>\n        </div>\n        <div class="modal-body">Message text lorem ipsum: {{ modal.data }}</div>\n        <div class="modal-footer">\n          <ix-button\n            outline\n            class="dismiss-modal"\n            (click)="modal.dismiss(\'dismiss\')"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class="close-modal" (click)="modal.close(\'okay\')">\n            OK\n          </ix-button>\n        </div>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class Modal {\n  @ViewChild(\'customModal\', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async openModal() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      title: \'\',\n      data: \'Some data\',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n\n    instance.htmlElement.addEventListener(\n      \'keydown\',\n      (keyboardEvent: KeyboardEvent) => {\n        console.log(keyboardEvent.key);\n      }\n    );\n  }\n}\n')))}m.isMDXComponent=!0}}]);