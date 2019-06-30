// Principle of Least Privilege - only expose what is minimally necessary.
// variable b and function doSomethingElse are not accessible to any outside influence.

function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1; // returns 3
  }
  var b;
  b = a + doSomethingElse(a * 2);
  //  2 + doSomethingElse(4) 
  //  2 + 3
  console.log(b * 3);
}
doSomething(2);