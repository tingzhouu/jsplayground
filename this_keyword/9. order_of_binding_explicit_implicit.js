// What if call-site has multiple eligible rules?
// default binding is the lowest priority of the 4 rules

// comparing between implicit and explicit binding.
function foo() {
  console.log('this.a', this.a);
}

var obj1 = {
  a: 2,
  foo,
};

var obj2 = {
  a: 3,
  foo,
}

obj1.foo(); // prints 2, implicit binding
obj2.foo(); // prints 3, implicit binding

obj1.foo.call(obj2); // prints 3, explicit binding takes precedence
// we can see that explicit binding takes preceding over implicit binding
// we referenced 'foo' from obj1 (implicit), but passed in obj2 using the call(...) function (explicit)
