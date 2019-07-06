function foo() {
  console.log('this.a', this.a);
}

var obj = {
  a: 2,
  foo,
}

var bar = obj.foo;

var a = 'oops, global';

bar(); // call-site // TypeError - a is undefined

// even though 'bar' appears to be a reference to 'foo',
// the fact that 'bar' is a plain, undecorated call, results in default binding.
// since default binding is not allowed in strict mode, we get a TypeError.


// similarly, even when the function is being passed as a paramter,
// binding is lost.
function doFoo(fn) {
  var a = 99999;
  fn(); // call-site
}

doFoo(obj.foo); // call-site // TypeError - a is undefined