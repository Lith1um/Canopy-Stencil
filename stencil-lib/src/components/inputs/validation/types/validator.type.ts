import { ValidatorError } from './validator-error.type';

export interface Validator<T> {
  validate: (val: T) => boolean;
  errorMessage: ValidatorError;
}
