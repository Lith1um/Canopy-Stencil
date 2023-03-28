(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-contents-text-active', description: 'Text colour for active contents list item', defaultValue: '--cpy-contents-active-colour' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'hide-contents-list', description: 'Whether to hide the contents list', type: 'boolean', default: "false", required: false }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'The contents of the page' }
  ];
})();