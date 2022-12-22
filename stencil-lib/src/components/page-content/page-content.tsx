import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-page-content',
  styleUrl: 'page-content.scss',
  shadow: true,
})
export class PageContent {

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
