function foo(something) {
  this.a = something;
}

var obj1 = {};
var bar = foo.bind(obj1);
bar(2)
console.log('obj1.a', obj1.a); // prints 2, hard binding

var baz = new bar(3); // if new takes precedence, 'this' will refer to the value of 'a' in obj1. value of a in obj1 and baz will be 3
console.log('obj1.a', obj1.a); // prints 2
console.log('baz.a', baz.a); // prints 3