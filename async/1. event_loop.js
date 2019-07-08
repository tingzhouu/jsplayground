import axios from "axios";

// Demonstrating non-determinism
// because we only run functions 'foo' and 'bar' upon completion of the GET request
// the final values of 'a' and 'b' are dependent on the order in which foo and bar run


var a = 1;
var b = 2;

// Javascript is SINGLE-threaded, meaning it has run-to-completion behaviour
// Once 'foo' starts running, the entirety of its code will finish before any of the code in bar can run
function foo() {
  console.log('run foo'); // does not necessarily run first.
  a++;
  b = b * a;
  a = b + 3
}

function bar() {
  console.log('run bar');
  b--;
  a = 8 + b;
  b = a * 2;
}

// When there is an asynchronous function called, the function is added to the Event Table
// The Event Table keeps track of events and sends it to the Event Queue.

// Javascript has a single call-stack which keeps track of the function that is currently executed
// and what function is to be executed after that.
// There is a constantly running process to check if the call-stack is empty.
// If the call-stack is empty, it will check if the Event Queue is empty.
// If Event Queue is not empty, it will move the event to call-stack to be executed.

axios.get('https://www.google.com')
.then(function (response) { foo(); })
.catch(function (error) { console.log('error!!'); });

axios.get('https://www.google.com')
.then(function (response) { bar(); })
.catch(function (error) { console.log('error!!'); });
