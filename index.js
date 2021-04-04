const fs = require('fs');
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Plese include usage information.'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Instruct us on some test for this project, please.'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the open source license that is right for your project',
        choices: ['APACHE', 'MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?',
        validate: userNameInput => {
            if (userNameInput) {
              return true;
            } else {
              console.log('Please enter your GitHub user name.');
              return false;
            }
        }
    },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address.');
                  return false;
                }
            }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    `
    ===============
    Write a README!
    ===============
    `

    return inquirer
        .prompt(questions)
}

// Function call to initialize app
init();
