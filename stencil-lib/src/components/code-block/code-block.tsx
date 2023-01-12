import { Component, h, Prop } from '@stencil/core';
import '../../utils/prism';

declare const Prism: any;

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() showDetails: boolean = false;

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell' = 'typescript';

  codeElem: HTMLElement;
  copyButtonElem: HTMLElement;

  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => this.copyButtonElem.innerHTML = 'Copied!');
  }

  componentDidRender(): void {
    // @ts-ignore
    Prism.highlightElement(this.codeElem);
  }

  render() {
    return (
      <div class="code-block">
        {this.showDetails && <div class="code-block__details">
          <div>{this.language}</div>
          <button class="code-block__copy-button" ref={(el) => this.copyButtonElem = el as HTMLElement} onClick={() => this.copyCode()}>
            Copy
          </button>
        </div>}
        <pre>
          <code ref={(el) => this.codeElem = el as HTMLElement} class={`language-${this.language}`}>
            {this.code}
          </code>
        </pre>
      </div>
    );
  }
}
