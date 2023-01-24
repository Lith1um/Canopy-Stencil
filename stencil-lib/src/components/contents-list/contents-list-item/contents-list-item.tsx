import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { ContentsListItem } from '../contents-list.interface';

@Component({
  tag: 'cpy-contents-list-item',
  styleUrl: 'contents-list-item.scss',
  shadow: true,
})
export class ContentsListItemComp {

  @Prop()
  item: ContentsListItem;

  @Prop({mutable: true})
  active: boolean = false;

  @Event({bubbles: false})
  clicked: EventEmitter<void>;

  handleClick(): void {
    this.active = true;
    this.clicked.emit();
  }

  render() {
    const classes = {
      'contents-list-item': true,
      'contents-list-item--active': this.active
    };

    return (
      <a class={classes} href={this.item.url} onClick={() => this.handleClick()}>
        {this.item.title}
      </a>
    );
  }
}
