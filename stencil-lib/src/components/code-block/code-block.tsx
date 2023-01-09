import { Component, h, Prop } from '@stencil/core';
import '../../utils/prism';

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' = 'typescript';

  codeElem: HTMLElement;

  componentDidRender(): void {
    // @ts-ignore
    Prism.highlightElement(this.codeElem);
  }

  render() {
    return (
      <pre>
        <code ref={(el) => this.codeElem = el as HTMLElement} class={`language-${this.language}`}>
          {this.code}
        </code>
      </pre>
    );
  }
}
