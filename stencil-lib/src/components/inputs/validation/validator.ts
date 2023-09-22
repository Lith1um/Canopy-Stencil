import { ValidatorEntry } from './types/validator-entry.type';
import { ValidatorError } from './types/validator-error.type';
import { Validator } from './types/validator.type';
import { getEmailValidator } from './validators/email.validator';
import { getLengthValidator } from './validators/length.validator';
import { getNumberLengthValidator } from './validators/number-length.validator';
import { getNumberValidator } from './validators/number.validator';
import { getPasswordValidator } from './validators/password.validator';
import { getRequiredValidator } from './validators/required.validator';

export enum ValidatorsName {
  Required = 'required',
  Email = 'email',
  Length = 'length',
  Number = 'number',
  NumberLength = 'numberLength',
  Password = 'password',
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
    errorMessage: () => ''
  };
  return combined;
}

export function getValidator<T>(validators: Array<string | ValidatorEntry | Validator<T>>): Validator<T> {
  return (validators || []).map(validator => {
    if (typeof validator === 'string') {
      return validatorFactory(validator, undefined);
    } else if (validator && (validator as any).name) {
      validator = validator as ValidatorEntry;
      return validatorFactory(validator.name, validator.options, validator.errorMessage);
    } else {
      return validator as Validator<T>;
    }
  }).reduce(combineValidator, defaultValidator);
}

export function validatorFactory(name: string, options: { [key: string]: any } = {}, errorMsg?: ValidatorError): Validator<any> {
  switch (name) {
    case ValidatorsName.Required:
      return getRequiredValidator(errorMsg);
    case ValidatorsName.Email:
      return getEmailValidator(errorMsg);
    case ValidatorsName.Number:
      return getNumberValidator(errorMsg);
    case ValidatorsName.Length:
      return getLengthValidator(options.min, options.max, errorMsg);
    case ValidatorsName.NumberLength:
      return getNumberLengthValidator(options.min, options.max, errorMsg);
    case ValidatorsName.Password:
      return getPasswordValidator(
        options.min,
        options.max,
        options.upperCaseMin,
        options.lowerCaseMin,
        options.digitsMin,
        options.specialCharsMin,
        options.repeatCharsMax,
        errorMsg
      );
    default:
      return defaultValidator;
  }
}

export const defaultValidator: Validator<any> = {
  validate: () => true,
  errorMessage: () => ''
}
