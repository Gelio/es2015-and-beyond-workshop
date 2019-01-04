class BaseClass {
  constructor(a) {
    this.savedA = a;
  }

  incrementA() {
    this.savedA++;
  }
}

/**
 * TODO: create a `DerivedClass` that inherits from (extends) `BaseClass`.
 *
 * It should accept 3 parameters in the constructor, invoke `BaseClass`'s constructor with
 * the first of them.
 *
 * It should also have a `getSum` method that would return the sum of the 3 constructor parameters.
 */

module.exports = {
  BaseClass,
  DerivedClass
};
