import { Component, Element, h, Prop, State } from '@stencil/core';
import { ContentsListItem } from '../contents-list/contents-list.interface';
import { getScrollParent } from '../../utils/elements';

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

  @Prop()
  contentsTitle: string;

  @State()
  contents: ContentsListItem[] = [];

  @State()
  activeIndex: number = 0;

  headers: HTMLElement[];
  headersPos: Map<string, boolean> = new Map();
  scrollParent: HTMLElement;

  componentWillLoad(): void {
    if (this.hideContentsList) {
      return;
    }

    this.headers = Array.from(this.host.querySelectorAll(':scope > h1[id], :scope > h2[id], :scope > h3[id], :scope > h4[id], :scope > h5[id], :scope > h6[id]'));
    this.contents = this.headers.map(header => ({
      title: header.title || header.textContent,
      url: `#${header.id}`,
    }));
  }

  componentDidLoad(): void {
    if (this.hideContentsList) {
      return;
    }

    this.scrollParent = getScrollParent(this.host);

    // callback for on intersection change
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        this.headersPos.set(entry.target.id, entry.isIntersecting);
        
        // do nothing for initial states
        if (entry.boundingClientRect.y === 0) {
          return;
        }

        // set active index based on highest elem that is visible
        let headerId: string;

        for (let [id, isIntersecting] of this.headersPos) {
          if (isIntersecting) {
            headerId = id;
            break;
          }
        }
        
        // if there is no intersection header then find the header with
        // the lowest position off the top of the screen
        if (!headerId) {
          const closestHeader = this.headers.reduce((trackedHeader: HTMLElement, currHeader: HTMLElement) => {
            if (!trackedHeader) {
              return currHeader;
            }

            const currBounds = currHeader.getBoundingClientRect();
            const trackedBounds = trackedHeader.getBoundingClientRect();
            const scrollParentBounds = this.scrollParent.getBoundingClientRect();

            if (currBounds.top < scrollParentBounds.top && currBounds.top > trackedBounds.top) {
              return currHeader;
            }
            return trackedHeader;
          });
          headerId = closestHeader.id;
        }
        this.activeIndex = this.headers.findIndex(header => header.id === headerId);
      });
    }
    
    // define an observer instance
    var observer = new IntersectionObserver(onIntersection, {
      root: null,   // default is the viewport
      threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
    })

    // Use the observer to observe an element
    this.headers.forEach(header => observer.observe(header));

    // scroll anything with the hash into view
    if (window.location.hash) {
      const anchor = this.headers.find(header => header.id === window.location.hash.substring(1));
      // seems to fix scroll for tabs
      setTimeout(() => anchor?.scrollIntoView(), 10);
    }
  }

  render() {
    return (
      <div class="page-container">
        <div class="page-container__main">
          <slot></slot>
        </div>
        {!this.hideContentsList && this.contents.length > 0 &&
          <cpy-contents-list
            headerTitle={this.contentsTitle}
            items={this.contents}
            activeIndex={this.activeIndex}>
          </cpy-contents-list>}
      </div>
    );
  }
}
