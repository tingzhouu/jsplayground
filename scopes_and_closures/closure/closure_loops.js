// prints out 6 for every iteration
// because 'var' keyword is used for declaration,
// all console.log statements reference to the same variable i
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer(){
    console.log('i', i);
  }, i * 1000);
}

// we can use a IIFE to create a new scope for each iteration
// the value of i at that point of time is saved, and accessed when console.log is run.
for (var i = 1; i <= 5; i++) {
  (function() {
    var j = i;
    setTimeout(function timer() {
      console.log('j', j);
    }, j * 1000)
  })();
}

// alternatively, there is a special behavior defined for 'let' declarations in a 'for loop'
// the variable will be declared for each iteration
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log('i', i);
  }, i * 1000);
}