export interface Config {
    mainTsPath: string;
    mainScssPath: string;
    iconsDirPath: string;
    iconsTypesPath: string;
    fontsScssPath?: string;
    lazyStylesScssPath?: string;
    sidekickLibraryStylesScssPath?: string;
}
export declare const config: Config;
