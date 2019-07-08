// How to string multiple promises together to represent a sequence of async steps

// This works based on 2 behaviours intrinsic to Promises:
// 1. Everytime then(..) is called on a Promise, it creates and returns a new Promise.
// 2. Whatever value returned from the then(...) call's fulfilment callback is automatically
//    set as the fulfilment of the chained Promise.

var p = Promise.resolve(21);

// example 1 - creating an intermediate variable
var p2 = p.then((v) => {
  console.log('v', v); // prints 21
  return v * 2; // we return this to p2.then(...) call
})
p2.then((v) => {
  console.log('v', v); // prints 42
})

// example 2 - without using an intermediate variable
p
.then((v) => { // step 1
  console.log('v', v); // prints 21
  return v * 2;
})
.then((v) => { // step 2
  console.log('v', v); // prints 42
})

// example 3 - make step 2 wait for step 1 to perform something asynchronous (setTimeout)
p.then((v) => {
  console.log('v', v); // prints 21
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v * 2)
    }, 2000);
  })
}).then((v) => { // step 2 will only run when after above function runs resolve(..)
  console.log('v', v); // prints 42
})

// example 4 - delay-Promise creation
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

delay(1000)
.then(() => {
  console.log('step 2 after 1000ms');
  return delay(2000);
})
.then(() => {
  console.log('step 3 after 2000ms');
  return delay(3000);
})
.then(() => {
  console.log('step 4 after 3000ms');
  return delay(4000);
})
.then(() => {
  console.log('step 5 after 4000ms');
  return delay(5000);
})