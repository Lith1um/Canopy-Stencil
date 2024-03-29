import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {

  render() {
    return <i class="material-icons"><slot></slot></i>;
  }
}
