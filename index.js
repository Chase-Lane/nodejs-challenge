// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is your readme title?',
          },
          {
            type: 'input',
            message: 'What is your projects description?',
            name: 'description',
          },
          {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC'],
          },
    ])
    .then(data => {
        return generateMarkdown(data)
    })
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    questions()
}

// Function call to initialize app
init();
