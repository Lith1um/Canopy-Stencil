import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { InputSize } from '../input/input';

@Component({
  tag: 'cpy-input-text',
  styleUrl: 'input-text.scss',
  shadow: true,
})
export class InputText {

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop({mutable: true})
  value: string;

  @Prop()
  size: InputSize;

  @Event()
  valueChange: EventEmitter<string>;

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = target.value;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <cpy-input
        label={this.label}
        required={this.required}
        disabled={this.disabled}
        size={this.size}>
        <slot name='prefix' slot='prefix'/>
        <input
          type="text"
          required={this.required}
          disabled={this.disabled}
          value={this.value}
          onInput={(e) => this.handleChange(e)}/>
        <slot name='suffix' slot='suffix'/>
      </cpy-input>
    );
  }
}
