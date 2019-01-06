const {
  arrayParameterRest,
  arrayRest,
  objectParameterRest,
  objectRest,
  variadicFunction
} = require('./09-rest');

describe('[09] Rest', () => {
  describe('arrayRest', () => {
    it('should return correct values', () => {
      expect(arrayRest()).toEqual({
        first: 1,
        second: 2,
        rest: [3, 4, 5]
      });
    });
  });

  describe('arrayParameterRest', () => {
    it('should return correct values', () => {
      const array = [1, 2, 3, 4, 5];
      const result = arrayParameterRest(array);

      expect(result).toEqual({
        first: 1,
        second: 2,
        rest: [3, 4, 5]
      });
    });
  });

  describe('objectRest', () => {
    it('should return correct values', () => {
      expect(objectRest()).toEqual({
        foo: 1,
        rest: { bar: 2, baz: 3 }
      });
    });
  });

  describe('objectParameterRest', () => {
    it('should return correct values', () => {
      const obj = {
        foo: 1,
        bar: 2,
        baz: 3
      };
      const result = objectParameterRest(obj);

      expect(result).toEqual({
        foo: 1,
        rest: { bar: 2, baz: 3 }
      });
    });
  });

  describe('variadicFunction', () => {
    it('should return correct values', () => {
      const result = variadicFunction(1, 2, 3, 4, 5, 6);

      expect(result).toEqual({
        firstParam: 1,
        secondParam: 2,
        rest: [3, 4, 5, 6]
      });
    });
  });
});
