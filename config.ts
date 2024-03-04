export interface Config {
  mainTsPath: string;
  mainScssPath: string;
  iconsDirPath: string;
  iconsTypesPath: string;
  fontsScssPath?: string;
  lazyStylesScssPath?: string;
  sidekickLibraryStylesScssPath?: string;
}

export const config: Config = {
  mainTsPath: 'src/main.ts',
  mainScssPath: 'src/styles/sass/main.scss',
  iconsDirPath: './public/icons',
  iconsTypesPath: './src/icons.types.ts',
  fontsScssPath: 'src/styles/sass/fonts.scss',
  lazyStylesScssPath: 'src/styles/sass/lazy-styles.scss',
  sidekickLibraryStylesScssPath: 'src/styles/sass/sidekick-library-styles.scss',
};
