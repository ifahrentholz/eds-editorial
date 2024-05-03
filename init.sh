#!/bin/bash

# Prompt user for a directory name
read -p "Enter a Project name: " dir_name

# Clone the repository
git clone "https://github.com/ifahrentholz/eds-editorial.git" "$dir_name"

# Check if git clone was successful
if [ $? -eq 0 ]; then
    echo "Repository cloned successfully."
else
    echo "Error: Failed to clone repository."
    exit 1
fi

# Change directory to the cloned repository
cd "$dir_name"

# Prompt user for a project name
read -p "Enter a Project name: " project_name

# Change project name
sed -i 's/"name": @eds/website/"name": '"$project_name"'/' package.json

# Prompt user for a project description
read -p "Enter a Project description: " project_description

# Change project description
sed -i 's/"description": EDS Editorial Website/"description": '"$project_description"'/' package.json

# Check if .nvmrc file exists
if [ -f ".nvmrc" ]; then
    # Read the Node.js version from .nvmrc file
    node_version=$(<.nvmrc)
    # Switch to the specified Node.js version
    echo "Switching to Node.js version $node_version ..."
    nvm use "$node_version"
    # Check if nvm use was successful
    if [ $? -ne 0 ]; then
        echo "Error: Failed to switch Node.js version to $node_version."
        exit 1
    fi
else
    echo "Warning: No .nvmrc file found. Using default Node.js version."
fi

# Run npm install
npm install

# Check if npm install was successful
if [ $? -eq 0 ]; then
    echo "npm install completed successfully."
else
    echo "Error: npm install failed."
    exit 1
fi

echo "Open Google Drive and create a Directory"
echo "Give helix@adobe.com permission to the Directory."

# Prompt user for the URL to write to YAML file
read -p " Copy and enter the URL of the Google Drive directory" yaml_url

# Define the content of the YAML file
yaml_content="mountpoints:\n  /: $yaml_url\n"

# Write the content to a YAML file
echo -e "$yaml_content" > fstab.yaml

echo "Installation complete."