// test each shape to see if the statement is true about their rendering
const { Triangle } = require('./logo')
describe('Triangle test', () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
})

const { Square } = require('./logo')
describe('Square test', () => {
    it('should render a red square', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<rect width="100" height="100" fill="red" />`);
    });
})

const { Circle } = require('./logo')
describe('Square test', () => {
    it('should render a red square', () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual(`<circle cx="50" cy="50" r="50" fill="yellow" />`);
    });
})