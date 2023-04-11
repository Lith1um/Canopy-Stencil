import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import * as DateTime from '../../../utils/date-time';

@Component({
  tag: 'cpy-input-datepicker',
  styleUrl: 'input-datepicker.scss',
  shadow: true,
})
export class DatePicker implements BaseInput<string> {

  @Prop()
  label: string;

  @Prop({mutable: true})
  value: string;

  @Prop()
  required: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<string>>;

  @Prop()
  format: string = 'DD/MM/YYYY';

  @Event()
  valueChange: EventEmitter<string>;

  @State()
  interacted: boolean = false;

  _validator: Validator<string> = defaultValidator;
  inputElem: HTMLCpyInputBaseElement;
  inputTextElem: HTMLInputElement;

  handleChange(dateStr: string): void {
    if (this.disabled) {
      return;
    }

    this.value = dateStr;
    this.valueChange.emit(dateStr);
    this.inputElem.closePopup();
  }

  handleBlur(): void {
    console.log(DateTime.isValid(this.inputTextElem.value, this.format));
    const isoDate = DateTime.isValid(this.inputTextElem.value, this.format)
      ? DateTime.getDate(this.inputTextElem.value, this.format).toISOString()
      : this.inputTextElem.value;

    this.handleChange(isoDate);

    this.interacted = true;
  }

  async componentWillLoad() {
    this._validator = getValidator(this.getValidators());
    await DateTime.loadDayJs();
  }

  componentWillUpdate() {
    this._validator = getValidator(this.getValidators());
  }

  @Method()
  async isValid(): Promise<boolean> {
    // ignore validation if field is disabled
    if (this.disabled) {
      return true;
    }
    return this._validator.validate(this.value);
  }

  @Method()
  async markAsTouched(): Promise<void> {
    // ignore marking as touched if disabled
    if (this.disabled) {
      return;
    }
    this.interacted = true;
  }

  getValidators(): Array<string | ValidatorEntry | Validator<string | number>> {
    const validators = ['date', ...(this.validators ?? [])];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  focusInput(): void {
    this.inputTextElem?.focus();
  }

  formatDate(dateStr: string): string {
    return DateTime.isValid(dateStr)
      ? DateTime.getDate(dateStr).format(this.format)
      : dateStr;
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage
      : '';

    return (
      <cpy-input-base
        popup={true}
        stretchPopup={false}
        label={this.label}
        size={this.size}
        required={this.required}
        interacted={this.interacted}
        disabled={this.disabled}
        error={error}
        onPopupClosed={() => this.handleBlur()}
        ref={(el) => this.inputElem = el as HTMLCpyInputBaseElement}>
        <slot name='prefix' slot='prefix'/>

        <input
          type="text"
          disabled={this.disabled}
          value={this.value ? this.formatDate(this.value) : ''}
          ref={(el) => this.inputTextElem = el as HTMLInputElement}/>

        <cpy-icon slot="suffix">today</cpy-icon>

        <div slot="popup-content">
          <cpy-calendar date={this.value} onDateChange={(e) => this.handleChange(e.detail)}></cpy-calendar>
        </div>
      </cpy-input-base>
    );
  }
}
