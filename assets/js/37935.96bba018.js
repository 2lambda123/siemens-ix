"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37935],{37935:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>p});var t=o(7896),r=(o(2784),o(30876));const d={},a=void 0,i={unversionedId:"auto-generated/previews/angular/dropdown-submenu.ts",id:"auto-generated/previews/angular/dropdown-submenu.ts",title:"dropdown-submenu.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/dropdown-submenu.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-submenu.ts",permalink:"/docs/auto-generated/previews/angular/dropdown-submenu.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/dropdown-submenu.ts.md",tags:[],version:"current",frontMatter:{}},u={},p=[],s={toc:p};function m(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-button #trigger>Open</ix-button>\n    <ix-dropdown [ixDropdownTrigger]="trigger">\n      <ix-dropdown-item #submenu label="Submenu"></ix-dropdown-item>\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n    <ix-dropdown [ixDropdownTrigger]="submenu" placement="right-start">\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport default class DropdownSubmenu {}\n')))}m.isMDXComponent=!0}}]);