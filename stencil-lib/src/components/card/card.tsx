import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'cpy-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}
