// second rule - implicit binding
// mutate the object to include a reference on itself to the function
// use this property function reference to implicitly bind 'this' to the object.

function foo() {
  console.log('this.a', this.a);
}

var obj = {
  a: 2,
  foo: foo,
}

obj.foo(); // call-site of function foo. // prints 2
// because the call-site uses the 'obj' context to reference the function,
// 'obj' contains the function reference at the time the function is called.


var obj2 = {
  a: 42,
  foo: foo
}

var obj1 = {
  a: 99,
  obj2,
}

obj1.obj2.foo(); // prints 42

// 'foo' is referenced from obj2,
// therefore 'foo' uses the value of 'a' in obj2.