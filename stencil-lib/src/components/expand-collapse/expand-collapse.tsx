import { Component, Event, EventEmitter, h, Method, Prop, Watch } from '@stencil/core';
import { ExpandCollapseService } from '../../utils/expand-collapse';

@Component({
  tag: 'cpy-expand-collapse',
  styleUrl: 'expand-collapse.scss',
  shadow: true,
})
export class ExpandCollapse {

  @Prop()
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
    this.trackExpanded = true;
    await this.expandCollapseService.expand(this.expandElem);
    this.toggleExpanded.emit(this.trackExpanded);
  }

  @Method()
  async collapse(): Promise<void> {
    this.trackExpanded = false;
    await this.expandCollapseService.collapse(this.expandElem);
    this.toggleExpanded.emit(this.trackExpanded);
  }

  @Method()
  async toggle(): Promise<void> {
    this.trackExpanded = !this.toggleExpanded;
    await this.expandCollapseService.toggle(this.expandElem);
    this.toggleExpanded.emit(this.trackExpanded);
  }

  @Event({bubbles: false})
  toggleExpanded: EventEmitter<boolean>;

  expandCollapseService = new ExpandCollapseService();
  trackExpanded: boolean;
  expandElem: HTMLElement;
  firstRender: boolean = true;

  async componentDidLoad(): Promise<void> {
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
