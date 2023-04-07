(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-primary', description: 'Active color of checkbox', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-checkbox-tick-color', description: 'Color of the checkbox tick', defaultValue: 'white' },
    { cssVariable: '--cpy-bg-white', description: 'Inactive color of checkbox', defaultValue: '--cpy-bg-basic' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<boolean>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'value', description: 'Whether the checkbox is checked', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Checkbox size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for the checkbox', type: "string", default: "", required: false },
    { name: 'disabled', description: 'Whether the checkbox is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the checkbox', type: "Validators", default: "", required: false },
    { name: 'required', description: 'Whether the checkbox is required or not', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'valueChange', description: 'Triggered when the checkbox value is changed', emitsType: "boolean" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the checkbox', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the checkbox as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
  ];
})();
