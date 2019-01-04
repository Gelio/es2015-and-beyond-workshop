const ClassWithProperty = require('./02-class-with-property');

describe('[02] ClassWithProperty', () => {
  it('should return an object', () => {
    expect(typeof new ClassWithProperty()).toBe('object');
  });

  it('returned object should have someNumber set to 5', () => {
    const obj = new ClassWithProperty();

    expect(obj.someNumber).toBe(5);
  });
});
