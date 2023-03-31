import { Component, Prop, h, Host } from '@stencil/core';
import { BadgeType, BadgeAppearance, BadgeSize } from './badge.type';

@Component({
  tag: 'cpy-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  
  @Prop()
  type: BadgeType = 'primary';

  @Prop()
  appearance: BadgeAppearance = 'rounded';

  @Prop()
  size: BadgeSize = 'default';
  
  @Prop()
  block: boolean = false;

  render() {
    const classes = {
      'badge': true,
      [`badge--level-${this.type}`]: !!this.type,
      [`badge--appearance-${this.appearance}`]: !!this.appearance,
      [`badge--size-${this.size}`]: !!this.size
    };

    return (
      <Host class={this.block ? 'blocked' : ''}>
        <div class={classes}>
          <slot/>
        </div>
      </Host>
    );
  }
}
