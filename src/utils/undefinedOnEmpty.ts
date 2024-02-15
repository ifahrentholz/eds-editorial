export const undefinedOnEmpty = (value: string): string | undefined => {
  return value === '' ? undefined : value;
};
