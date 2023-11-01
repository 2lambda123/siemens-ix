import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from "./index.171dd6c4.js";
import { g as getSlottedElements } from "./shadow-dom-b9df3d9b.b432e56b.js";
const groupContextMenuCss = ":host{display:block;position:relative;height:2rem;width:2rem;-webkit-margin-before:0.3125rem;margin-block-start:0.3125rem;-webkit-margin-end:0.3125rem;margin-inline-end:0.3125rem;-webkit-margin-start:auto;margin-inline-start:auto}:host .hide{visibility:collapse}";
const GroupContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showContextMenu = false;
  }
  getTrigger() {
    return this.hostElement;
  }
  configureDropdown(dropdownElement, triggerElement) {
    dropdownElement.positioningStrategy = "fixed";
    dropdownElement.trigger = triggerElement;
  }
  onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector("slot");
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
    const dropdownElement = elements.find((elm) => elm.tagName === "IX-DROPDOWN");
    const triggerElement = this.getTrigger();
    if (!triggerElement) {
      return;
    }
    if (!dropdownElement) {
      return;
    }
    this.configureDropdown(dropdownElement, triggerElement);
  }
  render() {
    return h(Host, null, h("ix-icon-button", { class: { hide: !this.showContextMenu }, size: "24", ghost: true, icon: "context-menu" }), h("slot", { onSlotchange: () => this.onSlotChange() }));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupContextMenu.style = groupContextMenuCss;
const groupItemCss = ":host{display:flex;min-height:2.25rem;height:2.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host>button{display:flex;height:100%;width:100%;align-items:center;justify-content:flex-start;position:relative;outline:none;background-color:var(--theme-group-item--background);border:1px solid transparent;color:var(--theme-color-std-text);padding-left:2.5rem}:host>button:focus-visible{border:1px solid var(--theme-color-focus-bdr)}:host ix-icon{margin-right:0.25rem;margin-top:-0.125rem}:host .group-entry-selection-indicator{position:absolute;left:-1px;height:calc(100% + 2px);width:0.25rem}:host .group-entry-text{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .group-entry-text-secondary{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text)}:host .group-entry-text-secondary,:host .group-entry-text-secondary span{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.selected){border-top-width:0.062rem !important;background-color:var(--theme-color-ghost--selected)}:host(.selected) .group-entry-selection-indicator{background-color:var(--theme-group-item-indicator--background--selected)}:host(:not(.suppress-selection):hover){background-color:var(--theme-color-ghost--selected-hover);border-color:var(--theme-group-item--border-color--hover)}:host(:not(.suppress-selection).selected:hover){background-color:var(--theme-color-ghost--selected-hover)}:host(:not(.suppress-selection):active){background-color:var(--theme-color-ghost--selected-active);border-color:var(--theme-group-item--border-color--active)}:host(:not(.suppress-selection).selected:active){background-color:var(--theme-color-ghost--selected-active)}";
const GroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    this.icon = void 0;
    this.text = void 0;
    this.secondaryText = void 0;
    this.suppressSelection = false;
    this.selected = void 0;
    this.focusable = true;
    this.index = void 0;
  }
  clickListen() {
    if (this.suppressSelection) {
      return;
    }
    this.selectedChanged.emit(this.hostElement);
  }
  render() {
    return h(Host, { class: {
      selected: this.selected && !this.suppressSelection,
      "suppress-selection": this.suppressSelection
    } }, h("button", { tabindex: this.focusable ? 0 : -1 }, h("div", { class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text)) : null, this.secondaryText ? h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText)) : null, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
GroupItem.style = groupItemCss;
export {
  GroupContextMenu as ix_group_context_menu,
  GroupItem as ix_group_item
};