// there is confusion over how an object should be duplicated, where there are 2 variations
// 1. shallow copy - copy the primitive data types, copy only the references of objects
// 2. deep copy - duplicate all objects. However, if certain items in the object take reference to other objects
//                these should be duplicated rather than reference-preserved.
//                this leads to a infinite circular duplication problem.
// since shallow copy is more understandable and has fewer issues, Object.assign(...) performs shallow copying.

function anotherFunction() {
  console.log('hi');
}

var anotherObject = { c: true };

var anotherArray = [];

var myObject = {
  a: 2,
  b: anotherObject,
  c: anotherArray,
  d: anotherFunction,
}

anotherArray.push(anotherObject, myObject);
console.log('myObject', myObject);

var newObj = Object.assign({}, myObject);

console.log('newObj', newObj);

console.log('newObj.b === anotherObject', newObj.b === anotherObject); // prints true
console.log('newObj.c === anotherArray', newObj.c === anotherArray); // prints true
console.log('newObj.d === anotherFunction', newObj.d === anotherFunction); // prints true