(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-button-text', description: 'Button text color', defaultValue: 'white (for fill style, type color otherwise)' },
    { cssVariable: '--cpy-button-bg', description: 'Button background color', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-button-bg-hover', description: 'Button background color on hover', defaultValue: '--cpy-bg-hover' },
    { cssVariable: '--cpy-button-border-radius', description: 'Button border radius', defaultValue: '0.25rem' },
  ];

  document.getElementById('comp-interfaces').code = `type ButtonAppearance =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';

export type ButtonStyle =
  | 'borderless'
  | 'fill'
  | 'outline'

export type ButtonSize =
  | 'default'
  | 'small'
  | 'large';`;

  document.getElementById('comp-props').tableData = [
    { name: 'appearance', description: 'Button styles', type: "ButtonStyle", default: "'fill'", required: false },
    { name: 'disabled', description: 'Whether the button is disabled or not', type: 'boolean', default: "false", required: false },
    { name: 'icon', description: 'If the button is only for an icon', type: 'boolean', default: "false", required: false },
    { name: 'size', description: 'Size of the button', type: "ButtonSize", default: "'default'", required: false },
    { name: 'type', description: 'Color scheme of the button', type: "ButtonAppearance", default: "'primary'", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'buttonClicked', description: 'Triggers when the button is clicked', emitsType: '' },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the button' }
  ];
})();
