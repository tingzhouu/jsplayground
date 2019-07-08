// below function can either return a promise or throw an error.
// how do we ensure proper handling of success and error?
async function canRejectOrReturn() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 100);
  });
  if (Math.random() > 0.1) {
    throw new Error('number too bigggg');
  }
  return 'perfect numberrrr!';
}

async function foo() {
  try {
    // example 1: using return only
    // return canRejectOrReturn(); // catch block will never be executed because we are returning, not awaiting
                                   // even though value is returned, it will resolve with undefined.

    // example 2: using await only
    // await canRejectOrReturn(); // catch block will be executed if Error is thrown
                                  // BUT no value is returned to the caller of this function

    // example 3: using return and await
    return await canRejectOrReturn(); // catch block will be executed if Error is thrown
                                      // resolved value is returned to the caller of this function.
  } catch (e) {
    return 'error caught!!!!'
  }
}

async function run() {
  const result = await foo();
  console.log('result:', result);
}
run();

// if we want to run this n times.
async function runMany(numTimesToRun) {
  for (let i = 0; i < numTimesToRun; i++) {
    const result = await foo();
    console.log(`result of iteration ${i + 1}:`, result);
  }
}
runMany(10);