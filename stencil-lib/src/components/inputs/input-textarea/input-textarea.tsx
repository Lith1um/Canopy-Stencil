import { Component, Event, EventEmitter, h, Method, Prop, State, Watch } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import { onResize } from '../../../utils/elements';

@Component({
  tag: 'cpy-input-textarea',
  styleUrl: 'input-textarea.scss',
  shadow: true,
})
export class InputTextarea implements BaseInput<string> {

  @Prop({mutable: true})
  inputValue: string;

  @Prop()
  label: string;

  @Prop()
  placeholder: string;

  @Prop()
  minRows: number = 1;

  @Prop()
  maxRows: number;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<string>>;
  
  @Event()
  inputChange: EventEmitter<string>;

  @State()
  interacted: boolean = false;

  @Watch('inputValue')
  handleAutoSize(): void {
    // get the line height of the textarea from the computed styles
    const lineHeight = parseFloat(getComputedStyle(this.textareaElem).lineHeight.split('px')[0]);
    this.textareaElem.style.height = 'auto';
    const scrollHeight = this.textareaElem.scrollHeight;

    if (!this.maxRows && !this.minRows) {
      this.textareaElem.style.overflow = 'hidden';
      this.textareaElem.style.height = `${Math.max(scrollHeight, lineHeight)}px`;
      return;
    }

    this.textareaElem.style.overflow = 'auto';
    this.textareaElem.style.height = `${lineHeight * this.maxRows < scrollHeight ? lineHeight * this.maxRows : Math.max(scrollHeight, lineHeight)}px`;
  }

  _validator: Validator<string> = defaultValidator;
  textareaElem: HTMLTextAreaElement;
  resize: ResizeObserver;

  @Method()
  async isValid(): Promise<boolean> {
    // ignore validation if field is disabled
    if (this.disabled) {
      return true;
    }
    return this._validator.validate(this.inputValue);
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
    const target = e.target as HTMLTextAreaElement;

    this.inputValue = target.value;
    this.inputChange.emit(target.value);
  }

  handleBlur(): void {
    this.interacted = true;
  }

  componentWillLoad() {
    this._validator = getValidator(this.getValidators());
  }

  componentDidLoad(): void {
    this.resize = onResize(this.textareaElem, () => this.handleAutoSize());
  }

  componentWillUpdate() {
    this._validator = getValidator(this.getValidators());
  }

  getValidators(): Array<string | ValidatorEntry | Validator<string>> {
    const validators = this.validators ?? [];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  focusTextarea(): void {
    this.textareaElem?.focus();
  }

  render() {
    const error = !this._validator.validate(this.inputValue)
      ? this._validator.errorMessage
      : '';

    return (
      <cpy-input-base
        label={this.label}
        size={this.size}
        required={this.required}
        interacted={this.interacted}
        error={error}
        disabled={this.disabled}
        onLabelClicked={() => this.focusTextarea()}>
        <slot name='prefix' slot='prefix'/>

        <textarea
          ref={(el) => this.textareaElem = el as HTMLTextAreaElement}
          rows={this.minRows}
          required={this.required}
          placeholder={this.placeholder}
          disabled={this.disabled}
          value={this.inputValue}
          onInput={(e) => this.handleChange(e)}
          onBlur={() => this.handleBlur()}/>

        <slot name='suffix' slot='suffix'/>
      </cpy-input-base>
    );
  }
  
  disconnectedCallback(): void {
    this.resize.disconnect();
  }
}
