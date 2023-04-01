(function () {
  document.getElementById('overview-code').code = `<cpy-context-menu-trigger>
  <div style="
    border-radius: 0.5rem;
    height: 300px;
    border: 2px dashed var(--cpy-bg-basic-border);
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    right click me!
  </div>
</cpy-context-menu-trigger>

<script>
  document.querySelector('cpy-context-menu-trigger').items = [
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

  document.getElementById('overview-context').items = [
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
    { cssVariable: '--cpy-bg-white', description: 'Background color of context menu', defaultValue: '--cpy-bg-white' },
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

  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content to attach the context menu listener to' }
  ];

  document.getElementById('example-code').code = `<cpy-context-menu-trigger>
  <div style="
    border-radius: 0.5rem;
    height: 300px;
    border: 2px dashed var(--cpy-bg-basic-border);
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    right click me!
  </div>
</cpy-context-menu-trigger>

<script>
  document.querySelector('cpy-context-menu-trigger').items = [
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

  document.getElementById('example-context').items = [
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
