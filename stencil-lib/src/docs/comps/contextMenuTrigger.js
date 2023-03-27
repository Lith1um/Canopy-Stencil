(function () {
  const contentMenu = document.getElementById('context-menu-trigger');
  contentMenu.items = [
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

  document.getElementById('context-menu-trigger-html-example').code = `<cpy-context-menu-trigger>
  right click me!
</cpy-context-menu-trigger>

<script>
  const contextMenu = document.querySelector('cpy-context-menu-trigger');
  contextMenu.items = [
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

  document.getElementById('context-menu-trigger-props').tableData = [
    { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
  ];

  document.getElementById('context-menu-trigger-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content to attach the context menu listener to' }
  ];
})();

