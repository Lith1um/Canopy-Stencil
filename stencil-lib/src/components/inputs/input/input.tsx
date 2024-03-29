import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import { InputType } from './input.type';

@Component({
  tag: 'cpy-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input implements BaseInput<string | number> {

  @Prop()
  type: InputType = 'text';

  @Prop({mutable: true})
  value: string | number;

  @Prop()
  label: string;

  @Prop()
  placeholder: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<string | number>>;
  
  @Event()
  valueChange: EventEmitter<string | number>;

  @State()
  interacted: boolean = false;

  _validator: Validator<string | number> = defaultValidator;
  inputElem: HTMLInputElement;

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

  @Method()
  async markAsUntouched(): Promise<void> {
    // ignore marking as untouched if disabled
    if (this.disabled) {
      return;
    }
    this.interacted = false;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement

    const value = this.type === 'number'
      ? target.value.length > 0 ? parseFloat(target.value) : undefined
      : target.value;

    this.value = value;
    this.valueChange.emit(value);
  }

  handleBlur(): void {
    this.interacted = true;
  }

  componentWillLoad() {
    this._validator = getValidator(this.getValidators());
  }

  componentWillUpdate() {
    this._validator = getValidator(this.getValidators());
  }

  getValidators(): Array<string | ValidatorEntry | Validator<string>> {
    let validators = this.validators ?? [];

    // don't add the password validator by default
    // (usually password validation is only required for account creation, not login)
    if (this.type !== 'password') {
      validators = [this.type, ...(this.validators ?? [])];
    }
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  focusInput(): void {
    this.inputElem?.focus();
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage(this.value)
      : '';

    return (
      <cpy-input-base
        label={this.label}
        size={this.size}
        required={this.required}
        interacted={this.interacted}
        error={error}
        disabled={this.disabled}
        onLabelClicked={() => this.focusInput()}>
        <slot name='prefix' slot='prefix'/>

        <input
          ref={(el) => this.inputElem = el as HTMLInputElement}
          type={this.type}
          required={this.required}
          placeholder={this.placeholder}
          disabled={this.disabled}
          value={this.value}
          onInput={(e) => this.handleChange(e)}
          onBlur={() => this.handleBlur()}/>

        <slot name='suffix' slot='suffix'/>
      </cpy-input-base>
    );
  }
}
