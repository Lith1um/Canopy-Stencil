(function () {
  document.getElementById('overview-code').code = `<cpy-button>
  Top Right
</cpy-button>

<cpy-toast
  dismissible
  position="top-end"
  type="warn"
  toast-title="This is a Toast message" icon="warning">
  This is an example warning
</cpy-toast>

<script>
  const toast = document.querySelector('cpy-toast');
  document.querySelector('cpy-button').onclick = () => {
    overviewToast.open();
  };
</script>`;

  const overviewToast = document.getElementById('overview-toast');
  document.getElementById('overview-button').onclick = () => {
    overviewToast.open();
  };
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-alert-bg', description: 'Background color of the alert shown in the toast. You should generally use the type prop to define the style, however you can set this variable to override any set color.', defaultValue: '--cpy-bg-primary' },
  ];

  document.getElementById('comp-interfaces').code = `type ToastPosition =
  | 'top-start'
  | 'top-middle'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-middle'
  | 'bottom-end';

type ToastType =
  | 'primary'
  | 'secondary'
  | 'basic'
  | 'success'
  | 'warn'
  | 'error';`;

  document.getElementById('comp-props').tableData = [
    { name: 'position', description: 'Position of the toast message', type: "ToastPosition", default: "'top-end'", required: false },
    { name: 'zIndex', description: 'Z-index of the toast', type: "string", default: "50", required: false },
    { name: 'dismissible', description: 'Whether the toast can be dismissed', type: "boolean", default: "", required: false },
    { name: 'duration', description: 'Duration to keep toast open. A value of 0 will keep it open until the close method is called', type: "number", default: "4000", required: false },
    { name: 'type', description: 'Color scheme of the toast', type: "ToastType", default: "'primary'", required: false },
    { name: 'toast-title', description: 'Main text for the toast', type: "string", default: "", required: true },
    { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'closed', description: 'Triggered when the toast is closed', emitsType: "" },
    { name: 'opened', description: 'Triggered when the toast is opened', emitsType: "" }
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'close()', description: 'Closes the toast', returnType: "" },
    { name: 'open()', description: 'Opens the toast', returnType: "" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Additional content for toast' }
  ];

  document.getElementById('example-code').code = `<cpy-button>
  Top Right
</cpy-button>

<cpy-toast position="top-start" toast-title="This is a Toast message">
</cpy-toast>

<script>
  const toast = document.querySelector('cpy-toast');
  document.querySelector('cpy-button').onclick = () => {
    overviewToast.open();
  };
</script>`;

  const exampleToast = document.getElementById('example-toast');
  document.getElementById('example-button').onclick = () => {
    exampleToast.open();
  };

  document.getElementById('example-code-2').code = `<cpy-button>
  Top Middle
</cpy-button>

<cpy-toast
  dismissible
  position="top-middle"
  type="secondary"
  toast-title="This is a Toast message">
</cpy-toast>

<script>
  const toast = document.querySelector('cpy-toast');
  document.querySelector('cpy-button').onclick = () => {
    overviewToast.open();
  };
</script>`;

  const exampleToast2 = document.getElementById('example-toast-2');
  document.getElementById('example-button-2').onclick = () => {
    exampleToast2.open();
  };

  document.getElementById('example-code-3').code = `<cpy-button>
  Bottom Middle
</cpy-button>

<cpy-toast
  dismissible
  position="bottom-middle"
  icon="settings"
  toast-title="This is a custom Toast message"
  style="--cpy-alert-bg: var(--cpy-bg-medium);">
</cpy-toast>

<script>
  const toast = document.querySelector('cpy-toast');
  document.querySelector('cpy-button').onclick = () => {
    overviewToast.open();
  };
</script>`;

  const exampleToast3 = document.getElementById('example-toast-3');
  document.getElementById('example-button-3').onclick = () => {
    exampleToast3.open();
  };
})();
