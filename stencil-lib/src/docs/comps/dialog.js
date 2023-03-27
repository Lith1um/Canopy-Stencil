(function () {
  const dialogSmallElem = document.getElementById('dialog-small');
  document.getElementById('dialog-small-open').onclick = () => dialogSmallElem.open();

  const dialogDefaultElem = document.getElementById('dialog-default');
  document.getElementById('dialog-default-open').onclick = () => dialogDefaultElem.open();

  const dialogLargeElem = document.getElementById('dialog-large');
  document.getElementById('dialog-large-open').onclick = () => dialogLargeElem.open();

  const dialogFullElem = document.getElementById('dialog-full');
  document.getElementById('dialog-full-open').onclick = () => dialogFullElem.open();

  document.getElementById('dialog-html-example').code = `<cpy-dialog dialog-title="Confirm Delete" size="small">
  <!-- slot for dialog content -->
  <p>Are you sure you want to delete this?</p>
  <!-- slotted content for dialog buttons-->
  <cpy-button slot="buttons" appearance="outline" type="basic">
    Cancel
  </cpy-button>
  <cpy-button slot="buttons" type="error">
    Delete
  </cpy-button>
</cpy-dialog>

<script>
  const dialogElem = document.querySelector('cpy-dialog');
  dialogElem.open();
</script>`;

  document.getElementById('dialog-props').tableData = [
    { name: 'dialog-title', description: 'Title to display in the dialog', type: "string", default: "", required: true },
    { name: 'size', description: 'Dialog size', type: "'small' | 'default' | 'large' | 'full-screen'", default: "'default'", required: false },
    { name: 'z-index', description: 'Z-index of the dialog', type: "string", default: "50", required: false },
  ];

  document.getElementById('dialog-events').tableData = [
    { name: 'closed', description: 'Triggered when the dialog is closed', emitsType: "boolean" }
  ];

  document.getElementById('dialog-methods').tableData = [
    { name: 'open()', description: 'Opens the dialog', returnType: "" },
    { name: 'close()', description: 'Closes the dialog', returnType: "" }
  ];

  document.getElementById('dialog-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Dialog main content' },
    { slotName: "buttons", purpose: 'Dialog footer contents (intended for placing buttons)' },
  ];
})();