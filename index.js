// import shapes

// ask questions

// generate shape based on the questions and use fs to create the svg file
const generateLogo = require('./lib/logo.js');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
// function that prompts user with questions
const promptUser = async () => {
    // Use Inquirer to prompt the user for input
    const { text, textColor, shape, shapeColor } = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter the text for the logo (up to three characters):',
        validate: (input) => {
          // Validate that the input is not empty and has a maximum length of three characters
          if (input.trim() !== '' && input.length <= 3) {
            return true;
          }
          return 'Please enter up to three characters for the logo text.';
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the logo text (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the logo shape (color keyword or hexadecimal number):',
      },
    ]);
  
    // Return the user's input
    return { text, textColor, shape, shapeColor };
  };
  const generateLogo = ({ text, textColor, shape, shapeColor }) => {
    let logo;
  
    // Create an instance of the corresponding shape class based on the user's selection
    if (shape === 'circle') {
      logo = new Circle();
    } else if (shape === 'triangle') {
      logo = new Triangle();
    } else if (shape === 'square') {
      logo = new Square();
    }
  
    // Set the color for the shape and text
    logo.setColor(shapeColor);
    logo.setTextColor(textColor);
  
    // Generate the SVG string for the logo
    const svg = logo.render(text);
  
    // Return the SVG string
    return svg;
  };

  const saveLogo = (svg) => {
    // Write the SVG string to a file named "logo.svg"
    const fs = require('fs');
    fs.writeFileSync('logo.svg', svg);
  
    // Display success message in the command line
    console.log('Generated logo.svg');
  };
  
  const run = async () => {
    // Prompt the user for input
    const userInput = await promptUser();
  
    // Generate the logo SVG
    const logoSvg = generateLogo(userInput);
  
    // Save the logo SVG as logo.svg
    saveLogo(logoSvg);
  };
  
  // Call the run function to start the application
  run();
  

  