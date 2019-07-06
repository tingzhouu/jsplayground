// immutability approaches create shallow immutability only.
// they affect only the object and its direct property characteristics.

var myObject = { song: 'wen bie'};
// creating an object constant for object property
Object.defineProperty(myObject, "FAVOURITE_NUMBER", {
  value: 42,
  writable: false,
  configurable: false,
});

// PREVENT EXTENSIONS
// prevent new properties from being added to an object
Object.preventExtensions(myObject);
// myObject.b = 3; // throws TypeError: object is not extensible


// SEAL
// prevent extensions, AND mark all existing properties with configurable: false
// cannot add new properties, cannot reconfigure existing properties
var sealedObject = Object.seal(myObject);
Object.defineProperty(sealedObject, 'song', { enumerable: false }); // throws TypeError


// FREEZE
// calls Object.seal(...) on object, AND mark all existing properties with writable : false
// highest level of immutability that can be obtained
var frozenObject = Object.freeze(myObject);
Object.defineProperty(sealedObject, 'song', { writable: true }); // throws TypeError
