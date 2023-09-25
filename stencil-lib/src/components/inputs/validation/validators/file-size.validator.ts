import { ValidatorError } from '../types/validator-error.type';
import { Validator } from '../types/validator.type';

export function getFileSizeValidator(min: number, max: number, errorMsg?: ValidatorError): Validator<File[]> {
  return {
    validate: (files: File[]) => {
      console.log('getFileSizeValidator', files);

      if (!files) {
        return true;
      }

      if (min && max) {
        return files.every(file => min <= file.size && file.size <= max);
      }
      if (min) {
        return files.every(file => min <= file.size);
      }
      if (max) {
        return files.every(file => file.size <= max );
      }
      return true;
    },
    errorMessage: errorMsg ?? (() => min && max ? `File size must be between ${getReadableFileSize(min)} and ${getReadableFileSize(max)}`
      : min ? `File size must be at least ${getReadableFileSize(min)}`
      : max ? `File size must be at least ${getReadableFileSize(min)}` : '')
  }
}

function getReadableFileSize(size: number): string {
  if (size === 0) {
    return '0';
  }

  const intervals: { [key: string]: number } = {
    'GB': 1000000000,
    'MB': 1000000,
    'KB': 1000,
    'B': 0
  };
  let counter: number;
  for (const i in intervals) {
    counter = Math.floor(size / intervals[i]);
    if (counter > 0) {
      return `${counter}${i}`;
    }
  }
}
