(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-text-primary', description: 'Active color for input (focus ring etc.)', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-bg-white', description: 'Input background color', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-input-border-radius', description: 'Border radius of the input container', defaultValue: '0.375rem' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<boolean>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'value', description: 'List of selected files', type: "File[]", default: "", required: false },
    { name: 'multiple', description: 'Whether the file input allows multiple file uploads', type: "boolean", default: "false", required: false },
    { name: 'accept', description: 'File types accepted by the file input', type: "string", default: "", required: false },
    { name: 'size', description: 'File input size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for the file input', type: "string", default: "", required: false },
    { name: 'disabled', description: 'Whether the file input is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the file input', type: "Validators", default: "", required: false },
    { name: 'required', description: 'Whether the file input is required or not', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the file input value is changed', emitsType: "boolean" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the file input', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the file input as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
    { name: 'markAsUntouched()', description: 'Resets the interaction state of the input, removing any errors from the UI', returnType: "" },
  ];

  document.getElementById('max-file-code').code = `<cpy-input-file label="File size input">
</cpy-input-file>

<script>
  document.querySelector('cpy-input-file').validators = [
    { name: 'fileSize', options: { min: 400000, max: 3000000 } }
  ];
</script>`;
  document.getElementById('max-file-example').validators = [
    {name: 'fileSize', options: {min: 400000, max: 3000000}}
  ]
})();
