import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {

  @Prop() href: string;

  @Prop() newTab: boolean;

  @Prop() type: 'primary' | 'secondary' | 'basic' = 'primary';

  render() {
    const classes = {
      'link': true,
      [`link--${this.type}`]: !!this.type
    };

    return (
      <a class={classes} href={this.href} target={this.newTab ? '_blank' : ''}>
        <slot></slot>
      </a>
    );
  }
}
