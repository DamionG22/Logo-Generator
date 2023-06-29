const SVG = require('svg.js');

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
  }
}

function generateLogo(text, textColor, shape, shapeColor) {
  const draw = SVG().size(300, 200);

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

module.exports = generateLogo;
