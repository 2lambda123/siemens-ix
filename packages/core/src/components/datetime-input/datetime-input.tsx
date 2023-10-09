/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Method,
  Prop,
  State,
} from '@stencil/core';
import {
  DateTimeDateChangeEvent,
  DateTimeSelectEvent,
  IxDatetimePickerCustomEvent,
} from 'src/components';
import { DateValidatorParam } from '../utils/validators/datetime-input/date-input-validators';
import { TimeValidatorParam } from '../utils/validators/datetime-input/time-input-validators';
import { Validator } from '../utils/validators/validator';
import { getValidator } from '../utils/validators/validator.factory';

export type DatetimeInputChangeEvent = {
  fromDate: string;
  toDate: string;
  fromTime: string;
  toTime: string;
};

type InputChangeCallback = (event: Event) => void;
type DateChangeCallback = (
  event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
) => void;
type TimeChangeCallback = (event: IxDatetimePickerCustomEvent<string>) => void;

@Component({
  tag: 'ix-datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: true,
})
export class DatetimeInput {
  @Element() hostElement: HTMLIxDatetimeInputElement;

  /**
   * Label for the input
   */
  @Prop() label: string;

  /**
   * Position of the label
   */
  @Prop() labelPosition: 'above' | 'inline' = 'above';

  /**
   * Set range size
   */
  @Prop() range = true;

  /**
   * Show hour input
   */
  @Prop() showHour = false;

  /**
   * Show minutes input
   */
  @Prop() showMinutes = false;

  /**
   * Show seconds input
   */
  @Prop() showSeconds = false;

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
   * Date format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() dateFormat: string = 'YYYY/MM/DD';

  /**
   * Time format string.
   * See @link https://moment.github.io/luxon/#/formatting?id=table-of-tokens for all available tokens.
   *
   * @since 1.1.0
   */
  @Prop() timeFormat: string = 'HH:mm:ss';

  /**
   * Picker date. If the picker is in range mode this property is the start date.
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() fromDate: string | undefined;

  /**
   * Picker date. If the picker is in range mode this property is the end date.
   * If the picker is not in range mode leave this value `null`
   *
   * Format is based on `format`
   *
   * @since 1.1.0
   */
  @Prop() toDate: string | undefined;

  /**
   * Select time with format string
   *
   * @since 1.1.0
   */
  @Prop() fromTime: string;

  /**
   * Select time with format string
   *
   * @since 1.1.0
   */
  @Prop() toTime: string;

  /**
   * Show time reference input
   * Time reference is default aligned with @see {this.timeFormat}
   *
   * @since 1.1.0
   */
  @Prop() showTimeReference = undefined;

  /**
   * Set time reference
   */
  @Prop() timeReference: 'AM' | 'PM';

  /**
   * Text of date select button
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

  /**
   * Triggers if the first date selection changes.
   *
   * @emits string
   */
  @Event() fromDateChange: EventEmitter<string>;

  /**
   * Triggers if the second date selection changes.
   *
   * @emits string
   */
  @Event() toDateChange: EventEmitter<string>;

  /**
   * Triggers if the first time selection changes.
   *
   * @emits string
   */
  @Event() fromTimeChange: EventEmitter<string>;

  /**
   * Triggers if the second time selection changes.
   *
   * @emits string
   */
  @Event() toTimeChange: EventEmitter<string>;

  /**
   * Date selection confirmed via button action
   *
   * @emits DateTimeSelectEvent
   */
  @Event() dateSelect: EventEmitter<DateTimeSelectEvent>;

  /**
   * Triggers every time one of the inputs changes
   *
   * @emits DatetimeInputChangeEvent
   */
  @Event() inputChange: EventEmitter<DatetimeInputChangeEvent>;

  /**
   * Gets the current input
   *
   * @returns DatetimeInputChangeEvent
   */
  @Method()
  async getCurrentInput(): Promise<DatetimeInputChangeEvent> {
    return {
      fromDate: this._fromDate,
      toDate: this._toDate,
      fromTime: this._fromTime,
      toTime: this._toTime,
    };
  }

  @State() private fromTriggerRef: HTMLElement;
  @State() private toTriggerRef: HTMLElement;
  @State() private _fromDate: string;
  @State() private _toDate: string;
  @State() private _fromTime: string;
  @State() private _toTime: string;

