(function () {
  document.getElementById('func-link').func = () => window.alert('You clicked a link with a function');

  document.getElementById('link-html-example').code = `<cpy-link href="https://www.google.com" new-tab>
  A link to google
</cpy-link>

<cpy-link href="https://github.com/lith1um/Canopy-Stencil" new-tab>
  <!-- image within a link -->
  <img src="https://github.com/Lith1um/Canopy-Stencil/raw/main/logo.png" alt="Logo" width="140">
</cpy-link>`;

  document.getElementById('link-props').tableData = [
    { name: 'type', description: 'Colour scheme of the spinner', type: "'primary' | 'secondary' | 'basic'", default: "'primary'", required: false },
    { name: 'href', description: 'Href for the link', type: "string", default: "", required: false },
    { name: 'func', description: 'Callback to invoke on click (overrides default navigation behaviour)', type: "function", default: "", required: false },
    { name: 'new-tab', description: 'Whether the link should open in a new tab', type: "boolean", default: "false", required: false },
  ];

  document.getElementById('link-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the link' }
  ];
})();