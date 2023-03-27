import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-page-container',
  styleUrl: 'page-container.scss',
  shadow: true,
})
export class PageContainer {
  render() {
    return (
      <div class="page-container">
        <div class="page-container__content">
          <slot></slot>
        </div>
      </div>
    );
  }
}
