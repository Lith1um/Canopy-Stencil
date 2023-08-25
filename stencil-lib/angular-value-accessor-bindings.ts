import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cpy-input-toggle', 'cpy-input-checkbox'],
    event: 'inputChange',
    targetAttr: 'inputValue',
    type: 'boolean',
  },
  {
    elementSelectors: ['cpy-input', 'cpy-input-select', 'cpy-input-textarea'],
    event: 'inputChange',
    targetAttr: 'inputValue',
    type: 'text',
  }
];

export default angularValueAccessorBindings;
