var person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

var person1 = {
  firstName: "John",
  lastName: "Doe",
};

var result = person.fullName.call(person1);
console.log("result", result); // prints John Doe
