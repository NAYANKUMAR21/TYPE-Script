class Person {
  constructor(a, b) {
    this.Name = a;
    this.age = b;
  }
}

class Info extends Person {
  constructor(c) {
    super();
    this.c = c;
  }
}

let person = new Info(21);
console.log(person);
