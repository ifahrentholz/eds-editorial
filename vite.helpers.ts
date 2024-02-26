const fs = require('fs');
const { resolve } = require('path');

const getBlockEntry = (blockName, fileType) => {
  const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
  return fs.existsSync(filePath) ? filePath : null;
};

const getTsEntry = (blockName) => {
  const tsPath = getBlockEntry(blockName, 'ts');
  return tsPath ? { [blockName]: tsPath } : null;
};

export const generateBlockEntries = (blockNames: string[]) => {
  let entries = {};
  blockNames.forEach((blockName) => {
    const tsEntry = getTsEntry(blockName);
    entries = { ...entries, ...tsEntry };
  });
  return entries;
};
