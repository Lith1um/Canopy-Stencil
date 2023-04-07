(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-toolbar-color', description: 'Text color for the toolbar', defaultValue: 'white' },
    { cssVariable: '--cpy-toolbar-bg', description: 'Background color for the toolbar', defaultValue: '--cpy-bg-primary' },
  ];

  document.getElementById('comp-interfaces').code = `type ToolbarSize = 'small' | 'default' | 'large';

type ToolbarType =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';`;

  document.getElementById('comp-props').tableData = [
    { name: 'size', description: 'Size of the toolbar', type: 'ToolbarSize', default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the toolbar', type: 'ToolbarType', default: "'primary'", required: false }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents for the toolbar' },
  ];

  document.getElementById('example-code').code = `<cpy-toolbar style="
  --cpy-toolbar-bg: coral;
  --cpy-toolbar-color: black;
">
  <cpy-button icon>
    <cpy-icon>menu</cpy-icon>
  </cpy-button>
  <div style="flex: 1;">
    Title
  </div>
  <cpy-button style="--cpy-button-bg: black;">
    Log in
  </cpy-button>
</cpy-toolbar>`;
})();
