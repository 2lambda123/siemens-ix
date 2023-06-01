import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as luxon } from './luxon.js';
import { d as defineCustomElement$4 } from './button.js';
import { d as defineCustomElement$3 } from './date-time-card.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './icon-button.js';

const timePickerCss = ".header.sc-ix-time-picker{display:flex;align-items:center;justify-content:center}.title.sc-ix-time-picker{display:flex;align-items:center;font-size:16px;font-weight:bold;line-height:20px;min-height:40px;color:var(--theme-datepicker-time-header--color)}.clock.sc-ix-time-picker{height:100%;display:flex;justify-content:center;align-items:center;padding:80px 0}input.sc-ix-time-picker{background-color:var(--theme-input--background);border-radius:2px;border:1px solid var(--theme-input--border-color);box-shadow:inset 0 2px 4px 0 var(--theme-color-1) 12;width:42px;height:32px;text-align:right;color:var(--theme-input--color);margin-top:0.5rem;margin-bottom:0.5rem}input.sc-ix-time-picker::-webkit-outer-spin-button,input.sc-ix-time-picker::-webkit-inner-spin-button{-webkit-appearance:none;margin:0 5px}input[type=number].sc-ix-time-picker{-moz-appearance:textfield}.columns.sc-ix-time-picker{display:flex;flex-direction:column;align-items:center}.column-seperator.sc-ix-time-picker{display:flex;align-items:center;margin:0 0.25rem}.button.sc-ix-time-picker{display:flex;justify-content:flex-end}.default-space.sc-ix-time-picker{margin-left:1rem}.text-align.sc-ix-time-picker{text-align:center}.hidden.sc-ix-time-picker{display:none}";

const TimePicker = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.done = createEvent(this, "done", 7);
    this.timeChange = createEvent(this, "timeChange", 7);
    this._time = luxon.DateTime.now();
    this.format = 'TT';
    this.corners = 'rounded';
    this.individual = true;
    this.showHour = false;
    this.showMinutes = false;
    this.showSeconds = false;
    this.time = luxon.DateTime.now().toFormat(this.format);
    this.showTimeReference = undefined;
    this.timeReference = luxon.DateTime.fromFormat(this.time, this.format).toFormat('a');
    this.textSelectTime = 'Done';
    this.hourInputRef = undefined;
    this.minuteInputRef = undefined;
    this.secondInputRef = undefined;
    this.referenceInputRef = undefined;
  }
  get hour() {
    return this._time.hour;
  }
  get minutes() {
    return this._time.minute;
  }
  get seconds() {
    return this._time.second;
  }
  updateInput(step, { hours = undefined, minutes = undefined, seconds = undefined }) {
    if (hours)
      step === 'up' ? this.hourInputRef.stepUp() : this.hourInputRef.stepDown();
    if (minutes)
      step === 'up'
        ? this.minuteInputRef.stepUp()
        : this.minuteInputRef.stepDown();
    if (seconds)
      step === 'up'
        ? this.secondInputRef.stepUp()
        : this.secondInputRef.stepDown();
    this._time = this._time.set({
      hour: Number(this.hourInputRef.value),
      minute: Number(this.minuteInputRef.value),
      second: Number(this.secondInputRef.value),
    });
    this.emitTimeChange();
  }
  changeReference() {
    this.referenceInputRef.value =
      this.referenceInputRef.value === 'PM' ? 'AM' : 'PM';
    this.setHourAccordingToReference();
    this.emitTimeChange();
  }
  setHourAccordingToReference() {
    let hour = Number(this.hourInputRef.value);
    if (this.referenceInputRef.value === 'PM')
      hour += 12;
    this._time = this._time.set({ hour });
  }
  emitTimeChange() {
    const time = this._time.toFormat(this.format);
    this.timeChange.emit(time);
  }
  componentWillLoad() {
    this._time = luxon.DateTime.fromFormat(this.time, this.format);
    if (this.showTimeReference === undefined) {
      const matchedKeys = Object.keys(luxon.DateTime.fromFormatExplain(this.time, this.format).matches);
      this.showTimeReference = matchedKeys.includes('a');
    }
  }
  /**
   * Get current time
   */
  async getCurrentTime() {
    return this._time.toFormat(this.format);
  }
  render() {
    let hideHour = !this.showHour;
    let hideMinutes = !this.showMinutes;
    let hideSeconds = !this.showSeconds;
    const hideTimeReference = !this.showTimeReference;
    const hideIndividual = !this.individual;
    if (!this.showHour && !this.showMinutes && !this.showSeconds) {
      hideHour = false;
      hideMinutes = false;
      hideSeconds = false;
    }
    const hideHourSeperator = hideMinutes || hideHour;
    const hideMinutesSeperator = hideSeconds || hideMinutes;
    return (h(Host, null, h("ix-date-time-card", { individual: this.individual, corners: this.corners }, h("div", { class: "header", slot: "header" }, h("div", { class: "title" }, "Time")), h("div", { class: "clock" }, h("div", { class: { columns: true, hidden: hideHour } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { hours: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "hours", type: "number", placeholder: "00", value: this.hour, min: "0", disabled: true, max: this.showTimeReference === true ? 11 : 23, ref: (ref) => (this.hourInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { hours: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: { 'column-seperator': true, hidden: hideHourSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideMinutes } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { minutes: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "minutes", type: "number", placeholder: "00", value: this.minutes, min: "0", max: "59", disabled: true, ref: (ref) => (this.minuteInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { minutes: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: { 'column-seperator': true, hidden: hideMinutesSeperator } }, ":"), h("div", { class: { columns: true, hidden: hideSeconds } }, h("ix-icon-button", { size: "16", onClick: () => this.updateInput('up', { seconds: true }), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "seconds", type: "number", placeholder: "00", value: this.seconds, disabled: true, min: "0", max: "59", ref: (ref) => (this.secondInputRef = ref) }), h("ix-icon-button", { size: "16", onClick: () => this.updateInput('down', { seconds: true }), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" })), h("div", { class: {
        columns: true,
        'default-space': true,
        hidden: hideTimeReference,
      } }, h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-up", variant: "Primary", class: "arrows" }), h("input", { name: "reference", type: "text", ref: (ref) => (this.referenceInputRef = ref), value: this.timeReference, disabled: true, class: "text-align" }), h("ix-icon-button", { size: "16", onClick: () => this.changeReference(), ghost: true, icon: "chevron-down", variant: "Primary", class: "arrows" }))), h("div", { class: { button: true, hidden: hideIndividual } }, h("ix-button", { onClick: () => this.done.emit(this._time.toFormat(this.format)) }, this.textSelectTime)))));
  }
  get hostElement() { return this; }
  static get style() { return timePickerCss; }
}, [2, "ix-time-picker", {
    "format": [1],
    "corners": [1],
    "individual": [4],
    "showHour": [4, "show-hour"],
    "showMinutes": [4, "show-minutes"],
    "showSeconds": [4, "show-seconds"],
    "time": [1],
    "showTimeReference": [1032, "show-time-reference"],
    "timeReference": [1, "time-reference"],
    "textSelectTime": [1, "text-select-time"],
    "hourInputRef": [32],
    "minuteInputRef": [32],
    "secondInputRef": [32],
    "referenceInputRef": [32],
    "getCurrentTime": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-time-picker", "ix-button", "ix-date-time-card", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-time-picker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TimePicker);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-date-time-card":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { TimePicker as T, defineCustomElement as d };
