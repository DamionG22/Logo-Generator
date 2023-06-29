// import shapes

// ask questions

// generate shape based on the questions and use fs to create the svg file
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const generateLogo = require('./lib/logo');

// Define the prompts for user input
const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo (up to three characters):',
    validate: function (input) {
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color:',
    default: 'black'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color:',
    default: 'black'
  }
];

// Handle the user's responses
function handleUserInput(answers) {
  const { text, textColor, shape, shapeColor } = answers;
  const svgContent = generateLogo(text, textColor, shape, shapeColor);

  fs.writeFile('logo.svg', svgContent, function (err) {
    if (err) {
      console.log('An error occurred while generating the SVG file.');
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

inquirer.prompt(prompts).then(handleUserInput);