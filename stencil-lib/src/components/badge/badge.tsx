import { Component, Prop, h } from '@stencil/core';
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

  render() {
    const classes = {
      'badge': true,
      [`badge--level-${this.type}`]: !!this.type,
      [`badge--appearance-${this.appearance}`]: !!this.appearance,
      [`badge--size-${this.size}`]: !!this.size,
    };

    return (
      <div class={classes}>
        <slot/>
      </div>
    );
  }
}
