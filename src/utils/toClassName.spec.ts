import { toClassName } from './toClassName';

describe('toClassName', () => {
  test('converts a string with alphanumeric characters', () => {
    const input = 'HelloWorld123';
    const expected = 'helloworld123';
    expect(toClassName(input)).toBe(expected);
  });

  test('converts a string with special characters to dashes', () => {
    const input = 'hello_world!';
    const expected = 'hello-world';
    expect(toClassName(input)).toBe(expected);
  });

  test('converts a string with spaces to dashes', () => {
    const input = 'Hello World';
    const expected = 'hello-world';
    expect(toClassName(input)).toBe(expected);
  });

  test('removes leading and trailing dashes', () => {
    const input = '-hello-world-';
    const expected = 'hello-world';
    expect(toClassName(input)).toBe(expected);
  });

  test('handles empty strings', () => {
    const input = '';
    const expected = '';
    expect(toClassName(input)).toBe(expected);
  });

  test('handles strings with only special characters', () => {
    const input = '!!!';
    const expected = '';
    expect(toClassName(input)).toBe(expected);
  });

  test('handles strings with only spaces', () => {
    const input = '   ';
    const expected = '';
    expect(toClassName(input)).toBe(expected);
  });
});
