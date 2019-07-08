// A Promise's then(..) registered observation callbacks are atuomatically scheduled when 
// resolve(..) or reject(..) are called by the Promise creation capability
// Those scheduled callbacks will predictably be fired at the next asynchronous moment

var p = new Promise((resolve, reject) => {
  resolve();
});

p.then(function(){
  p.then(function() { // this nested then(..) cannot interrupt and precede 'b'
    console.log('c');
  });
  console.log('a');
})

p.then(function() {
  p.then(function() { // this nested then(..) cannot interrupt and precede 'c'
    console.log('d');
  });
  console.log('b');
})

// order of printing: a, b, c, d