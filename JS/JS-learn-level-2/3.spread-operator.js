let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];

let str = "NAG";

let newArray = [...arr1, 4, 5, 6, ...arr2, ...str];



// imp-note : if any objec is an iterable, then we can spread


let nums = [10, 72, 30, 4, 5];

let max = Math.max(...nums);