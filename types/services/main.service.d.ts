import { BlockService } from './block.service';
import { SectionService } from './section.service';
type BlockMapping = {
    name: string;
    element: HTMLDivElement;
};
export declare class MainService {
    private sectionService;
    private blockService;
    constructor(sectionService: SectionService, blockService: BlockService);
    init: () => Promise<void>;
    /**
     * Setup block utils.
     */
    private setup;
    private loadEager;
    private addSidebarContainer;
    private addInnerContainer;
    private loadLazy;
    private decorateTemplateAndTheme;
    private loadBlocks;
    private collectBlocks;
    private loadBlockModules;
    loadBlockStyles(blocks: BlockMapping[]): Promise<void>;
    private showSection;
    private loadFonts;
    private loadCSS;
}
export {};
