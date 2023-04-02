import { Component, h, Method, Prop } from '@stencil/core';

import { computePosition, flip, shift } from '@floating-ui/dom';
import { PopupActiveOn, PopupPosition } from './popup.type';

@Component({
  tag: 'cpy-popup',
  styleUrl: 'popup.scss',
  shadow: true,
})
export class Popup {

  @Prop() position: PopupPosition  = 'bottom-start';

  @Prop() activeOn: PopupActiveOn = 'click';

  wrapperElem: HTMLElement;
  popupElem: HTMLElement;

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
    } else {
      this.removeClickOutsideListener();
    }
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.wrapperElem)) {
      this.wrapperElem.classList.remove('popup--show');
      this.removeClickOutsideListener();
    }
  }

  addClickOutsideListener(): void {
    document.addEventListener('mousedown', this.checkClickOutside);
  }

  removeClickOutsideListener(): void {
    document.removeEventListener('mousedown', this.checkClickOutside);
  }

  componentDidRender(): void {
    this.recalculatePosition();
  }

  render() {
    const classes = {
      'popup': true,
      'popup--allow-hover': this.activeOn === 'hover'
    }

    const popupClasses = {
      'popup--dropdown': true,
    };

    return (
      <div
        class={classes}
        ref={(el) => this.wrapperElem = el as HTMLElement}
        onMouseEnter={() => this.recalculatePosition()}>

        {this.activeOn === 'click'
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