(function () {
  document.getElementById('code-block-scss-example').code = `.nav-menu-item {
  --item-opacity: 0;
  background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

  &:hover, &--active {
    --item-opacity: 0.1;
  }
}`;

  document.getElementById('code-block-ts-example').code = `import { Component, h, Prop } from '@stencil/core';
import '../../utils/prism';

@Component({
  tag: 'cpy-code-block',
  styleUrl: 'code-block.scss',
  shadow: true,
})
export class CodeBlock {

  @Prop() code: string;

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell' = 'typescript';

  codeElem: HTMLElement;

  componentDidRender(): void {
    Prism.highlightElement(this.codeElem);
  }

  render() {
    return (
      <pre>
        <code ref={(el) => this.codeElem = el as HTMLElement} class={\`language-\${this.language}\`}>
          {this.code}
        </code>
      </pre>
    );
  }
}`;

  document.getElementById('code-block-html-example').code = `<cpy-code-block language="scss"></cpy-code-block>

<script>
  document.querySelector('cpy-code-block').code = \`.nav-menu-item {
    --item-opacity: 0;
    background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

    &:hover, &--active {
      --item-opacity: 0.1;
    }
  }\`;
</script>`;

  document.getElementById('code-block-props').tableData = [
    { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
    { name: 'show-details', description: 'Shows the language and copy button', type: "boolean", default: "false", required: false },
    { name: 'language', description: 'The code snippet language', type: "'typescript' | 'javascript' | 'scss' | 'css' | 'html' | 'json' | 'shell'", default: "'typescript'", required: false },
  ];
})();