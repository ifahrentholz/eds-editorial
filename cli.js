const fs = require('fs-extra');
const { exec } = require('child_process');

function createFile(filename, content) {
  fs.writeFileSync(filename, content);
  console.log(`Created new file: ${filename}`);
}

function handleCreateCommand(filename) {
  createFile(filename, 'type the contents of the file here');
}

// install command
function handleInstallCommand() {
  // Run the npm install command
  exec('npm install', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error when installing dependencies : ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error when installing dependencies: ${stderr}`);
      return;
    }
    console.log(`Dependencies have been successfully installed:\n${stdout}`);
  });
}
// run command
function handleRunCommand(scriptName) {
  // run script
  exec(`npm run ${scriptName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error while running the script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error while running the script: ${stderr}`);
      return;
    }
    console.log(`The script was successfully executed:\n${stdout}`);
  });
}
const command = process.argv[2];

if (command === 'create') {
  const filename = process.argv[3];
  handleCreateCommand(filename);
} else if (command === 'install') {
  handleInstallCommand();
} else if (command === 'run') {
  const scriptName = process.argv[3];
  handleRunCommand(scriptName);
} else {
  console.error('error');
}

