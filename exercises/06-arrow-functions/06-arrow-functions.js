/**
 * A regular function that returns a string.
 */
function exampleRegularFunction() {
  return 'Example string';
}

const exampleArrowFunction = () => 'Example string';

/**
 * A function that takes arguments
 */
function sumRegularFunction(a, b) {
  return a + b;
}

const sumArrowFunction = (a, b) => a + b;

/**
 * A function that retuns an object
 */
function returnsObjectRegularFunction() {
  return {
    foo: 'bar'
  };
}

const returnsObjectArrowFunction = () => ({
  foo: 'bar'
});

module.exports = {
  exampleRegularFunction,
  exampleArrowFunction,
  sumRegularFunction,
  sumArrowFunction,
  returnsObjectRegularFunction,
  returnsObjectArrowFunction
};
