// What if the Promise itself never gets resolved?
// We can use Promise.race
function foo() {
  return 50000;
}

function timeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('Timeout!!!');
    }, delay)
  })
}

Promise.race([foo(), timeoutPromise(3000)]) // run timeoutPromise if not resolved within 3 seconds
.then(function() {
  console.log('fulfiled!!!!');
},(
function(err) {
  console.log('rejected!!!!!');
}));