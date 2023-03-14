import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { InputSize } from '../input/input';

@Component({
  tag: 'cpy-input-number',
  styleUrl: 'input-number.scss',
  shadow: true,
})
export class InputNumber {

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop({mutable: true})
  value: number;

  @Prop()
  size: InputSize;

  @Event()
  valueChange: EventEmitter<number>;

  handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    this.value = isNaN(parseFloat(target.value)) ? undefined : parseFloat(target.value);
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
          type="number"
          step="any"
          required={this.required}
          disabled={this.disabled}
          value={this.value}
          onInput={(e) => this.handleChange(e)}/>
        <slot name='suffix' slot='suffix'/>
      </cpy-input>
    );
  }
}
