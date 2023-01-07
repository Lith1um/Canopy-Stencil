import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {

  @Prop()
  opened: boolean = false;

  @Event() toggleOpened: EventEmitter<void>;

  render() {
    const classes = {
      'drawer': true,
      [`drawer--open`]: this.opened,
    };

    return (
      <div class={classes}>
        <cpy-button class="drawer__close" icon type="basic" onClick={() => this.toggleOpened.emit()}>
          <cpy-icon>close</cpy-icon>
        </cpy-button>
        <slot></slot>
      </div>
    );
  }
}
