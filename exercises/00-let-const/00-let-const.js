/**
 * TODO: analyze the code below. Try to spot the differences come up with answers to questions.
 */

function wrapperFunction() {
  // QUESTION: will this throw an error?
  console.log(variable);

  // QUESTION: how about this one?
  variable = 1;
  var variable = 5;

  // QUESTION: how about this one?
  console.log(someOtherVariable, anotherVariable);
  if (Math.random() < 0.5) {
    var someOtherVariable = 1;
  } else {
    var anotherVariable = 5;
  }

  // QUESTION: how about this one?
  console.log(variableFromInnerFunction);
  function innerFunction() {
    var variableFromInnerFunction;
  }
}

function usingLet() {
  // QUESTION: will this throw an error?
  console.log(variable);

  // QUESTION: how about this one?
  variable = 1;
  let variable = 5;

  // QUESTION: how about this one?
  console.log(someOtherVariable, anotherVariable);
  if (Math.random() < 0.5) {
    let someOtherVariable = 1;
  } else {
    let anotherVariable = 5;
  }

  // QUESTION: how about this one?
  console.log(variableFromInnerFunction);
  function innerFunction() {
    let variableFromInnerFunction;
  }
}

function usingConst() {
  // QUESTION: will this throw an error?
  console.log(variable);

  // QUESTION: how about this one?
  variable = 1;
  const variable = 5;

  // QUESTION: how about this one?
  console.log(someOtherVariable, anotherVariable);
  if (Math.random() < 0.5) {
    const someOtherVariable = 1;
  } else {
    const anotherVariable = 5;
  }

  // QUESTION: how about this one?
  console.log(variableFromInnerFunction);
  function innerFunction() {
    const variableFromInnerFunction;
  }
}

function constPropertyReassignment() {
  // Objects
  const obj = {
    foo: 1,
  }

  // QUESTION: is this possible?
  obj.foo = 1;

  // Arrays
  const array = [1,2,3];

  // QUESTION: is this possible?
  array[0] = 5;
  array.splice(2, 1);

  // NOTE: to make sure the object/array is not modifiable, use the following:
  const frozenObj = Object.freeze(obj);
  frozenObj.foo = 5;

  const frozenArray = Object.freeze(array);
  frozenArray[0] = 4;
  // NOTE: this only works for 1 level (nested properties could be modified)
}

