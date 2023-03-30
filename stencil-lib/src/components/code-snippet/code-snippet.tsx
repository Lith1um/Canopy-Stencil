import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cpy-code-snippet',
  styleUrl: 'code-snippet.scss',
  shadow: true,
})
export class CodeSnippet {
  @Prop()
  code: string;

  @Prop()
  quotes: boolean = true;

  render() {
    return (
      <code>
        {this.quotes
          ? `\`${this.code}\``
          : this.code}
      </code>
    );
  }
}
