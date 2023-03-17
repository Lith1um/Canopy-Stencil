import { Component, h, Prop, State } from '@stencil/core';
import '../../utils/prism';

declare const Prism: any;

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell' = 'typescript';

  codeElem: HTMLElement;

  @State()
  copied = false;

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  componentDidRender(): void {
    // @ts-ignore
    Prism.highlightElement(this.codeElem);
  }

  render() {
    return (
      <div class="code-block">
        <button class="code-block__copy" onClick={() => this.copyCode()}>
          <cpy-icon class={this.copied && 'copied'}>{this.copied ? 'done' : 'content_copy'}</cpy-icon>
        </button>

        <pre>
          <code ref={(el) => this.codeElem = el as HTMLElement} class={`language-${this.language}`}>
            {this.code}
          </code>
        </pre>
      </div>
    );
  }
}
