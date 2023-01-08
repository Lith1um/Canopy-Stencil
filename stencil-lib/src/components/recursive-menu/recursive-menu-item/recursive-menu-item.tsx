import { Component, h, Prop } from '@stencil/core';
import { RecursiveMenuItem } from '../recursive-menu.interface';

@Component({
  tag: 'cpy-recursive-menu-item',
  styleUrl: 'recursive-menu-item.scss',
  shadow: true,
})
export class RecursiveMenuItemComp {

  @Prop()
  item: RecursiveMenuItem;

  render() {
    const classes = {
      'recursive-menu-item': true,
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

    return this.item.children
      ? (
          <cpy-popup activeOn='hover' position='right-start'>
            <div>
              <a class={classes} {...itemAttrs}>
                {this.item.icon && <cpy-icon>{this.item.icon}</cpy-icon>}

                <div>
                  <div class="recursive-menu-item__title">{this.item.title}</div>
                  {this.item.description && <div class="recursive-menu-item__description">{this.item.description}</div>}
                </div>

                <cpy-icon>chevron_right</cpy-icon>
              </a>
                
              {this.item.separator && <div class="recursive-menu-item__separator"></div>}
            </div>

            <div slot="content">
              <cpy-recursive-menu items={this.item.children}></cpy-recursive-menu>
            </div>
          </cpy-popup>
        )
      : (
        <div>
            <a class={classes} {...itemAttrs}>
              {this.item.icon && <cpy-icon>{this.item.icon}</cpy-icon>}

              <div>
                <div class="recursive-menu-item__title">{this.item.title}</div>
                {this.item.description && <div class="recursive-menu-item__description">{this.item.description}</div>}
              </div>
            </a>

            {this.item.children?.map(item => 
              <cpy-recursive-menu-item item={item}></cpy-recursive-menu-item>)}
              
            {this.item.separator && <div class="recursive-menu-item__separator"></div>}
          </div>
      );
  }
}
