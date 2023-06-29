const { Triangle } = require('./logo')
describe('Triangle test', () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
})