/**
 * TODO: converts `returnSomeArg` to an arrow function so that it does not have to be bound.
 *
 * NOTE: due to not having _babel_ or some other transpiler, you cannot use the function property
 * syntax
 */

class ClassWithArrowMethod {
  constructor(someArg) {
    this.someArg = someArg;

    this.returnSomeArg = this.returnSomeArg.bind(this);
  }

  returnSomeArg() {
    return this.someArg;
  }
}

module.exports = ClassWithArrowMethod;
