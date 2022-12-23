import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {

  @Prop()
  opened: boolean = false;

  render() {
    const classes = {
      'drawer': true,
      [`drawer--open`]: this.opened,
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }
}