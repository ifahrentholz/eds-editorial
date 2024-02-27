const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const iconDir = './public/icons';
  const typeFilePath = './src/icons.types.ts';

  const iconFiles = fs.readdirSync(iconDir);
  const icons = iconFiles.map((file) => path.parse(file).name.replace(/[^a-zA-Z0-9-]/g, ''));

  const typeDefinition = `export type IconName = \n'${icons.join("'  | \n'")}';\n`;

  fs.writeFileSync(typeFilePath, typeDefinition);

  const prettierConfigPath = './.prettierrc';
  execSync(`npx prettier --write ${typeFilePath} --config ${prettierConfigPath}`);

  console.log('Icon type definitions generated and formatted successfully.');
} catch (error) {
  console.error('Error generating and formatting icon type definitions:', error);
}
