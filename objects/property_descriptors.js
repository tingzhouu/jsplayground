var myObject = {
  a: 2
}

// viewing property descriptor
var propertyDescriptor = Object.getOwnPropertyDescriptor( myObject, "a" );

console.log('propertyDescriptor', propertyDescriptor);
// prints {
  // value: 2, writable: true, enumberable: true, configurable: true
//}

// we can also add a new property / modify an existing property
Object.defineProperty(myObject, 'b', {
  value: 999,
  writable: false, // ability to change value
  configurable: false, // ability to modify property descriptor, or use delete operator to remove an existing property
  enumerable: false, // whether property shows up in certain object-property enumerations, such as for...in loop
})
console.log(Object.getOwnPropertyDescriptor( myObject, "b" ));
