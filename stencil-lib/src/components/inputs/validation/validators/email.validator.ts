import { Validator } from "../types/validator.type";

export const EmailValidator: Validator<string> = {
  validate: (val: string) => {
    val = val ?? '';
    if (val === '') {
      return true;
    }
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailRegex.test(val);
  },
  errorMessage: 'You must enter a valid email address'
}
