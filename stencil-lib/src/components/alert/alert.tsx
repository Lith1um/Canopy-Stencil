import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import { AlertAppearance, AlertType } from './alert.type';

@Component({
  tag: 'cpy-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class Alert {
  
  @Prop()
  type: AlertType;

  @Prop()
  appearance: AlertAppearance = 'soft';

  @Prop()
  container = true;

  @Prop()
  icon: string;

  @Prop()
  dismissible: boolean;

  @Event()
  closed: EventEmitter<void>;

  icons: {[level: string]: string} = {
    'success': 'check_circle',
    'warn': 'warning',
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
            {this.dismissible && this.container && <cpy-button class="alert__close" icon type="basic" onClick={() => this.closed.emit()}>
              <cpy-icon class="alert__close--icon">close</cpy-icon>
            </cpy-button>}
            <div class="alert-title--slot">
              <slot></slot>
            </div>
          </div>

          <div class="alert-message">
            <slot name="content"></slot>
          </div>

        </div>

      </div>
    );
  }
}
