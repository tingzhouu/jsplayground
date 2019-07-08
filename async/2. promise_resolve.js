// if you pass an immediate, non-Promise, non-thenable value to Promise.resolve(..), 
// you get a promise that is fulfilled with that value which was passed in.

// identical behaviour between p1 and p2.
var p1 = new Promise(function(resolve, reject) {
  resolve(42);
})
var p2 = Promise.resolve(42); // Passing in the immediate, non-Promise, non-thenable value



// if you pass a genuine Promise to Promise.resolve(..),
// you just get the same promise back.
var p3 = Promise.resolve(42);
var p4 = Promise.resolve(p3);
console.log('p3 === p4', p3 === p4); // prints true


// if you pass a non-Promise thenable value to Promise.resolve(...),
// it will attempt to unwrap that value, and the unwrapping will keep going
// until a concrete final non-Promise-like value is extracted.