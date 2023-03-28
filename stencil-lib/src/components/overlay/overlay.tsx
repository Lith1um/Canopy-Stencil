import { Component, Event, EventEmitter, h, Method, Prop, Watch } from '@stencil/core';
import { enter, leave } from '../../utils/animation-transition';

@Component({
  tag: 'cpy-overlay',
  styleUrl: 'overlay.scss',
  shadow: true,
})
export class Overlay {

  @Prop() show: boolean = false;

  @Prop() hasBackdropClick: boolean = true;

  @Prop() zIndex = '50';

  @Watch('show')
  onShowChange(show: boolean): void {
    this.toggle(show);
  }

  @Event() closed: EventEmitter<void>;
  @Event() backdropClick: EventEmitter<void>;

  @Method()
  async open(): Promise<void> {
    enter(this.overlayElem, 'overlay');
    this.addClickOutsideListener();
  }

  @Method()
  async close(): Promise<void> {
    leave(this.overlayElem, 'overlay');
    this.closed.emit();
    this.removeClickOutsideListener();
  }

  @Method()
  async toggle(show: boolean): Promise<void> {
    if (show) {
      await this.open();
    } else {
      await this.close();
    }
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.overlayContainerElem)) {
      this.close();
      this.backdropClick.emit();
      this.removeClickOutsideListener();
    }
  }

  addClickOutsideListener(): void {
    if (!this.hasBackdropClick) {
      return;
    }
    this.overlayElem.addEventListener('mousedown', this.checkClickOutside);
  }

  removeClickOutsideListener(): void {
    if (!this.hasBackdropClick) {
      return;
    }
    this.overlayElem.removeEventListener('mousedown', this.checkClickOutside);
  }

  componentDidLoad(): void {
    this.onShowChange(this.show);
  }

  overlayElem: HTMLElement;
  overlayContainerElem: HTMLElement;

  render() {
    return (
      <div class="overlay hidden" style={{ zIndex: this.zIndex }} ref={(el) => this.overlayElem = el as HTMLElement}>
        <div ref={(el) => this.overlayContainerElem = el as HTMLElement}>
          <slot/>
        </div>
      </div>
    );
  }
}
