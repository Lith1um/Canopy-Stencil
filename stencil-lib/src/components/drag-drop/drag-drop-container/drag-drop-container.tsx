import { Component, Host, h, Prop } from '@stencil/core';
import Sortable from 'sortablejs';

@Component({
  tag: 'drag-drop-container',
  styleUrl: 'drag-drop-container.scss',
  scoped: true,
})
export class DragAndDropContainer {
  @Prop() containerTitle: string;
  @Prop() group: string;

  private container: HTMLElement;

  componentDidLoad() {
    Sortable.create(this.container, {
      animation: 150,
      group: this.group,
      ghostClass: 'ghost',
    });
  }

  render() {
    return (
      <Host>
        <h1>{this.containerTitle}</h1>
        <div class="container" ref={el => (this.container = el as HTMLElement)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
