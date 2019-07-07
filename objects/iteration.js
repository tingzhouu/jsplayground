var myArray = [1,2,3];
myArray.a = 'a';

for (let i in myArray) {
  console.log('i', i); // prints the index
}

for (let j of myArray) { // Arrays have a built-in iterator, allows for..of to work
  console.log('j', j); // prints the value
}

var myObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (let k in myObject) { // prints the key of each attribute
  console.log('k', k);
}

for (let l of myObject) { // TypeError [Symbol.iterator] is not a function
                          // Objects do not have a built-in iterator, but it is possible to define own iterator
                          // not going to explore how to define own iterator.
}
