const SVG = require('svg.js');
// creates shapes and adds the selected color
class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    // sets shapes dimensions 
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



