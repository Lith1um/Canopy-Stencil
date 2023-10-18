import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cpy-ghost-text',
  styleUrl: 'ghost-text.scss',
  shadow: true,
})
export class GhostText {

  @Prop() lines: number = 3;

  @Prop() borderRadius: string = '0.25rem';

  render() {
    return (
      <Host style={{'--cpy-ghost-border-radius': this.borderRadius}}>
        {Array(this.lines).fill(undefined)
          .map(_ => <div class="ghost-text"></div>)}
      </Host>
    );
  }
}
