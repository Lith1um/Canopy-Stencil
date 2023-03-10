import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar {

  @Prop() type: 'rounded' | 'square' = 'rounded';

  @Prop() border: boolean = false;

  @Prop() src: string;

  @Prop() initials: string;

  @Prop() size: 'small' | 'default' | 'large' | 'x-large' = 'default';

  render() {
    const classes = {
      'avatar': true,
      [`avatar--${this.type}`]: !!this.type,
      [`avatar--${this.size}`]: !!this.size,
      [`avatar--border`]: this.border,
      [`avatar--initials`]: !!this.initials,
    };

    return (
      <div class={classes}>
        {this.src
          ? <img src={this.src} alt="avatar"/>
          : <span>{this.initials}</span>}
      </div>
    );
  }
}
