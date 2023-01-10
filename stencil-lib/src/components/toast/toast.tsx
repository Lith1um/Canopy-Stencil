import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { ToastPosition } from './toast.type';

@Component({
  tag: 'cpy-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class Toast {

  @Prop() position: ToastPosition = 'top-end';

  @Prop() zIndex = '50';

  @Prop() duration = 4000;

  @Event() closed: EventEmitter<void>;

  @Event() opened: EventEmitter<void>;

  @Method()
  async close(): Promise<void> {
    this.visible = false;
    this.closed.emit();
    
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }
  }

  @Method()
  async open(): Promise<void> {
    this.visible = true;
    this.opened.emit();

    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
    }

    if (this.duration) {
      this.closeTimer = setTimeout(() => this.close(), this.duration);
    }
  }

  @State()
  visible: boolean;

  closeTimer: NodeJS.Timeout;

  render() {
    const classes = {
      'toast': true,
      'toast--show': this.visible,
      [`toast--${this.position}`]: !!this.position,
    }

    return (
      <div class={classes} style={{ zIndex: this.zIndex }}>
        <div class="toast--container">
          <slot/>
        </div>
      </div>
    );
  }
}
