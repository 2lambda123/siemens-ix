"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72062],{72062:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const t={},i=void 0,s={unversionedId:"auto-generated/previews/react/grid-size",id:"auto-generated/previews/react/grid-size",title:"grid-size",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/grid-size.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/grid-size",permalink:"/version-dev/docs/auto-generated/previews/react/grid-size",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/grid-size.md",tags:[],version:"current",frontMatter:{}},p={},d=[],x={toc:d};function y(e){let{components:o,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},x,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxCol, IxLayoutGrid, IxRow, IxTypography } from \'@siemens/ix-react\';\nimport React from \'react\';\n// Example styling for documentation\nimport \'./styles/grid.css\';\n\nexport default () => {\n  return (\n    <>\n      <h4>Column 6 takes up more space to a max of 12 columns total</h4>\n      <IxLayoutGrid className={\'ExampleGrid\'}>\n        <IxRow>\n          <IxCol>\n            <IxTypography format="display">1</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">2</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">3</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">4</IxTypography>\n          </IxCol>\n          <IxCol>\n            <IxTypography format="display">5</IxTypography>\n          </IxCol>\n          <IxCol size="6">\n            <IxTypography format="display">6</IxTypography>\n          </IxCol>\n        </IxRow>\n      </IxLayoutGrid>\n\n      <h4>Stack columns on smaller screens</h4>\n      <IxLayoutGrid className={\'ExampleGrid\'}>\n        <IxRow>\n          <IxCol size="12" size-md="3">\n            <IxTypography format="display">1</IxTypography>\n          </IxCol>\n          <IxCol size="12" size-md="3">\n            <IxTypography format="display">2</IxTypography>\n          </IxCol>\n          <IxCol size="12" size-md="3">\n            <IxTypography format="display">3</IxTypography>\n          </IxCol>\n          <IxCol size="12" size-md="3">\n            <IxTypography format="display">4</IxTypography>\n          </IxCol>\n        </IxRow>\n      </IxLayoutGrid>\n    </>\n  );\n};\n\n')))}y.isMDXComponent=!0}}]);