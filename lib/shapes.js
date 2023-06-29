// Creates classes for each shape option.
class Triangle {
    color;
//   Sets shapes color to users selection
    setColor(newColor) {
      this.color = newColor;
    }
//   renders the shapes dimensions to create actual shape outline.
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
class Square {
    color;
  
    setColor(newColor) {
      this.color = newColor;
    }
  
    render() {
      return `<rect width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    color;
  
    setColor(newColor) {
      this.color = newColor;
    }
  
    render() {
      return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
  }
//   Exports shape classes for other JS files to import.
  module.exports = {
    Triangle,
    Square,
    Circle,
  };
  