document.getElementById('page-html-example').code = `<cpy-page-content>
  <h3 id="header-1">Header 1</h3>
  <div>Some content</div>
  <h3 id="header-2">Header 2</h3>
  <div>Some other content</div>
</cpy-page-content>`;

document.getElementById('page-props').tableData = [
  { name: 'hide-contents-list', description: 'Whether to hide the contents list', type: 'boolean', default: "false", required: false }
];

document.getElementById('page-slots').tableData = [
  { slotName: "-- (default)", purpose: 'The contents of the page' },
];