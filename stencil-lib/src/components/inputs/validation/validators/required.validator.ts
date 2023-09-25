import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

// TODO: this may need to become more robust for alternate type (datepicker for instance)
export function getRequiredValidator(errorMsg?: ValidatorError): Validator<string | boolean | number> {
  return {
    validate: (val: string | boolean | number | File[]) => {
      if (typeof val === 'undefined') {
        return false;
      }
      if (typeof val === 'boolean') {
        return val;
      }
      if (typeof val === 'number') {
        return val.toString().length > 0;
      }
      if (typeof val === 'string') {
        return val.trim().length > 0;
      }
      // else is file array
      return val.length > 0;
    },
    errorMessage: errorMsg ?? (() => 'This field is required')
  }
}
