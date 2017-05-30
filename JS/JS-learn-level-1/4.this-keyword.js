/*

    this ==> current context's owner


    best-practice : always read obj's property with 'this',
                  

*/

// why we need 'this' keyword?

// let pName = "Global";

// let person = {
//     pName: 'Nag',
//     sayName: function () {
//         // let pName = "Local";
//         //console.log('im ' + pName);  // context's data
//         // console.log('im '+person.pName);
//         console.log('im ' + this.pName);
//     }
// };

// // person.sayName();

// let oldPerson = person;
// person = {
//     pName: 'Ria'
// };

// oldPerson.sayName();


//------------------------------------------------------

// let p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name) } };
// let p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name) } };

//------------------------------------------------------

// Function Binding
//------------------

// a. static function-binding


// function sayNameForAll() {
//     console.dir(this);
//     console.log('im '+this.name);
// }

// let p1 = { name: 'Nag', sayName: sayNameForAll  };
// let p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll(); // im "" // function-invocation ( this ==> global-obj)
// p1.sayName(); // im Nag   // method-invocation   ( this ==> invoker-obj) 
// p2.sayName(); // im Ria

//------------------------------------------------------

// b. dynamic function-binding

// let p1 = { name: 'Nag' };
// let p2 = { name: 'Ria' };

// let e1 = { name: 'cts' };


// // from third-party , e.g greet-lib

// let greetLib = {
//     name:'Anony',
//     sayName: function (message,from) {
//         console.log(message +' im '+this.name +" : "+from);
//     }
// };

// greetLib.sayName(); // ??

// way-1
// greetLib.sayName.call(p1,"Hello","IND"); //
// greetLib.sayName.call(p2,"Hi","IND"); //
// greetLib.sayName.call(e1,"hey","Universe"); //

// // way-2
// greetLib.sayName.apply(p1,["Hello","IND"]); //
// greetLib.sayName.apply(p2,["Hi","IND"]); //
// greetLib.sayName.apply(e1,["hey","Universe"]); //

// way-3
// let newF = greetLib.sayName.bind(p1, "Hello", "Earth");
// newF("bla","bla"); //

// let newFF = greetLib.sayName.bind(e1);
// newFF("hey", "IND");
// newFF("hello","Europe");



//------------------------------------------------------

// i need similar .js objects , like many persons


// till ES5 , no class syntax


// constructor / class
function Person(name,age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person('Nag', 32); // constructor invocation ( this ==> new-obj)
let p2 = new Person('Ria', 2);
//...


//------------------------------------------------------



/*

    in .js lang , we can invoke function in 4 ways


    1. function invocation                                      ( this ==> global-obj )
    2. method-invocation ( static function binding )            ( this ==> invoker-obj)
    3. call/apply/bind invocation ( dynamic function binding)   ( this ==> arg-obj)
    4. constructor invocation                                   ( this ==> new-obj)


*/