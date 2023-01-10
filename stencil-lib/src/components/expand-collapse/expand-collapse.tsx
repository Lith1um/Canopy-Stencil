import { Component, Event, EventEmitter, h, Method, Prop, Watch } from '@stencil/core';
import { toggle, enter, leave } from '../../utils/animation-transition';

@Component({
  tag: 'cpy-expand-collapse',
  styleUrl: 'expand-collapse.scss',
  shadow: true,
})
export class ExpandCollapse {

  @Prop({mutable: true})
  expanded: boolean;

  @Watch('expanded')
  expandedChange(newVal: boolean, oldVal: boolean): void {
    if (newVal === oldVal) {
      return;
    }
    this.toggle();
  }

  @Method()
  async expand(): Promise<void> {
    // this.expandElem.style.maxHeight = this.expandElem.scrollHeight + "px";
    this.expanded = true;
    // this.toggleExpanded.emit(this.expanded);
      
    // // Hacky fix to prevent main content sliding open if set to open on load
    // setTimeout(() => this.expandElem.style.overflowY = 'auto', 300);
    await enter(this.expandElem, 'dropdown');
  }

  @Method()
  async collapse(): Promise<void> {
    await leave(this.expandElem, 'dropdown');
    // this.expandElem.style.overflowY = 'hidden';
    // this.expandElem.style.maxHeight = null;
    this.expanded = false;
    // this.toggleExpanded.emit(this.expanded);
  }

  @Method()
  async toggle(): Promise<void> {
    await toggle(this.expandElem, 'dropdown');
    // if (this.expanded){
    //   this.collapse();
    // } else {
    //   this.expand();
    // }
  }

  @Event({bubbles: false})
  toggleExpanded: EventEmitter<boolean>;

  expandElem: HTMLElement;
  firstRender: boolean = true;

  async componentDidRender(): Promise<void> {
    // handle initial render case
    if (this.firstRender && this.expanded) {
      this.expandElem.style.transitionDuration = '0s';
      await this.expand();
      this.expandElem.style.transitionDuration = null;
    }
    this.firstRender = false;
  }


  render() {
    return (
      <div class="expand-collapse hidden" ref={(el) => this.expandElem = el as HTMLElement}>
        <slot/>
      </div>
    );
  }
}
