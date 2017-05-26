(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// console.log('-app.js-');
// var app = app || {};
// app.mod1.doWork();

//--------------------------------------

console.log('-app.js-');

let ctsGreet = require('cts-greet');

ctsGreet.sayHello();


},{"cts-greet":2}],2:[function(require,module,exports){
// var app = app || {};

// (function () {

//     var i = 0;

//     app.mod2.doWork();
//     app.mod3.doWork();

//     var o = {
//         doWork: function () {
//             console.log('mod-1 work');
//         }
//     };

//     app.mod1 = o; // export

// })();

//-----------------------------------------------

// console.log('-mod1.js-');

let en = require('./mod2');
let es = require('./mod3');

let message = "Hello...";

function sayHello() {
    console.log(message);
}
function sayHi() {
    console.log('Hi');
}
function sayBye() {
    console.log('Bye');
}

function greet(lang) {
    if (lang === "en") {
        en();
    }
    if (lang === "es") {
        es()
    }
}

// sayHello();
module.exports = {
    sayHello,
    sayHi,
    greet
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){
// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('mod-2 work');
//         }
//     };

//     app.mod2 = o;
    
// })();

//------------------------------------


function greet() {
    console.log('Hello..');
}

module.exports = greet;
},{}],4:[function(require,module,exports){
// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('mod-3 work');
//         }
//     };

//     app.mod3 = o;

// })();


//------------------------------------


function greet() {
    console.log('Ola..');
}

module.exports = greet;
},{}]},{},[1]);
