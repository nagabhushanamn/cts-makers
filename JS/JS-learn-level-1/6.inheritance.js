/*

    how to implement Inheritance in .js lang?

    ==> using prototypes

    parent-obj(prototype)  <====== child-obj(s)

*/

function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.sayName = function () {
    //     console.log('im ' + this.name);
    // }
    // this.sayAge = function () {
    //     console.log('im ' + this.age + " old");
    // }
}

Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}



// let p1 = new Person('Nag', 32);
// let p2 = new Person('Ria', 2);
// //...


function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}
Employee.prototype = new Person();
Employee.prototype.saySalary = function () {
    console.log('i get ' + this.salary);
}

let emp = new Employee("Nag", 32, 1000);

//----------------------------------------

// Es6 - class syntax

// class Person {
//     constructor() {

//     }
// }

// class Employee extends Person {
//     constructor() {
//         super()
//     }
// }

//----------------------------------------


//  

// let person = { name: 'Nag' };
// let p1 = Object.create(person); // new

//--------------------------------------


let p1 = { name: 'Nag' };
let p = { age: 32 };

// Es6

Object.setPrototypeOf(p, p1);

//--------------------------------------


