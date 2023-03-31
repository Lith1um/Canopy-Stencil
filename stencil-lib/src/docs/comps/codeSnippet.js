(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-code-snippet-bg', description: 'Background color for the snippet', defaultValue: '--cpy-bg-hover' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'code', description: 'The code snippet to show', type: "string", default: "", required: true },
    { name: 'quotes', description: 'Shows `` characters around the snippet', type: 'boolean', default: 'true', required: false }
  ];
})();
