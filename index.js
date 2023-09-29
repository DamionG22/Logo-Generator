// imports other modules and files
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to prompt the user for input
async function getUserInput() {
  // Use Inquirer to collect user input for text, text color, shape, and shape color
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ]);

  return userInput;
}

// Function to generate the SVG logo
function generateLogo(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  // Create an instance of the selected shape class
  let selectedShape;
  switch (shape) {
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
    default:
      console.error('Invalid shape selection');
      process.exit(1);
  }

  // Set text and shape colors
  selectedShape.setTextColor(textColor);
  selectedShape.setColor(shapeColor);

  // Generate the SVG string
  const logoSVG = selectedShape.render(text);

  // Write the SVG to a file named logo.svg
  fs.writeFileSync('logo.svg', logoSVG);

  console.log('Generated logo.svg');
}

// Main function to run the application
async function main() {
  try {
    const userInput = await getUserInput();
    generateLogo(userInput);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
