import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'drag-drop-item',
  styleUrl: 'drag-drop-item.scss',
  shadow: true,
})
export class DraggableItem {
  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }
}
