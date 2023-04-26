import { Component, Element, h, Host, Prop } from '@stencil/core';
import { SlideInPosition } from './slide-in.type';
import { onInvisible, onVisible } from '../../utils/elements';

@Component({
  tag: 'cpy-slide-in',
  styleUrl: 'slide-in.scss',
  shadow: true,
})
export class SlideIn {

  @Element()
  host: HTMLElement;

  @Prop()
  position: SlideInPosition = 'left';
  
  @Prop()
  delay: number = 100;
  
  @Prop()
  reset: boolean = false;

  visibleObserver: IntersectionObserver;
  invisibleObserver: IntersectionObserver;

  componentDidLoad(): void {
    this.visibleObserver = onVisible(this.host, () => setTimeout(() => this.handleSlideIn(), this.delay), !this.reset);
    if (this.reset) {
      this.invisibleObserver = onInvisible(this.host, () => setTimeout(() => this.handleSlideOut(), this.delay), false);
    }
  }

  handleSlideIn(): void {
    this.host.classList.add('slide-in--open');
  }

  handleSlideOut(): void {
    this.host.classList.remove('slide-in--open');
  }
  
  render() {
    const classes = {
      'slide-in': true,
      [`slide-in--${this.position}`]: !!this.position,
    };

    return (
      <Host class={classes}>
        <slot/>
      </Host>
    );
  }

  disconnectedCallback(): void {
    this.visibleObserver.disconnect();
    this.invisibleObserver.disconnect();
  }
}
