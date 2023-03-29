import { Component, Event, EventEmitter, h, Listen, Prop, State, Watch } from '@stencil/core';
import { NavMenuItem } from '../nav-menu.interface';

@Component({
  tag: 'cpy-nav-menu-item',
  styleUrl: 'nav-menu-item.scss',
  shadow: true,
})
export class NavMenuItemComp {

  @Prop({mutable: true})
  item: NavMenuItem;

  @State()
  collapsed: boolean = true;

  @Event({bubbles: false})
  itemActive: EventEmitter<void>;

  @Watch('item')
  handleItemChange(item: NavMenuItem): void {
    if (item.type !== 'collapsible') {
      return;
    }
    if (item.collapsed === undefined || item.collapsed) {
      return;
    }
    this.collapsed = this.item.collapsed = false;
  }

  @Listen('itemActive')
  childItemActive(): void {
    if (this.item.type === 'collapsible') {
      this.collapsed = this.item.collapsed = false;
    }
  }

  active: boolean;

  componentWillRender() {
    const currentPath = window.location.pathname;

    this.handleItemChange(this.item);

    this.active = this.item.active
      || (this.item.looseMatch ? currentPath.includes(this.item.url) : currentPath === this.item.url);

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
      itemAttrs.onClick = () => this.item.function(this.item);
    }

    if (this.item.type === 'collapsible') {
      itemAttrs.onClick = () => {
        this.collapsed = this.item.collapsed = !this.collapsed;
        if (this.item.function) {
          this.item.function(this.item);
        }
      }
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

          {this.item.type !== 'group' && <cpy-splash></cpy-splash>}
        </a>

        {this.item.type === 'group' && this.item.children?.map(item =>
          <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}

        {this.item.type === 'collapsible' && 
          <cpy-expand-collapse class="nav-menu-item__collapse" expanded={!this.collapsed}>
            {this.item.children?.map(item =>
              <cpy-nav-menu-item item={item}></cpy-nav-menu-item>)}
          </cpy-expand-collapse>}
          
        {(this.item.separator ?? this.item.type === 'collapsible') && <div class="nav-menu-item__separator"></div>}
      </div>
    );
  }
}
