(function () {
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
})();