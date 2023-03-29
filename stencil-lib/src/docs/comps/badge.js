(function () {
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-badge-text', description: 'Text colour for the badge', defaultValue: 'rgb(255, 255, 255)' },
    { cssVariable: '--cpy-badge-bg', description: 'Background colour for the badge', defaultValue: '--cpy-bg-primary' }
  ];
  
  document.getElementById('comp-interfaces').code = `export type BadgeType =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';

export type BadgeAppearance =
  | 'rounded'
  | 'square';

export type BadgeSize =
  | 'default'
  | 'small'
  | 'large';`;

  document.getElementById('comp-props').tableData = [
    { name: 'size', description: 'badge size', type: "BadgeSize", default: "'default'", required: false },
    { name: 'appearance', description: 'Button styles', type: "BadgeAppearance", default: "'counter'", required: false },
    { name: 'type', description: 'Colour scheme of the badge', type: "BadgeType", default: "'primary'", required: false },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Contents of the badge' }
  ];
})();
