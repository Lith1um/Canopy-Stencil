import { Component, h, Method, State } from '@stencil/core';

@Component({
  tag: 'cpy-tab-content',
  styleUrl: 'tab-content.scss',
  shadow: true
})
export class TabContent {

  @State()
  isSelected: boolean = false;

  @Method()
  async unselect() {
    this.isSelected = false;
  }

  @Method()
  async select() {
    this.isSelected = true;
  }

  render() {
    const classes = {
      'tab-content': true,
      'tab-content--selected': this.isSelected
    };

    return (
      <div class={classes}>
        <slot />
      </div>
    );
  }
}