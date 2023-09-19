import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import { InputSize } from '../types/input-size.type';

@Component({
  tag: 'cpy-input-checkbox',
  styleUrl: 'input-checkbox.scss',
  shadow: true,
})
export class InputCheckbox implements BaseInput<boolean> {

  @Prop()
  label: string;

  @Prop({mutable: true})
  value: boolean = false;

  @Prop()
  required: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<boolean>>;

  @Event()
  valueChange: EventEmitter<boolean>;

  @State()
  interacted: boolean = false;

  _validator: Validator<boolean> = defaultValidator;

  componentWillLoad() {
    this._validator = getValidator(this.getValidators());
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
  
  @Method()
  async markAsUntouched(): Promise<void> {
    // ignore marking as untouched if disabled
    if (this.disabled) {
      return;
    }
    this.interacted = false;
  }

  getValidators(): Array<string | ValidatorEntry | Validator<boolean>> {
    const validators = this.validators ?? [];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  handleChange(e: Event) {
    if (this.disabled) {
      return;
    }
    const target = e.target as HTMLInputElement;
    this.value = target.checked;
    this.valueChange.emit(this.value);
  }

  handleBlur(): void {
    this.interacted = true;
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage(this.value)
      : '';

    const classes = {
      'checkbox': true,
      [`checkbox--${this.size}`]: !!this.size,
      [`checkbox--required`]: this.required,
      [`checkbox--disabled`]: this.disabled,
      [`checkbox--invalid`]: !!error && this.interacted
    };

    return (
      <cpy-input-base
        noContainer={true}
        size={this.size}
        required={this.required}
        interacted={this.interacted}
        error={error}
        disabled={this.disabled}>
        <label class={classes}>
          <div class='checkbox__container'>
            <input
              type="checkbox"
              disabled={this.disabled}
              checked={this.value}
              onInput={(e) => this.handleChange(e)}
              onBlur={() => this.handleBlur()}/>
            <span class="checkbox__checkmark"></span>
            <cpy-splash disabled={this.disabled} centered unbounded></cpy-splash>
          </div>
          {this.label && <div class="checkbox__label">
            {this.label}
          </div>}
        </label>
      </cpy-input-base>
    );
  }
}
