'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const chipCss = ".sc-ix-chip-h{display:inline-flex;width:-moz-fit-content;width:fit-content;position:relative;align-items:center;border-radius:100px;padding:0.5rem 0.75rem;height:2rem;max-height:2rem;cursor:pointer;margin-left:0.25rem}.sc-ix-chip-h .with-icon.sc-ix-chip{margin-right:0.25rem}.sc-ix-chip-h .hidden.sc-ix-chip{width:0px;margin-right:0px}.sc-ix-chip-h .close-button-container.sc-ix-chip{display:inline-flex;flex-grow:1;margin-left:0.75rem}.sc-ix-chip-h .close-button.sc-ix-chip{position:relative;width:1rem;height:1rem;min-width:unset;min-height:unset;margin-left:auto;margin-right:0}[variant=primary].sc-ix-chip-h{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}[variant=primary].sc-ix-chip-h .close-button.sc-ix-chip{color:var(--theme-chip-primary--color);pointer-events:auto}[variant=primary].sc-ix-chip-h:hover{background-color:var(--theme-chip-primary--background--hover)}[variant=primary].sc-ix-chip-h:active{background-color:var(--theme-chip-primary--background--active)}[variant=primary].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=primary].outline.sc-ix-chip-h{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}[variant=primary].outline.sc-ix-chip-h .close-button.sc-ix-chip{color:var(--theme-chip-primary-outline--color)}[variant=primary].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-primary-outline--background--hover)}[variant=primary].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-primary-outline--background--active)}[variant=alarm].sc-ix-chip-h{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=alarm].active.sc-ix-chip-h::after,[variant=alarm].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=alarm].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-alarm)}[variant=alarm].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=alarm].sc-ix-chip-h:not(.outline).active::after,[variant=alarm].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=alarm].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-alarm)}[variant=alarm].outline.sc-ix-chip-h:hover::after{display:none}[variant=alarm].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=alarm].outline.active.sc-ix-chip-h::after,[variant=alarm].outline.sc-ix-chip-h:active::after{display:none}[variant=alarm].outline.active.sc-ix-chip-h,[variant=alarm].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=alarm].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=critical].sc-ix-chip-h{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=critical].active.sc-ix-chip-h::after,[variant=critical].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=critical].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-critical)}[variant=critical].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=critical].sc-ix-chip-h:not(.outline).active::after,[variant=critical].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=critical].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-critical)}[variant=critical].outline.sc-ix-chip-h:hover::after{display:none}[variant=critical].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=critical].outline.active.sc-ix-chip-h::after,[variant=critical].outline.sc-ix-chip-h:active::after{display:none}[variant=critical].outline.active.sc-ix-chip-h,[variant=critical].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=critical].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=warning].sc-ix-chip-h{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=warning].active.sc-ix-chip-h::after,[variant=warning].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=warning].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-warning)}[variant=warning].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=warning].sc-ix-chip-h:not(.outline).active::after,[variant=warning].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=warning].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-warning)}[variant=warning].outline.sc-ix-chip-h:hover::after{display:none}[variant=warning].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=warning].outline.active.sc-ix-chip-h::after,[variant=warning].outline.sc-ix-chip-h:active::after{display:none}[variant=warning].outline.active.sc-ix-chip-h,[variant=warning].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=warning].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=info].sc-ix-chip-h{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=info].active.sc-ix-chip-h::after,[variant=info].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=info].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-info)}[variant=info].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=info].sc-ix-chip-h:not(.outline).active::after,[variant=info].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=info].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-info)}[variant=info].outline.sc-ix-chip-h:hover::after{display:none}[variant=info].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=info].outline.active.sc-ix-chip-h::after,[variant=info].outline.sc-ix-chip-h:active::after{display:none}[variant=info].outline.active.sc-ix-chip-h,[variant=info].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=info].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=neutral].sc-ix-chip-h{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=neutral].active.sc-ix-chip-h::after,[variant=neutral].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=neutral].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-neutral)}[variant=neutral].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=neutral].sc-ix-chip-h:not(.outline).active::after,[variant=neutral].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=neutral].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-neutral)}[variant=neutral].outline.sc-ix-chip-h:hover::after{display:none}[variant=neutral].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=neutral].outline.active.sc-ix-chip-h::after,[variant=neutral].outline.sc-ix-chip-h:active::after{display:none}[variant=neutral].outline.active.sc-ix-chip-h,[variant=neutral].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=neutral].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=success].sc-ix-chip-h{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.05);left:0;border-radius:100px;pointer-events:none}[variant=success].active.sc-ix-chip-h::after,[variant=success].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.1);left:0;border-radius:100px;pointer-events:none}[variant=success].sc-ix-chip-h:not(.outline){background-color:var(--theme-color-success)}[variant=success].sc-ix-chip-h:not(.outline) .close-button.sc-ix-chip{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-chip-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=success].sc-ix-chip-h:not(.outline).active::after,[variant=success].sc-ix-chip-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=success].outline.sc-ix-chip-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-success)}[variant=success].outline.sc-ix-chip-h:hover::after{display:none}[variant=success].outline.sc-ix-chip-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=success].outline.active.sc-ix-chip-h::after,[variant=success].outline.sc-ix-chip-h:active::after{display:none}[variant=success].outline.active.sc-ix-chip-h,[variant=success].outline.sc-ix-chip-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=success].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=custom].sc-ix-chip-h:hover::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, var(--theme-l-hover));left:0;border-radius:100px;pointer-events:none}[variant=custom].active.sc-ix-chip-h::after,[variant=custom].sc-ix-chip-h:active::after{content:\"\";display:block;position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, var(--theme-l-active));left:0;border-radius:100px;pointer-events:none}[variant=custom].sc-ix-chip-h:focus-visible{outline:1px solid #199fff;outline-offset:var(--theme-btn--focus--outline-offset)}[variant=custom].outline.sc-ix-chip-h{border:solid 1px transparent;background-color:transparent}[variant=custom].outline.sc-ix-chip-h:hover{background-color:rgba(0, 0, 0, var(--theme-l-hover))}[variant=custom].outline.sc-ix-chip-h:active{background-color:rgba(0, 0, 0, var(--theme-l-active))}.sc-ix-chip-h .slot-container.sc-ix-chip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.inactive.sc-ix-chip-h{pointer-events:none}";

