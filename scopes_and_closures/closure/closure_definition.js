function foo() {
  let a = 2;
  function bar(numToAdd) {
    a += numToAdd;
    console.log(a);
  }
  return bar;
}

const bazzzz = foo();
bazzzz(22); // prints 24 (2 + 22), where 2 is the initial value of variable 'a'.
bazzzz(22); // prints 46 (24 + 22)
bazzzz(22); // prints 68 (46 + 22)
bazzzz(22); // prints 90 (68 + 22)
bazzzz(22); // prints 112 (90 + 22)

// Even though the function 'bar' is invoked outside of its lexical scope using function 'bazzzz',
// Closure allows the function 'bar' to continue accessing the lexical scope it was defined in.
// In this example, we are able to access the variable 'a' in function 'foo'.