import { Component, Element, Event, EventEmitter, h, Listen, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cpy-drawer-container',
  styleUrl: 'drawer-container.scss',
  shadow: true,
})
export class DrawerContainer {

  @Element() element: HTMLElement;

  @Prop({ mutable: true })
  opened: boolean = false;

  @Watch('opened')
  recalculateContentOffset(newVal: boolean) {
    if (this.isMobile || !this.contentElem) {
      return;
    }

    const drawerWidth = newVal
      ? (this.element.shadowRoot.querySelector('cpy-drawer').shadowRoot.querySelector('.drawer') as HTMLElement).offsetWidth
      : 0;
    this.contentElem.style.marginLeft = `${drawerWidth}px`;
  }

  @Event() toggleDrawer: EventEmitter<void>;

  @Listen('toggleOpened')
  toggleOpenedHandler(): void {
    this.opened = !this.opened;
    this.toggleDrawer.emit();
  }

  contentElem: HTMLElement;
  isMobile: boolean;
  firstRender: boolean = true;

  mediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
    // desktop mode
    this.isMobile = !e.matches;
    if (this.isMobile) {
      this.contentElem.style.marginLeft = '0px';
    } else {
      this.recalculateContentOffset(this.opened);
    }
  };

  componentWillLoad(): void {
    window.matchMedia('(min-width: 640px)').onchange = this.mediaChange;
  }

  componentDidRender(): void {
    // handle initial render case
    if (this.firstRender) {
      this.mediaChange(window.matchMedia('(min-width: 640px)'));
      this.firstRender = false;
    }
  }

  render() {
    const classes = {
      'drawer-container': true
    };

    return (
      <div class={classes}>
        <cpy-drawer opened={this.opened}>
          <slot name="drawer"></slot>
        </cpy-drawer>
        <div
          class="drawer-container__content"
          ref={(el) => this.contentElem = el as HTMLElement}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
