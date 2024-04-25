const fs = require('fs-extra');
const { exec } = require('child_process');
const chalk = require('chalk');
const { Command } = require('commander');
const figlet = require('figlet');
const inquirer = require('inquirer');
const mkdirp = require('mkdirp');

const program = new Command();

program.version('1.0.0');

// hello command
program
  .command('hello <name>')
  .description('Display a greeting message')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

// ascii command
program
  .command('ascii <text>')
  .description('Convert text to ascii')
  .action((text) => {
    console.log(figlet.textSync(text));
  });

program.parse(process.argv);

// create new file
function createFile(filename, content) {
  fs.writeFileSync(filename, content);
  console.log(chalk.green(`new file: ${filename}`));
}
function handleCreateCommand(filename) {
  createFile(filename, 'type the contents of the file here');
}

function handleInstallCommand() {
  exec('npm install', (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      return;
    }
    if (stderr) {
      console.error(chalk.red(`Error: ${stderr}`));
      return;
    }
    console.log(chalk.green(`successfully installed:\n${stdout}`));
  });
}

// run script
function handleRunCommand(scriptName) {
  exec(`npm run ${scriptName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`Error: ${error.message}`));
      return;
    }
    if (stderr) {
      console.error(chalk.red(`Error script: ${stderr}`));
      return;
    }
    console.log(chalk.green(`successfully executed:\n${stdout}`));
  });
}

// argument parsing
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
  console.error(chalk.red('Error:unknown command'));
}
