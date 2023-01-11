import { Component, Event, EventEmitter, h, Method, Prop, Watch } from '@stencil/core';
import { expandToggle, expandEnter, expandLeave } from '../../utils/expand-collapse';

@Component({
  tag: 'cpy-expand-collapse',
  styleUrl: 'expand-collapse.scss',
  shadow: true,
})
export class ExpandCollapse {

  @Prop({mutable: true})
  expanded: boolean;

  @Prop()
  duration: number = 300;

  @Watch('expanded')
  expandedChange(newVal: boolean, oldVal: boolean): void {
    if (newVal === oldVal) {
      return;
    }
    this.toggle();
  }

  @Method()
  async expand(): Promise<void> {
    await expandEnter(this.expandElem);
    this.expanded = true;
  }

  @Method()
  async collapse(): Promise<void> {
    await expandLeave(this.expandElem);
    this.expanded = false;
  }

  @Method()
  async toggle(): Promise<void> {
    await expandToggle(this.expandElem);
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
      this.expandElem.style.transitionDuration = `${this.duration}ms`;
    }
    this.firstRender = false;
  }

  render() {
    return (
      <div
        class="expand-collapse hide"
        ref={(el) => this.expandElem = el as HTMLElement}
        style={{transitionDuration: `${this.duration}ms`}}>
        <slot/>
      </div>
    );
  }
}
