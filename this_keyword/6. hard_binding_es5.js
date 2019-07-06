function foo(something){
  console.log('this.a', this.a); // prints 2
  console.log('something', something); // prints 3
  return this.a + something; // returns 5
}

var obj = { a: 2 };

// bind(..) returns a new function that is hard-coded to call the original function
// with the 'this' context set as specified in the parameter

// in the below line, we set obj to be 'this'
var bar = foo.bind(obj);

var b = bar(3);
console.log('b', b);