const {
  exampleArrowFunction,
  returnsObjectArrowFunction,
  sumArrowFunction
} = require('./06-arrow-functions');

describe('[06] Arrow functions', () => {
  describe('example arrow function', () => {
    it('should be defined', () => {
      expect(exampleArrowFunction).toBeTruthy();
    });

    it('should be a function', () => {
      expect(typeof exampleArrowFunction).toBe('function');
    });

    it("should return 'Example string'", () => {
      expect(exampleArrowFunction()).toBe('Example string');
    });

    it('should not have the `prototype` property', () => {
      expect(exampleArrowFunction.prototype).not.toBeDefined();
    });
  });

  describe('sum arrow function', () => {
    it('should be defined', () => {
      expect(sumArrowFunction).toBeTruthy();
    });

    it('should be a function', () => {
      expect(typeof sumArrowFunction).toBe('function');
    });

    it('should return the sum of its arguments', () => {
      expect(sumArrowFunction(1, 2)).toBe(3);
      expect(sumArrowFunction(80, 11)).toBe(91);
    });

    it('should not have the `prototype` property', () => {
      expect(sumArrowFunction.prototype).not.toBeDefined();
    });
  });

  describe('returnsObject arrow function', () => {
    it('should be defined', () => {
      expect(returnsObjectArrowFunction).toBeTruthy();
    });

    it('should be a function', () => {
      expect(typeof returnsObjectArrowFunction).toBe('function');
    });

    it("should return an object with foo property set to 'bar'", () => {
      expect(returnsObjectArrowFunction()).toEqual({
        foo: 'bar'
      });
    });

    it('should not have the `prototype` property', () => {
      expect(returnsObjectArrowFunction.prototype).not.toBeDefined();
    });
  });
});
