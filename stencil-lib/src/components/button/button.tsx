import { Component, h, Prop } from '@stencil/core';
import { ButtonAppearance, ButtonType } from './button.type';

@Component({
  tag: 'cpy-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {

  @Prop()
  appearance: ButtonAppearance = 'primary';

  @Prop()
  type: ButtonType = 'default';

  @Prop()
  disabled: boolean = false;
  
  render() {
    const classes = {
      'button': true,
      [`button-appearance--${this.appearance}`]: !!this.appearance,
      [`button-type--${this.type}`]: !!this.type,
    };

    return (
      <button class={classes} disabled={this.disabled} >
        <slot></slot>
      </button>
    );
  }
}
