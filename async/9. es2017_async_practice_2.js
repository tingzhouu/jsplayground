// below function returns 2 * of its input after 2 seconds
function doubleAfter2Seconds(x) {
  return new Promise(resolve => { // returns a Promise (obvious but IMPORTANT)
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

// if we tried to combine a few function calls, below statement will not work.
const result = doubleAfter2Seconds(10) +  doubleAfter2Seconds(20) + doubleAfter2Seconds(30);
console.log('result', result);

async function run() {
  const result = await doubleAfter2Seconds(10)
    + await doubleAfter2Seconds(20)
    + await doubleAfter2Seconds(30);
  console.log('result', result);
}

async function run2() {
  const a = await doubleAfter2Seconds(10) // code will pause until the Promise is resolved in each line.
  const b = await doubleAfter2Seconds(20)
  const c = await doubleAfter2Seconds(30);
  console.log('result', a + b + c);
}

run();

