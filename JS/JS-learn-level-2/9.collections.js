

// Array

// Set

// let set = new Set();
// set.add("Nag");
// set.add("Nag");
// set.add("Ria");


let person = { name: 'Nag' };
let person2 = { name: 'Ria' };
let set = new WeakSet();
set.add(person);
set.add(person2);

person = null; 

// // after GC ,  set removes weak references


//-----------------------------------------

// let map = new Map();

// let person = { name: 'Nag' };
// let person2 = { name: 'Ria' };

// let car1 = { name: 'Car-1' };
// let car2 = { name: 'Car-2' };


// map.set(person, car1);
// map.set(person2, car2);


let map = new WeakMap();





