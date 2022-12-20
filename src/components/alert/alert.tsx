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
  alertTitle: string;

  icons: {[level: string]: string} = {
    'primary': 'check_circle',
    'basic': 'check_circle',
    'info': 'info',
    'success': 'check_circle',
    'warning': 'warning',
    'error': 'cancel'
  };

  get classList(): any {
    return {
      'alert': true,
      'alert--no-container': !this.container,
      [`alert-level-${this.type}`]: this.type,
      [`alert-appearance-${this.appearance}`]: this.container && this.appearance,
    };
  }

  render() {
    return (
      <div class={this.classList}>

        {this.appearance === 'border' && <div class="alert-border"></div>}

        <div class="alert-icon">
          <cpy-icon>{this.icons[this.type]}</cpy-icon>
        </div>

        <div class="alert-content">

          <div class="alert-title">
            {this.alertTitle}
          </div>

          <div class="alert-message">
            <slot></slot>
          </div>

        </div>

      </div>
    );
  }
}
