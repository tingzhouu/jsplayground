// instead of using the four standard 'this' rules, arrow-functions adopt 'this' binding from the enclosing scope

function fooReturnNormalFunction() {
  return function() {
    console.log('this.a', this.a);
  }
}

function fooReturnArrowFunction() {
  return () =>  {
    console.log('this.a', this.a);
  }
}
var obj1 = { a: 2 };
var obj2 = { a: 3 };

var barNormalFunction = fooReturnNormalFunction.call(obj1);
barNormalFunction.call(obj2); // prints 3, references 'this' as 'obj2'

var barArrowFunction = fooReturnArrowFunction.call(obj1); // 'this' is set to reference 'obj1'
barArrowFunction.call(obj2); // prints 2, references 'this' as 'obj1'
// since fooReturnArrowFunction was 'this'-bound to obj1, barArrowFunction will also be 'this'-bound to obj1.
// the lexical binding of an arrow function cannot be overriden, even with 'new'