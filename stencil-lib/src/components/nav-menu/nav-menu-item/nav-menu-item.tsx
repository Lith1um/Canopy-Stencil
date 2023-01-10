import { Component, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { NavMenuItem } from '../nav-menu.interface';

@Component({
  tag: 'cpy-nav-menu-item',
  styleUrl: 'nav-menu-item.scss',
  shadow: true,
})
export class NavMenuItemComp {

  @Prop()
  item: NavMenuItem;

  @State()
  collapsed: boolean = true;

  @Event({bubbles: false})
  itemActive: EventEmitter<void>;

  @Listen('itemActive')
  childItemActive(): void {
    if (this.item.type === 'collapsible') {
      this.collapsed = false;
    }
  }

  active: boolean;

  componentWillRender() {
    const currentPath = window.location.pathname;

    this.active = this.item.active
      || this.item.looseMatch ? currentPath.includes(this.item.url) : currentPath === this.item.url;

    if (this.active) {
      this.itemActive.emit();
    }
  }

  render() {
    const classes = {
      'nav-menu-item': true,
      'nav-menu-item--active': this.active,
      [`nav-menu-item--${this.item.type}`]: !!this.item.type,
    }

    const collapseIconClasses = {
      'nav-menu-item__collapse-icon': true,
      'nav-menu-item__collapse-icon--open': !this.collapsed
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

    if (this.item.type === 'collapsible') {
      itemAttrs.onClick = () => this.collapsed = !this.collapsed;
    }

    return (
      <div>
        <a class={classes} {...itemAttrs}>
          {this.item.icon && <cpy-icon>{this.item.icon}</cpy-icon>}

          <div class="nav-menu-item__content">
            <div class="nav-menu-item__title">{this.item.title}</div>
            {this.item.description && <div class="nav-menu-item__description">{this.item.description}</div>}
          </div>

          {this.item.type === 'collapsible' && <cpy-icon class={collapseIconClasses}>chevron_right</cpy-icon>}
        </a>

        {this.item.type === 'group' && this.item.children?.map(item =>
          <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}

        {this.item.type === 'collapsible' && 
          <cpy-expand-collapse expanded={!this.collapsed}>
            {this.item.children?.map(item =>
              <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}
          </cpy-expand-collapse>}
          
        {this.item.separator && <div class="nav-menu-item__separator"></div>}
      </div>
    );
  }
}
