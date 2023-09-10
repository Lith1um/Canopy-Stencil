(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-text-primary', description: 'Active color for input (focus ring etc.)', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-bg-white', description: 'Input background color', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-input-border-radius', description: 'Border radius of the input container', defaultValue: '0.375rem' },
  ];

  document.getElementById('comp-interfaces').code = `type InputType = 'text' | 'number' | 'email' | 'password';
  
type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<string | number>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'type', description: 'Input type', type: "InputType", default: "'text'", required: false },
    { name: 'disabled', description: 'Whether the input is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the input', type: "Validators", default: "", required: false },
    { name: 'value', description: 'Input value', type: "string", default: "", required: false },
    { name: 'size', description: 'Input size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for input', type: "string", default: "", required: false },
    { name: 'required', description: 'Whether the input is required or not', type: "boolean", default: "false", required: false },
    { name: 'placeholder', description: 'Input placeholder', type: "string", default: "", required: false }
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the text input value is changed', emitsType: "string | number" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the input', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the input as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "prefix", purpose: 'Prefix content for the input (intended for use with <cpy-icon>)' },
    { slotName: "suffix", purpose: 'Suffix content for the input (intended for use with <cpy-icon>)' }
  ];

  document.getElementById('example-text').validators = [{ name: 'length', options: { min: 4, max: 10 }, errorMessage: (val) => `"${val}" is no bueno` }];
  document.getElementById('example-number').validators = [{ name: 'numberLength', options: { min: 1, max: 100 } }];
})();
