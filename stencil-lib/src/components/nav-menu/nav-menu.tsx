import { Component, h, Prop } from '@stencil/core';
import { NavMenuItem } from './nav-menu.interface';

@Component({
  tag: 'cpy-nav-menu',
  styleUrl: 'nav-menu.scss',
  shadow: true,
})
export class NavMenuComp {

  @Prop()
  items: NavMenuItem[];

  render() {
    return (
      <div class="nav-menu">
        {this.items?.map(item =>
          <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}
      </div>
    );
  }
}
