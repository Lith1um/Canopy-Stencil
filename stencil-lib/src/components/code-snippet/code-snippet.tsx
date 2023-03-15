import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-code-snippet',
  styleUrl: 'code-snippet.scss',
  shadow: true,
})
export class CodeSnippet {
  render() {
    return (
      <code>
        <slot/>
      </code>
    );
  }
}
