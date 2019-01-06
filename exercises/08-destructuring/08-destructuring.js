const regularObjectDestructuring = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: [42, 42, 42]
  };

  const { foo, baz } = obj;

  return { foo: foo, baz: baz };
};

const objectDestructuringWithRename = () => {
  const foo = 1;
  const obj = {
    foo: 2,
    bar: 3
  };

  const { foo: renamedFoo } = obj;

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

  const {
    nested: { foo, bar },
    baz
  } = obj;

  return { foo, bar, baz };
};

const arrayDestructuring = () => {
  const array = [1, 2, 3, 4, 5];

  const [first, second] = array;

  return [first, second];
};

const secondElementFromTuple = () => {
  const tuple = [1, 2];

  const [, second] = tuple;

  return second;
};

const parameterDestructuring = ({ foo }, [first]) => {
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
