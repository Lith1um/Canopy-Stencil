(function () {
  const toastElem1 = document.getElementById('toast-comp-1');
  document.getElementById('toast-show-button-1').onclick = () => {
    toastElem1.open();
  };

  const toastElem2 = document.getElementById('toast-comp-2');
  document.getElementById('toast-show-button-2').onclick = () => {
    toastElem2.open();
  };

  const toastElem3 = document.getElementById('toast-comp-3');
  document.getElementById('toast-show-button-3').onclick = () => {
    toastElem3.open();
  };

  const toastElem4 = document.getElementById('toast-comp-4');
  document.getElementById('toast-show-button-4').onclick = () => {
    toastElem4.open();
  };

  const toastElem5 = document.getElementById('toast-comp-5');
  document.getElementById('toast-show-button-5').onclick = () => {
    toastElem5.open();
  };

  const toastElem6 = document.getElementById('toast-comp-6');
  document.getElementById('toast-show-button-6').onclick = () => {
    toastElem6.open();
  };

  document.getElementById('toast-html-example').code = `<cpy-toast
  position="top-end"
  dismissible
  title="This is a Toast message"
  icon="build">
  Some additional details you can add to the toast
</cpy-toast>

<script>
  const toastElem = document.querySelector('cpy-toast');
  toastElem.open();
</script>`;

  document.getElementById('toast-props').tableData = [
    { name: 'position', description: 'Position of the toast message', type: "'top-start' | 'top-middle' | 'top-end' | 'bottom-start' | 'bottom-middle' | 'bottom-end'", default: "'top-end'", required: false },
    { name: 'zIndex', description: 'Z-index of the toast', type: "string", default: "50", required: false },
    { name: 'dismissible', description: 'Whether the toast can be dismissed', type: "boolean", default: "", required: false },
    { name: 'duration', description: 'Duration to keep toast open. A value of 0 will keep it open until the close method is called', type: "number", default: "4000", required: false },
    { name: 'type', description: 'Color scheme of the toast', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "'primary'", required: false },
    { name: 'toast-title', description: 'Main text for the toast', type: "string", default: "", required: true },
    { name: 'icon', description: 'The icon (if any) to show', type: 'string', default: "", required: false },
  ];

  document.getElementById('toast-events').tableData = [
    { name: 'closed', description: 'Triggered when the toast is closed', emitsType: "" },
    { name: 'opened', description: 'Triggered when the toast is opened', emitsType: "" }
  ];

  document.getElementById('toast-methods').tableData = [
    { name: 'close()', description: 'Closes the toast', returnType: "" },
    { name: 'open()', description: 'Opens the toast', returnType: "" }
  ];

  document.getElementById('toast-slots').tableData = [
    { slotName: "-- (default)", purpose: 'Additional content for toast' }
  ];
})();