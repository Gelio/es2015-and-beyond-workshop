const {
  objectSpread,
  objectSpreadWithOverwrite,
  arraySpread,
  objectShallowClone,
  arrayShallowClone
} = require('./10-spread');

describe('[10] Spread', () => {
  describe('objectSpread', () => {
    it('should return a correct value', () => {
      expect(objectSpread()).toEqual({
        originalProperty: 'brand new',
        foo: 1,
        bar: 2,
        baz: 3
      });
    });
  });

  describe('objectSpreadWithOverwrite', () => {
    it('should return a correct value', () => {
      expect(objectSpreadWithOverwrite()).toEqual({
        foo: true,
        bar: 2,
        baz: 3
      });
    });
  });

  describe('arraySpread', () => {
    it('should return a correct value', () => {
      expect(arraySpread()).toEqual([1, 2, 3, 4]);
    });
  });

  describe('objectShallowClone', () => {
    it('should return a correct value', () => {
      const obj = {
        foo: 1,
        bar: 2
      };

      const result = objectShallowClone(obj);

      expect(result).toEqual(obj);
      expect(result).not.toBe(obj);
    });
  });

  describe('arrayShallowClone', () => {
    it('should return a correct value', () => {
      const array = [1, 2, 3];

      const result = arrayShallowClone(array);

      expect(result).toEqual(array);
      expect(result).not.toBe(array);
    });
  });
});
