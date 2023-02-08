import { Component, Host, h, Prop } from '@stencil/core';
import Sortable, { SortableOptions } from 'sortablejs';

@Component({
  tag: 'drag-drop-container',
  styleUrl: 'drag-drop-container.scss',
  scoped: true,
})
export class DragAndDropContainer {

  @Prop() containerTitle: string;

  @Prop() group: string;

  @Prop() handle: string;

  private container: HTMLElement;

  onSort(e: any): void {
    console.log('onSort', e);
  }

  componentDidLoad() {
    const options: SortableOptions = {
      animation: 150,
      group: this.group,
      ghostClass: 'ghost',
      onSort: (e) => this.onSort(e)
    };

    if (this.handle) {
      options.handle = `.${this.handle}`;
    }

    Sortable.create(this.container, options);
  }

  render() {
    return (
      <Host>
        <h1>{this.containerTitle}</h1>
        <div class="container" ref={el => (this.container = el as HTMLElement)}>
          <slot/>
        </div>
      </Host>
    );
  }
}