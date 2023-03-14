import { Component, h, Prop } from '@stencil/core';

export type InputSize = 'small' | 'default' | 'large';

@Component({
  tag: 'cpy-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class Input {

  @Prop()
  label: string;

  @Prop()
  required: boolean;

  @Prop()
  disabled: boolean;

  @Prop()
  size: InputSize = 'default';

  render() {
    const classes = {
      'input': true,
      'input--disabled': this.disabled,
      [`input--${this.size}`]: !!this.size
    };

    const labelClasses = {
      'input__label': true,
      'input__label--required': this.required
    };    

    return (
      <label class={classes}>
        <div class={labelClasses}>
          {this.label}
        </div>

        <div class="input__container">
          <slot name='prefix'/>

          <slot/>

          <slot name='suffix'/>
        </div>
      </label>
    );
  }
}
