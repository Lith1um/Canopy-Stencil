(function () {
  document.getElementById('avatar-html-example').code = `<cpy-avatar src="https://react.semantic-Ui.com/images/avatar/large/matthew.png"></cpy-avatar>

<cpy-avatar
  type="square"
  size="large"
  src="https://react.semantic-Ui.com/images/avatar/large/matthew.png">
</cpy-avatar>`;

  document.getElementById('avatar-props').tableData = [
    { name: 'border', description: 'Shows a border around the avatar', type: 'boolean', default: "false", required: false },
    { name: 'size', description: 'Size of the avatar', type: "'default' | 'large' | 'small' | 'x-large'", default: "'default'", required: false },
    { name: 'src', description: 'Image source for the avatar', type: 'string', default: "", required: false },
    { name: 'initials', description: 'Initials to display in place of an avatar image', type: 'string', default: "", required: false },
    { name: 'type', description: 'Colour scheme of the button', type: "'rounded' | 'square'", default: "'rounded'", required: false }
  ];
})();