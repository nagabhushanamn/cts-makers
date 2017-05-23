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