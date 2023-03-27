import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'cpy-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {

  @Element()
  host: HTMLElement;

  render() {
    const classes = {
      'card': true,
      'card--footer-hidden': !this.host.querySelector('[slot="footer"]')
    };

    return (
      <Host>
        <div class={classes}>
          <slot/>
        </div>

        <div class='card__footer'>
          <slot name='footer'/>
        </div>
      </Host>
    );
  }
}
