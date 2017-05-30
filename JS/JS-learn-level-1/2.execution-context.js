/*

    Execution-Context / scope
    --------------------------

    memory/stack-frame with args & locals to execute instructions

    phase-1 : creation

        -> all the variables declared any-where with 'var' keyword
           will get hiosted with default value (undefined ) to top

    phase-2 : execution

        --> instruction will get execute in seq

    ------------------------------------------

    imp-note:

    .js-runtime has one global-context  & global-obj ( .js activation obj ) by default


    global-obj

    browser-envi ==> window
    Node.js      ==> global/process  


    ------------------------------------------

    imp-note:

    every func invocation also creates new-context
    which is child of in which context func has declared

    ------------------------------------------

    best-practice : declare all variables on top to avoid hoisting confuse

    ------------------------------------------
*/

// var a = 12;
// console.log(a);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// var a = 12;

// function f1() {
//     console.log(a);
//     var a = 13;
// }

// f1();  // f1-context  ==> global-context

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Quiz

// var x = 12;

// function f1() {
//     function f2() {
//         console.log(x);
//     }
//     f2(); // f2-context ==> f1-context
//     //var x = 13;
// }
// f1(); // f1-context ==> global-context

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// function func() {
//     var i = 100;
//     if(true){
//         var i = 200; // block scope
//     }
//     console.log(i);
// }
// func();

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// var i = 12;
// var i = 13;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// problems declaring variable with 'var' keywords

/*

    ==> the always get hoist
    ==> no block-scope to variables
    ==> we can re-declare same var multiple times in context

*/

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Soln : use let & const keywords  from ES6 version

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



// console.log(x);
// let x = 12;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// var i = 100;

// {
//     let i = 200;
// }

// console.log(i);

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// let i = 100;
// let i = 300;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


// const trainer = {
//     name:'Nag'
// };

// trainer.name = "shammu";

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --