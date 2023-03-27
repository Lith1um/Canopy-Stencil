(function () {
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

  document.getElementById('menu-html-example').code = `<cpy-context-menu></cpy-context-menu>

<script>
  document.querySelector('cpy-context-menu').items = [
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

  document.getElementById('context-menu-interface').code = `interface ContextMenuItem {
  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  url: string;
  openInNewTab?: boolean;
  function?: () => any;
  children?: ContextMenuItem[];
}`;

  document.getElementById('context-menu-props').tableData = [
    { name: 'items', description: 'Items to populate the menu with', type: 'ContextMenuItem[]', default: "", required: true }
  ];

  document.getElementById('context-menu-methods').tableData = [
    { name: 'recalculatePosition()', description: 'Recalculates the position of any menu items to ensure all is visible on the page if moved', returnType: "" },
  ];
})();