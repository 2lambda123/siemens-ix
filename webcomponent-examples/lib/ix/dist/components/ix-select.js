import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './dropdown.js';
import { d as defineCustomElement$6 } from './dropdown-item.js';
import { d as defineCustomElement$5 } from './filter-chip.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './select-item.js';

const selectCss = ".sc-ix-select-h{display:inline-block;position:relative;height:auto;width:100%}.sc-ix-select-h .select.sc-ix-select{position:relative;display:flex;align-items:center;height:auto;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}.sc-ix-select-h .select.sc-ix-select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff !important;outline-offset:var(--theme-input--focus--outline-offset)}.sc-ix-select-h .trigger.sc-ix-select{display:flex;align-items:center;flex-grow:1;height:100%}.sc-ix-select-h .input-container.sc-ix-select{display:flex;position:relative;align-items:flex-start;height:calc(2rem - 2 * var(--theme-input--border-thickness));width:100%}.sc-ix-select-h .input-container.allow-clear.sc-ix-select{padding-right:3.5rem}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-width:70%;flex-shrink:0;margin:auto}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select>ix-filter-chip.sc-ix-select{margin:0.1rem}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%;-webkit-margin-end:2rem;margin-inline-end:2rem}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:hover,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:focus{border:none;outline:none}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::-moz-placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::-moz-placeholder{opacity:0}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::placeholder{opacity:0}.sc-ix-select-h .chevron-down-container.sc-ix-select{display:flex;align-items:center;justify-content:center;width:2rem;min-width:2rem;height:100%}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover)}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):active{background-color:var(--theme-btn-invisible-secondary--background--active)}.sc-ix-select-h .clear.sc-ix-select{position:absolute;right:2rem}.sc-ix-select-h .add-item.sc-ix-select{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}.sc-ix-select-h .select-list-header.sc-ix-select{display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 2rem}.sc-ix-select-h ix-dropdown.sc-ix-select{background-color:var(--theme-select-list--background)}";

