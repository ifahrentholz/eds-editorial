import { Directive, directive } from 'lit/directive.js';
import { isSidekickLibraryActive } from '../sidekickHelpers/isSidekickLibraryActive';
import { nothing } from 'lit';
import { ConstructedElement } from '../sidekickHelpers/extractSidekickLibraryId';
import { html, literal } from 'lit/static-html.js';

// Define directive
class SidekickLibraryId extends Directive {
  render(element: ConstructedElement) {
    if (isSidekickLibraryActive()) {
      console.log('this:', element.htmlTag);
      const idAttributeNameLiteral = literal`data-library-id`;
      //const idAttributeValueLiteral = literal`${element.dataLibraryId}`;
      return html`${idAttributeNameLiteral}`;
    }

    return nothing;
  }
}
// Create the directive function
export const getSidekickLibraryId = directive(SidekickLibraryId);
