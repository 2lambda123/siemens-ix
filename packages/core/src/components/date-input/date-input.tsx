import {
  Component,
  Element,
  Fragment,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { IxDatePickerCustomEvent, IxDropdownCustomEvent } from 'src/components';
import { DateChangeEvent } from '../date-picker/date-picker';
import { DateTimeCardCorners } from '../date-time-card/date-time-card';

@Component({
  tag: 'ix-date-input',
  styleUrl: 'date-input.scss',
  shadow: true,
})
export class DateInput {
  @Element() hostElement: HTMLIxDateInputElement;

  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Date format string.
   * See @link https://day.js.org/docs/en/display/format for all available tokens.
   */
  @Prop() format: string = 'YYYY/MM/DD';

  /**
   * If true a date-range can be selected (from/to).
   */
  @Prop() range: boolean = true;

  /**
   * Corner style
   */
  @Prop() corners: DateTimeCardCorners = 'rounded';

  /**
   * The selected starting date. If the date-picker is not in range mode this is the selected date.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() from: string | undefined;
  @Watch('from')
  watchFromPropHandler(newValue: string) {
    this._from = newValue;
  }

  /**
   * The selected end date. If the the date-picker is not in range mode this property has no impact.
   * Format has to match the `format` property.
   *
   * @since 1.1.0
   */
  @Prop() to: string | undefined;
  watchToPropHandler(newValue: string) {
    this._to = newValue;
  }

  /**
   * The earliest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() minDate: string;

  /**
   * The latest date that can be selected by the date picker.
   * If not set there will be no restriction.
   *
   * @since 1.1.0
   */
  @Prop() maxDate: string;

  /**
   * Text of the button that confirms date selection.
   *
   * @since 1.1.0
   */
  @Prop() textSelectDate = 'Done';

  /**
   * The index of which day to start the week on, based on the Locale#weekdays array.
   * E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.
   *
   * @since 2.0.0
   */
  @Prop() weekStartIndex = 0;

  @State() private triggerRef: HTMLElement;
  // @State() private datePickerRef: HTMLElement;
  @State() private _from: string;
  @State() private _to: string;

  private focusedInput!: HTMLElement;
  private datePicker!: HTMLIxDatePickerElement;

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLElement;
  };

  private onInputBlur = (event: FocusEvent) => {
    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }

    this.focusedInput = undefined;
  };

  private onDateChange(event: IxDatePickerCustomEvent<DateChangeEvent>) {
    this._from = event.detail.from;
    this._to = event.detail.to;
  }

  onShowChange(event: IxDropdownCustomEvent<boolean>) {
    // this.showDatePicker = event.detail;
    // this.showDatePicker = true;
    // if (this.focusedInput) {
    //   event.preventDefault();
    // }
  }

  onFromInputChange(event) {
    if (this._from !== event.target.value) this._from = event.target.value;
  }

  onToInputChange(event) {
    if (this._to !== event.target.value) this._to = event.target.value;
  }

  componentWillLoad() {
    this._from = this.from;
    this._to = this.to;
  }

  renderRangeInput(): any {
    return (
      <Fragment>
        <input
          id="firstInput"
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
          onInput={(event) => this.onFromInputChange(event)}
        />
        <span class="arrow-icon">
          <ix-icon name="arrow-right"></ix-icon>
        </span>
        <input
          id="secondInput"
          type="text"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._to}
          onInput={(event) => this.onToInputChange(event)}
        />
      </Fragment>
    );
  }

  renderSingleInput(): any {
    return (
      <Fragment>
        <input
          type="text"
          id="firstInput"
          class="form-control"
          placeholder={this.format}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          value={this._from}
        />
      </Fragment>
    );
  }

  render() {
    return (
      <Host>
        <div
          id="dateinput"
          class="date-input"
          ref={(ref) => (this.triggerRef = ref)}
        >
          {this.label ? <label htmlFor="firstInput">{this.label}</label> : ''}
          {this.range ? this.renderRangeInput() : this.renderSingleInput()}
          <ix-icon-button
            class="icon-button"
            ghost
            icon="chevron-down-small"
          ></ix-icon-button>
        </div>
        {/* <ix-dropdown
          trigger={this.triggerRef}
          // show={this.showDatePicker}
          // onShowChanged={(event) => this.onShowChange(event)}
          closeBehavior="outside"
        > */}
        <div>
          <ix-date-picker
            class="picker"
            tabIndex={0}
            ref={(ref) => (this.datePicker = ref as HTMLIxDatePickerElement)}
            corners={this.corners}
            range={this.range}
            onDateChange={(event) => this.onDateChange(event)}
            from={this._from}
            to={this._to}
            format={this.format}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
          ></ix-date-picker>
        </div>
        {/* <ix-dropdown-item label="test"></ix-dropdown-item> */}
        {/* </ix-dropdown> */}
      </Host>
    );
  }
}
