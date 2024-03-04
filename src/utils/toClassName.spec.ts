import { toCamelCase } from './toCamelCase';

describe('toCamelCase', () => {
  test('converts kebab-case to camelCase', () => {
    const input = 'background-color';
    const expected = 'backgroundColor';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('converts PascalCase to camelCase', () => {
    const input = 'SomeStringHere';
    const expected = 'someStringHere';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('converts snake_case to camelCase', () => {
    const input = 'some_variable_name';
    const expected = 'someVariableName';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('handles empty string', () => {
    const input = '';
    const expected = '';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('handles single character', () => {
    const input = 'a';
    const expected = 'a';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('handles already camelCase string', () => {
    const input = 'alreadyCamelCase';
    const expected = 'alreadyCamelCase';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('handles already camelCase string with numbers', () => {
    const input = 'alreadyCamelCase123';
    const expected = 'alreadyCamelCase123';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });

  test('handles already camelCase string with underscore', () => {
    const input = 'already_Camel_Case';
    const expected = 'alreadyCamelCase';
    const result = toCamelCase(input);
    expect(result).toBe(expected);
  });
});
