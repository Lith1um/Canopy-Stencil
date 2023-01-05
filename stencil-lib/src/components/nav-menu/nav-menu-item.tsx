import { Component, h, Prop } from '@stencil/core';
import { NavMenuItem } from './nav-menu.interface';

@Component({
  tag: 'cpy-nav-menu-item',
  styleUrl: 'nav-menu-item.scss',
  shadow: true,
})
export class NavMenuItemComp {

  @Prop()
  item: NavMenuItem;

  render() {
    const currentPath = window.location.pathname;

    const classes = {
      'nav-menu-item': true,
      'nav-menu-item--active': this.item.looseMatch ? currentPath.includes(this.item.url) : currentPath === this.item.url,
      'nav-menu-item--group': this.item.type === 'group',
    }

    const itemAttrs: any = {};

    if (this.item.openInNewTab) {
      itemAttrs.target = '_blank';
    }
    if (this.item.url !== undefined) {
      itemAttrs.href = this.item.url;
    }
    if (this.item.function) {
      itemAttrs.onClick = this.item.function;
    }

    return (
      <div>
        <a class={classes} {...itemAttrs}>
          {this.item.icon && <cpy-icon>{this.item.icon}</cpy-icon>}

          <div>
            <div class="nav-menu-item__title">{this.item.title}</div>
            {this.item.description && <div class="nav-menu-item__description">{this.item.description}</div>}
          </div>
        </a>

        {this.item.type === 'group' && this.item.children?.map(item => 
          <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}
          
        {this.item.separator && <div class="nav-menu-item__separator"></div>}
      </div>
    );
  }
}
