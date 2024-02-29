import { addClasses } from './addClasses';
import { toClassName } from './toClassName';

describe('addClasses', () => {
  let element: HTMLElement;

  beforeAll(() => {
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterAll(() => {
    document.body.removeChild(element);
  });

  test('adds dynamic abstract classes to an HTML element', () => {
    const classesToAdd = generateClassName(1) + ', ' + generateClassName(2) + ', ' + generateClassName(3);
    addClasses(element, classesToAdd);

    // Check if each abstract class has been added
    expect(element.classList.contains(generateClassName(1))).toBe(true);
    expect(element.classList.contains(generateClassName(2))).toBe(true);
    expect(element.classList.contains(generateClassName(3))).toBe(true);
  });

  test('trims whitespace before adding abstract classes', () => {
    const classesToAdd =
      '  ' + generateClassName(1) + ' ,   ' + generateClassName(2) + '  ,  ' + generateClassName(3) + '   ';
    addClasses(element, classesToAdd);

    // Check if trimmed abstract classes have been added
    expect(element.classList.contains(generateClassName(1))).toBe(true);
    expect(element.classList.contains(generateClassName(2))).toBe(true);
    expect(element.classList.contains(generateClassName(3))).toBe(true);
  });

  test('calls toClassName for each abstract class', () => {
    const toClassNameMock = jest.spyOn(toClassName, 'toClassName');
    const classesToAdd = generateClassName(1) + ', ' + generateClassName(2) + ', ' + generateClassName(3);
    addClasses(element, classesToAdd);

    // Check if toClassName has been called for each abstract class
    expect(toClassNameMock).toHaveBeenCalledTimes(3);
    expect(toClassNameMock).toHaveBeenCalledWith(generateClassName(1));
    expect(toClassNameMock).toHaveBeenCalledWith(generateClassName(2));
    expect(toClassNameMock).toHaveBeenCalledWith(generateClassName(3));

    toClassNameMock.mockRestore();
  });
});
