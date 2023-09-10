import { ValidatorError } from './validator-error.type';

export interface ValidatorEntry {
  name: string;
  options?: { [key: string]: any; };
  errorMessage?: ValidatorError;
}
