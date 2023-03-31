import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cpy-input-toggle'],
    event: 'valueChange',
    targetAttr: 'value',
    type: 'boolean',
  },
  {
    elementSelectors: ['cpy-input'],
    event: 'valueChange',
    targetAttr: 'value',
    type: 'text',
  }
];

export default angularValueAccessorBindings;
