import { Directive } from 'lit/directive.js';
import { AttributePart } from 'lit';
import { SidekickElement } from '../sidekickHelpers/extractSidekickLibraryId';
declare class SidekickLibraryId extends Directive {
    private part?;
    update(part: AttributePart, props: unknown[]): symbol;
    render(sidekickElement: SidekickElement): symbol;
}
export declare const getSidekickLibraryId: (sidekickElement: SidekickElement) => import("lit-html/directive").DirectiveResult<typeof SidekickLibraryId>;
export {};
