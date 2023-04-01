(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-link-color', description: 'Color of the show more/less button', defaultValue: '--cpy-text-primary' },
  ];

  document.getElementById('comp-interfaces').code = `type ShowMoreAppearance =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';`;

  document.getElementById('comp-props').tableData = [
    { name: 'lines', description: 'Number of lines to truncate to', type: "number", default: "3", required: false },
    { name: 'text', description: 'Text to display', type: "string", default: "", required: true },
    { name: 'showMoreText', description: 'Text to display in button when text is truncated', type: "string", default: "'show more'", required: false },
    { name: 'showLessText', description: 'Text to display in button when text is expanded', type: "string", default: "'show less'", required: false },
    { name: 'type', description: 'Color scheme of the show more button', type: "ShowMoreAppearance", default: "'primary'", required: false },
  ];
})();
