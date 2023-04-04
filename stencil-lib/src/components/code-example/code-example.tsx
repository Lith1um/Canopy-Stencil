import { Component, Element, h, Prop } from '@stencil/core';
import { CodeLanguage } from '../code-block/types/code-language.type';

@Component({
  tag: 'cpy-code-example',
  styleUrl: 'code-example.scss',
  shadow: true,
})
export class CodeExample {

  @Element()
  host: HTMLElement;

  @Prop() header;

  @Prop() code: string;

  @Prop() language: CodeLanguage = 'html';

  @Prop({mutable: true})
  showCode: boolean = false;

  render() {
    return (
      <cpy-card class="code-example">
        <div class="code-example__title">
          <div>{this.header}</div>
          <cpy-tooltip position="bottom" text="Code" hide-arrow>
            <cpy-button icon type="basic" onClick={() => this.showCode = !this.showCode}>
              <cpy-icon>code</cpy-icon>
            </cpy-button>
          </cpy-tooltip>
        </div>

        <cpy-code-block
          class={this.showCode ? '' : 'code-example--hidden'}
          language={this.language}
          code={this.code || this.host.innerHTML.trim().replace(/ class="hydrated"/g, '')}>
        </cpy-code-block>
      
        <slot/>
      </cpy-card>
    );
  }
}
