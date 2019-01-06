const ClassWithArrowMethod = require('./07-class-with-arrow-method');

describe('[07] ClassWithArrowMethod', () => {
  it('should not have returnSomeArg on the prototype', () => {
    expect(ClassWithArrowMethod.prototype.returnSomeArg).toBeUndefined();
  });

  describe('instance', () => {
    it('should have `returnSomeArg` method', () => {
      const obj = new ClassWithArrowMethod(1);

      expect(obj.returnSomeArg).toBeDefined();
      expect(typeof obj.returnSomeArg).toBe('function');
    });

    describe('returnSomeArg', () => {
      it('should return the argument passed in the constructor', () => {
        const arg = {};
        const obj = new ClassWithArrowMethod(arg);

        expect(obj.returnSomeArg()).toBe(arg);
      });

      it('should not have a prototype property', () => {
        const obj = new ClassWithArrowMethod(1);

        expect(obj.returnSomeArg.prototype).not.toBeDefined();
      });

      it('should keep the `this` reference', () => {
        const obj = new ClassWithArrowMethod(1);
        const returnSomeArg = obj.returnSomeArg;

        expect(returnSomeArg).not.toThrow();
      });

      it('should have a different reference for each new object', () => {
        const obj1 = new ClassWithArrowMethod(1);
        const obj2 = new ClassWithArrowMethod(2);

        expect(obj1.returnSomeArg).not.toBe(obj2.returnSomeArg);
      });
    });
  });
});
