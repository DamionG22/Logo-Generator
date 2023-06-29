// imports other modules and files
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
// prompts user with questions
const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo (up to three characters):',
    validate: function (input) {
        // condition for char length requirement.
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
// function that creates a logo based off user input
function generateLogo(text, textColor, shape, shapeColor) {
  const draw = SVG().size(300, 200);
// creates selected shape
  let shapeElement;
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeElement = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeElement = new Triangle(shapeColor);
      break;
    case 'square':
      shapeElement = new Square(shapeColor);
      break;
    default:
      console.log('Invalid shape selected.');
      return;
  }

  draw.svg(shapeElement.render());

  const textElement = draw.text(text)
    .font({ size: 48, fill: textColor })
    .move(100, 100);

  draw.add(textElement);

  const svgContent = draw.svg();
  return svgContent;
}
// function to create logo svg file
function saveLogoAsSVG(svgContent) {
  const fileName = `logo_${Date.now()}.svg`;
  fs.writeFile(fileName, svgContent, function (err) {
    if (err) {
      console.log('An error occurred while saving the SVG file.');
      console.error(err);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

inquirer.prompt(prompts).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  const svgContent = generateLogo(text, textColor, shape, shapeColor);
  saveLogoAsSVG(svgContent);
});
