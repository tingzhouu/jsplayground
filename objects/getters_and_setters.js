// getters and setters introduced in ES5
// getters - properties that call a hidden function to retrieve a value
// setters - properties that call a hidden function to set a value

var myObject = {
  get a() {
    return 2;
  }
}

Object.defineProperty(
  myObject,
  'b',
  { get: function() { return this.a * 2 }, enumerable: true }
);

console.log('myObject.a', myObject.a); // prints 2
console.log('myObject.b', myObject.b); // prints 4

myObject.a = 999; // throws TypeError: Cannot set property of Object which has only a getter.
// Reason for error: we only defined a getter for 'a'.
