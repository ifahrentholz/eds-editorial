const fs = require('fs');
const { resolve } = require('path');

export interface Config {
  mainTsPath: string;
  mainScssPath: string;
  fontsScssPath: string;
  lazyStylesScssPath?: string;
  blocksName: string[];
}

const getBlockEntry = (blockName, fileType) => {
  const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
  return fs.existsSync(filePath) ? filePath : null;
};

const getTsEntry = (blockName) => {
  const tsPath = getBlockEntry(blockName, 'ts');
  return tsPath ? { [blockName]: tsPath } : null;
};

export const generateBlockEntries = (blocksNames: string[]) => {
  let entries = {};
  blocksNames.forEach((blockName) => {
    const tsEntry = getTsEntry(blockName);
    entries = { ...entries, ...tsEntry };
  });
  return entries;
};
