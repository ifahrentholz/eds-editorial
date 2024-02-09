import { BlockService } from './block.service';
import { SectionService } from './section.service';
export declare class MainService {
    private sectionService;
    private blockService;
    constructor(sectionService: SectionService, blockService: BlockService);
    init: () => Promise<void>;
    /**
     * Setup block utils.
     */
    private setup;
    waitForLCP(lcpBlocks: any): Promise<void>;
    private loadEager;
    loadLazy(): Promise<void>;
    private addSidebarContainer;
    private addInnerContainer;
    private decorateTemplateAndTheme;
    private loadBlocks;
    private collectBlocks;
    private loadBlockModules;
    private showSection;
}
