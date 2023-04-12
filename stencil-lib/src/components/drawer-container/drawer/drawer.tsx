import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { DrawerMode } from '../drawer.type';

@Component({
  tag: 'cpy-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {

  @Prop()
  opened: boolean = false;

  @Prop()
  mode: DrawerMode = 'side';

  @Event({bubbles: false}) toggleOpened: EventEmitter<void>;

  render() {
    const classes = {
      'drawer': true,
      [`drawer--open`]: this.opened,
      [`drawer--mode-${this.mode}`]: !!this.mode
    };

    return (
      <div class={classes}>
        <slot></slot>
      </div>
    );
  }
}
