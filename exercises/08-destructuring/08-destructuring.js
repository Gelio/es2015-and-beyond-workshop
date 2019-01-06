/**
 * TODO:
 * Convert the syntax in each function to use destructuring
 *
 * NOTE:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const regularObjectDestructuring = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: [42, 42, 42]
  };

  /**
   * TODO: extract `foo` and `baz` from `obj` and store them as variables.
   */

  const foo = obj.foo;
  const baz = obj.baz;

  return { foo: foo, baz: baz };
};

const objectDestructuringWithRename = () => {
  const foo = 1;
  const obj = {
    foo: 2,
    bar: 3
  };

  /**
   * TODO: extract `foo` from `obj` and save it as `renamedFoo`
   */
  const renamedFoo = obj.foo;

  return renamedFoo;
};

const nestedObjectDestructuring = () => {
  const obj = {
    nested: {
      foo: 1,
      bar: 2
    },
    baz: 3
  };

  /**
   * TODO: extract `foo`, `bar` and `baz` from `obj`
   */
  const foo = obj.nested.foo;
  const bar = obj.nested.bar;
  const baz = obj.baz;

  return { foo, bar, baz };
};

const arrayDestructuring = () => {
  const array = [1, 2, 3, 4, 5];

  /**
   * TODO: extract the first two elements from `array` and save them as `first` and `second`
   */
  const first = array[0];
  const second = array[1];

  return [first, second];
};

const secondElementFromTuple = () => {
  const tuple = [1, 2];

  /**
   * TODO: extract the second element from `tuple` and save it as `second`. Do not extract the first
   * element.
   */
  const second = tuple[1];

  return second;
};

const parameterDestructuring = (objectParameter, arrayParameter) => {
  /**
   * TODO: Extract `foo` and `first` directly from the list of parameters
   */
  const foo = objectParameter.foo;
  const first = arrayParameter[0];

  return { foo, first };
};

module.exports = {
  regularObjectDestructuring,
  objectDestructuringWithRename,
  nestedObjectDestructuring,
  arrayDestructuring,
  secondElementFromTuple,
  parameterDestructuring
};
