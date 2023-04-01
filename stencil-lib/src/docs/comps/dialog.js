(function () {
  document.getElementById('overview-code').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Confirm Delete" size="small">
  <p>Are you sure you want to delete this?</p>
  <cpy-button slot="buttons" appearance="borderless" type="basic">
    Cancel
  </cpy-button>
  <cpy-button slot="buttons" type="error">
    Delete
  </cpy-button>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const overviewDialog = document.getElementById('overview-dialog');
  document.getElementById('overview-button').onclick = () => overviewDialog.open();
  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-dialog-bg', description: 'Dialog background color', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-bg-overlay', description: 'Dialog overlay background color', defaultValue: '--cpy-bg-overlay' },
  ];

  document.getElementById('comp-interfaces').code = `type DialogSize = 'small' | 'default' | 'large' | 'full-screen';`;

  document.getElementById('comp-props').tableData = [
    { name: 'dialog-title', description: 'Title to display in the dialog', type: "string", default: "", required: true },
    { name: 'size', description: 'Dialog size', type: "DialogSize", default: "'default'", required: false },
    { name: 'z-index', description: 'Z-index of the dialog', type: "string", default: "50", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'closed', description: 'Triggered when the dialog is closed', emitsType: "boolean" }
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'open()', description: 'Opens the dialog', returnType: "" },
    { name: 'close()', description: 'Closes the dialog', returnType: "" }
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Dialog main content' },
    { slotName: "buttons", purpose: 'Dialog footer contents (intended for placing buttons)' },
  ];

  document.getElementById('example-code').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Basic Dialog">
  <p style="margin: 0;">Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.</p>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog = document.getElementById('example-dialog');
  document.getElementById('example-button').onclick = () => exampleDialog.open();

  document.getElementById('example-code-2').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Small Dialog" size="small">
  <p style="margin: 0;">Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper.</p>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog2 = document.getElementById('example-dialog-2');
  document.getElementById('example-button-2').onclick = () => exampleDialog2.open();

  document.getElementById('example-code-3').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Large Dialog" size="large">
  <p style="margin: 0;">Nunc sit amet porta augue. Vivamus efficitur sit amet urna quis ullamcorper. Pellentesque id dui egestas, fringilla est facilisis, vulputate orci. Nunc pellentesque ultricies risus vitae venenatis. In sodales suscipit turpis nec viverra.</p>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog3 = document.getElementById('example-dialog-3');
  document.getElementById('example-button-3').onclick = () => exampleDialog3.open();

  document.getElementById('example-code-4').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Full screen Dialog" size="full-screen">
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <p>...</p>
  <p>...</p>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog4 = document.getElementById('example-dialog-4');
  document.getElementById('example-button-4').onclick = () => exampleDialog4.open();

  document.getElementById('example-code-5').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Dialog with buttons" size="full-screen">
  <p>...</p>
  <cpy-button slot="buttons" appearance="borderless" type="basic">
    Cancel
  </cpy-button>
  <cpy-button slot="buttons" type="error">
    Delete
  </cpy-button>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog5 = document.getElementById('example-dialog-5');
  document.getElementById('example-button-5').onclick = () => exampleDialog5.open();

  document.getElementById('example-code-6').code = `<cpy-button>Open Dialog</cpy-button>

<cpy-dialog dialog-title="Dialog with buttons" style="--cpy-dialog-bg: brown;">
  <p>...</p>
  <cpy-button slot="buttons" appearance="borderless" type="basic">
    Cancel
  </cpy-button>
  <cpy-button slot="buttons" type="error">
    Delete
  </cpy-button>
</cpy-dialog>

<script>
  const dialog = document.querySelector('cpy-dialog');
  document.querySelector('cpy-button').onclick = () => dialog.open();
</script>`;

  const exampleDialog6 = document.getElementById('example-dialog-6');
  document.getElementById('example-button-6').onclick = () => exampleDialog6.open();
})();
