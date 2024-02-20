const fs = require('fs');
const { resolve } = require('path');

export interface Config {
  mainTsPath: string;
  mainScssPath: string;
  fontsScssPath: string;
  lazyStylesScssPath?: string;
  blocksName: string[];
}

export const STYLE_PREFIX = 'blockStyles_';

const getBlockEntry = (blockName, fileType) => {
  const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
  return fs.existsSync(filePath) ? filePath : null;
};

const getCssEntry = (blockName) => {
  const scssPath = getBlockEntry(blockName, 'scss');
  return scssPath ? { [`${STYLE_PREFIX}${blockName}`]: scssPath } : null;
};

const getTsEntry = (blockName) => {
  const tsPath = getBlockEntry(blockName, 'ts');
  return tsPath ? { [blockName]: tsPath } : null;
};

export const generateBlockEntries = (blocksName: string[]) => {
  let entries = {};
  blocksName.forEach((blockName) => {
    const cssEntry = getCssEntry(blockName);
    const tsEntry = getTsEntry(blockName);
    entries = { ...entries, ...cssEntry, ...tsEntry };
  });
  return entries;
};
