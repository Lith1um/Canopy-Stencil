import { Component, Element, Event, EventEmitter, h, Method, Prop } from '@stencil/core';
import { enter, leave } from '../../utils/animation-transition';
import { DialogSize } from './dialog.type';

@Component({
  tag: 'cpy-dialog',
  styleUrl: 'dialog.scss',
  shadow: true,
})
export class Dialog {

  @Element() host: HTMLElement;

  @Prop() dialogTitle: string;

  @Prop() zIndex = '999';

  @Prop() size: DialogSize = 'default'

  @Event() closed: EventEmitter<void>;

  @Method()
  async open(): Promise<void> {
    enter(this.dialogElem, 'dialog');
    enter(this.dialogContainerElem, 'dialog-container');
    this.addClickOutsideListener();
  }

  @Method()
  async close(): Promise<void> {
    leave(this.dialogElem, 'dialog');
    leave(this.dialogContainerElem, 'dialog-container');
    this.closed.emit();
    this.removeClickOutsideListener();
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.dialogContainerElem)) {
      this.close();
      this.removeClickOutsideListener();
    }
  }

  addClickOutsideListener(): void {
    document.addEventListener('mousedown', this.checkClickOutside);
  }

  removeClickOutsideListener(): void {
    document.removeEventListener('mousedown', this.checkClickOutside);
  }

  dialogElem: HTMLElement;
  dialogContainerElem: HTMLElement;

  render() {
    const dialogClasses = {
      'dialog__container': true,
      [`dialog__container--${this.size}`]: !!this.size
    };

    return (
      <div class="dialog hidden" style={{ zIndex: this.zIndex }} ref={(el) => this.dialogElem = el as HTMLElement}>
        <div class={dialogClasses} ref={(el) => this.dialogContainerElem = el as HTMLElement}>
          <div class="dialog__container-title">
            <span>{this.dialogTitle}</span>
            <cpy-button icon type="basic" onClick={() => this.close()}>
              <cpy-icon class="dialog__container-close">close</cpy-icon>
            </cpy-button>
          </div>
          <div class="dialog__container-content">
            <slot/>
          </div>
          {this.host.querySelector('[slot="buttons"]') && <div class="dialog__container-buttons">
            <slot name='buttons'/>
          </div>}
        </div>
      </div>
    );
  }
}
