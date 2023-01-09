// Methods to handle when a page loads
export const pageInits = {
  codeBlock: () => {
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

  @Prop() language: 'typescript' | 'javascript' | 'scss' | 'css' | 'html' = 'typescript';

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

    document.getElementById('code-block-html-example').code = `<cpy-code-block id="code-block-scss" language="scss"></cpy-code-block>

<script>
  document.getElementById('code-block-scss').code = \`.nav-menu-item {
    --item-opacity: 0;
    background-color: rgba(var(--cpy-bg-basic-rgb), var(--item-opacity));

    &:hover, &--active {
      --item-opacity: 0.1;
    }
  }\`;
</script>`;

    document.getElementById('code-block-props').tableData = [
      { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
      { name: 'language', description: 'The code snippet language', type: "'typescript' | 'javascript' | 'scss' | 'css' | 'html'", default: "'typescript'", required: false },
    ];
  },

  tooltip: () => {
    document.getElementById('code-block-html-example').code = `<cpy-tooltip position="top" text="I'm a tooltip!">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
</cpy-tooltip>`;

    document.getElementById('code-block-html-example-two').code = `<cpy-tooltip position="left">
  <!-- slotted content for tooltip to point at -->
  <cpy-icon>info</cpy-icon>
  <!-- slot for tooltip content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a more customised tooltip
    </div>
  </div>
</cpy-tooltip>`;

    document.getElementById('tooltip-props').tableData = [
      { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: "'bottom' | 'left' | 'right' | 'top'", default: "'bottom'", required: false },
      { name: 'text', description: 'The text to display within the tooltip', type: 'string', default: "", required: false },
    ];

    document.getElementById('tooltip-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Content the tooltip attaches to' },
      { slotName: "'content'", purpose: 'Contents of the tooltip' },
    ];
  },

  popup: () => {
    document.getElementById('popup-test').items = [
      { title: 'Option 1', icon: 'home', separator: true },
      {
        title: 'Group of options', description: 'hover this to show more options', children: [
          { title: 'Option 1', icon: 'chat_bubble' },
          { title: 'Option 2', icon: 'menu' },
          { title: 'Option 3', icon: 'refresh' },
          { title: 'Option 4', icon: 'smart_button' },
          { title: 'Option 5', icon: 'warning' },
        ]
      }
    ];

    document.getElementById('popup-html-example').code = `<cpy-popup>
  <!-- slotted content for popup to attach to -->
  <cpy-button icon>
    <cpy-icon>info</cpy-icon>
  </cpy-button>
  <!-- slot for popup content to point at -->
  <div slot="content">
    <img src="logo.png" alt="Logo" width="60" style="margin: 0 auto; padding: 8px 0;">
    <div style="padding: 8px; background-color: var(--cpy-bg-primary); color: white; border-radius: 0 0 4px 4px;">
      This is a customised popup
    </div>
  </div>
</cpy-popup>`;

    document.getElementById('popup-props').tableData = [
      { name: 'activeOn', description: 'What triggers the popup to show', type: "'click' | 'hover'", default: "'click'", required: false },
      { name: 'position', description: 'The position of the popup relative to the element it is linked with', type: "'bottom-start' | 'left-start' | 'right-start' | 'top-start'", default: "'bottom-start'", required: false },
    ];

    document.getElementById('popup-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Content the popup attaches to' },
      { slotName: "'content'", purpose: 'Contents of the popup' },
    ];
  },

  contextMenu: () => {
    document.getElementById('context-menu-example').items = [
      { title: 'Option 1', icon: 'home', separator: true },
      {
        title: 'Group of options', description: 'hover this to show more options', children: [
          { title: 'Option 1', icon: 'chat_bubble' },
          { title: 'Option 2', icon: 'menu' },
          { title: 'Option 3', icon: 'refresh' },
          { title: 'Option 4', icon: 'smart_button' },
          { title: 'Option 5', icon: 'warning' },
        ]
      }
    ];

    document.getElementById('menu-html-example').code = `<cpy-context-menu id="menu"></cpy-context-menu>

<script>
  document.getElementById('menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
        { title: 'Option 4', icon: 'smart_button' },
        { title: 'Option 5', icon: 'warning' },
      ]
    }
  ];
</script>`;

    document.getElementById('context-menu-props').tableData = [
      { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
    ];
  },

  navMenu: () => {
    document.getElementById('nav-menu-example').items = [
      { title: 'Basic Nav Item' },
      { title: 'Basic Nav Item w/ Icon', icon: 'home' },
      { title: 'Basic Nav Item w/ Description', description: 'Basic nav item description' },
      { title: 'Basic Nav Item w/ Separator After', separator: true },
      { title: 'Basic Nav Item w/ All Applied', icon: 'home', description: 'Basic nav item description', separator: true },
      {
        title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
          { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
          { title: 'Group Item 2', type: 'basic', icon: 'menu' },
          { title: 'Group Item 3', type: 'basic', icon: 'list_alt' }
        ]
      },
    ];

    document.getElementById('nav-menu-html-example').code = `<cpy-nav-menu id="nav-menu"></cpy-nav-menu>

<script>
  document.getElementById('nav-menu').items = [
    { title: 'Basic Nav Item' },
    { title: 'Basic Nav Item w/ Icon', icon: 'home' }
  ];
</script>`;

    document.getElementById('nav-menu-props').tableData = [
      { name: 'items', description: 'Items to populate the navigation menu with', type: 'NavMenuItem[]', default: "", required: true }
    ];
  },

  spinner: () => {
    document.getElementById('spinner-html-example').code = `<cpy-spinner size="large" type="secondary"></cpy-spinner>`;

    document.getElementById('spinner-props').tableData = [
      { name: 'size', description: 'Spinner size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'type', description: 'Colour scheme of the spinner', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
    ];
  },

  badge: () => {
    document.getElementById('badge-html-example').code = `<cpy-badge>12</cpy-badge>`;

    document.getElementById('badge-props').tableData = [
      { name: 'size', description: 'badge size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'appearance', description: 'Button styles', type: "'counter' | 'tag'", default: "'counter'", required: false },
      { name: 'type', description: 'Colour scheme of the badge', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
    ];

    document.getElementById('badge-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the badge' }
    ];
  },

  button: () => {
    document.getElementById('button-html-example').code = `<cpy-button>
  Submit
</cpy-button>

<cpy-button appearance="outline" type="error">
  <cpy-icon>clear</cpy-icon>Delete
</cpy-button>`;

    document.getElementById('button-props').tableData = [
      { name: 'appearance', description: 'Button styles', type: "'borderless' | 'fill' | 'outline'", default: "'fill'", required: false },
      { name: 'disabled', description: 'Whether the button is disabled or not', type: 'boolean', default: "false", required: false },
      { name: 'icon', description: 'If the button is only for an icon', type: 'boolean', default: "false", required: false },
      { name: 'size', description: 'Size of the button', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'type', description: 'Colour scheme of the button', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false }
    ];

    document.getElementById('button-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Contents of the button' }
    ];
  },

  alert: () => {
    document.getElementById('alert-html-example').code = `<cpy-alert type="success">
  <!-- slotted content for alert message -->
  This is a success alert
  <!-- slot for additional content -->
  <div slot="content">Some additional text about the success alert</div>
</cpy-alert>`;

    document.getElementById('alert-props').tableData = [
      { name: 'appearance', description: 'Alert styles', type: "'border' | 'soft'", default: "'soft'", required: false },
      { name: 'container', description: 'Whether the alert has a container', type: 'boolean', default: "true", required: false },
      { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
      { name: 'type', description: 'Colour scheme of the alert', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'error'", required: false }
    ];

    document.getElementById('alert-slots').tableData = [
      { slotName: "-- (default)", purpose: 'Title of the alert' },
      { slotName: "'content'", purpose: 'Description/additional information for the alert' },
    ];
  },

  avatar: () => {
    document.getElementById('avatar-html-example').code = `<cpy-avatar src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>

<cpy-avatar
  type="square"
  size="large"
  src="https://react.semantic-Ui.com/images/avatar/large/matthew.png">
</cpy-avatar>`;

    document.getElementById('avatar-props').tableData = [
      { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', default: "false", required: false },
      { name: 'size', description: 'Size of the avatar', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
      { name: 'src', description: 'Image source for the avatar', type: 'string', default: "", required: false },
      { name: 'initials', description: 'Initials to display in place of an avatar image', type: 'string', default: "", required: false },
      { name: 'type', description: 'Colour scheme of the button', type: "'rounded' | 'square'", default: "'rounded'", required: false }
    ];
  },

  table: () => {
    document.getElementById('table-example').tableData = [{"id":1,"todo":"Do something nice for someone I care about","completed":true,"userId":26},{"id":2,"todo":"Memorize the fifty states and their capitals","completed":false,"userId":48},{"id":3,"todo":"Watch a classic movie","completed":false,"userId":4},{"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false,"userId":48},{"id":5,"todo":"Solve a Rubik's cube","completed":false,"userId":31},{"id":6,"todo":"Bake pastries for me and neighbor","completed":false,"userId":39},{"id":7,"todo":"Go see a Broadway production","completed":false,"userId":32},{"id":8,"todo":"Write a thank you letter to an influential person in my life","completed":true,"userId":13}];

    document.getElementById('table-html-example').code = `<cpy-table id="table"></cpy-table>

<script>
  document.getElementById('table').items = [
    { id: 1, todo: "Do something nice for someone I care about", completed: true, userId:26 },
    { id: 2, todo: "Memorize the fifty states and their capitals", completed: false, userId: 48 }
  ];
</script>`;

    document.getElementById('table-props').tableData = [
      { name: 'tableData', description: 'Data to display in the table', type: "{ [key: string]: string | number | boolean | null | undefined }", default: "", required: true }
    ];
  }
};
