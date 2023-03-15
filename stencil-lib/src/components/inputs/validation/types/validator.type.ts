export interface Validator<T> {
  validate: (val: T) => boolean;
  errorMessage?: string;
}
