const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
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
      type: 'list',
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
function writeToFile() {
    fs.writeFile(`check.md`, generateMarkdown(answers), err => {
        if (err) throw err;
      });
    };

// TODO: Create a function to initialize app
function init() {
  console.log(
    `
    ===============
    Write a README!
    ===============
    `);

    inquirer
        .prompt(questions)
        .then(answers => {
          console.log(answers.title, answers.email)
        })
        .then(writeToFile)
        .catch(error => {
          if(error.isTtyError) {
            console.log("error 1")
          } else {
            console.log("error 2")
          }
        });
        
        
  };

// Function call to initialize app
init();

module.exports = writeToFile;