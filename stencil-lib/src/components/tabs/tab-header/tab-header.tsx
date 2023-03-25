import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { generateId } from '../../../utils/ids';

@Component({
  tag: 'cpy-tab-header',
  styleUrl: 'tab-header.scss',
  shadow: true
})
export class TabHeader {

  @Prop()
  headerId: string = generateId();

  @Prop()
  tabTitle: string;

  @Event()
  selected: EventEmitter<string>;

  onClick() {
    this.selected.emit(this.headerId);
  }

  render() {
    return (
      <div class='tab-header' onClick={() => this.onClick()}>
        {this.tabTitle}
      </div>
    );
  }
}
