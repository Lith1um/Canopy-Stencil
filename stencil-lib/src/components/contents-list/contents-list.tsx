import { Component, h, Prop } from '@stencil/core';
import { ContentsListItem } from './contents-list.interface';

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

  render() {
    return (
      <div class="contents">
        <span class="contents__title">{this.headerTitle}</span>

        <ul class="contents__list">
          {this.items?.map((item, index) =>
            <cpy-contents-list-item
              item={item}
              active={this.activeIndex === index}
              onClicked={() => this.activeIndex = index}>
            </cpy-contents-list-item>)}
        </ul>

      </div>
    );
  }
}
