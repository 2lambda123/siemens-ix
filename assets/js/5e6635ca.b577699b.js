"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37483],{30876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},63483:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(2784),n=a(731);function i(e){var t,a,i,l,o,s,c,u;return r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Name"},null==e||null==(t=e.attribute)?void 0:t.name,null==e||null==(a=e.attribute)||null==(i=a.tags)?void 0:i.filter((e=>"since"===e.type)).map((t=>{var a;return r.createElement(n.h,{message:t.message,key:`Tag_Since_${null==e||null==(a=e.attribute)?void 0:a.name}`})})),null==e||null==(l=e.attribute)||null==(o=l.tags)?void 0:o.filter((e=>"deprecated"===e.type)).map((t=>{var a;return r.createElement(n.Q,{message:t.message,key:`Tag_Deprecated_${null==e||null==(a=e.attribute)?void 0:a.name}`})})))),r.createElement("div",{className:"col-sm-6"},r.createElement("div",{className:"ApiTable__Content"},r.createElement("span",{className:"Attribute__Description"},null==e||null==(s=e.attribute)?void 0:s.description),r.createElement("div",{className:"container-fluid"},null==e||null==(c=e.attribute)||null==(u=c.definition)?void 0:u.filter((e=>void 0!==e.value)).map((e=>r.createElement("div",{className:"row Attribute",key:e.name},r.createElement("div",{className:"col-auto Attribute__Name"},e.name,":"),r.createElement("code",{className:"col-auto Attribute__Value"},e.value))))))))}const l=function(e){var t;return r.createElement("div",{className:"container-fluid ApiTable"},r.createElement("div",{className:"row with--border"},r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Name"),r.createElement("div",{className:"col-sm-6 ApiTable__Headline"},"Description and specifications")),null==e||null==(t=e.attributes)?void 0:t.map((e=>r.createElement(i,{attribute:e,key:e.name}))))}},731:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>i});var r=a(2784);function n(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag Tag--Deprecated"},"Deprecated"),r.createElement("div",{className:"Tag__Message--Deprecated"},e.message))}function i(e){return r.createElement("div",{className:"ApiTableTag"},r.createElement("div",{className:"Tag"},"Since ",e.message))}},11446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(7896),n=(a(2784),a(30876)),i=a(63483);const l={},o=void 0,s={unversionedId:"auto-generated/ix-message-bar/props",id:"auto-generated/ix-message-bar/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-message-bar/props.md",sourceDirName:"auto-generated/ix-message-bar",slug:"/auto-generated/ix-message-bar/props",permalink:"/docs/auto-generated/ix-message-bar/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-message-bar/props.md",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{attributes:[{name:"dismissible",description:"If true, close button is enabled and alert can be dismissed by the user",definition:[{name:"Attribute",value:"dismissible"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"type",description:"Specifies the type of the alert.",definition:[{name:"Attribute",value:"type"},{name:"Type",value:'"danger" \uff5c "info" \uff5c "warning"'},{name:"Default",value:"'info'"}],tags:[]}],mdxType:"ApiTable"}))}p.isMDXComponent=!0}}]);