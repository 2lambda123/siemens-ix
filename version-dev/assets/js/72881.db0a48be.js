"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72881],{17647:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>n,c:()=>r,g:()=>o});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i.g?i.g:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return s()}},i.exports),i.exports}function s(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},72881:(e,t,i)=>{i.r(t),i.d(t,{ix_tree:()=>h});var n=i(8823),o=i(17647);var r=(0,o.c)((function(e,t){e.exports=function(){function e(t,i,n){function r(h,a){if(!i[h]){if(!t[h]){var l="function"==typeof o.a&&o.a;if(!a&&l)return l(h,!0);if(s)return s(h,!0);var d=new Error("Cannot find module '"+h+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[h]={exports:{}};t[h][0].call(c.exports,(function(e){return r(t[h][1][e]||e)}),c,c.exports,e,t,i,n)}return i[h].exports}for(var s="function"==typeof o.a&&o.a,h=0;h<n.length;h++)r(n[h]);return r}return e}()({1:[function(e,t,i){Object.defineProperty(i,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s={width:"100%",height:"100%"},h=function(e){return Number(e)==Number(e)},a="classList"in document.documentElement?function(e,t){e.classList.add(t)}:function(e,t){var i=e.getAttribute("class")||"";e.setAttribute("class",i+" "+t)},l=function(){function e(t,i){var n=this;r(this,e),this._config={},this._lastRepaint=null,this._maxElementHeight=e.getMaxBrowserHeight(),this.refresh(t,i);var o=this._config;!function e(){var t=n._getScrollPosition(),i=n._lastRepaint;if(n._renderAnimationFrame=window.requestAnimationFrame(e),t!==i){var r=i?t-i:0;if(!i||r<0||r>n._averageHeight){var s=n._renderChunk();n._lastRepaint=t,!1!==s&&"function"==typeof o.afterRender&&o.afterRender()}}}()}return n(e,null,[{key:"create",value:function(t,i){return new e(t,i)}},{key:"mergeStyle",value:function(e,t){for(var i in t)e.style[i]!==t[i]&&(e.style[i]=t[i])}},{key:"getMaxBrowserHeight",value:function(){var t=document.createElement("div"),i=document.createElement("div");e.mergeStyle(t,{position:"absolute",height:"1px",opacity:0}),e.mergeStyle(i,{height:"1e7px"}),t.appendChild(i),document.body.appendChild(t);var n=i.offsetHeight;return document.body.removeChild(t),n}}]),n(e,[{key:"destroy",value:function(){window.cancelAnimationFrame(this._renderAnimationFrame)}},{key:"refresh",value:function(t,i){var n;if(Object.assign(this._config,s,i),!t||1!==t.nodeType)throw new Error("HyperList requires a valid DOM Node container");this._element=t;var r=this._config,a=this._scroller||r.scroller||document.createElement(r.scrollerTagName||"tr");if("boolean"!=typeof r.useFragment&&(this._config.useFragment=!0),!r.generate)throw new Error("Missing required `generate` function");if(!h(r.total))throw new Error("Invalid required `total` value, expected number");if(!Array.isArray(r.itemHeight)&&!h(r.itemHeight))throw new Error("\n        Invalid required `itemHeight` value, expected number or array\n      ".trim());h(r.itemHeight)?this._itemHeights=Array(r.total).fill(r.itemHeight):this._itemHeights=r.itemHeight,Object.keys(s).filter((function(e){return e in r})).forEach((function(e){var t=r[e],i=h(t);if(t&&"string"!=typeof t&&"number"!=typeof t)throw new Error("Invalid optional `"+e+"`, expected string or number");i&&(r[e]=t+"px")}));var l=Boolean(r.horizontal),d=r[l?"width":"height"];if(d){var c=h(d),u=!c&&"%"===d.slice(-1),m=c?d:parseInt(d.replace(/px|%/,""),10),g=window[l?"innerWidth":"innerHeight"];this._containerSize=u?g*m/100:h(d)?d:m}var p=r.scrollContainer,f=r.itemHeight*r.total,v=this._maxElementHeight;f>v&&console.warn(["HyperList: The maximum element height",v+"px has","been exceeded; please reduce your item height."].join(" "));var _={width:""+r.width,height:p?f+"px":""+r.height,overflow:p?"none":"auto",position:"relative"};e.mergeStyle(t,_),p&&e.mergeStyle(r.scrollContainer,{overflow:"auto"});var y=(o(n={opacity:"0",position:"absolute"},l?"height":"width","1px"),o(n,l?"width":"height",f+"px"),n);e.mergeStyle(a,y),this._scroller||t.appendChild(a);var x=this._computeScrollPadding();this._scrollPaddingBottom=x.bottom,this._scrollPaddingTop=x.top,this._scroller=a,this._scrollHeight=this._computeScrollHeight(),this._itemPositions=this._itemPositions||Array(r.total).fill(0),this._computePositions(0),this._renderChunk(null!==this._lastRepaint),"function"==typeof r.afterRender&&r.afterRender()}},{key:"_getRow",value:function(t){var i=this._config,n=i.generate(t),r=n.height;if(void 0!==r&&h(r)?(n=n.element,r!==this._itemHeights[t]&&(this._itemHeights[t]=r,this._computePositions(t),this._scrollHeight=this._computeScrollHeight(t))):r=this._itemHeights[t],!n||1!==n.nodeType)throw new Error("Generator did not return a DOM Node for index: "+t);a(n,i.rowClassName||"vrow");var s=this._itemPositions[t]+this._scrollPaddingTop;return e.mergeStyle(n,o({position:"absolute"},i.horizontal?"left":"top",s+"px")),n}},{key:"_getScrollPosition",value:function(){var e=this._config;return"function"==typeof e.overrideScrollPosition?e.overrideScrollPosition():this._element[e.horizontal?"scrollLeft":"scrollTop"]}},{key:"_renderChunk",value:function(e){var t=this._config,i=this._element,n=this._getScrollPosition(),o=t.total,r=t.reverse?this._getReverseFrom(n):this._getFrom(n)-1;if((r<0||r-this._screenItemsLen<0)&&(r=0),!e&&this._lastFrom===r)return!1;this._lastFrom=r;var s=r+this._cachedItemsLen;(s>o||s+this._cachedItemsLen>o)&&(s=o);var h=t.useFragment?document.createDocumentFragment():[],a=this._scroller;h[t.useFragment?"appendChild":"push"](a);for(var l=r;l<s;l++){var d=this._getRow(l);h[t.useFragment?"appendChild":"push"](d)}if(t.applyPatch)return t.applyPatch(i,h);i.innerHTML="",i.appendChild(h)}},{key:"_computePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=this._config,i=t.total,n=t.reverse;e<1&&!n&&(e=1);for(var o=e;o<i;o++)n?0===o?this._itemPositions[0]=this._scrollHeight-this._itemHeights[0]:this._itemPositions[o]=this._itemPositions[o-1]-this._itemHeights[o]:this._itemPositions[o]=this._itemHeights[o-1]+this._itemPositions[o-1]}},{key:"_computeScrollHeight",value:function(){var t,i=this,n=this._config,r=Boolean(n.horizontal),s=n.total,h=this._itemHeights.reduce((function(e,t){return e+t}),0)+this._scrollPaddingBottom+this._scrollPaddingTop;e.mergeStyle(this._scroller,(o(t={opacity:0,position:"absolute",top:"0px"},r?"height":"width","1px"),o(t,r?"width":"height",h+"px"),t));var a=this._itemHeights.slice(0).sort((function(e,t){return e-t})),l=Math.floor(s/2),d=s%2==0?(a[l]+a[l-1])/2:a[l],c=r?"clientWidth":"clientHeight",u=n.scrollContainer?n.scrollContainer:this._element,m=u[c]?u[c]:this._containerSize;return this._screenItemsLen=Math.ceil(m/d),this._containerSize=m,this._cachedItemsLen=Math.max(this._cachedItemsLen||0,3*this._screenItemsLen),this._averageHeight=d,n.reverse&&window.requestAnimationFrame((function(){r?i._element.scrollLeft=h:i._element.scrollTop=h})),h}},{key:"_computeScrollPadding",value:function(){var e=this._config,t=Boolean(e.horizontal),i=e.reverse,n=window.getComputedStyle(this._element),o=function(e){var t=n.getPropertyValue("padding-"+e);return parseInt(t,10)||0};return t&&i?{bottom:o("left"),top:o("right")}:t?{bottom:o("right"),top:o("left")}:i?{bottom:o("top"),top:o("bottom")}:{bottom:o("bottom"),top:o("top")}}},{key:"_getFrom",value:function(e){for(var t=0;this._itemPositions[t]<e;)t++;return t}},{key:"_getReverseFrom",value:function(e){for(var t=this._config.total-1;t>0&&this._itemPositions[t]<e+this._containerSize;)t--;return t}}]),e}();i.default=l,t.exports=i.default},{}]},{},[1])(1)}));const s=(0,o.g)(r),h=class{constructor(e){(0,n.r)(this,e),this.contextChange=(0,n.c)(this,"contextChange",7),this.nodeToggled=(0,n.c)(this,"nodeToggled",7),this.nodeClicked=(0,n.c)(this,"nodeClicked",7),this.nodeRemoved=(0,n.c)(this,"nodeRemoved",7),this.toggleListener=new Map,this.itemClickListener=new Map,this.updates=new Map,this.hasFirstRender=!1,this.root=void 0,this.model=void 0,this.renderItem=void 0,this.context={}}updatePadding(e,t){e.style.paddingLeft=t.level+"rem"}getVirtualizerOptions(){const e=this.buildTreeList(this.model[this.root]);let t=(t,i,n)=>{if(t.hasChildren&&!this.toggleListener.has(i)){const o=i=>{i.preventDefault(),i.stopPropagation();const o=this.getContext(e[n].id);o.isExpanded=!o.isExpanded,this.nodeToggled.emit({id:t.id,isExpaned:o.isExpanded}),this.setContext(t.id,o)};i.addEventListener("toggle",o),this.toggleListener.set(i,o)}};return{itemHeight:32,total:e.length,generate:i=>{const n=e[i],o=this.hostElement.querySelector(`[data-tree-node-id="${n.id}"]`),r=this.getContext(n.id);if(o){if(o.hasChildren=n.hasChildren,o.context=Object.assign({},r),t(n,o,i),this.updates.has(n.id)){this.updates.get(n.id)(n,Object.assign({},this.context))}return this.updatePadding(o,n),o}const s=e=>{this.updates.set(n.id,e)};let h=null;this.renderItem&&(h=this.renderItem(i,n,e,Object.assign({},this.context),s)),null===h&&(h=function(e,t,i){const n=document.createElement("ix-tree-item");return n.hasChildren=e.hasChildren,n.context=t,n.text=e.data.name,i((e=>{n.text=e.data.name})),n}(n,r,s));const a=h;if(a.setAttribute("data-tree-node-id",n.id),a.style.paddingRight="1rem",this.updatePadding(a,n),!this.itemClickListener.has(a)){const e=e=>{e.preventDefault(),e.stopPropagation(),Object.values(this.context).forEach((e=>e.isSelected=!1));const t=this.getContext(n.id);t.isSelected=!0,this.setContext(n.id,t),this.nodeClicked.emit(n.id)};a.addEventListener("itemClick",e),this.itemClickListener.set(a,e)}return t(n,a,i),a}}}setContext(e,t){this.context=Object.assign(Object.assign({},this.context),{[e]:t}),this.contextChange.emit(this.context)}getContext(e){return this.context?(this.context[e]||(this.context[e]={isExpanded:!1,isSelected:!1}),this.context[e]):{isExpanded:!1,isSelected:!1}}buildTreeList(e,t){void 0===t&&(t=0);const i=[];if(null==e?void 0:e.hasChildren){const n=t+1;e.children.forEach((e=>{const o=this.model[e],r=this.getContext(e);i.push(Object.assign(Object.assign({},o),{level:t})),o.hasChildren&&r.isExpanded&&i.push(...this.buildTreeList(o,n))}))}return i}componentDidLoad(){this.initList(),this.observer=new MutationObserver((e=>{let t=[];e.forEach((e=>{t=[...t,...Array.from(e.removedNodes)],e.addedNodes.forEach((e=>{const i=t.indexOf(e);i>=0&&t.splice(i,1)}))})),this.nodeRemoved.emit(t)})),this.observer.observe(this.hostElement,{childList:!0})}componentWillRender(){this.hasFirstRender=!0,this.isListInitialized()?this.refreshList():this.initList()}disconnectedCallback(){var e,t;null===(e=this.hyperlist)||void 0===e||e.destroy(),null===(t=this.observer)||void 0===t||t.disconnect()}modelChange(){this.hasFirstRender&&!this.isListInitialized()&&this.initList()}isListInitialized(){var e;const t=null===(e=this.hyperlist)||void 0===e?void 0:e._itemPositions;return void 0!==t&&t.length&&!(null==t?void 0:t.some((e=>void 0===e||Number.isNaN(e))))}refreshList(){this.hyperlist&&this.hyperlist.refresh(this.hostElement,this.getVirtualizerOptions())}initList(){var e;if(!this.model)return;null===(e=this.hyperlist)||void 0===e||e.destroy();const t=this.getVirtualizerOptions();this.hyperlist=new s(this.hostElement,t)}render(){return(0,n.h)(n.H,null,(0,n.h)("slot",null))}get hostElement(){return(0,n.g)(this)}static get watchers(){return{model:["modelChange"]}}};h.style=":host{display:block}"}}]);