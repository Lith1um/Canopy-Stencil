(function () {
  document.getElementById('badge-html-example').code = `<cpy-badge>12</cpy-badge>`;

  document.getElementById('badge-props').tableData = [
    { name: 'size', description: 'badge size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'appearance', description: 'Button styles', type: "'counter' | 'tag'", default: "'counter'", required: false },
    { name: 'type', description: 'Colour scheme of the badge', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
  ];

  document.getElementById('badge-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the badge' }
  ];
})();