import { Validator } from "../types/validator.type";

export function getLengthValidator(min: number, max: number): Validator<string> {
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
    errorMessage: min && max ? `You must enter between ${min} and ${max} characters`
      : min ? `You must enter at least ${min} characters`
      : max ? `You must enter less than ${max} characters` : ''
  }
}
