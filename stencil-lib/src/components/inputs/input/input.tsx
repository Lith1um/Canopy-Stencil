import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';

@Component({
  tag: 'cpy-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input implements BaseInput<string | number> {

  @Prop()
  type: 'text' | 'number' | 'email' | 'password' = 'text';

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
    const validators = [this.type, ...(this.validators ?? [])];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  render() {
    const error = this.interacted && !this._validator.validate(this.value)
      ? this._validator.errorMessage
      : '';

    const classes = {
      'input': true,
      'input--disabled': this.disabled,
      'input--invalid': !!error,
      [`input--${this.size}`]: !!this.size
    };

    const labelClasses = {
      'input__label': true,
      'input__label--required': this.required
    };

    return (
      <label class={classes}>
        <div class={labelClasses}>
          {this.label}
        </div>

        <div class="input__container">
          <slot name='prefix'/>

          <input
            type={this.type}
            required={this.required}
            placeholder={this.placeholder}
            disabled={this.disabled}
            value={this.value}
            onInput={(e) => this.handleChange(e)}
            onBlur={() => this.handleBlur()}/>

          <slot name='suffix'/>

          <cpy-splash disabled={this.disabled}></cpy-splash>
        </div>

        {!this.disabled && error && <div class="input__errors">{error}</div>}
      </label>
    );
  }
}
