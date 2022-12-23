import { Component, Prop, h } from '@stencil/core';
import { AlertAppearance, AlertType } from './alert.type';

@Component({
  tag: 'cpy-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  
  @Prop()
  type: AlertType = 'error';

  @Prop()
  appearance: AlertAppearance = 'soft';

  @Prop()
  container = true;

  @Prop()
  icon: string;

  icons: {[level: string]: string} = {
    'success': 'check_circle',
    'warning': 'warning',
    'error': 'cancel'
  };

  render() {
    const classes = {
      'alert': true,
      'alert--no-container': !this.container,
      [`alert-level-${this.type}`]: !!this.type,
      [`alert-appearance-${this.appearance}`]: !!(this.container && this.appearance),
    };

    const alertIcon = this.icon || this.icons[this.type];

    return (
      <div class={classes}>

        {this.appearance === 'border' && <div class="alert-border"></div>}

        <div class="alert-icon">
          {alertIcon && <cpy-icon>{alertIcon}</cpy-icon>}
        </div>

        <div class="alert-content">

          <div class="alert-title">
            <slot></slot>
          </div>

          <div class="alert-message">
            <slot name="content"></slot>
          </div>

        </div>

      </div>
    );
  }
}
