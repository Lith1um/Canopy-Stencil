import { Component, h, Prop } from '@stencil/core';

import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom';

@Component({
  tag: 'cpy-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {

  @Prop() position: 'bottom' | 'left' | 'right' | 'top' = 'bottom';

  @Prop() text: string;

  @Prop()
  hideArrow: boolean = false;

  wrapperElem: HTMLElement;
  tooltipElem: HTMLElement;
  arrowElem: HTMLElement;

  recalculatePosition(): void {
    computePosition(this.wrapperElem, this.tooltipElem, {
      placement: this.position,
      middleware: [offset(12), flip(), shift({padding: 16}), arrow({element: this.arrowElem})],
    }).then(({x, y, placement, middlewareData}) => {
      Object.assign(this.tooltipElem.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      // Accessing the data// Accessing the data
      const {x: arrowX, y: arrowY} = middlewareData.arrow;
    
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];
    
      Object.assign(this.arrowElem.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-0.2rem',
      });
    });
  }

  componentDidRender(): void {
    this.recalculatePosition();
  }

  render() {
    const tooltipClasses = {
      'text': true,
      'text--only': !!this.text
    };

    const arrowClasses = {
      'tooltip__arrow': true,
      'tooltip__arrow--hidden': this.hideArrow,
    };    

    return (
      <div class="tooltip" ref={(el) => this.wrapperElem = el as HTMLElement} onMouseEnter={() => this.recalculatePosition()}>
        <slot />
        <div
          class={tooltipClasses}
          ref={(el) => this.tooltipElem = el as HTMLElement}
          role="tooltip">
          {this.text || <slot name='content'/>}
          <div class={arrowClasses} ref={(el) => this.arrowElem = el as HTMLElement}></div>
        </div>
      </div>
    );
  }
}