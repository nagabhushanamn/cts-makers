// let name = "Nag";
// let age = 32;


// Es5

// let person = {
//     name: name,
//     age:age
// };

// Es6

// let person = {
//     name,
//     age
// };

//--------------------------------


// let person = {
//     name: 'Nag',
//     sayName: function () {
//         //..
//     }
// };

// ES6

// let person = {
//     name: 'Nag',
//     sayName() {
//         //..
//     }
// };

//--------------------------------


// es5

// let person={
//     name:"Nag"
// }

// Es6

let dynamicField = "name";
let name = "Name";
let person = {
    ["cts-" + dynamicField]: "Nag",
    [`say ${name}`]() {

    }
}

console.log(person["cts-" + dynamicField]);