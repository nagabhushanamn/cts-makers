"use strict";

/*
    .js programs run
        --> non-strict-mode  ( default )
        --> strict-mode ( ES5 )
*/


// let person = {
//     name: 'Nag',
//     age:32
// }

// Object.defineProperty(person, 'name', {
//     configurable: false,
//     writable: false,
//     enumerable:false
// });

// // Object.defineProperties

// // 
// // delete person.name;
// // person.name = "ben";

// for (let prop in person) {
//     console.log(prop+"=>"+person[prop]);   
// }


//--------------------------------------------



// let person = {
//     name: 'Nag',
//     age:32
// }


// by default all.js-objs are extensible & configurable

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.newProp = "new-value";

// delete person.name;
// delete person.age;

// person.name = "";

//--------------------------------------------

// data & accessor properties


// let person = {
//     // data properties
//     _name: 'Nag',
//     _age: 32,
//     // accessor properties
//     set name(name) {
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this._name;
//     },
//     set age() {
//         //..
//     },
//     get age() {
//         //
//     }
// };

// person.name = "Ben"; // set
// console.log(person.name); // get

//--------------------------------------


// How to verify propety existence...

let person = {
    name:'Nag'
};

if ("name" in person) {
    console.log("Yes..");   
}