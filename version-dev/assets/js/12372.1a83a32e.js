"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12372],{12372:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>w,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(7896),r=(o(2784),o(30876));const s={},a=void 0,i={unversionedId:"auto-generated/previews/angular/workflow.ts",id:"auto-generated/previews/angular/workflow.ts",title:"workflow.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/workflow.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/workflow.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/workflow.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/workflow.ts.md",tags:[],version:"current",frontMatter:{}},w={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-workflow-steps>\n    <ix-workflow-step status="done">Step 1</ix-workflow-step>\n    <ix-workflow-step status="success">Step 2</ix-workflow-step>\n    <ix-workflow-step status="open">Step 3</ix-workflow-step>\n    <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n    <ix-workflow-step status="error">Step 5</ix-workflow-step>\n    <ix-workflow-step disabled>Step 6</ix-workflow-step>\n  </ix-workflow-steps>`,\n})\nexport default class Workflow {}\n\n')))}u.isMDXComponent=!0}}]);