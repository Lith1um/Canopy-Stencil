(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-card-padding', description: 'Padding for the card', defaultValue: '1.5rem' },
    { cssVariable: '--cpy-card-border-radius', description: 'Border radius of card', defaultValue: '0.75rem' },
    { cssVariable: '--cpy-card-footer-bg', description: 'Background color for footer', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-card-footer-color', description: 'Text color for footer', defaultValue: '--cpy-text-base' },
  ];

  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the card' },
    { slotName: "footer", purpose: 'Footer contents for the card' }
  ];
})();
