// Es5
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayName = function () { }

// Es6

class Person {
    constructor(name) {
        console.log('Person::constructor');
        this.name = name;
    }

    sayName() {
        console.log('im ' + this.name);
    }
}

// let person = new Person("Nag");

class Employee extends Person {
    constructor(name, salary) {
        super(name);
        console.log('Employee::constructor');
        this.salary = salary;
    }
    saySalary() {
        console.log('i get ' + this.salary);
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

class Boss extends Employee {
    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }
}

let emp = new Boss('Nag', 1000.00);


class Abc {
    static staMethod() {
        console.log('sta method');
    }
}
Abc.staVar = 123;

Abc.staMethod();

