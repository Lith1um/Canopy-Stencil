(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-tooltip-bg', description: 'Background color of tooltip', defaultValue: '--cpy-bg-dark' },
    { cssVariable: '--cpy-tooltip-text', description: 'Text color of tooltip', defaultValue: '--cpy-bg-white' },
  ];

  document.getElementById('comp-interfaces').code = `type TooltipPosition = 'bottom' | 'left' | 'right' | 'top';`;

  document.getElementById('comp-props').tableData = [
    { name: 'position', description: 'The tooltips position relative to the item it\'s wrapping', type: "TooltipPosition", default: "'bottom'", required: false },
    { name: 'hide-arrow', description: 'Whether to hide the arrow on the tooltip', type: "boolean", default: "false", required: false },
    { name: 'text', description: 'The text to display within the tooltip', type: 'string', default: "", required: false },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Content the tooltip attaches to' },
    { slotName: "'content'", purpose: 'Contents of the tooltip' },
  ];
})();
