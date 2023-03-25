import { Validator } from "../types/validator.type";

export const RequiredValidator: Validator<string | boolean> = {
  validate: (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val;
    }
    return val?.trim().length > 0;
  },
  errorMessage: 'This field is required'
}
