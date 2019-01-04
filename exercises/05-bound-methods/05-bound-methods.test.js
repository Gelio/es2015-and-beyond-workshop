const BoundMethods = require('./05-bound-methods');

describe('[05] BoundMethods', () => {
  describe('getSum', () => {
    it('should return the sum of a and b', () => {
      const obj = new BoundMethods(1, 2);

      expect(obj.getSum()).toBe(3);
    });

    it('should be bound', () => {
      const obj = new BoundMethods(1, 2);

      const getSum = obj.getSum;

      expect(getSum()).toBe(3);
    });
  });
});
