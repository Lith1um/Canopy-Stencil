import { Component, Element, h, Prop } from '@stencil/core';
import { StackDirection } from './stack.type';
import { onVisible } from '../../utils/elements';

@Component({
  tag: 'cpy-stack',
  styleUrl: 'stack.scss',
  shadow: true,
})
export class Stack {

  @Prop()
  direction: StackDirection = 'left';

  @Prop()
  overlap: number = 0.5;

  @Element()
  host: HTMLElement;

  stackElem: HTMLElement;
  slotChildren: HTMLElement[] = [];

  componentDidLoad(): void {
    onVisible(this.stackElem, () => this.stackItems());
  }

  handleSlotChange(): void {
    const slotElem = this.host.shadowRoot.querySelector('slot');
    if (!slotElem) {
      return;
    }

   this.slotChildren = slotElem.assignedNodes().filter(node => node.nodeName !== '#text')
      .map(child => child as HTMLElement);

    this.stackItems();
  }

  handleMouseOver(): void {
    const marginProp = this.direction === 'left'
      ? 'marginLeft'
      : 'marginRight';

    this.slotChildren.forEach(stackItem => {
      stackItem.style.transition = 'margin 0.3s ease-in-out';
      stackItem.style[marginProp] = `0px`;
    });
  }

  stackItems(): void {
    const marginProp = this.direction === 'left'
      ? 'marginLeft'
      : 'marginRight';

    this.slotChildren.forEach((stackItem, index) => {
      const item = stackItem as HTMLElement;
      item.style.position = 'relative';
      item.style.zIndex = `${this.slotChildren.length - index}`;
      // ignore margin change for first entry
      if (index === 0) {
        return;
      }
      item.style[marginProp] = `calc(${-item.clientWidth * this.overlap}px - 0.25rem)`;
    });
  }

  render() {
    const classes = {
      'stack': true,
      [`stack--${this.direction}`]: !!this.direction
    };

    return (
      <div
        class={classes}
        onMouseEnter={() => this.handleMouseOver()}
        onMouseLeave={() => this.stackItems()}
        ref={(el) => this.stackElem = el as HTMLElement}>
        <slot onSlotchange={() => this.handleSlotChange()}></slot>
      </div>
    );
  }
}
