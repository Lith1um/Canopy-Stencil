import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'cpy-input, cpy-input-select, cpy-input-textarea',
  host: {
    '(inputChange)': 'handleChangeEvent($event.target.inputValue)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
