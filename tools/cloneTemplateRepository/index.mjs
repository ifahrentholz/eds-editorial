import { execSync } from 'child_process';

function run() {
  try {
    const folderName = process.argv.slice(2);
    if (folderName.length === 0) {
      throw new Error('Please enter a valid folder name.');
    }

    const templateRepo = 'ifahrentholz/eds-editorial';
    execSync(`git clone https://github.com/${templateRepo}.git '../${folderName}'`);
    console.log(`Template repository cloned into ${folderName} folder.`);
  } catch (error) {
    console.error('Error cloning template repository:', error);
  }
}

run();
