import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { BaseInput } from '../interfaces/base-input.interface';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';
import { defaultValidator, getValidator } from '../validation/validator';
import { InputSize } from '../types/input-size.type';

@Component({
  tag: 'cpy-input-select',
  styleUrl: 'input-select.scss',
  shadow: true,
})
export class InputSelect implements BaseInput<string | number> {

  @Element()
  host!: HTMLElement;

  @Prop()
  label: string;

  @Prop({mutable: true})
  value: string | number;

  @Prop()
  required: boolean = false;

  @Prop()
  disabled: boolean = false;

  @Prop()
  size: InputSize = 'default';

  @Prop()
  validators: Array<string | ValidatorEntry | Validator<string | number>>;

  @Event()
  valueChange: EventEmitter<string | number>;

  @State()
  interacted: boolean = false;

  @State()
  selectedLabel: string;

  @Watch('value')
  handleValueChange(val: string | number): void {
    if (!this.optionElems) {
      return;
    }

    this.optionElems.forEach(option => {
      if (option.value === val) {
        this.selectedLabel = option.label;
        option.active = true;
        return;
      }
      option.active = false;
    });
  }

  @Watch('size')
  handleSizeChange(): void {
    this.assignOptionSize();
  }

  @Listen('optionSelected')
  handleOptionSelected(e: CustomEvent<string | number>): void  {
    e.stopPropagation();
    this.handleChange(e);
    this.inputElem.closePopup();
    this.handleBlur();
  }

  _validator: Validator<string | number> = defaultValidator;
  inputElem: HTMLCpyInputBaseElement;
  selectElem: HTMLElement;
  optionElems: HTMLCpyInputSelectOptionElement[];

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

  getValidators(): Array<string | ValidatorEntry | Validator<string | number>> {
    const validators = this.validators ?? [];
    
    if (this.required) {
      validators.unshift('required');
    }
    return validators;
  }

  handleChange(e: CustomEvent<string | number>) {
    if (this.disabled) {
      return;
    }
    this.value = e.detail;
    this.valueChange.emit(this.value);
  }

  handleBlur(): void {
    this.interacted = true;
  }

  assignOptionSize(): void {
    this.optionElems?.forEach(option => option.size = this.size);
  }

  handleOptionsChange(): void {
    this.optionElems = Array.from(this.host.querySelectorAll('cpy-input-select-option'));
    this.assignOptionSize();
    this.handleValueChange(this.value);
  }

  focusSelect(): void {
    this.selectElem?.focus();
  }

  render() {
    const error = !this._validator.validate(this.value)
      ? this._validator.errorMessage
      : '';

    return (
      <cpy-input-base
        popup={true}
        label={this.label}
        size={this.size}
        required={this.required}
        interacted={this.interacted}
        disabled={this.disabled}
        error={error}
        onPopupClosed={() => this.handleBlur()}
        ref={(el) => this.inputElem = el as HTMLCpyInputBaseElement}
        onLabelClicked={() => this.focusSelect()}>
        <slot name='prefix' slot='prefix'/>

        <div
          class='input-select'
          tabindex={this.disabled ? -1 : 0}
          ref={(el) => this.selectElem = el as HTMLElement}>
          {this.selectedLabel}
        </div>

        <cpy-icon slot="suffix">expand_more</cpy-icon>

        <slot slot='popup-content' onSlotchange={() => this.handleOptionsChange()}/>
      </cpy-input-base>
    );
  }
}
