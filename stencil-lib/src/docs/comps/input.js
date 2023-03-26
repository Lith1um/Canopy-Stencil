document.getElementById('input-comp-length').validators = [{ name: 'length', options: { min: 4, max: 10 } }];
document.getElementById('input-comp-number').validators = [{ name: 'numberLength', options: { min: 1, max: 100 } }];

document.getElementById('input-html-example').code = `<cpy-input type="text" label="Text Input" value="Test value" size="large"></cpy-input>`;

document.getElementById('input-props').tableData = [
  { name: 'type', description: 'Input type', type: "'text' | 'number' | 'email' | 'password'", default: "'text'", required: false },
  { name: 'disabled', description: 'Whether the input is disabled', type: "boolean", default: "", required: false },
  { name: 'validators', description: 'list of validators for the input', type: "Array<string | ValidatorEntry | Validator<string | number>>", default: "", required: false },
  { name: 'value', description: 'Input value', type: "string", default: "", required: false },
  { name: 'size', description: 'Input size', type: "'small' | 'default' | 'large'", default: "'default'", required: false },
  { name: 'label', description: 'Label for input', type: "string", default: "", required: false },
  { name: 'required', description: 'Whether the input is required or not', type: "boolean", default: "false", required: false }
];

document.getElementById('input-events').tableData = [
  { name: 'valueChange', description: 'Triggered when the text input value is changed', emitsType: "string" },
];

document.getElementById('input-methods').tableData = [
  { name: 'isValid()', description: 'Returns validation result for the input', returnType: "Promise<boolean>" },
  { name: 'markAsTouched()', description: 'Marks the input as interacted with, running validation on it and updating the UI if invalid', returnType: "" },
];

document.getElementById('input-slots').tableData = [
  { slotName: "prefix", purpose: 'Prefix content for the input (intended for use with <cpy-icon>)' },
  { slotName: "suffix", purpose: 'Suffix content for the input (intended for use with <cpy-icon>)' }
];