export const undefinedOnEmpty = (value: string): string | undefined => {
  return value.trim() === '' ? undefined : value;
};
