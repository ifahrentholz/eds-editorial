import { Directive } from 'lit/directive.js';
import { AttributePart } from 'lit';
import { SidekickElement } from 'Helpers/sidekick/extractSidekickLibraryId';
/**
 * Represents a directive for managing a sidekick library id.
 * @extends Directive
 *
 * @example
 * <header>
 *  <h1 ${getSidekickLibraryId(headline)}>${headline.innerHTML}</h1>
 *  <p ${getSidekickLibraryId(subline)}>${subline.innerHTML}</p>
 * </header>
 */
declare class SidekickLibraryId extends Directive {
    private part?;
    /**
     * Update method called when the directive is updated.
     * @param {AttributePart} part - The attribute part to be updated.
     * @param {unknown[]} props - Array of properties passed to the directive.
     * @returns {unknown} - Returns the result of the render function.
     */
    update(part: AttributePart, props: unknown[]): symbol;
    /**
     * Render method for managing Sidekick Library attributes.
     * @param {SidekickElement} sidekickElement - Information about the Sidekick Library.
     * @returns {unknown} - Returns the result of the render operation.
     */
    render(sidekickElement: SidekickElement): symbol;
}
export declare const getSidekickLibraryId: (sidekickElement: SidekickElement) => import("lit-html/directive").DirectiveResult<typeof SidekickLibraryId>;
export {};
