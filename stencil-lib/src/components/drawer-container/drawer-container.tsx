import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, Watch } from '@stencil/core';

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
      this.contentElem.style.transitionDuration = '0s';
      const matchMobileMedia = window.matchMedia('(min-width: 640px)');
      this.mediaChange(matchMobileMedia);

      matchMobileMedia.addEventListener('change', (media) => {
        if (!this.opened) {
          return;
        }
        this.overlayElem.toggle(!media.matches);
      })
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
        <cpy-drawer opened={this.opened}>
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
          show={this.opened && this.isMobile}
          onBackdropClick={() => this.toggleOpenedHandler()}
        ></cpy-overlay>
      </div>
    );
  }
}
