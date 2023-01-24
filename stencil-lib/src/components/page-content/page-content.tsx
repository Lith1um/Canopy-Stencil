import { Component, Element, h, Prop, State } from '@stencil/core';
import { debounce } from '../../utils/events';
import { ContentsListItem } from '../contents-list/contents-list.interface';

@Component({
  tag: 'cpy-page-content',
  styleUrl: 'page-content.scss',
  shadow: true,
})
export class PageContent {

  @Element()
  host: HTMLElement;

  @Prop()
  hideContentsList: boolean = false;

  @State()
  contents: ContentsListItem[] = [];

  @State()
  activeIndex: number = 0;

  headers: HTMLElement[];
  containerElem: HTMLElement;

  componentWillLoad(): void {
    if (this.hideContentsList) {
      return;
    }

    this.headers = Array.from(this.host.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'));
    this.contents = this.headers.map(header => ({title: header.textContent, url: `#${header.id}`}));
  }

  componentDidLoad(): void {
    if (this.hideContentsList) {
      return;
    }
    
    this.containerElem.addEventListener('scroll', debounce(() => {
      const containerBounds = this.containerElem.getBoundingClientRect();

      let closestIndex;
      let closestBounds: DOMRect;

      this.headers.forEach((header, index) => {
        const bounds = header.getBoundingClientRect();

        // header is visible and higher than curr selected one
        if (bounds.top >= containerBounds.top - 4
          && bounds.bottom <= containerBounds.bottom
          && (!closestBounds || closestBounds.top > bounds.top)
          && closestIndex !== index) {
          closestIndex = index;
          closestBounds = bounds;
        }
      });

      if (closestIndex > -1 && this.activeIndex !== closestIndex) {
        this.activeIndex = closestIndex;
      }
    }, 100));

    // scroll to the header on load
    if (window.location.hash) {
      const header = this.headers.find(header => header.id === window.location.hash.substring(1));
      header?.scrollIntoView();
    }
  }

  render() {
    return (
      <div class="page-container" ref={(el) => this.containerElem = el as HTMLElement}>
        <div class="page-container__content">
          <div class="page-container__main">
            <slot></slot>
          </div>
          {!this.hideContentsList && <cpy-contents-list items={this.contents} activeIndex={this.activeIndex}></cpy-contents-list>}
        </div>
      </div>
    );
  }
}