  private fromDateInput: HTMLInputElement;
  private fromTimeInput: HTMLInputElement;
  private toDateInput: HTMLInputElement;
  private toTimeInput: HTMLInputElement;
  private focusedInput!: HTMLInputElement;
  private datePicker!: HTMLIxDatetimePickerElement;
  private dateValidator: Validator<DateValidatorParam>;
  private timeValidator: Validator<TimeValidatorParam>;

  private onInputFocus = (event: FocusEvent) => {
    this.focusedInput = event.target as HTMLInputElement;
  };

  private onInputBlur = (event: FocusEvent) => {
    this.setInputValidity();

    const relatedElem = event.relatedTarget as HTMLElement;
    if (relatedElem?.tagName === this.datePicker.tagName) {
      this.focusedInput.focus();
      return;
    }
  };

  private setInputValidity() {
    const dateParam: DateValidatorParam = {
      from: this.fromDateInput.value,
      to: this.toDateInput.value,
      format: this.dateFormat,
      min: this.minDate,
      max: this.maxDate,
    };

    if (!this.dateValidator.validate(dateParam)) {
      this.fromDateInput.setCustomValidity(this.dateValidator.errorMessage);
      this.fromTimeInput.setCustomValidity(this.dateValidator.errorMessage);
    } else {
      this.fromDateInput.setCustomValidity('');
      this.fromTimeInput.setCustomValidity('');
    }

    const timeParam: TimeValidatorParam = {
      fromTime: this.fromTimeInput.value,
      toTime: this.toTimeInput.value,
      format: this.timeFormat,
    };

    if (!this.timeValidator.validate(timeParam)) {
      this.fromTimeInput.setCustomValidity(this.timeValidator.errorMessage);
      this.toTimeInput.setCustomValidity(this.timeValidator.errorMessage);
    } else {
      this.fromTimeInput.setCustomValidity('');
      this.toTimeInput.setCustomValidity('');
    }
  }

  private readonly onFromDateChange = (
    event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this._fromDate = event.detail.from;

    this.fromDateChange.emit(this._fromDate);
    this.onInputChange();
  };

  private readonly onToDateChange = (
    event: IxDatetimePickerCustomEvent<DateTimeDateChangeEvent>
  ) => {
    this._toDate = event.detail.from;

    this.toDateChange.emit(this._toDate);
    this.onInputChange();
  };

  private readonly onFromTimeChange = (
    event: IxDatetimePickerCustomEvent<string>
  ) => {
    this._fromTime = event.detail;

    this.fromTimeChange.emit(this._fromTime);
    this.onInputChange();
  };

  private readonly onToTimeChange = (
    event: IxDatetimePickerCustomEvent<string>
  ) => {
    this._toTime = event.detail;

    this.toTimeChange.emit(this._toTime);
    this.onInputChange();
  };

  private readonly clear = (isSecondInput: boolean) => {
    if (isSecondInput) {
      this._toDate = undefined;
      this._toTime = undefined;

      this.toDateInput.focus();
    } else {
      this._fromDate = undefined;
      this._fromTime = undefined;

      this.fromDateInput.focus();
    }
  };

