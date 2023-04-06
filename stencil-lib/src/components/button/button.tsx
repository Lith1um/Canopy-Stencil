import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { ButtonAppearance, ButtonSize, ButtonStyle } from './button.type';

@Component({
  tag: 'cpy-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {

  @Prop()
  icon: boolean = false;

  @Prop()
  type: ButtonAppearance = 'primary';

  @Prop()
  appearance: ButtonStyle = 'fill';

  @Prop()
  size: ButtonSize = 'default';

  @Prop()
  disabled: boolean = false;

  @Event()
  buttonClicked: EventEmitter<void>;

  handleClick(): void {
    if (this.disabled) {
      return;
    }
    this.buttonClicked.emit();
  }
  
  render() {
    const classes = {
      'button': true,
      'button--icon': this.icon,
      [`button-type--${this.type}`]: !!this.type,
      [`button-appearance--${this.appearance}`]: !!this.appearance,
      [`button-size--${this.size}`]: !!this.size,
    };

    return (
      <button class={classes} disabled={this.disabled} role="button" onClick={() => this.handleClick()}>
        <slot></slot>
        <cpy-splash disabled={this.disabled}></cpy-splash>
      </button>
    );
  }
}
