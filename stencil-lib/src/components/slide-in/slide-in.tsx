import { Component, Element, h, Host, Prop } from '@stencil/core';
import { SlideInDirection } from './slide-in.type';
import { onVisible } from '../../utils/elements';

@Component({
  tag: 'cpy-slide-in',
  styleUrl: 'slide-in.scss',
  shadow: true,
})
export class SlideIn {

  @Element()
  host: HTMLElement;

  @Prop()
  direction: SlideInDirection = 'left';

  componentDidLoad(): void {
    onVisible(this.host, () => this.handleSlideIn());
  }

  handleSlideIn(): void {
    this.host.classList.add('slide-in--open');
  }
  
  render() {
    const classes = {
      'slide-in': true,
      [`slide-in--${this.direction}`]: !!this.direction,
    };

    return (
      <Host class={classes}>
        <slot/>
      </Host>
    );
  }
}
