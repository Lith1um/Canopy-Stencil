(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '', description: '', defaultValue: '' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'carousel-title', description: 'Title to display with the carousel', type: "string", default: "", required: false }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Main content of carousel' },
  ];
})();
