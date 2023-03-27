(function () {
  document.getElementById('drawer-html-example').code = `<cpy-drawer-container>
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

  const drawerElem = document.getElementById('drawer-example');
  document.getElementById('drawer-toggle').onclick = () => drawerElem.opened = !drawerElem.opened;

  document.getElementById('drawer-props').tableData = [
    { name: 'opened', description: 'Whether the drawer in open', type: "boolean", default: "false", required: true }
  ];

  document.getElementById('drawer-events').tableData = [
    { name: 'toggleOpened', description: 'Triggered when the drawer has internally changed its opened state', emitsType: "boolean" }
  ];

  document.getElementById('drawer-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Main content' },
    { slotName: "drawer", purpose: 'Contents of the drawer' }
  ];
})();