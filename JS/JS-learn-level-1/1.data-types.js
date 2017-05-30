/*

 data-types
 -----------


 1. simple-types/primitives ==> values

    a. string
    b. number
    c. boolean
    d. undefined
    e. symbol ( from es6 )

 2. complex-types/reference ==> objects

*/


// 2. Reference Types ==> objects

/*

    How to create objs in .js lang ?

    syntax
    -------

    var ref=new Constructor();

*/


// e.g

//------------------------------------------------

// var person = new Object();// wrapper-obj

// // imp-note : all .js objects by defult extensible

// person.name = "Nag";
// person.age = 33;
// person.doWork = function () { 
//     console.log('..work..');
// }

// //imp-note : all .js objects by defult configurable

// delete person.age;

//------------------------------------------------

// literal-style objects


// 1. Object

var config = new Object();
config.url = "http://"
config.method = "GET";
config.success = function () {}

// or  literal-style

var config = {
    url: 'http://',
    method: 'GET',
    success: function () {

    }
};

//------------------------------------------------

// 2. Array


var arr = new Array();

// or

var arr = [];


//------------------------------------------------

// 3. RegExp

// #DEF | DEF | #DEFDEF | DEFEF

// color code pattern : ^\s*#?([A-F0-9]{3}|{A-F0-9}{6})\s*$;


// var re = new RegExp("^\\s*#?([A-F0-9]{3}|{A-F0-9}{6})\\s*$");

// or

// var re = /^\s*#?([A-F0-9]{3}|{A-F0-9}{6})\s*$/;


//----------------------------------------------------------


// var add = new Function("n1","n2","var r=n1+n2;return r;");


// or

// function add(n1, n2) {
//     var r=n1+n2;return r;
// }


//--------------------------------------------------------


// How to access .js obj's properties ?


var person = {
    name: 'Nag',
    "my-address": "chennai-IND"
};

person.name = "Nag N";
console.log(person.name);

person['my-address'] = "IND";
console.log(person['my-address']);

//--------------------------------------------------------