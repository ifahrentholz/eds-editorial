const fs = require('fs');
const { resolve } = require('path');

const getBlockEntry = (blockName: string, fileType: string): string | null => {
  const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
  return fs.existsSync(filePath) ? filePath : null;
};

const getTsEntry = (blockName: string): Record<string, string> | null => {
  const tsPath = getBlockEntry(blockName, 'ts');
  return tsPath !== null ? { [blockName]: tsPath } : null;
};

const getBlockNamesFromSrcFolder = (): string[] => {
  const blocksPath = resolve(__dirname, 'src/blocks');
  try {
    return fs.readdirSync(blocksPath);
  } catch (error) {
    console.error(`Failed to read directory at ${blocksPath}`, error);
    return [];
  }
};

export const generateBlockEntries = () => {
  const blockNames = getBlockNamesFromSrcFolder();
  let entries = {};
  blockNames.forEach((blockName) => {
    const tsEntry = getTsEntry(blockName);
    entries = { ...entries, ...tsEntry };
  });
  return entries;
};
