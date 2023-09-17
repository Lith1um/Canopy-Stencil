(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-link-color', description: 'Text color for the link', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-link-align', description: 'Flexbox alignment for slotted items', defaultValue: 'baseline' },
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
    { name: 'underline', description: 'Whether or not the text is underlined on hover', type: "boolean", default: "true", required: false },
    { name: 'new-tab', description: 'Whether the link should open in a new tab', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'linkClicked', description: 'Triggered when the link is clicked', emitsType: "--" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the link' }
  ];

  document.getElementById('example-code').code = `<cpy-link>
  <cpy-icon>link</cpy-icon>link
</cpy-link>

<script>
  document.querySelector('cpy-link').addEventListener('linkClicked', () => window.alert('You clicked a link with a function'));
</script>`;
  document.getElementById('example-link').addEventListener('linkClicked', () => window.alert('You clicked a link with a function'));
})();
