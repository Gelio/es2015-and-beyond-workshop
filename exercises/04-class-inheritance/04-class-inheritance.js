class BaseClass {
  constructor(a) {
    this.savedA = a;
  }

  incrementA() {
    this.savedA++;
  }
}

class DerivedClass extends BaseClass {
  constructor(a, b, c) {
    super(a);

    this.savedB = b;
    this.savedC = c;
  }

  getSum() {
    return this.savedA + this.savedB + this.savedC;
  }
}

module.exports = {
  BaseClass,
  DerivedClass
};
