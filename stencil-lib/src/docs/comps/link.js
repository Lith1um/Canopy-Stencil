(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-link-color', description: 'Text color for the link', defaultValue: '--cpy-text-primary' },
  ];

  document.getElementById('comp-interfaces').code = `type LinkType =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';`;

  document.getElementById('comp-props').tableData = [
    { name: 'type', description: 'Color scheme of the link', type: "LinkType", default: "'primary'", required: false },
    { name: 'href', description: 'Href for the link', type: "string", default: "", required: false },
    { name: 'func', description: 'Callback to invoke on click (overrides default navigation behaviour)', type: "Function", default: "", required: false },
    { name: 'new-tab', description: 'Whether the link should open in a new tab', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the link' }
  ];

  document.getElementById('example-code').code = `<cpy-link>
  <cpy-icon>link</cpy-icon>link
</cpy-link>

<script>
  document.querySelector('cpy-link').func = () => window.alert('You clicked a link with a function');
</script>`;
  document.getElementById('example-link').func = () => window.alert('You clicked a link with a function');
})();