const Select = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.itemSelectionChange = createEvent(this, "itemSelectionChange", 7);
    this.addItem = createEvent(this, "addItem", 7);
    /**
     * Indices of selected items
     */
    this.selectedIndices = [];
    /**
     * Show clear button
     */
    this.allowClear = false;
    /**
     * Selection mode
     */
    this.mode = 'single';
    /**
     * Select is extendable
     */
    this.editable = false;
    /**
     * If true the select will be in disabled state
     */
    this.disabled = false;
    /**
     * If true the select will be in readonly mode
     */
    this.readonly = false;
    /**
     * Input field placeholder
     */
    this.i18nPlaceholder = 'Select an option';
    /**
     * Input field placeholder for editable select
     */
    this.i18nPlaceholderEditable = 'Type of select option';
    /**
     * Select list header
     */
    this.i18nSelectListHeader = 'Please select an option';
    this.dropdownShow = false;
    this.isDropdownEmpty = false;
    this.hasFocus = false;
  }
  get items() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemButton() {
    return this.hostElement.querySelector('.add-item');
  }
  get isSingleMode() {
    return this.mode === 'single';
  }
  get isMultipleMode() {
    return this.mode === 'multiple';
  }
  watchSelectedIndices(newId) {
    if (newId) {
      this.selectValue([...newId]);
    }
  }
  onItemClicked(event) {
    const newId = event.detail;
    this.emitItemClick(newId);
  }
  watchInputText(newValue) {
    if (!this.editable) {
      return;
    }
    if (this.itemExists(newValue)) {
      return;
    }
  }
  emitItemClick(newId) {
    if (this.isMultipleMode && Array.isArray(this.selectedIndices)) {
      if (this.selectedIndices.includes(newId)) {
        this.selectedIndices = this.selectedIndices.filter((i) => i !== newId);
      }
      else {
        this.selectedIndices = [...this.selectedIndices, newId];
      }
    }
    else {
      this.selectedIndices = [newId];
    }
    this.selectValue(this.selectedIndices);
    this.itemSelectionChange.emit(this.selectedIndices);
  }
  emitAddItem(value) {
    if (value.trim() === '') {
      return;
    }
    const test = document.createElement('ix-select-item');
    test.value = value;
    test.label = value;
    this.addItemRef.appendChild(test);
    this.clearInput();
    this.emitItemClick(value);
    this.addItem.emit(value);
  }
  selectValue(ids) {
    this.items.forEach((item) => {
      item.selected = ids.some((i) => i === item.value);
    });
    this.value = this.selectedItems.map((item) => item.label);
  }
  componentWillLoad() {
    if (this.selectedIndices) {
      this.selectValue(Array.isArray(this.selectedIndices)
        ? this.selectedIndices
        : [this.selectedIndices]);
    }
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();
      this.navigationItem = this.items[0];
      this.setHoverEffectForNavigatedSelectItem();
      this.removeHiddenFromItems();
    }
    this.hasFocus = event.detail;
  }
  async onKeyDown(event) {
    if (!this.dropdownShow) {
      return;
    }
    if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
      this.onArrowNavigation(event);
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      await this.onEnterNavigation();
    }
    if (event.code === 'Escape') {
      this.dropdownShow = false;
    }
  }
  async onEnterNavigation() {
    var _a, _b;
    if (this.editable && !this.itemExists(this.inputText)) {
      this.emitAddItem(this.inputText);
      this.navigationItem = this.items[this.items.length - 1];
    }
    (_a = this.navigationItem) === null || _a === void 0 ? void 0 : _a.onItemClick();
    await ((_b = this.dropdownRef) === null || _b === void 0 ? void 0 : _b.updatePosition());
    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
  }
  onArrowNavigation(event) {
    event.stopPropagation();
    event.preventDefault();
    const selectItems = this.items.filter((i) => !i.classList.contains('d-none'));
    const index = selectItems.indexOf(this.navigationItem);
    if (event.code === 'ArrowDown' && index < selectItems.length - 1) {
      this.navigationItem = selectItems[index + 1];
    }
    else if (event.code === 'ArrowUp' && index > 0) {
      this.navigationItem = selectItems[index - 1];
    }
    this.setHoverEffectForNavigatedSelectItem();
  }
  setHoverEffectForNavigatedSelectItem() {
    this.items.forEach((item) => {
      item.hover = item === this.navigationItem;
    });
  }
  filterItemsWithTypeahead() {
    this.inputText = this.inputRef.value;
    if (this.inputText) {
      this.items.forEach((item) => {
        item.classList.remove('d-none');
        if (!item.label.toLowerCase().includes(this.inputText.toLowerCase())) {
          item.classList.add('d-none');
        }
      });
    }
    else {
      this.removeHiddenFromItems();
    }
    this.isDropdownEmpty = this.items.every((item) => item.classList.contains('d-none'));
  }
  removeHiddenFromItems() {
    this.items.forEach((item) => {
      item.classList.remove('d-none');
    });
  }
  clearInput() {
    this.inputRef.value = '';
    this.inputText = '';
  }
  clear() {
    this.clearInput();
    this.value = [];
    this.selectedIndices = [];
    this.itemSelectionChange.emit(null);
  }
  getInputValue() {
    var _a;
    if (this.isSingleMode) {
      return ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) ? this.value[0] : null;
    }
    return null;
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null, h("div", { class: {
        'form-control': true,
        select: true,
        focus: this.hasFocus,
        editable: this.editable,
        disabled: this.disabled,
        readonly: this.readonly,
      }, ref: (ref) => {
        this.dropdownAnchor = ref;
        if (!this.editable)
          this.dropdownWrapperRef = ref;
      } }, h("div", { class: "input-container" }, this.isMultipleMode ? (h("div", { class: "chips" }, (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => (h("ix-filter-chip", { disabled: this.disabled || this.readonly, onCloseClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.emitItemClick(item.value);
      } }, item.label))))) : null, h("div", { class: "trigger" }, h("input", { "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, type: "text", class: {
        'allow-clear': this.allowClear && !!((_b = this.value) === null || _b === void 0 ? void 0 : _b.length),
      }, placeholder: this.editable
        ? this.i18nPlaceholderEditable
        : this.i18nPlaceholder, value: this.getInputValue(), ref: (ref) => (this.inputRef = ref), onInput: () => this.filterItemsWithTypeahead() }), this.disabled || this.readonly ? null : (h("div", { class: "chevron-down-container", ref: (ref) => {
        if (this.editable)
          this.dropdownWrapperRef = ref;
      } }, h("ix-icon", { class: "chevron", name: "chevron-down-small" }))))), this.allowClear && (((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) || this.inputText) ? (h("ix-icon-button", { class: "clear", icon: "clear", ghost: true, oval: true, size: "24", onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.clear();
      } })) : null), h("ix-dropdown", { ref: (ref) => (this.dropdownRef = ref), show: this.dropdownShow, style: {
        width: '100%',
      }, class: {
        'd-none': this.disabled ||
          this.readonly ||
          (this.isDropdownEmpty && !this.editable),
      }, anchor: this.dropdownAnchor, trigger: this.dropdownWrapperRef, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom", positioningStrategy: 'fixed', adjustDropdownWidthToReferenceWidth: true }, h("div", { class: "select-list-header" }, this.i18nSelectListHeader), h("slot", null), h("div", { ref: (ref) => (this.addItemRef = ref), class: "d-contents" }), this.itemExists(this.inputText) ? ('') : (h("ix-dropdown-item", { "data-testid": "add-item", icon: "plus", class: {
        'add-item': true,
        'd-none': !(this.editable && this.inputText),
      }, label: this.inputText, onItemClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.emitAddItem(this.inputText);
      } })))));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "selectedIndices": ["watchSelectedIndices"],
    "inputText": ["watchInputText"]
  }; }
  static get style() { return selectCss; }
}, [6, "ix-select", {
    "selectedIndices": [1025, "selected-indices"],
    "allowClear": [4, "allow-clear"],
    "mode": [1],
    "editable": [4],
    "disabled": [4],
    "readonly": [4],
    "i18nPlaceholder": [1, "i-1-8n-placeholder"],
    "i18nPlaceholderEditable": [1, "i-1-8n-placeholder-editable"],
    "i18nSelectListHeader": [1, "i-1-8n-select-list-header"],
    "dropdownShow": [32],
    "value": [32],
    "dropdownWrapperRef": [32],
    "dropdownAnchor": [32],
    "isDropdownEmpty": [32],
    "hasFocus": [32],
    "navigationItem": [32],
    "inputText": [32]
  }, [[0, "itemClick", "onItemClicked"], [8, "keydown", "onKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-select", "ix-dropdown", "ix-dropdown-item", "ix-filter-chip", "ix-icon", "ix-icon-button", "ix-select-item"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-select":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Select);
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "ix-dropdown-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "ix-filter-chip":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-select-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxSelect = Select;
const defineCustomElement = defineCustomElement$1;

export { IxSelect, defineCustomElement };