// import shapes

// ask questions

// generate shape based on the questions and use fs to create the svg file
const generateLogo = require('./lib/logo.js');
const fs = require('fs');
const inquirer = require('inquirer');

function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape\'s color (keyword or hexadecimal):',
      },
    ])
    .then((answers) => {
      const svgContent = generateLogo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
      );
      fs.writeFileSync('logo.svg', svgContent);
      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
}

promptUser();
