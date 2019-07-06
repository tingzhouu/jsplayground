function foo(something) {
  this.a = something;
}

var obj1 = { foo }

var obj2 = {};

obj1.foo(2);
console.log('obj1.a', obj1.a); // prints 2

var bar = new obj1.foo(4); // if implicit takes precedence, 'this' will refer to the value of 'a' in obj1
// if new takes precendence, 'this' will refer to the value of 'a' that is passed in the constructor call.
console.log('bar.a', bar.a); // prints 4, new takes precedence