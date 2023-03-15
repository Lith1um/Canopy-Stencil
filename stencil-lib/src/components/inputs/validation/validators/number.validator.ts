import { Validator } from "../types/validator.type";

export const NumberValidator: Validator<string> = {
  validate: (val: string) => {
    val = val ?? '';
    if (val === '') {
      return true;
    }

    const numberRegex = /^[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?$/;
    return numberRegex.test(val);
  },
  errorMessage: 'You must enter a valid number'
}
