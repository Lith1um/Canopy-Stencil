import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

export function getPasswordValidator(
  min: number = 8,
  max: number = 20,
  upperCaseMin: number = 1,
  lowerCaseMin: number = 1,
  digitsMin: number = 1,
  specialCharsMin: number = 1,
  repeatCharsMax: number = 2,
  errorMsg?: ValidatorError
): Validator<string> {
  return {
    validate: (val: string) => {
      const valid = validatePassword(
        val,
        min,
        max,
        upperCaseMin,
        lowerCaseMin,
        digitsMin,
        specialCharsMin,
        repeatCharsMax
      );
      return !valid;
    },
    errorMessage: errorMsg ?? ((val: string) => validatePassword(
      val,
      min,
      max,
      upperCaseMin,
      lowerCaseMin,
      digitsMin,
      specialCharsMin,
      repeatCharsMax
    ) ?? '')
  }
}

function validatePassword(
  val: string,
  min: number,
  max: number,
  upperCaseMin: number,
  lowerCaseMin: number,
  digitsMin: number,
  specialCharsMin: number,
  repeatCharsMax: number
): string | undefined {
  if (!val?.length || !(new RegExp(`^([A-Za-z0-9! @#$%^&*()\\-_=+{};:,<.>]{${min},${max}})$`).test(val))) {
    return `Password must have at least ${min} characters and no more than ${max} characters`;
  }
  // uppercase validation
  if (!(new RegExp(`(.*[A-Z]){${upperCaseMin},}`, 'g').test(val))) {
    return `Password must contain at least ${upperCaseMin} uppercase character${upperCaseMin > 1 ? 's' : ''}`;
  }
  // lowercase validation
  if (!(new RegExp(`(.*[a-z]){${lowerCaseMin},}`).test(val))) {
    return `Password must contain at least ${lowerCaseMin} lowercase character${lowerCaseMin > 1 ? 's' : ''}`;
  }
  // digits validation
  if (!(new RegExp(`(.*\\d){${digitsMin},}`).test(val))) {
    return `Password must contain at least ${digitsMin} number${digitsMin > 1 ? 's' : ''}`;
  }
  // special chars validation
  if (!(new RegExp(`(.*[!@#$%^&*()\\-_=+{};:,<.>]){${specialCharsMin},}`).test(val))) {
    return `Password must contain at least ${specialCharsMin} special character${specialCharsMin > 1 ? 's' : ''}`;
  }
  // repeat chars validation
  if (new RegExp(`(.)\\1{${repeatCharsMax},}`).test(val)) {
    return `Password cannot have more than ${repeatCharsMax} repeating character${repeatCharsMax > 1 ? 's' : ''}`;
  }
  return;
}
