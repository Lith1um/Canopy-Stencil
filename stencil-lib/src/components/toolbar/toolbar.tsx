import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-toolbar',
  styleUrl: 'toolbar.scss',
  shadow: true,
})
export class Toolbar {

  render() {
    return (
      <div class="toolbar">
        <slot></slot>
      </div>
    );
  }
}
