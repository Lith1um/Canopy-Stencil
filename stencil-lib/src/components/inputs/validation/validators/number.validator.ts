import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

export function getNumberValidator(errorMsg?: ValidatorError): Validator<number> {
  return {
    validate: (val: number) => {
      if (val === undefined) {
        return true;
      }
  
      const numberRegex = /^[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?$/;
      return numberRegex.test(`${val}`);
    },
    errorMessage: errorMsg ?? (() => 'You must enter a valid number')
  }
}
