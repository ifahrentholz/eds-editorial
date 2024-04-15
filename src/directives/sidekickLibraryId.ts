import { Directive, directive } from 'lit/directive.js';
import { AttributePart, nothing } from 'lit';
import { SidekickElement } from 'Helpers/sidekick/extractSidekickLibraryId';
import { isSidekickLibraryActive } from 'Helpers/sidekick//isSidekickLibraryActive';

/**
 * Represents a directive for managing a sidekick library id.
 * @extends Directive
 */
class SidekickLibraryId extends Directive {
  private part?: AttributePart;

  /**
   * Update method called when the directive is updated.
   * @param {AttributePart} part - The attribute part to be updated.
   * @param {unknown[]} props - Array of properties passed to the directive.
   * @returns {unknown} - Returns the result of the render function.
   */
  update(part: AttributePart, props: unknown[]) {
    this.part = part;
    const SidekickElement = props[0] as SidekickElement;
    return this.render(SidekickElement);
  }

  /**
   * Render method for managing Sidekick Library attributes.
   * @param {SidekickElement} sidekickElement - Information about the Sidekick Library.
   * @returns {unknown} - Returns the result of the render operation.
   */
  render(sidekickElement: SidekickElement) {
    if (isSidekickLibraryActive() === false) return nothing;

    const element = this.part?.element;
    const { dataLibraryId, href } = sidekickElement;
    if (dataLibraryId) element?.setAttribute('data-library-id', dataLibraryId);
    if (dataLibraryId) element?.setAttribute('contenteditable', 'true');
    if (href && element instanceof HTMLAnchorElement) element?.setAttribute('href', href);
    return nothing;
  }
}

export const getSidekickLibraryId = directive(SidekickLibraryId);
