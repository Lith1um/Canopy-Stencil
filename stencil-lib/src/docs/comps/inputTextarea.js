(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-text-primary', description: 'Active color for textarea (focus ring etc.)', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-bg-white', description: 'Textarea background color', defaultValue: '--cpy-bg-white' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<string | number>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'min-rows', description: 'Min number of rows to display', type: "number", default: "1", required: false },
    { name: 'max-rows', description: 'Max number of rows to display', type: "number", default: "", required: false },
    { name: 'disabled', description: 'Whether the textarea is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the textarea', type: "Validators", default: "", required: false },
    { name: 'value', description: 'Textarea value', type: "string", default: "", required: false },
    { name: 'size', description: 'Textarea size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for textarea', type: "string", default: "", required: false },
    { name: 'required', description: 'Whether the textarea is required or not', type: "boolean", default: "false", required: false },
    { name: 'placeholder', description: 'Textarea placeholder', type: "string", default: "", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the text textarea value is changed', emitsType: "string | number" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the textarea', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the textarea as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "prefix", purpose: 'Prefix content for the textarea (intended for use with <cpy-icon>)' },
    { slotName: "suffix", purpose: 'Suffix content for the input (intended for use with <cpy-icon>)' }
  ];
})();
