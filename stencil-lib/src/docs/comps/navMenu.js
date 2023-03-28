(function () {
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
    {
      title: 'Collapsible Nav Item', type: 'collapsible', description: 'A collection of items hidden in a drawer', children: [
        { title: 'Collapsible Item 1', type: 'basic', icon: 'dashboard' },
        { title: 'Collapsible Item 2', type: 'basic', icon: 'touch_app' },
        { title: 'Collapsible Item 3', type: 'basic', icon: 'inventory_2' }
      ]
    },
  ];

  document.getElementById('nav-menu-html-example').code = `<cpy-nav-menu></cpy-nav-menu>

<script>
  document.querySelector('cpy-nav-menu').items = [
  { title: 'Basic Nav Item' },
  { title: 'Basic Nav Item w/ Icon', icon: 'home' }
  ];
</script>`;

  document.getElementById('nav-menu-interface').code = `type NavMenuItemType = 'basic' | 'group' | 'collapsible';

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
  function?: any;
  children?: NavMenuItem[];
}`;

  document.getElementById('nav-menu-props').tableData = [
    { name: 'items', description: 'Items to populate the navigation menu with', type: 'NavMenuItem[]', default: "", required: true }
  ];
})();