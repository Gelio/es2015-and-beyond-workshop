const arrayRest = () => {
  const array = [1, 2, 3, 4, 5];

  const [first, second, ...rest] = array;

  return { first, second, rest };
};

const arrayParameterRest = ([first, second, ...rest]) => {
  return { first, second, rest };
};

const objectRest = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3
  };

  const { foo, ...rest } = obj;

  return { foo, rest };
};

const objectParameterRest = ({ foo, ...rest }) => {
  return { foo, rest };
};

const variadicFunction = (firstParam, secondParam, ...rest) => {
  return {
    firstParam,
    secondParam,
    rest
  };
};

module.exports = {
  arrayRest,
  arrayParameterRest,
  objectRest,
  objectParameterRest,
  variadicFunction
};
