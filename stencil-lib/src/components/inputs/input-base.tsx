import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { InputSize } from './types/input-size.type';

@Component({
  tag: 'cpy-input-base',
  styleUrl: 'input-base.scss',
  shadow: true,
})
export class InputBase {

  @Prop({mutable: true})
  value: any;

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  noContainer: boolean = false;

  @Prop()
  size: InputSize = 'default';
  
  @Event()
  valueChange: EventEmitter<string>;

  @Prop()
  interacted: boolean = false;

  @Prop()
  error: string;

  render() {
    const classes = {
      'input-base': true,
      'input-base--disabled': this.disabled,
      'input-base--invalid': !!this.error,
      [`input-base--${this.size}`]: !!this.size,
      [`input-base--no-container`]: this.noContainer
    };

    const labelClasses = {
      'input-base__label': true,
      'input-base__label--required': this.required
    };

    return (
      <label class={classes}>
        {this.label && <div class={labelClasses}>
          {this.label}
        </div>}

        <div class='input-base__container'>
          <slot name='prefix'/>

          <div class='input-base__input'>
            <slot/>
          </div>

          <slot name='suffix'/>
        </div>

        {!this.disabled && this.interacted && this.error
          && <div class='input-base__errors'>{this.error}</div>}
      </label>
    );
  }
}
