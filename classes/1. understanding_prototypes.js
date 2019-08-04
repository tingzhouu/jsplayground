// This is taken from https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
// It serves to highlight how classes are essentially functions, but help to make things simpler.
// We will use an example of creating Hero objects using functions in this file.

// Refer to ./understanding_classes.js for using classes to achieve the same result.

// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain constructor with call
  // We can use the call() method to copy over properties from one constructor into another constructor. 
  Hero.call(this, name, level); // IMPORTANT LINE

  // Add a new property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  // We can use the call() method to copy over properties from one constructor into another constructor. 
  Hero.call(this, name, level); // IMPORTANT LINE

  this.spell = spell;
}


Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Prototype properties and methods are not automatically linked when you use call() to chain constructors
// use Object.create() to link the prototypes, making sure to put it before any additional methods are created
// and added to the prototype.
Warrior.prototype = Object.create(Hero.prototype); // IMPORTANT LINE
Healer.prototype = Object.create(Hero.prototype); // IMPORTANT LINE

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

console.log('hero1.greet()', hero1.greet());