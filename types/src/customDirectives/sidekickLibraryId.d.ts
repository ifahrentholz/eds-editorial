import { Directive } from 'lit/directive.js';
import { nothing } from 'lit';
import { ConstructedElement } from '../sidekickHelpers/extractSidekickLibraryId';
declare class SidekickLibraryId extends Directive {
    render(element: ConstructedElement): import("lit-html").TemplateResult | typeof nothing;
}
export declare const getSidekickLibraryId: (element: ConstructedElement) => import("lit-html/directive").DirectiveResult<typeof SidekickLibraryId>;
export {};
