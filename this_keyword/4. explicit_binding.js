// third rule - explicit binding
// force a function call to use a particular object for 'this' binding,
// without putting a property function reference on the object.

// using call or apply method
// all functions created have access to call(...) or apply(...)
// for this context, there is no difference between call(...) or apply(...)

// the first parameter of call(...) takes in an object to use for 'this'

function foo() {
  console.log('this.a', this.a);
}

var obj = { a: 2 }; // prints 2

foo.call(obj); // by passing in 'obj' as the parameter, 'this' will reference to 'obj'

foo.call(123) // if we were to pass a simple primitive type, in this case 'Number',
// the primitive type is wrapped in its object form -> new Number(...)