import { Component, Element, Host, Method, Prop, h } from '@stencil/core';
import { InputSize } from '../inputs/types/input-size.type';

@Component({
  tag: 'cpy-form-group',
  styleUrl: 'form-group.scss',
  shadow: true,
})
export class FormGroup {

  @Element()
  host!: HTMLElement;

  @Prop()
  size: InputSize;

  @Prop()
  disabled: boolean;

  @Method()
  async markAsTouched(): Promise<void> {
    this.inputs.forEach(input => input.markAsTouched());
  }

  @Method()
  async markAsUntouched(): Promise<void> {
    this.inputs.forEach(input => input.markAsUntouched());
  }

  @Method()
  async isValid(): Promise<boolean> {
    for (let input of this.inputs) {
      const isValid = await input.isValid();
      if (!isValid) {
        return false;
      }
    }
    return true;
  }

  inputs: (
    HTMLCpyInputElement |
    HTMLCpyInputCheckboxElement |
    HTMLCpyInputSelectElement |
    HTMLCpyInputTextareaElement |
    HTMLCpyInputToggleElement
  )[];

  handleInputChange(): void {
    this.inputs = Array.from(this.host.querySelectorAll('cpy-input, cpy-input-checkbox, cpy-input-select, cpy-input-textarea, cpy-input-toggle'));
    this.setSize();
    this.setDisabled();
  }

  setSize(): void {
    if (this.size) {
      this.inputs.forEach(input => input.size = this.size);
    }
  }

  setDisabled(): void {
    if (this.disabled !== undefined) {
      this.inputs.forEach(input => input.disabled = this.disabled);
    }
  }

  render() {
    const classes = {
      [`form-group--${this.size}`]: !!this.size
    };

    return (
      <Host class={classes}>
        <slot onSlotchange={() => this.handleInputChange()}/>      
      </Host>
    );
  }
}
