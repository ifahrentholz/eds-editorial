import { toClassName } from './toClassName';

export const addClasses = (element: HTMLElement, classes: string) => {
  classes.split(',').forEach((c) => {
    element.classList.add(toClassName(c.trim()));
  });
};
