(function () {
  document.getElementById('overview-code').code = `<cpy-context-menu></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];
</script>`;
  document.getElementById('overview-context-menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-white', description: 'Background color of the menu', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-text-light', description: 'Description text color', defaultValue: '--cpy-text-light' },
  ];

  document.getElementById('comp-interfaces').code = `interface ContextMenuItem {
  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  url?: string;
  openInNewTab?: boolean;
  function?: () => any;
  children?: ContextMenuItem[];
}`;

  document.getElementById('comp-props').tableData = [
    { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'recalculatePosition()', description: 'Recalculates the position of any menu items to ensure all is visible on the page if moved', returnType: "" },
  ];

  document.getElementById('example-code').code = `<cpy-context-menu></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1' },
    { title: 'Option 2' },
    { title: 'Option 3' }
  ];
</script>`;
  document.getElementById('example-menu').items = [
    { title: 'Option 1' },
    { title: 'Option 2' },
    { title: 'Option 3' }
  ];

  document.getElementById('example-code-2').code = `<cpy-context-menu></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        {
          title: 'Option 2', icon: 'menu', description: '', children: [
            { title: 'Option 2.1' },
            { title: 'Option 2.2' },
            { title: 'Option 2.3' },
          ]
        },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];
</script>`;
  document.getElementById('example-menu-2').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        {
          title: 'Option 2', icon: 'menu', description: '', children: [
            { title: 'Option 2.1' },
            { title: 'Option 2.2' },
            { title: 'Option 2.3' },
          ]
        },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];

  document.getElementById('example-code-3').code = `<cpy-context-menu style="
  --cpy-bg-white: var(--cpy-bg-error);
  --cpy-text-light: var(--cpy-text-base);
"></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];
</script>`;
  document.getElementById('example-menu-3').items = [
    { title: 'Option 1', icon: 'home', separator: true },
    {
      title: 'Group of options', description: 'hover this to show more options', children: [
        { title: 'Option 1', icon: 'chat_bubble' },
        { title: 'Option 2', icon: 'menu' },
        { title: 'Option 3', icon: 'refresh' },
      ]
    }
  ];
})();
