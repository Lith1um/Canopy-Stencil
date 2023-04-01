import { Component, Element, h, Method, Prop } from '@stencil/core';
import { ContextMenuItem } from '../context-menu.interface';

@Component({
  tag: 'cpy-context-menu-item',
  styleUrl: 'context-menu-item.scss',
  shadow: true,
})
export class ContextMenuItemComp {

  @Element()
  host: HTMLElement;

  @Prop()
  item: ContextMenuItem;

  @Method()
  async recalculatePosition(): Promise<void> {
    this.host.shadowRoot.querySelectorAll('cpy-popup').forEach(item => item.recalculatePosition());
    this.host.shadowRoot.querySelectorAll('cpy-context-menu').forEach(item => item.recalculatePosition());
  }

  render() {
    const classes = {
      'context-menu-item': true,
    }

    const itemAttrs: any = {};

    if (this.item.openInNewTab) {
      itemAttrs.target = '_blank';
    }
    if (this.item.url !== undefined && this.item.function === undefined) {
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

              <cpy-splash></cpy-splash>
            </a>
              
            {this.item.separator && <div class="context-menu-item__separator"></div>}
          </div>
      );
  }
}
