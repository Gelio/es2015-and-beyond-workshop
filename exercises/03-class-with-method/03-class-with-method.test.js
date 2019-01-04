const ClassWithMethod = require('./03-class-with-method');

describe('[03] ClassWithMethod', () => {
  it('should have an incrementSomeNumber method', () => {
    expect(ClassWithMethod.prototype.incrementSomeNumber).toBeDefined();
  });

  describe('incrementSomeNumber', () => {
    it('should set someNumber to 6 when called', () => {
      const obj = new ClassWithMethod();

      obj.incrementSomeNumber();

      expect(obj.someNumber).toBe(6);
    });

    it('should set someNumber to 7 when called twice', () => {
      const obj = new ClassWithMethod();

      obj.incrementSomeNumber();
      obj.incrementSomeNumber();

      expect(obj.someNumber).toBe(7);
    });
  });
});
