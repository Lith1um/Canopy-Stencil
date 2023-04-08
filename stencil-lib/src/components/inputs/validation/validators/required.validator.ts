import { Validator } from '../types/validator.type';

// TODO: this may need to become more robust for alternate type (datepicker for instance)
export const RequiredValidator: Validator<string | boolean | number> = {
  validate: (val: string | boolean | number) => {
    if (typeof val === 'boolean') {
      return val;
    }
    if (typeof val === 'number') {
      return true;
    }
    return val?.trim().length > 0;
  },
  errorMessage: 'This field is required'
}
