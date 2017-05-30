// 

// var arr = ["item-1", "item-2"];
// //console.dir(arr);


// //
// for (let item of arr) {
//     console.log(item);
// }

// //
// let [a, b] = arr;

// //

// let newArr = [...arr,"item3"];

//----------------------------------------


// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 ++id;
//                 return {
//                     value: id <= 10 ? id : undefined,
//                     done: id <= 10 ? false : true
//                 };
//             }
//         };
//     }
// };


// for (let id of idMaker) {
//     console.log(id);
// }

// let [id1, id2, id3] = idMaker;

// let ids = [...idMaker];



//-----------------------------------


// let arr = [];
// if (Symbol.iterator in arr) {
//     console.log("yes");
// }


//---------------------------------

var alpha = ['a', 'b', 'c'], 
    numeric = [1, 2, 3]; 


numeric[Symbol.isConcatSpreadable] = true;

var alphaNumeric = alpha.concat(numeric);



