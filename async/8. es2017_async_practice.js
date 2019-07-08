// Let’s assume that we have a for loop that prints 0 to 10 at random intervals.
// We need to modify it using promises to print sequentially 0 to 10.

// currently, this function is not printing out sequentially from 1 to 10
// especially so when timeout value of larger values of i are small.
for (let i = 0; i < 10; i++) {
  const timeSec = Math.floor(Math.random() * 10);
  setTimeout(() => {
    console.log('i - bad function', i);
  }, timeSec * 100)
}

// function which returns a promise that resolves after the stipulated time.
function printNum(i, timeSec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('i', i);
      resolve();
    }, timeSec * 100)
  });
}

async function letUsPrintOutSequentially() {
  for (let i = 0; i < 10; i++) {
    const timeSec = Math.floor(Math.random() * 10);
    await printNum(i, timeSec); // printNum will return a promise
    // function will stop here until the promise is resolved, which is also when
    // setTimeout is run.
  }
}

letUsPrintOutSequentially();