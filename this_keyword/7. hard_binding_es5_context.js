// Many built-in functions provide an optional parameter usually called 'context'
// This is designed as a work-around to not have to use bind(..) but achieve the same outcome

function foo(el) {
  console.log('el', el);
  console.log('this.id', this.id);
}

var obj = {
  id: 'awesome',
}

var arr = [1, 2, 3];

// obj is passed in as the 'context'
arr.forEach(foo, obj);