/**
 * TODO: complete the implementation of functions that end in `ArrowFunction`.
 *
 * Their implementation should be equivalent to `RegularFunction`s, but they should be written using
 * arrow functions.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * Try to experiment with **various syntax** of arrow functions when:
 * * returning a value directly without any other side-effects ()
 * *
 */

/**
 * A regular function that returns a string.
 */
function exampleRegularFunction() {
  return 'Example string';
}

const exampleArrowFunction = null;

/**
 * A function that takes arguments
 */
function sumRegularFunction(a, b) {
  return a + b;
}

const sumArrowFunction = null;

/**
 * A function that retuns an object
 */
function returnsObjectRegularFunction() {
  return {
    foo: 'bar'
  };
}

const returnsObjectArrowFunction = null;

module.exports = {
  exampleRegularFunction,
  exampleArrowFunction,
  sumRegularFunction,
  sumArrowFunction,
  returnsObjectRegularFunction,
  returnsObjectArrowFunction
};
