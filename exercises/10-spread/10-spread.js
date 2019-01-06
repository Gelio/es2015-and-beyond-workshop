const objectSpread = () => {
  const obj = {
    foo: 1,
    bar: 2,
    baz: 3
  };

  /**
   * TODO: use object spread syntax to make `result` be an object containing all the properties from
   * `obj` and a new `originalProperty`
   */
  const result = Object.assign(
    {},
    {
      originalProperty: 'brand new'
    },
    obj
  );

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

  /**
   * TODO: use object spread syntax to combine `obj1`, `obj2` and `obj3` into `result`
   *
   * NOTE: `foo` will be overwritten.
   *
   * QUESTION: what value will the `foo` property have? Does the order matter?
   */

  const result = Object.assign({}, obj1, obj2, obj3);

  return result;
};

const arraySpread = () => {
  const array = [3, 4];

  /**
   * TODO: use array spread syntax to append `array` to `result`
   */

  const result = [1, 2];

  array.forEach(element => result.push(element));

  return result;
};

const objectShallowClone = obj => {
  /**
   * TODO: use object spread syntax to clone `obj` shallowly
   */
  return Object.assign({}, obj);
};

const arrayShallowClone = array => {
  /**
   * TODO: use array spread syntax to clone `array` shallowly
   */
  return array.slice();
};

module.exports = {
  objectSpread,
  objectSpreadWithOverwrite,
  arraySpread,
  objectShallowClone,
  arrayShallowClone
};
