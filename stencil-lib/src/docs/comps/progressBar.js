document.getElementById('progress-bar-html-example').code = `<cpy-progress-bar size="large" type="secondary"></cpy-progress-bar>`;

document.getElementById('progress-bar-props').tableData = [
  { name: 'value', description: 'Progress Bar value (as a percentage complete)', type: "number", default: "", required: false },
  { name: 'size', description: 'Progress Bar size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
  { name: 'border', description: 'Whether the Progress Bar has a border', type: "boolean", default: "false", required: false },
  { name: 'indeterminate', description: 'Whether the Progress Bar has an animated unknown value', type: "boolean", default: "false", required: false },
  { name: 'type', description: 'Colour scheme of the Progress Bar', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "", required: false },
];