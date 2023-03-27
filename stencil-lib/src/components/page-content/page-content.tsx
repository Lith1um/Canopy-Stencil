import { Component, Element, h, Prop, State } from '@stencil/core';
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

  @Prop()
  contentsTitle: string;

  @State()
  contents: ContentsListItem[] = [];

  @State()
  activeIndex: number = 0;

  headers: HTMLElement[];
  headersPos: Map<string, boolean> = new Map();

  componentWillLoad(): void {
    if (this.hideContentsList) {
      return;
    }

    this.headers = Array.from(this.host.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'));
    this.contents = this.headers.map(header => ({
      title: header.title || header.textContent,
      url: `#${header.id}`,
    }));
  }

  componentDidLoad(): void {
    if (this.hideContentsList) {
      return;
    }

    // callback for on intersection change
    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // no current tracked position
        if (!this.headersPos.get(entry.target.id)) {
          this.headersPos.set(entry.target.id, entry.isIntersecting);
        }

        // do nothing for initial states
        if (entry.boundingClientRect.y === 0) {
          return;
        }

        this.headersPos.set(entry.target.id, entry.isIntersecting);

        // set active index based on highest elem that is visible
        let headerId: string;

        for (let [id, isIntersecting] of this.headersPos) {
          if (isIntersecting) {
            headerId = id;
            break;
          }
        }
        
        // do nothing if there is no intersection header
        // TODO: known bug that scrolling up and having no intersection header will not update the active index
        // (it should ideally pick the previous one)
        if (!headerId) {
          return;
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
