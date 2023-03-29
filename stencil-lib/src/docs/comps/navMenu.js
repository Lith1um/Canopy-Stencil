(function () {
  document.getElementById('overview-example').items = [
    { title: 'Basic Nav Item', icon: 'home', description: 'Basic nav item description', separator: true },
    {
      title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
        { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
        { title: 'Group Item 2', type: 'basic', icon: 'menu' },
      ]
    },
    {
      title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    },
  ];

  document.getElementById('overview-code').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    { title: 'Basic Nav Item', icon: 'home', description: 'Basic nav item description', separator: true },
    {
      title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
        { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
        { title: 'Group Item 2', type: 'basic', icon: 'menu' },
      ]
    },
    {
      title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    },
  ];
</script>`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-interfaces').code = `type NavMenuItemType = 'basic' | 'group' | 'collapsible';

interface NavMenuItem {
  icon?: string;
  separator?: boolean;
  title: string;
  description?: string;
  type: NavMenuItemType;
  url: string;
  active?: boolean;
  collapsed?: boolean;
  looseMatch?: boolean;
  openInNewTab?: boolean;
  function?: (item: NavMenuItem) => any;
  children?: NavMenuItem[];
}`;

  document.getElementById('comp-props').tableData = [
    { name: 'items', description: 'Items to populate the navigation menu with', type: 'NavMenuItem[]', default: "", required: true }
  ];

  document.getElementById('example-code-1').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    { title: 'Basic Nav Item' },
    { title: 'Basic Nav Item w/ Icon', icon: 'home' },
    { title: 'Basic Nav Item w/ Description', description: 'Basic nav item description' },
    { title: 'Basic Nav Item w/ Separator After', separator: true },
    { title: 'Basic Nav Item w/ All Applied', icon: 'home', description: 'Basic nav item description', separator: true }
  ];
</script>`;
  document.getElementById('example-menu-1').items = [
    { title: 'Basic Nav Item' },
    { title: 'Basic Nav Item w/ Icon', icon: 'home' },
    { title: 'Basic Nav Item w/ Description', description: 'Basic nav item description' },
    { title: 'Basic Nav Item w/ Separator After', separator: true },
    { title: 'Basic Nav Item w/ All Applied', icon: 'home', description: 'Basic nav item description', separator: true }
  ];

  document.getElementById('example-code-2').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    {
      title: 'Nav Item Group',
      type: 'group',
      description: 'Represents the start of a group of items',
      children: [
        { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
        { title: 'Group Item 2', type: 'basic', icon: 'menu' },
        { title: 'Group Item 3', type: 'basic', icon: 'list_alt' }
      ]
    }
  ];
</script>`;
  document.getElementById('example-menu-2').items = [
    {
      title: 'Nav Item Group', type: 'group', separator: true, description: 'Represents the start of a group of items', children: [
        { title: 'Group Item 1', type: 'basic', icon: 'chat_bubble' },
        { title: 'Group Item 2', type: 'basic', icon: 'menu' },
        { title: 'Group Item 3', type: 'basic', icon: 'list_alt' }
      ]
    }
  ];

  document.getElementById('example-code-3').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    {
      title: 'Collapsible Nav Item',
      type: 'collapsible',
      description: 'A collection of items hidden in a drawer',
      children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    }
  ];
</script>`;
  document.getElementById('example-menu-3').items = [
    {
      title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    }
  ];

  document.getElementById('example-code-4').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    { title: 'Basic Nav Item 1' },
    { title: 'Basic Nav Item 2', active: true },
    { title: 'Basic Nav Item 3' },
    { title: 'Basic Nav Item 4' },
  ];
</script>`;
  document.getElementById('example-menu-4').items = [
    { title: 'Basic Nav Item 1' },
    { title: 'Basic Nav Item 2', active: true },
    { title: 'Basic Nav Item 3' },
    { title: 'Basic Nav Item 4' },
  ];

  document.getElementById('example-code-5').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
    {
      title: 'Collapsible Nav Item',
      collapsed: false,
      type: 'collapsible',
      description: 'A collection of items hidden in a drawer',
      children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    }
  ];
</script>`;
  document.getElementById('example-menu-5').items = [
    {
      title: 'Collapsible Nav Item',
      collapsed: false,
      type: 'collapsible',
      description: 'A collection of items hidden in a drawer',
      children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    }
  ];
})();

(function () {
  const items = [
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
    {
      title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    },
  ];
})();