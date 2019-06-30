// All declarations, both variables and functions, are processed first
// before any part of your code is executed.
a = 2;

var a;

console.log(a); // 2


// However, assignments are not processed first
console.log(b); // ReferenceError: b is not defined

b = 2