import { Component, h, Prop, Watch } from '@stencil/core';
import { ContentsListItem } from './contents-list.interface';
import { onResize } from '../../utils/elements';

@Component({
  tag: 'cpy-contents-list',
  styleUrl: 'contents-list.scss',
  shadow: true,
})
export class ContentsList {

  @Prop()
  headerTitle: string = 'Contents';

  @Prop()
  items: ContentsListItem[];

  @Prop({mutable: true})
  activeIndex: number;

  resize: ResizeObserver;

  @Watch('activeIndex')
  handleIndexChange(index: number): void {
    this.updateActiveBar(index);
  }

  updateActiveBar(index: number): void {
    const parentPos = this.activeBarElem.parentElement.getBoundingClientRect();
    const childPos  = this.listElems[index].getBoundingClientRect();
    const top = childPos.top - parentPos.top + this.activeBarElem.parentElement.scrollTop;

    this.activeBarElem.style.top = `${top}px`;
    this.activeBarElem.style.height = `${this.listElems[index].offsetHeight}px`;
  }

  componentDidLoad(): void {
    this.resize = onResize(this.activeBarElem.parentElement, () => this.updateActiveBar(this.activeIndex));
  }

  listElems: HTMLElement[] = [];
  activeBarElem: HTMLElement;

  render() {
    return (
      <div class="contents">
        <span class="contents__title">{this.headerTitle}</span>

        <ul class="contents__list">
          {this.items?.map((item, index) =>
            <cpy-contents-list-item
              ref={(el) => this.listElems[index] = el as HTMLElement}
              item={item}
              active={this.activeIndex === index}
              onClicked={() => this.activeIndex = index}>
            </cpy-contents-list-item>)}

          <div class='contents__list-active' ref={(el) => this.activeBarElem = el as HTMLElement}></div>
        </ul>

      </div>
    );
  }

  disconnectedCallback(): void {
    this.resize.disconnect();
  }
}
