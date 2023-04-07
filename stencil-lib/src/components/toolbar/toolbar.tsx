import { Component, Host, Prop, h } from '@stencil/core';
import { ToolbarSize, ToolbarType } from './toolbar.type';

@Component({
  tag: 'cpy-toolbar',
  styleUrl: 'toolbar.scss',
  shadow: true,
})
export class Toolbar {

  @Prop()
  size: ToolbarSize = 'default';

  @Prop()
  type: ToolbarType = 'primary';

  render() {
    const classes = {
      'toolbar': true,
      [`toolbar--${this.size}`]: !!this.size,
      [`toolbar--${this.type}`]: !!this.type
    };

    return (
      <Host class={classes}>
        <slot></slot>
      </Host>
    );
  }
}
