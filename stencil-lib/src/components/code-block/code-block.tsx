import { Component, h, Prop } from '@stencil/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: false,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: 'ts' | 'js' | 'css' | 'html' = 'ts';

  render() {
    return (
      <pre>
        <code class={`language-${this.language}`}>
          {Prism.tokenize(this.code, '')}
        </code>
      </pre>
    );
  }
}
