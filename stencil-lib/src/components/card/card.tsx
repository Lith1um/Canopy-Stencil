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
    const footerClasses = {
      'card__footer': true,
      'card__footer--hidden': !this.host.querySelector('[slot="footer"]')
    };

    return (
      <Host>
        <div class='card'>
          <slot/>
        </div>

        <div class={footerClasses}>
          <slot name='footer'/>
        </div>
      </Host>
    );
  }
}
