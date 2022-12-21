import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-toolbar',
  styleUrl: 'toolbar.scss',
  shadow: true,
})
export class Toolbar {

  @Prop()
  showMenu: boolean = false;

  @Event()
  toggleMenu: EventEmitter<void>;

  render() {
    return (
      <div class="toolbar">
        {this.showMenu &&
          <div class="toolbar__menu-button" onClick={() => this.toggleMenu.emit()}>
            <cpy-icon>menu</cpy-icon>
          </div>}
        <slot></slot>
      </div>
    );
  }
}
