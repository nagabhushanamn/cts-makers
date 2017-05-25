

// destructuring

// a. array destructuring

// let salaries = [1000, 2000, 3000];

// manual approach

// let min = salaries[0];
// let avg = salaries[1];
// let max = salaries[2];

// Es6

// let [min, avg, max] = salaries;

//------------------------------------------

// let salaries = [1000, 2000, 3000];
// let [min, , max] = salaries;

//------------------------------------------

// let salaries = [1000, 2000];
// let [min, avg, max] = salaries;

//------------------------------------------

// let salaries = [1000, 2000];
// let [min, avg, max = 6000] = salaries;

//------------------------------------------

// let salaries = [1000, 2000, [5000, 6000]];
// let [min, avg, [max1, max2]] = salaries;

//------------------------------------------

// let salaries = [1000, 2000];
// let min, avg;

// [min, avg] = salaries;

//------------------------------------------


// b. object destructuring


let person = {
    name: 'Nag',
    age:32
};

// // manual

// let name = person.name;
// let age = person.age;

// Es6

// let { name, age } = person;

// let { name: myName, age: myAge } = person;

let myName;
let myAge;

({ name: myName, age:myAge }=person);