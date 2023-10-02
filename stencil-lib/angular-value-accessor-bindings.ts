import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cpy-input-toggle', 'cpy-input-checkbox'],
    event: 'valueChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['cpy-input', 'cpy-input-select', 'cpy-input-textarea', 'cpy-input-color'],
    event: 'valueChange',
    targetAttr: 'value',
    type: 'text',
  }
];

export default angularValueAccessorBindings;
