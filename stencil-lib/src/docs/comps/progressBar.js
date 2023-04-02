(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-progress-bar-bg', description: 'Color of the progress bar', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-progress-bar-border-radius', description: 'Border radius of the progress bar', defaultValue: '0.25rem' },
    { cssVariable: '--cpy-bg-white', description: 'Background color of progress bar', defaultValue: '--cpy-bg-white' },
  ];

  document.getElementById('comp-interfaces').code = `type ProgressBarAppearance =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';

type ProgressBarSize =
  | 'default'
  | 'small'
  | 'large';`;

  document.getElementById('comp-props').tableData = [
    { name: 'value', description: 'Progress Bar value (as a percentage complete)', type: "number", default: "", required: false },
    { name: 'size', description: 'Progress Bar size', type: "ProgressBarSize", default: "'default'", required: false },
    { name: 'border', description: 'Whether the Progress Bar has a border', type: "boolean", default: "false", required: false },
    { name: 'indeterminate', description: 'Whether the Progress Bar has an animated unknown value', type: "boolean", default: "false", required: false },
    { name: 'type', description: 'Color scheme of the Progress Bar', type: "ProgressBarAppearance", default: "'primary'", required: false },
  ];

  document.getElementById('example-code').code = `<cpy-progress-bar value="25"></cpy-progress-bar>
<cpy-button>
  Update
</cpy-button>

<script>
  const progressBar = document.querySelector('cpy-progress-bar');
  document.querySelector('cpy-button').addEventListener('click', () => progressBar.value = Math.floor(Math.random() * 100));
</script>`;

  const progressBar = document.getElementById('example-bar');
  document.getElementById('example-button').addEventListener('click', () => progressBar.value = Math.floor(Math.random() * 100));
})();
