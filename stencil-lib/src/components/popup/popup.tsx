import { Component, Event, EventEmitter, h, Method, Prop } from '@stencil/core';

import { computePosition, flip, shift } from '@floating-ui/dom';
import { PopupActiveOn, PopupPosition } from './popup.type';
import { onVisible } from '../../utils/elements';

@Component({
  tag: 'cpy-popup',
  styleUrl: 'popup.scss',
  shadow: true,
})
export class Popup {

  @Prop() position: PopupPosition  = 'bottom-start';

  @Prop() activeOn: PopupActiveOn = 'click';

  @Prop() stretch: boolean = false;

  @Prop() disabled: boolean = false;

  @Event() opened: EventEmitter<void>;

  @Event() closed: EventEmitter<void>;

  wrapperElem: HTMLElement;
  popupElem: HTMLElement;

  @Method()
  async show(): Promise<void> {
    this.wrapperElem.classList.add('popup--show');
    this.addClickOutsideListener();
  }

  @Method()
  async hide(): Promise<void> {
    this.wrapperElem.classList.remove('popup--show');
    this.removeClickOutsideListener();
  }

  @Method()
  async recalculatePosition(): Promise<void> {
    computePosition(this.wrapperElem, this.popupElem, {
      placement: this.position,
      middleware: [flip(), shift({ crossAxis: true })],
    }).then(({x, y}) => {
      Object.assign(this.popupElem.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  onClick(): void {
    if (this.activeOn !== 'click') {
      return;
    }
    
    this.wrapperElem.classList.toggle('popup--show');

    if (this.wrapperElem.classList.contains('popup--show')) {
      this.addClickOutsideListener();
      this.opened.emit();
    } else {
      this.removeClickOutsideListener();
      this.closed.emit();
    }
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.wrapperElem)) {
      this.wrapperElem.classList.remove('popup--show');
      this.removeClickOutsideListener();
      this.closed.emit();
    }
  }

  addClickOutsideListener(): void {
    document.addEventListener('mousedown', this.checkClickOutside);
  }

  removeClickOutsideListener(): void {
    document.removeEventListener('mousedown', this.checkClickOutside);
  }

  componentDidRender(): void {
    onVisible(this.wrapperElem, ()=> this.recalculatePosition());
  }

  render() {
    const classes = {
      'popup': true,
      'popup--allow-hover': !this.disabled && this.activeOn === 'hover'
    }

    const popupClasses = {
      'popup__dropdown': true,
      'popup__dropdown--stretch-x': this.stretch && (this.position.includes('top') || this.position.includes('bottom')),
      'popup__dropdown--stretch-y': this.stretch && (this.position.includes('left') || this.position.includes('right'))
    };

    return (
      <div
        class={classes}
        ref={(el) => this.wrapperElem = el as HTMLElement}
        onMouseEnter={() => this.recalculatePosition()}>

        {!this.disabled && this.activeOn === 'click'
          ? <div class="popup--click-container" onClick={() => this.onClick()}>
              <slot />
            </div>
          : <slot/>}

        <div
          class={popupClasses}
          ref={(el) => this.popupElem = el as HTMLElement}
          role="menu">
          <slot name='content'/>
        </div>
      </div>
    );
  }
}