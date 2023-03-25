import { Validator } from "../types/validator.type";

export function getNumberLengthValidator(min: number, max: number): Validator<number> {
  return {
    validate: (val: number) => {
      if (val === undefined) {
        return true;
      }

      if (min && max) {
        return min <= val && val <= max;
      }
      if (min) {
        return min <= val;
      }
      if (max) {
        return val <= max;
      }
      return true;
    },
    errorMessage: min && max ? `You must enter a number between ${min} and ${max}`
      : min ? `You must enter a number greater than ${min}`
      : max ? `You must enter a number less than ${max}` : ''
  }
}
