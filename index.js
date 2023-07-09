class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      console.log('Name must be a string');
    } else if (value.length < 4) {
      console.log('Name must be greater then 4 symbols');
    }
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value <= 0) {
      console.log('Age must be bigger than 0');
      return;
    } else if (typeof value !== 'number') {
      console.log('Age must be a number');
      return;
    }
    this._age = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    if (value < 0) {
      console.log('Salary have to be greater than 0');
      return;
    } else if (typeof value !== 'number') {
      console.log('Salary must be a number');
      return;
    }
    this._salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this._lang = lang;
  }
  get salary() {
    return super.salary * 3;
  }
  set salary(value) {
    super.salary=value;
  }
}

let programmer1 = new Programmer('Ivan', 20, 300, ['JS', 'C++']);
let programmer2 = new Programmer('Mykola', 23, 300, ['JS', 'Python']);
let programmer3 = new Programmer('Olha', 22, 300, ['JS', 'C#']);
let programmer4 = new Programmer('Denys', 24, 300, ['JS', 'C++', 'Python']);
let data = [programmer1, programmer2, programmer3, programmer4];
data.forEach((programmer) => {
  console.log(programmer);
});
console.log(programmer1.salary);
