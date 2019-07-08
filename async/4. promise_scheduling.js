// There are nuances of scheduling where the relative ordering between callbacks
// chained off 2 separate Promises is not reliably predictable.

// In the below example, Promise p3 is chained after Promise p1
var p3 = new Promise((resolve, reject) => {
  resolve('B'); // A Promise can only be resolved once!!!
  // Any registered callbacks will only be called once.
  // Thus, any then(...) registered callbacks will only be called once.
});

var p1 = new Promise((resolve, reject) => {
  resolve(p3); // p1 is not resolved with an immediate value, but another Promise p3
  // This results in p1's callbacks being behind p2's callbacks in the asynchronous Job queue.
});

var p2 = new Promise((resolve, reject) => {
  resolve('A'); // resolve(...) or reject(...) should only be called with ONE parameter
  // All subsequent paramters will be ignored
});

p1.then((v) => {
  console.log('v - p1: ', v); // runs second
})
p2.then((v) => {
  console.log('v - p2: ', v); // runs first
})