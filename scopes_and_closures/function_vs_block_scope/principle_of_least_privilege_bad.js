// variable b and function doSomethingElse are only required by doSomething.
// unnecessary and dangerous as they can be used in unexpected ways.

function doSomething(a) {
  b = doSomethingElse(a * 2);
  console.log(b * 3);
}

function doSomethingElse(a) { // BAD - can be accessed by any other function in this scope.
  return a - 1;
}

var b; // BAD - can be accessed by any other function in this scope.

doSomething(3);