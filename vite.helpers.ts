import { parse, resolve } from 'path';
import { existsSync, readdirSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const getBlockEntry = (blockName: string, fileType: string): string | null => {
  const filePath = resolve(__dirname, `src/blocks/${blockName}/${blockName}.${fileType}`);
  return existsSync(filePath) ? filePath : null;
};

const getTsEntry = (blockName: string): Record<string, string> | null => {
  const tsPath = getBlockEntry(blockName, 'ts');
  return tsPath !== null ? { [blockName]: tsPath } : null;
};

const getBlockNamesFromSrcFolder = (): string[] => {
  const blocksPath = resolve(__dirname, 'src/blocks');
  try {
    return readdirSync(blocksPath);
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

export const generateIconNameType = () => {
  try {
    const iconDir = './public/icons';
    const typeFilePath = './src/icons.types.ts';

    const iconFiles = readdirSync(iconDir);
    const icons = iconFiles.map((file) => parse(file).name.replace(/[^a-zA-Z0-9-]/g, ''));

    const typeDefinition = `export type IconName = \n'${icons.join("'  | \n'")}';\n`;

    writeFileSync(typeFilePath, typeDefinition);

    const prettierConfigPath = './.prettierrc';
    execSync(`npx prettier --write ${typeFilePath} --config ${prettierConfigPath}`);

    console.log('Icon type definitions generated and formatted successfully.');
  } catch (error) {
    console.error('Error generating and formatting icon type definitions:', error);
  }
};
