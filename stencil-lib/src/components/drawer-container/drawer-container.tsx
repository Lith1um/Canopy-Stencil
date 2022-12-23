import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cpy-drawer-container',
  styleUrl: 'drawer-container.scss',
  shadow: true,
})
export class DrawerContainer {

  @Element() element: HTMLElement;

  // TODO: add support for different modes
  @Prop()
  mode: string = 'side';

  @Prop()
  opened: boolean = false;

  @Watch('opened')
  recalculateWidth(newVal: boolean, _oldVal: boolean) {
    this.drawerWidth = newVal
      ? this.element.shadowRoot.querySelector('cpy-drawer').shadowRoot.querySelector('.drawer').clientWidth
      : 0;
  }

  drawerWidth: number = 0;

  render() {
    const classes = {
      'drawer-container': true,
      [`drawer-container--${this.mode}`]: !!this.mode,
    };

    return (
      <div class={classes}>
        <cpy-drawer opened={this.opened}>
          <slot name="menu"></slot>
        </cpy-drawer>
        <div class="drawer-container__content" style={{'margin-left': `${this.drawerWidth}px`}}>
          <slot></slot>
        </div>
      </div>
    );
  }
}