// a work-around for explicit binding

function foo() {
  console.log('this.a', this.a);
}

var obj = { a: 2 };

// create a function which internally, manually calls foo with obj passed in.
// prevents the function from losing its intended 'this' binding.
var bar = function() {
  foo.call(obj); // prints 2
}

bar();

setTimeout(bar, 2000); // still prints 2