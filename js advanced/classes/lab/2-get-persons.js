function solve() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  const people = [];

  const anna = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  people.push(anna);
  const SoftUni = new Person("SoftUni");
  people.push(SoftUni);
  const stephan = new Person("Stephan", "Johnson", 25);
  people.push(stephan);
  const gabriel = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
  people.push(gabriel);

  return people;
}
