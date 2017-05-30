/*

    in .js, we can create func-obj in 2 ways

    1. function declaration / Named Function

        -> func-obj created on context-creation phase
        -> hoisted with func-obj

        when to use ?

        ==> to have this func by default in context

    2. function expression / Anonymous function

        -> func-obj created on context-execution phase

         when to use ?

         => to create any func based on input/condition in context-execution phase

*/


//---------------------------------------------

//  1. function declaration


// console.log(add(12, 12));

// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(12,12));

//---------------------------------------------

// 2. function expression


// console.log(add(12, 12)); // Error

// var add = function (n1, n2) {
//     return n1 + n2
// };

// console.log(add(12,12));

//---------------------------------------------

// let action = null;


// let isAdmin = true;

// if (isAdmin) {
//     action = function(){}
// } else {
//     action = function () { }
// }


//---------------------------------------------

//  functions are objects , we can assign to variables

// function sayHello() {
//     console.log("Hello");
// }

// let sayHi = sayHello;
// sayHi();

//---------------------------------------------

// function as args


// function greet(func) {
//     if (func) {
//         func();
//         return;
//     }
//     console.log("hello..");
// }

// greet();
// greet(function () { console.log('Ola..');});


//e.g

// let arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // arr.sort();
// arr.sort(function (a, b) { return a - b; });


//---------------------------------------------


// function as returns

// function teach() {
//     console.log('teach..');
//     let learn = function () { 
//         console.log('learn..');
//     }
//     return learn;
// }

// let learnFunc = teach();
// learnFunc();
// learnFunc();

//---------------------------------------------


// function func(a,b,c) {
//     console.dir(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[2]);
//     console.log(arguments[2]);
// }

// func(12,13,14,15);

// e.g

// function sum() {
//     let result = 0,
//         len = arguments.length,
//         i = 0;
//     while (i < len) {
//         result += arguments[i];
//         i++;
//     }
//     return result;
// }

//---------------------------------------------


// function getFood() {
//     return "No Food";
// }
// // let getFood=new Function(..);

// function getFood(pay) {
//     if (arguments.length == 0) {
//         return "No Food";
//     }
//     return "Some Food";
// }
// // getFood=new Function(..);

// console.log(getFood());


//---------------------------------------------



// ES5

// function func(a, b) {

//     // way-1

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     // way-2

//     a = a || 1;

//     if (!b) throw new Error('second arg required');

//     console.log(a);
//     console.log(b);
// }

// func(12);


//--------------------------------------------


// ES6  

// default func params

// function func(a = 1, b = 2) {
//     console.log(a);
//     console.log(b);
// }

// func(10, 20);

//--------------------------------------------

// ES6 : Rest paramater

// function func(a, ...restParams) {
//     console.log(a);
//     // console.log(arguments)
//     console.log(Array.isArray(restParams));
//     console.log(restParams);
// }

// func(12, 13, 14, 15, 16);

//--------------------------------------------