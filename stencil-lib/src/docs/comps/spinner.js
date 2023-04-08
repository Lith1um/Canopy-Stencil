(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-spinner-color', description: 'Color of spinner', defaultValue: 'currentColor' },
    { cssVariable: '--cpy-spinner-border-width', description: 'Thickness of spinner', defaultValue: '0.25rem' },
  ];

  document.getElementById('comp-interfaces').code = `type SpinnerAppearance =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';

type SpinnerSize =
  | 'default'
  | 'small'
  | 'large';`;

  document.getElementById('comp-props').tableData = [
    { name: 'size', description: 'Spinner size', type: "SpinnerSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the spinner', type: "SpinnerAppearance", default: "", required: false },
  ];
})();
