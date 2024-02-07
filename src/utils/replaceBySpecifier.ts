type ReplaceBySpecifier = {
  input: string;
  specifier: string;
  htmlTag: string;
};
export function replaceBySpecifier({ input, specifier, htmlTag }: ReplaceBySpecifier): string {
  return input
    .split(specifier)
    .map((part, index) => (index % 2 === 1 ? `<${htmlTag}>${part}</${htmlTag}>` : part))
    .join('');
}
