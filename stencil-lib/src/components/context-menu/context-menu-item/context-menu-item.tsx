import { Component, h, Prop } from '@stencil/core';
import { ContextMenuItem } from '../context-menu.interface';

@Component({
  tag: 'cpy-context-menu-item',
  styleUrl: 'context-menu-item.scss',
  shadow: true,
})
export class ContextMenuItemComp {

  @Prop()
  item: ContextMenuItem;

  render() {
    const classes = {
      'context-menu-item': true,
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
                  <div class="context-menu-item__title">{this.item.title}</div>
                  {this.item.description && <div class="context-menu-item__description">{this.item.description}</div>}
                </div>

                <cpy-icon>chevron_right</cpy-icon>
              </a>
                
              {this.item.separator && <div class="context-menu-item__separator"></div>}
            </div>

            <div slot="content">
              <cpy-context-menu items={this.item.children}></cpy-context-menu>
            </div>
          </cpy-popup>
        )
      : (
        <div>
            <a class={classes} {...itemAttrs}>
              {this.item.icon && <cpy-icon>{this.item.icon}</cpy-icon>}

              <div>
                <div class="context-menu-item__title">{this.item.title}</div>
                {this.item.description && <div class="context-menu-item__description">{this.item.description}</div>}
              </div>
            </a>
              
            {this.item.separator && <div class="context-menu-item__separator"></div>}
          </div>
      );
  }
}
