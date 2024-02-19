import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { Config, STYLE_PREFIX, generateBlockEntries } from './vite.helpers';

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

  const outputAssetFileNames = (info) => {
    if (info.name.endsWith('.css') && info.name.startsWith(STYLE_PREFIX)) {
      const fileName = info.name.replace(STYLE_PREFIX, '');
      const folderName = fileName.replace('.css', '');
      return `${folderName}/${fileName}`;
    }
    return '[name]/[name][extname]';
  };

  return {
    css: {
      devSourcemap: true,
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
          assetFileNames: outputAssetFileNames,
          chunkFileNames: '__chunks__/[name].[hash].js',
          entryFileNames: '[name]/[name].js',
        },
        plugins: [isProd && minifyHTML()],
      },
    },
  };
});