const Chip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.close = index.createEvent(this, "close", 7);
    this.variant = 'primary';
    this.active = true;
    this.closable = false;
    this.icon = undefined;
    this.background = undefined;
    this.color = undefined;
    this.outline = false;
  }
  getCloseButton() {
    return (index.h("div", { class: "close-button-container" }, index.h("button", { type: "button", class: "btn btn-invisible-secondary btn-icon btn-oval close-button", onClick: (event) => this.close.emit(event) }, this.variant === 'custom' ? (index.h("i", { class: "glyph glyph-16 glyph-close-small", style: { color: this.color } })) : (index.h("ix-icon", { name: 'close-small', size: '16' })))));
  }
  render() {
    const isInactive = this.active === false;
    let customStyle = {};
    if (this.variant === 'custom' && this.outline === false) {
      customStyle = {
        color: this.color,
        backgroundColor: this.background,
      };
    }
    if (this.variant === 'custom' && this.outline === true) {
      customStyle = {
        color: this.color,
        borderColor: this.background,
      };
    }
    return (index.h(index.Host, { class: {
        outline: this.outline,
        inactive: isInactive,
      }, tabIndex: "-1", title: this.el.textContent, style: Object.assign({}, customStyle) }, index.h("ix-icon", { class: {
        'with-icon': true,
        hidden: this.icon === undefined || this.icon === '',
      }, name: this.icon, size: '24' }), index.h("span", { class: "slot-container" }, index.h("slot", null)), isInactive === false && this.closable ? this.getCloseButton() : null));
  }
  get el() { return index.getElement(this); }
};
Chip.style = chipCss;

exports.ix_chip = Chip;
