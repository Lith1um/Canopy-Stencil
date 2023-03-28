import { Component, h, Prop, State } from '@stencil/core';
import { CodeLanguage } from './types/code-language.type';
import '../../utils/prism';

declare const Prism: any;

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: CodeLanguage = 'typescript';

  @State()
  copied = false;

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }

  render() {
    if (!this.code || !Prism.languages[this.language]) {
      return;
    }
    const codeStr = Prism.highlight(this.code, Prism.languages[this.language], this.language);

    return (
      <div class="code-block">
        <button class="code-block__copy" onClick={() => this.copyCode()}>
          <cpy-icon class={this.copied && 'copied'}>{this.copied ? 'done' : 'content_copy'}</cpy-icon>
        </button>

        <pre class={`language-${this.language}`}>
          <code class={`language-${this.language}`} innerHTML={codeStr}>
          </code>
        </pre>
      </div>
    );
  }
}
