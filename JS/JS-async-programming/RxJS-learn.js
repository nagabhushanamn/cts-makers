

var Rx = require('rxjs/Rx');

// let os=Rx.Observable.of(1,2,3); // etc


// os.subscribe(x=>{
//     console.log(x);
// });

//----------------------------------



// let stream= Rx.Observable.from([1, 2, 3, 4, 5])  //source-stream
//             .map(x => x * 2)  // * 2
//             .filter(x => x > 5) ; // final stream > 5


// stream.subscribe(x=>console.log(x));    

//--------------------------------------




// const observableStream = Rx.Observable.create((observer) => {

//     setInterval(function () {
//         observer.next('hungry..event'); // event...
//     }, 2000);

// });

// observableStream.subscribe((event) => { console.log(event) });




var observable = Rx.Observable.range(1, 10)
    .map(x => {
        console.log('mapping ' + x);
        if (1 === 2) {
            throw new Error('Something Went Wrong');
        } else {
            return x; // event
        }
        //return x;
    })
    .filter(x => { console.log('filtering '+x); x > 5 });



// observable.subscribe(function (result) {
//     console.log(result);
// }, function (error) {
//     console.log(error);
// }, function (message) {
//     console.log('done...');
// });