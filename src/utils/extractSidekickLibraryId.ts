export type ConstructedElement = {
  id: string | undefined;
  text: string;
  href?: string;
};

export const isSidekickLibraryActive: boolean = window.location.href === 'about:srcdoc';

export const extractSidekickLibraryId = (element: any): ConstructedElement => {
  if (!element) return { id: undefined, text: '', href: '' };

  if (isSidekickLibraryActive) {
    return {
      id: element.getAttribute('data-library-id') || undefined,
      text: element.innerHTML,
      href: element.href || '',
    };
  }

  return { id: undefined, text: element.innerHTML, href: element.href || '' };
};
