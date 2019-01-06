const objectSpread = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3
  };

  const result = {
    originalProperty: 'brand new',
    ...obj
  };

  return result;
};

const objectSpreadWithOverwrite = () => {
  const obj1 = {
    foo: 1,
    bar: 2
  };

  const obj2 = {
    foo: 'a string?',
    baz: 3
  };

  const obj3 = {
    foo: true
  };

  const result = {
    ...obj1,
    ...obj2,
    ...obj3
  };

  return result;
};

const arraySpread = () => {
  const array = [3, 4];

  const result = [1, 2, ...array];

  return result;
};

const objectShallowClone = obj => {
  return { ...obj };
};

const arrayShallowClone = array => {
  return [...array];
};

module.exports = {
  objectSpread,
  objectSpreadWithOverwrite,
  arraySpread,
  objectShallowClone,
  arrayShallowClone
};
