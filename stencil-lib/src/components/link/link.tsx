import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {

  @Prop() href: string;

  @Prop() newTab: boolean;

  @Prop() func: () => void;

  @Prop() type: 'primary' | 'secondary' | 'basic' = 'primary';

  handleClick(e: Event): void {
    if (this.func) {
      e.preventDefault();
      this.func();
    }
  }

  render() {
    const classes = {
      'link': true,
      [`link--${this.type}`]: !!this.type
    };

    return (
      <a class={classes} href={this.href} target={this.newTab ? '_blank' : ''} onClick={(e) => this.handleClick(e)}>
        <slot></slot>
      </a>
    );
  }
}
