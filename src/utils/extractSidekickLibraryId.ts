export type ConstructedElement = {
  id: string | undefined;
  text: string;
  href?: string;
};

export const extractSidekickLibraryId = (element: any): ConstructedElement => {
  const sidekickLibActive: boolean = window.location.href === 'about:srcdoc';

  if (!element) return { id: undefined, text: '', href: '' };

  if (sidekickLibActive) {
    return {
      id: element.getAttribute('data-library-id') || undefined,
      text: element.innerHTML,
      href: element.href || '',
    };
  }

  return { id: undefined, text: element.innerHTML, href: element.href || '' };
};
