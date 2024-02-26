interface Config {
  mainTsPath: string;
  mainScssPath: string;
  fontsScssPath: string;
  lazyStylesScssPath?: string;
}

export const config: Config = {
  mainTsPath: 'src/main.ts',
  mainScssPath: 'src/styles/sass/main.scss',
  fontsScssPath: 'src/styles/sass/fonts.scss',
  lazyStylesScssPath: 'src/styles/sass/lazy-styles.scss',
};
