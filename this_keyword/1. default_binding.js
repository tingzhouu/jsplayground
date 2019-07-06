// first rule of finding where 'this' will point to

function foo() {
  console.log('this.a', this.a);
}

var a = 2; // declared in global scope

foo(); // declared in global scope; call-site. // TypeError, cannot read property 'a' of undefined

// the default binding for 'this' applies to the function call.
// because 'foo' is called in the global scope, 'this' points to the global object.
// however, if strict mode is in effect, global object is NOT eligible for default binding.