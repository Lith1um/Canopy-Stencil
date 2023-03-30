(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-contents-color', description: 'Color for active contents list item', defaultValue: '--cpy-text-primary' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'hide-contents-list', description: 'Whether to hide the contents list', type: 'boolean', default: "false", required: false }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'The contents of the page' }
  ];
})();