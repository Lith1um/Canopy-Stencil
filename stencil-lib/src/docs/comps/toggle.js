(function () {
  document.getElementById('comp-styles').tableData = [
    { cssVariable: '--cpy-bg-primary', description: 'Active color of toggle', defaultValue: '--cpy-bg-primary' },
    { cssVariable: '--cpy-bg-basic', description: 'Inactive color of toggle', defaultValue: '--cpy-bg-basic' },
  ];

  document.getElementById('comp-interfaces').code = `type InputSize = 'small' | 'default' | 'large';

type Validators = Array<string | ValidatorEntry | Validator<boolean>>;`;

  document.getElementById('comp-props').tableData = [
    { name: 'inputValue', description: 'Whether the toggle is checked', type: "boolean", default: "", required: false },
    { name: 'size', description: 'Toggle size', type: "InputSize", default: "'default'", required: false },
    { name: 'label', description: 'Label for the toggle', type: "string", default: "", required: false },
    { name: 'switch-after', description: 'Positions the switch after the label', type: "boolean", default: "false", required: false },
    { name: 'disabled', description: 'Whether the toggle is disabled', type: "boolean", default: "", required: false },
    { name: 'validators', description: 'list of validators for the toggle', type: "Validators", default: "", required: false },
    { name: 'required', description: 'Whether the toggle is required or not', type: "boolean", default: "false", required: false },
  ];
  document.getElementById('comp-events').tableData = [
    { name: 'inputChange', description: 'Triggered when the toggle value is changed', emitsType: "boolean" },
  ];
  document.getElementById('comp-methods').tableData = [
    { name: 'isValid()', description: 'Returns validation result for the toggle', returnType: "Promise<boolean>" },
    { name: 'markAsTouched()', description: 'Marks the toggle as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
  ];
})();
