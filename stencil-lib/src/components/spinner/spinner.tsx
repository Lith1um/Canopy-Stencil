import { Component, h, Prop } from '@stencil/core';
import { SpinnerAppearance, SpinnerSize } from './spinner.type';

@Component({
  tag: 'cpy-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {

  @Prop()
  type: SpinnerAppearance = 'primary';

  @Prop()
  size: SpinnerSize = 'default';
  
  render() {
    const classes = {
      'spinner': true,
      [`spinner-type--${this.type}`]: !!this.type,
      [`spinner-size--${this.size}`]: !!this.size,
    };

    return (
      <div class={classes}></div>
    );
  }
}
