(function () {

  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-overlay', description: 'Colour of backdrop for overlay', defaultValue: 'rgba(0, 0, 0, 0.5)' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'show', description: 'Whether or not to show the overlay', type: 'boolean', default: 'false', required: false },
    { name: 'has-backdrop-click', description: 'Whether or not to close the overlay when the background is clicked', type: 'boolean', default: 'true', required: false },
    { name: 'z-index', description: 'Z-index of the overlay', type: 'string', default: "'50'", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'closed', description: 'Triggers when the overlay is closed', emitsType: '' },
    { name: 'backdropClick', description: 'Triggers when the backdrop is clicked if enabled', emitsType: '' },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'open()', description: 'Shows the overlay', returnType: '' },
    { name: 'close()', description: 'Hides the overlay', returnType: '' },
    { name: 'toggle()', description: 'Toggles the overlay', returnType: '' },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'The contents of the overlay' },
  ];

  const overlay = document.getElementById('overlay');
  document.getElementById('button').addEventListener('click', () => overlay.open());
  document.getElementById('example-overlay').code = `<div style="position: relative; height: 15rem; width: 100%;">
  <cpy-button type="primary" id="button">Show overlay</cpy-button>
  <cpy-overlay id="overlay">
  </cpy-overlay>
</div>

<script>
  (async () => {
    await customElements.whenDefined('cpy-overlay');
    const overlay = document.querySelector('overlay');
    document.querySelector('button')
      .addEventListener('click', () => overlay.open());
  })();
</script>`
})();