  private readonly onFromDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._fromDate !== target.value) {
      this._fromDate = target.value;
    }

    this.onInputChange();
  };

  private readonly onToDateInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._toDate !== target.value) {
      this._toDate = target.value;
    }

    this.onInputChange();
  };

  private readonly onFromTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._fromTime !== target.value) {
      this._fromTime = target.value;
    }

    this.onInputChange();
  };

  private readonly onToTimeInputChange = (
    event: Event & { target: HTMLInputElement }
  ) => {
    const { target } = event;

    if (this._toTime !== target.value) {
      this._toTime = target.value;
    }

    this.onInputChange();
  };

  private readonly onDateSelect = (
    event: IxDatetimePickerCustomEvent<DateTimeSelectEvent>
  ) => {
    this.dateSelect.emit(event.detail);

    const dropdown = document.querySelector(
      'ix-dropdown'
    ) as HTMLIxDropdownElement;

    dropdown.classList.toggle('show');
  };

  private onInputChange() {
    this.inputChange.emit({
      fromDate: this._fromDate !== undefined ? this._fromDate : '',
      toDate: this._toDate !== undefined ? this._toDate : '',
      fromTime: this._fromTime !== undefined ? this._fromTime : '',
      toTime: this._toTime !== undefined ? this._toTime : '',
    });
  }

  componentWillLoad() {
    this._fromDate = this.fromDate;
    this._toDate = this.toDate;
    this._fromTime = this.fromTime;
    this._toTime = this.toTime;

    this.dateValidator = getValidator([
      'validDate',
      'toAfterFrom',
      'withinMinMax',
    ]);
    this.timeValidator = getValidator(['validTime']);
  }

  private renderInput(
    dateInputChangeCallback: InputChangeCallback,
    timeInputChangeCallback: InputChangeCallback,
    dateChangeCallback: DateChangeCallback,
    timeChangeCallback: TimeChangeCallback,
    isSecondInput: boolean = false
  ): any {
    return (
      <Fragment>
        <div
          class={{
            'second-input': isSecondInput,
          }}
        >
          {this.range && (
            <span class="label-color">{isSecondInput ? 'To' : 'From'}</span>
          )}
          <div
            class="datetime-input"
            ref={(ref) => {
              if (isSecondInput) {
                this.toTriggerRef = ref;
              } else {
                this.fromTriggerRef = ref;
              }
            }}
          >
            <input
              ref={(ref) => {
                if (isSecondInput) {
                  this.toDateInput = ref;
                } else {
                  this.fromDateInput = ref;
                }
              }}
              id="input-div"
              type="text"
              class="form-control"
              placeholder={this.dateFormat}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur}
              value={isSecondInput ? this._toDate : this._fromDate}
              onInput={(event) => dateInputChangeCallback(event)}
            />
            <input
              ref={(ref) => {
                if (isSecondInput) {
                  this.toTimeInput = ref;
                } else {
                  this.fromTimeInput = ref;
                }
              }}
              type="text"
              class="form-control"
              placeholder={this.timeFormat}
              onFocus={this.onInputFocus}
              onBlur={this.onInputBlur}
              value={isSecondInput ? this._toTime : this._fromTime}
              onInput={(event) => timeInputChangeCallback(event)}
            />
            <span
              class={{
                'icon-button': true,
                clear: true,
              }}
            >
              <ix-icon-button
                ghost
                icon="clear"
                class={{
                  hidden:
                    (isSecondInput && !this._toDate && !this._toTime) ||
                    (!isSecondInput && !this._fromDate && !this._fromTime),
                }}
                onClick={() => this.clear(isSecondInput)}
              ></ix-icon-button>
            </span>
            <span class="icon-button">
              <ix-icon-button ghost icon="chevron-down-small"></ix-icon-button>
            </span>
          </div>
        </div>
        <ix-dropdown
          trigger={isSecondInput ? this.toTriggerRef : this.fromTriggerRef}
          closeBehavior="outside"
          // onClick={(event) => event.stopPropagation()}
          class="dropdown"
        >
          <ix-datetime-picker
            onClick={(event) => event.stopPropagation()}
            tabIndex={0}
            ref={(ref) =>
              (this.datePicker = ref as HTMLIxDatetimePickerElement)
            }
            range={false}
            onDateChange={(event) => dateChangeCallback(event)}
            onTimeChange={(event) => timeChangeCallback(event)}
            from={isSecondInput ? this._toDate : this._fromDate}
            time={isSecondInput ? this._toTime : this._fromTime}
            dateFormat={this.dateFormat}
            timeFormat={this.timeFormat}
            minDate={this.minDate}
            maxDate={this.maxDate}
            weekStartIndex={this.weekStartIndex}
            showTimeReference={this.showTimeReference}
            showHour={this.showHour}
            showMinutes={this.showMinutes}
            showSeconds={this.showSeconds}
            timeReference={this.timeReference}
            onDateSelect={(event) => this.onDateSelect(event)}
          ></ix-datetime-picker>
        </ix-dropdown>
      </Fragment>
    );
  }

  private renderRangeInput() {
    return (
      <div class="range-input-container">
        <div class="range-input">
          {this.renderInput(
            this.onFromDateInputChange,
            this.onFromTimeInputChange,
            this.onFromDateChange,
            this.onFromTimeChange
          )}
        </div>
        <div class="range-input">
          {this.renderInput(
            this.onToDateInputChange,
            this.onToTimeInputChange,
            this.onToDateChange,
            this.onToTimeChange,
            true
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        {!this.range && <label>{this.label}</label>}
        {this.range
          ? this.renderRangeInput()
          : this.renderInput(
              this.onFromDateInputChange,
              this.onFromTimeInputChange,
              this.onFromDateChange,
              this.onFromTimeChange
            )}
      </Host>
    );
  }
}