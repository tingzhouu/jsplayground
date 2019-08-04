// This is taken from https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
// In this example, we did not create Warrior, but only Mage

// To understand more on what Prototype-based programming is refer to the wiki article
// https://en.wikipedia.org/wiki/Prototype-based_programming

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `${this.name} says hello.`;
  }
}

class Mage extends Hero {
  constructor(name, level, spell) {
    // Chain constructor with super
    // the super keyword is used in place of call to access the parent functions.
    super(name, level);

    // Add a new property
    this.spell = spell;
  }
}

const hero2 = new Mage('Lejon', 2, 'Magic Missile');
