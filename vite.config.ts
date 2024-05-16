import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { generateBlockEntries, generateIconNameType } from './vite.helpers';
import { config } from './config.ts';
import { resolve } from 'path';
import { InputOption } from 'rollup';

const isProd = process.env.NODE_ENV === 'production';

// @ts-ignore:next line
export default defineConfig(({ command, mode }) => {
  const { mainTsPath, mainScssPath, fontsScssPath, lazyStylesScssPath, sidekickLibraryStylesScssPath } = config;
  const blocksEntries = generateBlockEntries();
  generateIconNameType();

  const inputOptions: InputOption = {
    main: resolve(__dirname, mainTsPath),
    styles: resolve(__dirname, mainScssPath),

    ...blocksEntries,
    styleguide: resolve(__dirname, 'src/styleguide/js/styleguide.ts'),
    preview: resolve(__dirname, 'src/styleguide/js/preview.ts'),
  };

  if (fontsScssPath) inputOptions.fonts = resolve(__dirname, fontsScssPath);
  if (lazyStylesScssPath) inputOptions.lazyStyles = resolve(__dirname, lazyStylesScssPath);
  if (sidekickLibraryStylesScssPath) {
    inputOptions.sidekickLibraryStyles = resolve(__dirname, sidekickLibraryStylesScssPath);
  }

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
        input: inputOptions,
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
