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

export const config: Config = {
  mainTsPath: './src/main.ts',
  mainScssPath: './src/styles/sass/main.scss',
  iconsDirPath: './public/icons',
  iconsTypesPath: './src/types/icons.types.ts',
  fontsScssPath: 'src/styles/sass/fonts.scss',
  fontsCssPath: 'dist/fonts/fonts.css',
  lazyStylesScssPath: 'src/styles/sass/lazy-styles.scss',
  sidekickLibraryStylesScssPath: 'src/styles/sass/sidekick-library-styles.scss',
  lcpBlocks: ['banner'],
};
