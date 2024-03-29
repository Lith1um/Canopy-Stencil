(function () {
  const code = `<cpy-drawer-container>
  <!-- slotted content for drawer contents -->
  <div slot="drawer" style="padding: 20px;">
    I'm a drawer!
  </div>
  <!-- slot for main content -->
  <div style="background-color: var(--cpy-bg-white); display: flex; align-items: center; justify-content: center; height: 100%; width: 100%;">
    <cpy-button onclick="toggleDrawer()">Click me!</cpy-button>
  </div>
</cpy-drawer-container>

<script>
  const drawerElem = document.querySelector('cpy-drawer-container');
  const toggleDrawer = () => drawerElem.opened = !drawerElem.opened;
</script>`;

  document.getElementById('overview-code').code = code;
  document.getElementById('example-code').code = code;

  const drawerElem = document.getElementById('overview-drawer');
  document.getElementById('drawer-toggle').onclick = () => drawerElem.opened = !drawerElem.opened;
  const drawerExample = document.getElementById('example-drawer');
  document.getElementById('example-drawer-toggle').onclick = () => drawerExample.toggle();

  document.getElementById('comp-interfaces').code = `type DrawerMode = 'over' | 'side';`;
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-drawer-bg', description: 'Background color for the drawer', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-drawer-border-width', description: 'Border width for the drawer', defaultValue: '1px' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'opened', description: 'Whether the drawer in open', type: "boolean", default: "false", required: false },
    { name: 'mode', description: 'Drawer mode', type: "DrawerMode", default: "'side'", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'toggleDrawer', description: 'Triggered when the drawer has internally changed its opened state', emitsType: "boolean" }
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'toggle()', description: 'Toggles the drawer', returnType: 'void' },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Main content' },
    { slotName: "drawer", purpose: 'Contents of the drawer' }
  ];
})();
