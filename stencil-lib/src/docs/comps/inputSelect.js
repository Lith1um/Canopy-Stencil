(function () {  
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-text-primary', description: 'Active color for select (focus ring etc.)', defaultValue: '--cpy-text-primary' },
    { cssVariable: '--cpy-bg-white', description: 'Select background color', defaultValue: '--cpy-bg-white' },
    { cssVariable: '--cpy-input-border-radius', description: 'Border radius of the input container', defaultValue: '0.375rem' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<string | number>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'disabled', description: 'Whether the select is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the select', type: "Validators", default: "", required: false },
    { name: 'value', description: 'Select value', type: "string", default: "", required: false },
    { name: 'size', description: 'Select size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for select', type: "string", default: "", required: false },
    { name: 'required', description: 'Whether the select is required or not', type: "boolean", default: "false", required: false }
  ];
  document.getElementById('comp-props-option').tableData = [
    { name: 'label', description: 'Label for the option', type: "string", default: "", required: true },
    { name: 'value', description: 'Value for the select option', type: "string | number", default: "", required: true },
    { name: 'active', description: 'UI state for option (used internally by select)', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'inputChange', description: 'Triggered when the text select value is changed', emitsType: "string | number" },
  ];
  document.getElementById('comp-events-option').tableData = [
    { name: 'optionSelected', description: 'Triggered when the option is selected (used internally by select)', emitsType: "string | number" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the select', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the select as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
  ];
  document.getElementById('comp-slots').tableData = [
    { slotName: "prefix", purpose: 'Prefix content for the select (intended for use with <cpy-icon>)' },
    { slotName: "-- (default)", purpose: 'Reserved for select-option' },
  ];
})();
