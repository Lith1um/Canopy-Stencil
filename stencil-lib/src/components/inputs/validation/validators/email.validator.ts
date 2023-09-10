import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

export function getEmailValidator(errorMsg?: ValidatorError): Validator<string | boolean | number> {
  return {
    validate: (val: string) => {
      val = val ?? '';
      if (val === '') {
        return true;
      }
      const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      return emailRegex.test(val);
    },
    errorMessage: errorMsg ?? (() => 'You must enter a valid email address')
  }
}
