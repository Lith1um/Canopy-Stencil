import { Validator } from "../types/validator.type";

export const RequiredValidator: Validator<string> = {
  validate: (val: string) => {
    return val?.trim().length > 0;
  },
  errorMessage: 'This field is required'
}
