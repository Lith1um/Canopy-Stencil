import { ValidatorEntry } from "./types/validator-entry.type";
import { Validator } from "./types/validator.type";
import { DateValidator } from "./validators/date.validator";
import { EmailValidator } from "./validators/email.validator";
import { getLengthValidator } from "./validators/length.validator";
import { getNumberLengthValidator } from "./validators/number-length.validator";
import { NumberValidator } from "./validators/number.validator";
import { RequiredValidator } from "./validators/required.validator";

export enum ValidatorsName {
  Required = 'required',
  Date = 'date',
  Email = 'email',
  Length = 'length',
  Number = 'number',
  NumberLength = 'numberLength',
}

export function combineValidator<T>(validator1: Validator<T>, validator2: Validator<T>): Validator<T> {
  let combined: Validator<T>;
  combined = {
    validate: (val: T) => {
      const result1 = validator1.validate(val);
      const result2 = validator2.validate(val);
      if (!result1) {
        combined.errorMessage = validator1.errorMessage;
      } else if (!result2) {
        combined.errorMessage = validator2.errorMessage;
      }
      return result1 && result2;
    },
  };
  return combined;
}

export function getValidator<T>(validators: Array<string | ValidatorEntry | Validator<T>>): Validator<T> {
  return (validators || []).map(validator => {
    if (typeof validator === 'string') {
      return validatorFactory(validator, undefined);
    } else if (validator && (validator as any).name) {
      validator = validator as ValidatorEntry;
      return validatorFactory(validator.name, validator.options);
    } else {
      return validator as Validator<T>;
    }
  }).reduce(combineValidator, defaultValidator);
}

export function validatorFactory(name: string, options: { [key: string]: any }): Validator<any> {
  switch (name) {
    case ValidatorsName.Required:
      return RequiredValidator;
    case ValidatorsName.Date:
      return DateValidator;
    case ValidatorsName.Email:
      return EmailValidator;
    case ValidatorsName.Number:
      return NumberValidator;
    case ValidatorsName.Length:
      return getLengthValidator(options.min, options.max);
    case ValidatorsName.NumberLength:
      return getNumberLengthValidator(options.min, options.max);
    default:
      return defaultValidator;
  }
}

export const defaultValidator: Validator<any> = {
  validate: () => true
}
