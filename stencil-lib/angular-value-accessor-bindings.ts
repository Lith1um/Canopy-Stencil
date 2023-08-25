import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cpy-input-toggle', 'cpy-input-checkbox'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['cpy-input', 'cpy-input-select', 'cpy-input-textarea'],
    event: 'inputChange',
    targetAttr: 'value',
    type: 'text',
  }
];

export default angularValueAccessorBindings;
