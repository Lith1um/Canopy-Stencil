import { computePosition, flip, shift, VirtualElement } from '@floating-ui/dom';
import { Component, h, Host, Prop } from '@stencil/core';
import { ContextMenuItem } from '../context-menu/context-menu.interface';

@Component({
  tag: 'cpy-context-menu-trigger',
  styleUrl: 'context-menu-trigger.scss',
  shadow: true,
})
export class ContextMenuTrigger {

  @Prop() items: ContextMenuItem[] = [];

  menuElem: HTMLCpyContextMenuElement;

  onContextMenu(e: MouseEvent): void {
    e.preventDefault();
    this.menuElem.classList.toggle('context-menu--show');

    this.addClickOutsideListener();

    const virtualEl: VirtualElement = {
      getBoundingClientRect() {
        return {
          x: e.clientX,
          y: e.clientY,
          top: e.clientY,
          left: e.clientX,
          bottom: e.clientY,
          right: e.clientX,
          width: 0,
          height: 0,
        };
      },
    };

    computePosition(virtualEl, this.menuElem, {
      placement: 'right-start',
      middleware: [flip(), shift({ crossAxis: true })],
    }).then(({x, y}) => {
      Object.assign(this.menuElem.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
      this.menuElem.recalculatePosition();
    });
  }

  checkClickOutside = (e: Event) => {
    if (!e.composedPath().includes(this.menuElem)) {
      this.menuElem.classList.remove('context-menu--show');
      this.removeClickOutsideListener();
    }
  }

  addClickOutsideListener(): void {
    document.addEventListener('mousedown', this.checkClickOutside);
  }

  removeClickOutsideListener(): void {
    document.removeEventListener('mousedown', this.checkClickOutside);
  }

  render() {
    return (
      <Host onContextMenu={(e: MouseEvent) => this.onContextMenu(e)}>
        <slot />
        <cpy-context-menu
          class="context-menu"
          ref={(el) => this.menuElem = el}
          items={this.items}>
        </cpy-context-menu>
      </Host>
    );
  }
}