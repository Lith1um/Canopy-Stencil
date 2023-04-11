import dayjs from 'dayjs';
import { Validator } from '../types/validator.type';

export const DateValidator: Validator<string> = {
  validate: (val: string) => {
    val = val ?? '';
    if (val === '') {
      return true;
    }
    
    const date = dayjs.utc(val).locale('en-gb');
    return date.isValid();
  },
  errorMessage: 'You must enter a valid date'
}
