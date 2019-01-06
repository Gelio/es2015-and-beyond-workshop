class ClassWithArrowMethod {
  constructor(someArg) {
    this.someArg = someArg;

    this.returnSomeArg = () => this.someArg;
  }
}

module.exports = ClassWithArrowMethod;
