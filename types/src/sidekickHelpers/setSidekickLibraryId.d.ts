import { nothing } from 'lit';
import { Directive } from 'lit/directive.js';
declare class SidekickLibraryDirective extends Directive {
    render(id?: string): string | typeof nothing;
}
export declare const setSidekickLibraryId: (id?: string | undefined) => import("lit-html/directive").DirectiveResult<typeof SidekickLibraryDirective>;
export {};
