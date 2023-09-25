import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';

@Component({
  tag: 'cpy-input-file',
  styleUrl: 'input-file.scss',
  shadow: true,
})
export class InputFile implements BaseInput<File[]> {

  @Prop({mutable: true})
  value: File[];

  @Prop()
  multiple: boolean = false;

  @Prop()
  accept: string;

  @Prop()
  label: string;

  @Prop()
  placeholder: string = 'Choose file...';

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<File[]>>;
  
  @Event()
  valueChange: EventEmitter<File[]>;

  @State()
  interacted: boolean = false;

  _validator: Validator<File[]> = defaultValidator;
  inputElem: HTMLInputElement;
  
  get filename(): string | undefined {
    if (!this.inputElem) {
      return;
    }
    return Array.from(this.inputElem.files)
      .map(file => file.name)
      .join(', ');
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

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement;

    const value = Array.from(target.files);

    this.value = value;
    this.valueChange.emit(value);
    
    console.log('handleChange', value);
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

  getValidators(): Array<string | ValidatorEntry | Validator<File[]>> {
    let validators = this.validators ?? [];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  focusInput(): void {
    console.log('focusInput', `${this.inputElem?.value}`, this.value);
    this.inputElem?.click();
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
          type="file"
          multiple={this.multiple}
          accept={this.accept}
          required={this.required}
          placeholder={this.placeholder}
          disabled={this.disabled}
          onInput={(e) => this.handleChange(e)}
          onBlur={() => this.handleBlur()}/>
        
        <span class="file-custom">{this.filename || this.placeholder}</span>

        <cpy-button
          slot='suffix'
          disabled={this.disabled}
          size={this.size}
          appearance='borderless'
          type={this.interacted && error ? 'error' : 'primary'}
        >
          Browse
        </cpy-button>

        <slot name='suffix' slot='suffix'/>
      </cpy-input-base>
    );
  }
}
