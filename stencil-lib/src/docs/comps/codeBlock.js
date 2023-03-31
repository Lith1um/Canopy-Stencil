(function () {
  document.getElementById('overview-code').code = `<cpy-code-block language="scss"></cpy-code-block>

<script>
  document.querySelector('cpy-code-block').code = \`.nav-menu-item {
    background-color: transparent;
  
    &:hover, &--active {
      background-color: var(--cpy-bg-hover);
    }
  }\`;
</script>`;

  document.getElementById('overview-code-block').code = `.nav-menu-item {
  background-color: transparent;

  &:hover, &--active {
    background-color: var(--cpy-bg-hover);
  }
}`;

  document.getElementById('example-code').code = `<cpy-code-block></cpy-code-block>

<script>
  document.querySelector('cpy-code-block').code = \`import { Component, h } from '@stencil/core';

  @Component({
    tag: 'cpy-icon',
    styleUrl: 'icon.scss',
    shadow: true,
  })
  export class Icon {

    render() {
      return <i class="material-icons"><slot></slot></i>;
    }
  }\`;
</script>`;

  document.getElementById('example-code-block').code = `import { Component, h } from '@stencil/core';

@Component({
  tag: 'cpy-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {

  render() {
    return <i class="material-icons"><slot></slot></i>;
  }
}`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
    { name: 'language', description: 'The code snippet language', type: "CodeLanguage", default: "'typescript'", required: false },
  ];
})();
