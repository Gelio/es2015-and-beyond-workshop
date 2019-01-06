const arrayRest = () => {
  const array = [1, 2, 3, 4, 5];

  /**
   * TODO: use the rest syntax to extract `first`, `second` and `rest`.
   */

  const [first, second] = array;
  const rest = [];

  array.slice(2).forEach(element => rest.push(element));

  return { first, second, rest };
};

const arrayParameterRest = array => {
  /**
   * TODO: use the rest syntax to extract `first`, `second` and `rest`.
   */

  const [first, second] = array;
  const rest = [];

  array.slice(2).forEach(element => rest.push(element));

  return { first, second, rest };
};

const objectRest = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3
  };

  /**
   * TODO: use the rest syntax to extract `foo` and `rest`
   */

  const { foo } = obj;

  const rest = Object.assign(obj);
  delete rest.foo;

  return { foo, rest };
};

const objectParameterRest = obj => {
  /**
   * TODO: use the rest syntax to extract `foo` and `rest`
   */

  const { foo } = obj;

  const rest = Object.assign(obj);
  delete rest.foo;

  return { foo, rest };
};

const variadicFunction = function(firstParam, secondParam) {
  /**
   * TODO: use the rest syntax to capture the rest of the parameters
   * NOTE: you may want to convert this function to an arrow function afterwards
   */

  return {
    firstParam,
    secondParam,
    rest: Array.from(arguments).slice(2)
  };
};

module.exports = {
  arrayRest,
  arrayParameterRest,
  objectRest,
  objectParameterRest,
  variadicFunction
};
