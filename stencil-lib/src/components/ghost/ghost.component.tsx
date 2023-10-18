import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cpy-ghost',
  styleUrl: 'ghost.scss',
  shadow: true,
})
export class Ghost {

  @Prop() loaded: boolean = false;

  render() {
    const ghostClasses = {
      'ghost': true
    };

    return (
      this.loaded
        ? <slot></slot>
        : <div class={ghostClasses}>
            <div class="test-flex">
              {/* <div class="test-box test-circle"></div> */}
              <cpy-ghost-text></cpy-ghost-text>
            </div>
          </div>
    );
  }
}
