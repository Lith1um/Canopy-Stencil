import { Component, h, Prop } from '@stencil/core';
import { ContextMenuItem } from './context-menu.interface';

@Component({
  tag: 'cpy-context-menu',
  styleUrl: 'context-menu.scss',
  shadow: true,
})
export class ContextMenu {

  @Prop()
  items: ContextMenuItem[];

  render() { 
    return (
      <div class="context-menu">
        {this.items?.map(item =>
          <cpy-context-menu-item item={item}></cpy-context-menu-item>)}
      </div>
    );
  }
}
