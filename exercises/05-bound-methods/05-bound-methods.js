/**
 * TODO: bind the `getSum` method so that `this` inside of it always points to the created object.
 *
 * Take a look at
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */

class BoundMethods {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getSum() {
    return this.a + this.b;
  }
}

module.exports = BoundMethods;
