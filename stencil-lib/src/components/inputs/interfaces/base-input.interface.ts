import { EventEmitter } from '@stencil/core';
import { InputSize } from '../types/input-size.type';
import { ValidatorEntry } from '../validation/types/validator-entry.type';
import { Validator } from '../validation/types/validator.type';

// TODO: add example method implementations
export interface BaseInput<T> {
  inputValue: T;
  label: string;
  placeholder?: string;
  required: boolean;
  disabled: boolean;
  size: InputSize;
  validators: Array<string | ValidatorEntry | Validator<T>>;
  inputChange: EventEmitter<T>;
  interacted: boolean;
  _validator: Validator<T>;
  
  componentWillLoad: () => void;
  componentWillUpdate: () => void;
  getValidators: () => Array<string | ValidatorEntry | Validator<T>>;

  isValid: () => Promise<boolean>;
  markAsTouched: () => Promise<void>;
  handleChange: (e: Event) => void;
  handleBlur: () => void;
}