export const acronym = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.split(/\s/).reduce((response: string, word: string) => response += word.slice(0,1), '').toUpperCase();
};
