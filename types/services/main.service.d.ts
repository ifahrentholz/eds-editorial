import { BlockService } from './block.service';
import { SectionService } from './section.service';
export declare class MainService {
    private sectionService;
    private blockService;
    constructor(sectionService: SectionService, blockService: BlockService);
    initialize(): Promise<void>;
    private setupEnvironment;
    private setupHlxGlobals;
    private extractCodeBasePath;
    private loadContent;
    private decorateTemplateAndTheme;
    private hideBody;
    private configureMainElement;
    private addSidebarContainer;
    private addInnerContainer;
    private initializeServices;
    private loadBlocks;
    private loadSectionBlocks;
    private collectBlocks;
    private loadBlockModules;
    private showSection;
    private revealBody;
}
