import { Component, h, Prop } from '@stencil/core';

import { computePosition, flip } from '@floating-ui/dom';

@Component({
  tag: 'cpy-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class menu {

  @Prop() position: 'bottom-start' | 'top-start' | 'left-start' | 'right-start'  = 'bottom-start';

  @Prop() activeOn: 'hover' | 'click' = 'click';

  wrapperElem: HTMLElement;
  menuElem: HTMLElement;

  recalculatePosition(): void {
    computePosition(this.wrapperElem, this.menuElem, {
      placement: this.position,
      middleware: [flip()],
    }).then(({x, y}) => {
      Object.assign(this.menuElem.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  }

  onClick(): void {
    if (this.activeOn !== 'click') {
      return;
    }
    
    this.wrapperElem.classList.toggle('menu--show');

    if (this.wrapperElem.classList.contains('menu--show')) {
      this.addClickOutsideListener();
    } else {
      this.removeClickOutsideListener();
    }
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.wrapperElem)) {
      this.wrapperElem.classList.remove('menu--show');
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
      'menu': true,
      'menu--allow-hover': this.activeOn === 'hover'
    }

    const menuClasses = {
      'menu--dropdown': true,
    };

    return (
      <div
        class={classes}
        ref={(el) => this.wrapperElem = el as HTMLElement}
        onMouseEnter={() => this.recalculatePosition()}>

        {this.activeOn === 'click'
          ? <div class="menu--click-container" onClick={() => this.onClick()}>
              <slot />
            </div>
          : <slot/>}

        <div
          class={menuClasses}
          ref={(el) => this.menuElem = el as HTMLElement}
          role="menu">
          <slot name='content'/>
        </div>
      </div>
    );
  }
}