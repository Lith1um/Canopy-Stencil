import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

export function getLengthValidator(min: number, max: number, errorMsg?: ValidatorError): Validator<string> {
  return {
    validate: (val: string) => {
      val = val ?? '';

      if (min && max) {
        return min <= val.length && val.length <= max;
      }
      if (min) {
        return min <= val.length;
      }
      if (max) {
        return val.length <= max;
      }
      return true;
    },
    errorMessage: errorMsg ?? (() => min && max ? `You must enter between ${min} and ${max} characters`
      : min ? `You must enter at least ${min} characters`
      : max ? `You must enter less than ${max} characters` : '')
  }
}
