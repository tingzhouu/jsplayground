// call a function with 'new' keyword in front of it - also known as a constructor call
// this constructs a new object and sets that object as the 'this' for that call of 'foo'.

function foo(a) {
  this.a = a;
}

var bar = new foo(2);
console.log('bar', bar.a); // prints 2


function fooReturnObject(a) {
  return { a: 999 }
}

var barWithObject = new fooReturnObject(999);
console.log('barWithObject.a', barWithObject.a); // prints 999 // as per point 4 below.


// Understanding JS constructors
// JS constructors are just functions that happen to be called with the new operator in front. e.g new Number(...)
// JS constructors are NOT attached to classes, and are NOT instantiating a class
// JS constructors are simply regular functions

// In a JS constructor call, the following things are done automatically
// 1. a brand new object is created.

// 2. the newly constructed object is [[Prototype]]-linked

// 3. the newly constructed object is set as the 'this' binding for the function call.

// 4. UNLESS the function returns its own alternate object, the 'new' invoked function call
//    will automatically return the newly constructed object