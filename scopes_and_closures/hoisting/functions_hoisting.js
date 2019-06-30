// Function declarations are hoisted
foo();

function foo() {
  console.log('hey why did you execute me before declaring me?');
}

// Function expressions are NOT hoisted
console.log(bar); // Prints undefined

bar(); // TypeError - bar is not a function
// Notice a TypeError instead of ReferenceError is thrown.
// This is because the variable bar is hoisted and does exist.
var bar = function bar() {
  console.log('meow');
}