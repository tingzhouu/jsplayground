function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}

wait('HEY!!!'); // Prints output after 1 second.

// This may seem common sense.
// However, after 1000ms, the scope of function 'wait' should have been garbage collected.
// This means the variable 'message' should not have been accessible by function 'timer'.

// Because function 'timer' has a scope closure over the scope of function 'wait',
// function 'timer' can access the variable 'message'.