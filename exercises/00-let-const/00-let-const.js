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

