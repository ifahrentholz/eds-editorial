export interface Config {
    mainTsPath: string;
    mainScssPath: string;
    iconsDirPath: string;
    iconsTypesPath: string;
    fontsScssPath?: string;
    fontsCssPath?: string;
    lazyStylesScssPath?: string;
    sidekickLibraryStylesScssPath?: string;
    lcpBlocks?: string[];
}
export declare const config: Config;
