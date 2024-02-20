import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { Config, generateBlockEntries } from './vite.helpers';

const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';

const config: Config = {
  mainTsPath: 'src/main.ts',
  mainScssPath: 'src/styles/sass/main.scss',
  fontsScssPath: 'src/styles/sass/fonts.scss',
  blocksName: ['counter', 'banner', 'features', 'posts'],
};

// @ts-ignore:next line
export default defineConfig(({ command, mode }) => {
  const blocksEntries = generateBlockEntries(config.blocksName);

  return {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'src/styles/sass/libs/_index.scss';`,
        },
      },
    },
    build: {
      sourcemap: true,
      minify: true,
      cssMinify: true,
      commonjsOptions: {
        include: ['node_modules/**'],
      },
      emptyOutDir: true,
      rollupOptions: {
        cache: false,
        preserveEntrySignatures: 'strict',
        input: {
          main: resolve(__dirname, config.mainTsPath),
          styles: resolve(__dirname, config.mainScssPath),
          fonts: resolve(__dirname, config.fontsScssPath),
          ...blocksEntries,
        },
        output: {
          dir: 'dist',
          assetFileNames: () => {
            return '[name]/[name][extname]';
          },
          chunkFileNames: '__chunks__/[name].[hash].js',
          entryFileNames: '[name]/[name].js',
        },
        plugins: [isProd && minifyHTML()],
      },
    },
  };
});
