import { Component, h, Event, Prop, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'cpy-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {

  @Prop()
  headerTitle: string;

  @Prop()
  size: 'small' | 'default' | 'large' = 'default';

  @Prop({mutable: true})
  opened: boolean;

  @Event({bubbles: false})
  accordionOpened: EventEmitter<void>;

  @Method()
  async open(): Promise<void> {
    this.opened = true;
    this.accordionOpened.emit();
  }

  @Method()
  async close(): Promise<void> {
    this.opened = true;
  }

  @Method()
  async toggle(): Promise<void> {
    this.onToggle();
  }

  onToggle(): void {
    this.opened = !this.opened;
    if (this.opened) {
      this.accordionOpened.emit();
    }
  }

  render() {
    const classes = {
      'accordion': true,
      'accordion--open': this.opened,
      [`accordion--${this.size}`]: !!this.size
    };

    return (
      <div class="accordion__container">
        <div class={classes} onClick={() => this.onToggle()}>
          <span>
            {this.headerTitle}
          </span>
          <cpy-icon>expand_more</cpy-icon>
          <cpy-splash></cpy-splash>
        </div>
        <cpy-expand-collapse expanded={this.opened}>
          <slot/>
        </cpy-expand-collapse>
      </div>
    );
  }
}
