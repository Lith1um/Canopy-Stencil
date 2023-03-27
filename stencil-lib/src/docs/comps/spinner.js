(function () {
  document.getElementById('spinner-html-example').code = `<cpy-spinner size="large" type="secondary"></cpy-spinner>`;

  document.getElementById('spinner-props').tableData = [
    { name: 'size', description: 'Spinner size', type: "'default' | 'large' | 'small'", default: "'default'", required: false },
    { name: 'type', description: 'Colour scheme of the spinner', type: "'basic' | 'error' | 'primary' | 'secondary' | 'success' | 'warn'", default: "", required: false },
  ];
})();