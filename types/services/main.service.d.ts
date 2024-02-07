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
    private loadEager;
    private addSidebarContainer;
    private addInnerContainer;
    private decorateTemplateAndTheme;
    private loadComponents;
    private collectComponents;
    private loadComponentModules;
    private showSection;
}
