class BoundMethods {
  constructor(a, b) {
    this.a = a;
    this.b = b;

    this.getSum = this.getSum.bind(this);
  }

  getSum() {
    return this.a + this.b;
  }
}

module.exports = BoundMethods;
