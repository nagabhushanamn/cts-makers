// function foo() { }
// function bar() {foo();}
// function baz() {bar();}
// baz();

//--------------------------


// function foo() { throw new Error('i hate .js'); }
// function bar() {foo();}
// function baz() {bar();}
// baz();

//---------------------------------------------


// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('im hungry...');
//         i++;
//     }
// }

// function shortRunning() {
//     console.log('short...');
// }

// longRunning();
// shortRunning();


//---------------------------------------------


/*

    <button class="odd">button-1</button>
    <button class="even">button-2</button>

*/

// console.log('start...');

// $.on('.odd', 'click', function handler1(e) { 
//     console.log('Handling MouseEvent on .odd buttons');
// });

// $.on('.even', 'click', function handler2(e) { 
//     console.log('Handling MouseEvent on .even buttons');
// });

// console.log('continue with other work if exist');

// function longRunning() {
//     var i = 0;
//     while (i < 10) {
//         console.log('im hungry...');
//         i++;
//     }
// }
// longRunning();

//---------------------------------------------

// console.log('start...');

// setTimeout(function timeout() {
//     console.log('ohh. today friday..');
// }, 1);

// console.log('cont with other if exist'); 

// function longRunning() {
//     var i = 0;
//     while (i < 1000) {
//         console.log('im hungry...');
//         i++;
//     }
// }
// longRunning();


//---------------------------------------------

// Quiz

function teach() {
    console.log('teach start...');
    let name = "Nag"; // moved to heap-memory
    let i = 100;
    try {
        //throw new Error('hate .js');
        setTimeout(function () {
            console.log('after timeout-event');
            //throw new Error('hate .js');
            console.log(name + " will back to session")
        }, 5000);
    } catch (e) {
        console.log('i caught :' + e.message);
    }
    console.log('teach end.');
}

teach();