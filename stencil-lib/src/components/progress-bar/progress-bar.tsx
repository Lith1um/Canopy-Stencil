import { Component, h, Prop } from '@stencil/core';
import { ProgressBarSize, ProgressBarAppearance } from './progress-bar.type';

@Component({
  tag: 'cpy-progress-bar',
  styleUrl: 'progress-bar.scss',
  shadow: true,
})
export class ProgressBar {

  @Prop()
  type: ProgressBarAppearance = 'primary';

  @Prop()
  size: ProgressBarSize = 'default';

  @Prop()
  border: boolean = false;

  @Prop()
  indeterminate: boolean = false;

  @Prop()
  value: number;
  
  render() {
    const classes = {
      'progress-bar': true,
      'progress-bar--border': this.border,
      'progress-bar--indeterminate': this.indeterminate,
      [`progress-bar-type--${this.type}`]: !!this.type,
      [`progress-bar-size--${this.size}`]: !!this.size,
    };

    return (
      <div class={classes}>
        <div class='progress-bar__progress' style={{width: `${this.value}%`}}></div>
      </div>
    );
  }
}
