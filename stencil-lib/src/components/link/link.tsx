import { Component, h, Prop } from '@stencil/core';
import { LinkType } from './types/link.type';

@Component({
  tag: 'cpy-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {

  @Prop() href: string;

  @Prop() newTab: boolean;

  @Prop() underline: boolean = true;

  @Prop() func: () => void;

  @Prop() type: LinkType = 'primary';

  handleClick(e: Event): void {
    if (this.func) {
      e.preventDefault();
      this.func();
    }
  }

  render() {
    const classes = {
      'link': true,
      'link--underline': this.underline,
      [`link--${this.type}`]: !!this.type
    };

    return (
      <a class={classes} href={this.href} target={this.newTab ? '_blank' : ''} onClick={(e) => this.handleClick(e)}>
        <slot></slot>
      </a>
    );
  }
}
