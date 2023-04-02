(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-primary', description: 'Active color of toggle', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-bg-basic', description: 'Inactive color of toggle', defaultValue: '--cpy-bg-basic' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';`;

  document.getElementById('comp-props').tableData = [
    { name: 'value', description: 'Whether the toggle is checked', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Toggle size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for the toggle', type: "string", default: "", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the toggle value is changed', emitsType: "boolean" },
  ];
})();
