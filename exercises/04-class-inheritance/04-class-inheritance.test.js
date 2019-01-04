const { BaseClass, DerivedClass } = require('./04-class-inheritance');

describe('[04] DerivedClass', () => {
  it('should return an instance of BaseClass', () => {
    expect(new DerivedClass(5, 6, 7)).toBeInstanceOf(BaseClass);
  });

  it('should return an instance of BaseClass', () => {
    expect(new DerivedClass(5, 6, 7)).toBeInstanceOf(DerivedClass);
  });

  describe('getSum', () => {
    it('should return the sum of a, b, c', () => {
      const obj = new DerivedClass(1, 2, 3);

      expect(obj.getSum()).toBe(6);
    });
  });
});
