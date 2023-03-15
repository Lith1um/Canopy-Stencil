import { Validator } from "../types/validator.type";

export function getNumberLengthValidator(min: number, max: number): Validator<string> {
  return {
    validate: (val: string) => {
      const numVal = isNaN(parseFloat(val)) ? undefined : parseFloat(val);
      if (numVal === undefined) {
        return true;
      }

      if (min && max) {
        return min <= numVal && numVal <= max;
      }
      if (min) {
        return min <= numVal;
      }
      if (max) {
        return numVal <= max;
      }
      return true;
    },
    errorMessage: min && max ? `You must enter a number between ${min} and ${max}`
      : min ? `You must enter a number greater than ${min}`
      : max ? `You must enter a number less than ${max}` : ''
  }
}
