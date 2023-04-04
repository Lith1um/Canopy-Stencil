import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { InputSize } from '../../types/input-size.type';

@Component({
  tag: 'cpy-input-select-option',
  styleUrl: 'input-select-option.scss',
  shadow: true,
})
export class InputSelectOption {

  @Prop()
  label: string;

  @Prop()
  value: string | number;

  @Prop()
  active: boolean = false;

  @Prop()
  size: InputSize = 'default';

  @Event()
  optionSelected: EventEmitter<string | number>;

  render() {
    const classes = {
      'input-select-option': true,
      'input-select-option--active': this.active,
      [`input-select-option--${this.size}`]: !!this.size,
    }
    return (
      <div class={classes} onClick={() => this.optionSelected.emit(this.value)}>
        {this.label}
        <cpy-splash></cpy-splash>
      </div>
    );
  }
}
