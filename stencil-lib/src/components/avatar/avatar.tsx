import { Component, h, Prop } from '@stencil/core';
import { AvatarSize, AvatarType } from './avatar.type';

@Component({
  tag: 'cpy-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar {

  @Prop() type: AvatarType = 'rounded';

  @Prop() border: boolean = false;

  @Prop() src: string;

  @Prop() initials: string;

  @Prop() size: AvatarSize = 'default';

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
