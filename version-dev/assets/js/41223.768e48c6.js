"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41223],{41223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7896),s=(a(2784),a(30876));const o={},i=void 0,r={unversionedId:"auto-generated/previews/vue/tabs",id:"auto-generated/previews/vue/tabs",title:"tabs",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tabs.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tabs",permalink:"/version-dev/docs/auto-generated/previews/vue/tabs",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tabs.md",tags:[],version:"current",frontMatter:{}},d={},c=[],u={toc:c};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script setup lang="ts">\nimport { IxTabItem, IxTabs } from \'@siemens/ix-vue\';\nimport { ref } from \'vue\';\n\nconst selectedTab = ref(0);\nconst changeTab = (tabId: number) => (selectedTab.value = tabId);\n<\/script>\n\n<template>\n  <div style="display: block; position: relative; width: 100%">\n    <IxTabs :selected="selectedTab">\n      <IxTabItem @click="changeTab(0)">Tab 1</IxTabItem>\n      <IxTabItem @click="changeTab(1)">Tab 2</IxTabItem>\n      <IxTabItem @click="changeTab(2)">Tab 3</IxTabItem>\n    </IxTabs>\n    <div v-show="selectedTab === 0">Content 1</div>\n    <div v-show="selectedTab === 1">Content 2</div>\n    <div v-show="selectedTab === 2">Content 3</div>\n  </div>\n</template>\n')))}b.isMDXComponent=!0}}]);