/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.

*/

// function teach(sub) {
//     console.log('teaching ' + sub);
//     let notes = sub + "-notes";
//     let breakTime = 10;

//     function learn() {
//         console.log('learning ' + notes);
//     }
//     // learn();
//     console.log('teach ends');
//     return learn;
// }
// let learnFunc = teach('.js') // teach-context with args & locals 

// learnFunc();
// learnFunc();
// learnFunc();



// why / where we need closures .js lang ?

/*

    -> to abstract js-module's public behav
    -> on event , when executing any func , to access parent scoped data

*/

// use-1 : to abstract js-module's public behav


// e.g counter module


/*

     self executable function / IIFE ( Immedi.. Invo.. Func..Exp...)

     ==> to initialize anything once

*/

const counter = (function () {
    let count = 0; // private

    // public 
    function doCount() {
        count++;
    }

    function getCount() {
        return count;
    }
    return {
        inc: doCount,
        get: getCount
    };
})();

// const counter = init();
// const counter2 = init();


//----------------------------------------------------


// use-2 : on event , when executing any func async, to access parent scoped data

function Person(name,age) {
    this.name = name;
    this.age = age;

    let self = this;
    setInterval(function () { 
        self.age++;
        console.log(self.name+"->"+self.age);
    },2000);    // every 1s , emits interval-event on global-obj

}

let person = new Person('Ria', 0);


// imp-note : always, all event-handlers are executed by event-emitters