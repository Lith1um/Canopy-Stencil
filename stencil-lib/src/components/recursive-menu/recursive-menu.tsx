import { Component, h, Prop } from '@stencil/core';
import { RecursiveMenuItem } from './recursive-menu.interface';

@Component({
  tag: 'cpy-recursive-menu',
  styleUrl: 'recursive-menu.scss',
  shadow: true,
})
export class RecursiveMenu {

  @Prop()
  items: RecursiveMenuItem[];

  render() { 
    return (
      <div class="recursive-menu">
        {this.items?.map(item =>
          <cpy-recursive-menu-item item={item}></cpy-recursive-menu-item>)}
      </div>
    );
  }
}
