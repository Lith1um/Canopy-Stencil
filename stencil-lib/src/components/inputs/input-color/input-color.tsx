import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import { debounce } from '../../../utils/events';

@Component({
  tag: 'cpy-input-color',
  styleUrl: 'input-color.scss',
  shadow: true,
})
export class InputFile implements BaseInput<string> {

  @Prop({mutable: true})
  value: string;

  @Prop()
  multiple: boolean = false;

  @Prop()
  accept: string;

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
  validators: Array<string | ValidatorEntry | Validator<string>>;
  
  @Event()
  valueChange: EventEmitter<string>;

  @State()
  interacted: boolean = false;

  _validator: Validator<string> = defaultValidator;
  inputElem: HTMLInputElement;

  inputSizeMap = new Map<InputSize, string>([
    ['small', '4rem'],
    ['default', '5rem'],
    ['large', '6rem'],
  ]);

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

  handleChange() {
    const value = this.inputElem.value

    this.value = value;
    this.valueChange.emit(value);
    
    this.interacted = true;
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
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  focusInput(): void {
    this.inputElem?.click();
    this.inputElem?.focus();
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage(this.value)
      : '';

    const classes = {
      [`input--${this.size}`]: !!this.size,
    };

    return (
      <cpy-input-base
        style={{'--cpy-input-container-width': this.inputSizeMap.get(this.size)}}
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
          class={classes}
          type="color"
          value={this.value}
          required={this.required}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={debounce(() => this.handleChange(), 100)}
          onBlur={() => this.handleBlur()}/>
        
        <span class='color' style={{backgroundColor: this.value ?? 'transparent' }}>
        </span>

        <slot name='suffix' slot='suffix'/>
      </cpy-input-base>
    );
  }
}
