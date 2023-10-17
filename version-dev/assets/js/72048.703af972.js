"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72048],{72048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var l=n(7896),a=(n(2784),n(30876));const c={},s=void 0,r={unversionedId:"auto-generated/previews/react/select-multiple",id:"auto-generated/previews/react/select-multiple",title:"select-multiple",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/select-multiple.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/select-multiple",permalink:"/version-dev/docs/auto-generated/previews/react/select-multiple",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/select-multiple.md",tags:[],version:"current",frontMatter:{}},o={},i=[],u={toc:i};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxSelect, IxSelectItem } from \'@siemens/ix-react\';\nimport React, { useLayoutEffect, useState } from \'react\';\n\nexport default () => {\n  const [selection, setSelection] = useState<string[]>([]);\n\n  useLayoutEffect(() => {\n    setSelection([\'1\', \'3\']);\n  }, [setSelection]);\n\n  return (\n    <IxSelect mode="multiple" value={selection}>\n      <IxSelectItem label="Item 1" value="1"></IxSelectItem>\n      <IxSelectItem label="Item 2" value="2"></IxSelectItem>\n      <IxSelectItem label="Item 3" value="3"></IxSelectItem>\n      <IxSelectItem label="Item 4" value="4"></IxSelectItem>\n    </IxSelect>\n  );\n};\n')))}m.isMDXComponent=!0}}]);