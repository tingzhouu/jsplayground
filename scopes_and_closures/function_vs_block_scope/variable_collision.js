// Example of variable collision.
// Could have been avoided if 'let' keyword was used in the for loop.
function foo() {
  function bar(a) {
    i = 3; // Unintentionally modifies the value of i to 3 in the for-loop
    console.log('a', a);
    console.log('i', i);
    console.log(a + i);
  }
  for (var i = 0; i < 10; i++) { // switch between 'let' and 'var' to test.
    bar(i * 2); // i is incremented from 3 to 4, then passed into function bar.
  }
}

foo();