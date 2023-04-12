import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, Watch } from '@stencil/core';
import { DrawerMode } from './drawer.type';

@Component({
  tag: 'cpy-drawer-container',
  styleUrl: 'drawer-container.scss',
  shadow: true,
})
// TODO: bug here where the splash doesn't disappear
// when closing menu on mobile after screen resized
export class DrawerContainer {

  @Element() element: HTMLElement;

  @Prop({ mutable: true })
  opened: boolean = false;

  @Prop()
  mode: DrawerMode = 'side';

  @Watch('opened')
  recalculateContentOffset(newVal: boolean) {
    if (!this.contentElem) {
      return;
    }

    if (this.mode === 'over') {
      this.contentElem.style.marginLeft = '0';
      return;
    }

    const drawerWidth = newVal
      ? (this.element.shadowRoot.querySelector('cpy-drawer').shadowRoot.querySelector('.drawer') as HTMLElement).offsetWidth
      : 0;
    this.contentElem.style.marginLeft = `${drawerWidth}px`;
  }

  @Event({bubbles: false})
  toggleDrawer: EventEmitter<boolean>;

  @Method()
  async toggle(): Promise<void> {
    this.opened = !this.opened;
  }

  @Listen('toggleOpened')
  toggleOpenedHandler(): void {
    this.opened = !this.opened;
    this.toggleDrawer.emit(this.opened);
  }

  contentElem: HTMLElement;
  overlayElem: HTMLCpyOverlayElement;
  firstRender: boolean = true;

  componentDidRender(): void {
    // handle initial render case
    if (this.firstRender) {
      this.contentElem.style.transitionDuration = '0s';
      // Hacky fix to prevent main content sliding in if drawer is open on load
      setTimeout(() => this.contentElem.style.transitionDuration = null, 300);
    }
    this.firstRender = false;
  }

  render() {
    const classes = {
      'drawer-container': true
    };

    return (
      <div class={classes}>
        <cpy-drawer opened={this.opened} mode={this.mode}>
          <slot name="drawer"></slot>
        </cpy-drawer>
        <div
          class="drawer-container__content"
          ref={(el) => this.contentElem = el as HTMLElement}>
          <slot></slot>
        </div>
        <cpy-overlay
          zIndex='25'
          ref={(el) => this.overlayElem = el as HTMLCpyOverlayElement}
          show={this.mode === 'over' && this.opened}
          onBackdropClick={() => this.toggleOpenedHandler()}
        ></cpy-overlay>
      </div>
    );
  }
}
