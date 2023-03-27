(function () {
  document.getElementById('toggle-html-example').code = `<cpy-input-toggle size="large" label="Large toggle"></cpy-input-toggle>`;

  document.getElementById('toggle-props').tableData = [
    { name: 'checked', description: 'Whether the is checked', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Toggle size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
    { name: 'label', description: 'Label for the toggle', type: "string", default: "", required: false }
  ];

  document.getElementById('toggle-events').tableData = [
    { name: 'checkedChange', description: 'Triggered when the toggle value is changed', emitsType: "boolean" },
  ];
})();