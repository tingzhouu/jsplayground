// async functions make working with promises easier.
// allow synchronous execution while maintaining a regular, synchronous feel

// async is used to make a function synchronous
// unlocks the use of await inside the function

// 1. an async function always returns a promise
/*
async function fn() {
  return 'hello';
}
console.log('fn()', fn()); // prints Promise
fn().then((result) => {
  console.log('result', result); // prints hello
})
*/

// 2. async functions pause at each await <expression>
// when the expression is a promise, the evaluation of the async function halts until the promise is resolved
// when the expression is a non-promise value, it is converted to a promise using Promise.resolve and then resolved
const delayAndGetRandom = (ms) => {
  return new Promise(resolve => setTimeout(
    () => {
      const val = Math.trunc(Math.random() * 100);
      resolve(val);
    }, ms
  ))
}

async function fn2() {
  const a = 9;
  const b = await delayAndGetRandom(1000); // function will halt here until the promise is resolved
  const c = 5;
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  return a * b * c;
}
// fn2().then(console.log);

async function fn3() {
  console.log('hi');
  await fn2().then(console.log); // if we do not use await hi and bye will print first
  console.log('bye');
}
fn3();
