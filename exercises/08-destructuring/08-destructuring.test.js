const {
  arrayDestructuring,
  nestedObjectDestructuring,
  objectDestructuringWithRename,
  parameterDestructuring,
  regularObjectDestructuring,
  secondElementFromTuple
} = require('./08-destructuring');

describe('[08] Destructuring', () => {
  describe('regularObjectDestructuring', () => {
    it('should return a correct value', () => {
      expect(regularObjectDestructuring()).toEqual({
        foo: 1,
        baz: [42, 42, 42]
      });
    });
  });

  describe('objectDestructuringWithRename', () => {
    it('should return 2', () => {
      expect(objectDestructuringWithRename()).toBe(2);
    });
  });

  describe('nestedObjectDestructuring', () => {
    it('should return a correct value', () => {
      expect(nestedObjectDestructuring()).toEqual({
        foo: 1,
        bar: 2,
        baz: 3
      });
    });
  });

  describe('arrayDestructuring', () => {
    it('should return a correct value', () => {
      expect(arrayDestructuring()).toEqual([1, 2]);
    });
  });

  describe('secondElementFromTuple', () => {
    it('should return a correct value', () => {
      expect(secondElementFromTuple()).toBe(2);
    });
  });

  describe('parameterDestructuring', () => {
    it('should return a correct value', () => {
      const obj = {
        foo: 1
      };
      const array = [2];

      const result = parameterDestructuring(obj, array);

      expect(result).toEqual({ foo: 1, first: 2 });
    });
  });
});
