import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['cpy-toggle'],
    event: 'checkedChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
];

export default angularValueAccessorBindings;
