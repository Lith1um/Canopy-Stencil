(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-avatar-bg', description: 'Background color for avatar', defaultValue: '--cpy-bg-medium' },
  ];

  document.getElementById('comp-interfaces').code = `type AvatarSize = 'small' | 'default' | 'large' | 'x-large';

type AvatarType = 'rounded' | 'square';`;

  document.getElementById('comp-props').tableData = [
    { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', default: "false", required: false },
    { name: 'size', description: 'Size of the avatar', type: "AvatarSize", default: "'default'", required: false },
    { name: 'src', description: 'Image source for the avatar', type: 'string', default: "", required: false },
    { name: 'initials', description: 'Initials to display in place of an avatar image', type: 'string', default: "", required: false },
    { name: 'type', description: 'Color scheme of the button', type: "AvatarType", default: "'rounded'", required: false }
  ];
})();
