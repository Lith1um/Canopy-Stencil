import { Component, Element, h, Method, Prop } from '@stencil/core';
import { ContextMenuItem } from './context-menu.interface';

@Component({
  tag: 'cpy-context-menu',
  styleUrl: 'context-menu.scss',
  shadow: true,
})
export class ContextMenu {

  @Element()
  host: HTMLElement;

  @Prop()
  items: ContextMenuItem[];

  @Method()
  async recalculatePosition(): Promise<void> {
    this.host.shadowRoot.querySelectorAll('cpy-context-menu-item').forEach(item => item.recalculatePosition());
  }

  render() { 
    return (
      <div class="context-menu">
        {this.items?.map(item =>
          <cpy-context-menu-item item={item}></cpy-context-menu-item>)}
      </div>
    );
  }
}
