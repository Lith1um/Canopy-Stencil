(function () {
  document.getElementById('example-color-input').addEventListener('valueChange', (e) => document.getElementById('color-value').innerText = e.detail);

  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-text-primary', description: 'Active color for input (focus ring etc.)', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-bg-white', description: 'Input background color', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-input-border-radius', description: 'Border radius of the input container', defaultValue: '0.375rem' },
  ];

  document.getElementById('comp-props').tableData = [
    { name: 'value', description: 'String representing the color in hex format', type: "string", default: "", required: false },
    { name: 'size', description: 'Color input size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for the color input', type: "string", default: "", required: false },
    { name: 'disabled', description: 'Whether the color input is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the color input', type: "Validators", default: "", required: false },
    { name: 'required', description: 'Whether the color input is required or not', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the color input value is changed', emitsType: "boolean" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the color input', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the color input as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
    { name: 'markAsUntouched()', description: 'Resets the interaction state of the input, removing any errors from the UI', returnType: "" },
  ];
})();
