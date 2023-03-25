import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../inputs/interfaces/base-input.interface';
import { ValidatorEntry } from '../inputs/validation/types/validator-entry.type';
import { Validator } from '../inputs/validation/types/validator.type';
import { defaultValidator, getValidator } from '../inputs/validation/validator';

@Component({
  tag: 'cpy-input-toggle',
  styleUrl: 'input-toggle.scss',
  shadow: true,
})
export class InputToggle implements BaseInput<boolean> {

  @Prop()
  label: string;

  @Prop({mutable: true})
  value: boolean = false;

  @Prop()
  required: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Prop()
  switchAfter: boolean = false;

  @Event()
  valueChange: EventEmitter<boolean>;

  @State()
  interacted: boolean = false;

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<boolean>>;

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

  getValidators(): Array<string | ValidatorEntry | Validator<boolean>> {
    const validators = this.validators ?? [];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.checked;
    this.valueChange.emit(this.value);
  }

  handleBlur(): void {
    this.interacted = true;
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage
      : '';

    const classes = {
      'toggle': true,
      [`toggle--${this.size}`]: !!this.size,
      [`toggle--required`]: this.required,
      [`toggle--invalid`]: !!error && this.interacted
    };

    const switchClasses = {
      'toggle__switch': true,
      [`toggle__switch--after`]: this.switchAfter
    };    

    return (
      <cpy-input-base noContainer required={this.required} value={this.value} interacted={this.interacted} error={error}>
        <label class={classes}>
          <div class={switchClasses}>
            <input
              type="checkbox"
              checked={this.value}
              onInput={(e) => this.handleChange(e)}
              onBlur={() => this.handleBlur()}/>
            <span class="toggle__slider"></span>
          </div>
          {this.label && <div class="toggle__label">
            {this.label}
          </div>}
        </label>
      </cpy-input-base>
    );
  }
}
