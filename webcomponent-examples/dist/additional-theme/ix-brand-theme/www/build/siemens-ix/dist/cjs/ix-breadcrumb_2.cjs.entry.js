'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const anime_es = require('./anime.es-8822f296.js');
const mutationObserver = require('./mutation-observer-29bedada.js');

const breadcrumbCss = ".sc-ix-breadcrumb-h{display:flex;height:2.5rem;justify-content:flex-start;align-items:center;background-color:transparent;overflow:hidden}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb{position:relative;display:flex;justify-content:flex-start;align-items:center;white-space:nowrap;border-radius:var(--theme-breadcrumb--border-radius);height:2rem;max-height:2rem;min-width:0;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem;padding:0.5rem 0 0.5rem 0.25rem;outline:none;cursor:pointer}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-btn--background--hover)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):hover .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn--color--hover)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-arrow--color--hover)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):active{background-color:var(--theme-breadcrumb-btn--background--active)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):active .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn--color--active)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-arrow--color--active)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;align-items:center;min-width:0;font-weight:700}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb ix-icon.sc-ix-breadcrumb{-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{-webkit-margin-start:0.25rem;margin-inline-start:0.25rem;-webkit-margin-end:0;margin-inline-end:0}.sc-ix-breadcrumb-h .crumb.last.sc-ix-breadcrumb{background-color:transparent !important;cursor:default;-webkit-padding-end:0.25rem;padding-inline-end:0.25rem}.sc-ix-breadcrumb-h .crumb.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-focus--border-color)}.sc-ix-breadcrumb-h .crumb.sc-ix-breadcrumb:not(:last-of-type){flex-shrink:0;max-width:14rem}.sc-ix-breadcrumb-h .crumb-dropdown.sc-ix-breadcrumb{overflow:visible}.sc-ix-breadcrumb-h .crumb-dropdown.sc-ix-breadcrumb .glyph.sc-ix-breadcrumb::after{display:none}.sc-ix-breadcrumb-h .remove-anchor.sc-ix-breadcrumb::after{display:none}.sc-ix-breadcrumb-h .more-text.sc-ix-breadcrumb{display:flex}.sc-ix-breadcrumb-h .more-text.sc-ix-breadcrumb .more-text-ellipsis.sc-ix-breadcrumb{width:1rem;display:inline-block;font-weight:700}.sc-ix-breadcrumb-h .more-text.sc-ix-breadcrumb .glyph.sc-ix-breadcrumb{line-height:unset}.sc-ix-breadcrumb-h .crumb-items.sc-ix-breadcrumb{display:contents}.sc-ix-breadcrumb-h .crumb.btn.sc-ix-breadcrumb{background-color:var(--theme-breadcrumb-btn--background);border:var(--theme-btn--btn-thickness) solid transparent;transition:150ms}.sc-ix-breadcrumb-h .crumb.btn.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.btn.sc-ix-breadcrumb .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn--color)}.sc-ix-breadcrumb-h .crumb.btn.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-arrow--color)}.sc-ix-breadcrumb-h .crumb.btn.last.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-last--color)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-btn--background--hover)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn--color--hover)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-arrow--color--hover)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active{background-color:var(--theme-breadcrumb-btn--background--active)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn--color--active)}.sc-ix-breadcrumb-h .crumb.btn.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-btn-arrow--color--active)}.sc-ix-breadcrumb-h .crumb.ghost.sc-ix-breadcrumb{background-color:var(--theme-breadcrumb-ghost--background);border:var(--theme-btn--ghost-thickness) solid transparent;transition:150ms}.sc-ix-breadcrumb-h .crumb.ghost.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.ghost.sc-ix-breadcrumb .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost--color)}.sc-ix-breadcrumb-h .crumb.ghost.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost-arrow--color)}.sc-ix-breadcrumb-h .crumb.ghost.last.sc-ix-breadcrumb .crumb-text.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost-last--color)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover{background-color:var(--theme-breadcrumb-ghost--background--hover)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost--color--hover)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):hover .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost-arrow--color--hover)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active{background-color:var(--theme-breadcrumb-ghost--background--active)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb,.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .glyph.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost--color--active)}.sc-ix-breadcrumb-h .crumb.ghost.clickable.sc-ix-breadcrumb:not(.remove-hover):not(.disabled):not(:disabled):active .crumb-text.sc-ix-breadcrumb+.glyph-chevron-right-small.sc-ix-breadcrumb{color:var(--theme-breadcrumb-ghost-arrow--color--active)}";

const Breadcrumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClick = index.createEvent(this, "itemClick", 7);
    this.nextClick = index.createEvent(this, "nextClick", 7);
    this.visibleItemCount = 9;
    this.nextItems = [];
    this.ghost = false;
    this.previousButtonRef = undefined;
    this.nextButtonRef = undefined;
    this.items = [];
  }
  get breadcrumbItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-breadcrumb-item'));
  }
  get crumbItems() {
    return Array.from(this.hostElement.querySelectorAll('.crumb-items .crumb'));
  }
  onItemClick(item) {
    this.itemClick.emit(item);
  }
  componentDidLoad() {
    this.mutationObserver = mutationObserver.createMutationObserver(() => {
      const updatedItems = this.getItems();
      const update = () => {
        this.items = updatedItems;
      };
      if (updatedItems.length >= this.items.length) {
        update();
      }
      else if (updatedItems.length < this.items.length) {
        const last = this.crumbItems[this.crumbItems.length - 1];
        this.animationFadeOut(last, () => update());
      }
    });
    this.mutationObserver.observe(this.hostElement.querySelector('.crumb-items'), {
      subtree: true,
      childList: true,
    });
  }
  componentWillLoad() {
    this.items = this.getItems();
  }
  getItems() {
    return this.breadcrumbItems.map((item) => {
      return { label: item.label, icon: item.icon };
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  animationFadeOut(ref, complete) {
    anime_es.anime({
      targets: ref,
      translateX: '-100%',
      duration: 150,
      opacity: [1, 0],
      easing: 'linear',
      complete: () => complete(),
    });
  }
  animationFadeIn(ref) {
    anime_es.anime({
      targets: ref,
      duration: 150,
      opacity: [0, 1],
      translateX: ['-100%', '0%'],
      easing: 'linear',
    });
  }
  handleLastButtonRef(ref, last) {
    var _a;
    if (last) {
      this.animationFadeIn(ref);
    }
    if (last && ((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length)) {
      this.nextButtonRef = ref;
    }
  }
  sliceHiddenItems() {
    let sliceIndex = 0;
    if (this.items.length > this.visibleItemCount) {
      sliceIndex = this.items.length - this.visibleItemCount;
    }
    return this.items.slice(sliceIndex);
  }
  clickItem(item, last) {
    if (!last) {
      this.onItemClick(item);
    }
  }
  renderBreadcrumbItems() {
    return this.sliceHiddenItems().map((item, index$1, array) => {
      var _a;
      const last = index$1 === array.length - 1;
      const isLastItem = last && !((_a = this.nextItems) === null || _a === void 0 ? void 0 : _a.length);
      return (index.h("div", { ref: (ref) => this.handleLastButtonRef(ref, last), "data-breadcrumb": index$1, class: {
          crumb: true,
          clickable: true,
          ghost: this.ghost,
          btn: !this.ghost,
          last: isLastItem,
          'remove-hover': isLastItem,
        }, onClick: () => this.clickItem(item.label, last), "data-testid": "item" }, index.h("span", { class: "crumb-text remove-anchor" }, item.icon ? index.h("ix-icon", { name: item.icon, size: "16" }) : '', item.label), !isLastItem ? (index.h("span", { class: "glyph glyph-18 glyph-chevron-right-small text-default-text" })) : null));
    });
  }
  render() {
    var _a, _b, _c;
    return (index.h(index.Host, null, index.h("ix-dropdown", { trigger: ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) > this.visibleItemCount
        ? this.previousButtonRef
        : null }, this.items
      .slice(0, this.items.length - this.visibleItemCount)
      .map((item) => (index.h("ix-dropdown-item", { label: item.label, onClick: () => this.onItemClick(item.label) })))), ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) > this.visibleItemCount ? (index.h("div", { class: "crumb crumb-dropdown", ref: (ref) => (this.previousButtonRef = ref) }, index.h("span", { class: "remove-anchor more-text" }, index.h("span", { class: "more-text-ellipsis" }, "..."), index.h("span", { class: "glyph glyph-16 glyph-chevron-right" })))) : null, index.h("div", { class: "crumb-items" }, this.renderBreadcrumbItems(), index.h("slot", null)), index.h("ix-dropdown", { trigger: this.nextButtonRef }, (_c = this.nextItems) === null || _c === void 0 ? void 0 : _c.map((item) => (index.h("ix-dropdown-item", { label: item, onClick: (e) => {
        this.nextClick.emit({
          event: e,
          item,
        });
      } }))))));
  }
  get hostElement() { return index.getElement(this); }
};
Breadcrumb.style = breadcrumbCss;

const breadcrumbItemCss = ".sc-ix-breadcrumb-item-h{display:block}";

const BreadcrumbItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = undefined;
    this.icon = undefined;
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
BreadcrumbItem.style = breadcrumbItemCss;

exports.ix_breadcrumb = Breadcrumb;
exports.ix_breadcrumb_item = BreadcrumbItem;
