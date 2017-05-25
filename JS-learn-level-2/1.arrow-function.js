// let getPrice = function () { return 100.00 };

// Arrow function - syntax

// let getPrice = () => { return 100.00 };
// let getPrice = () => 100.00;
// let getPrice = (count) => count * 100.00;
// let getPrice = count => count * 100.00;
// let getPrice = (count, tax) => count * 100.00 + tax;
// let getPrice = (count, tax) => {
//     let price = count * 100.00;
//     let withTax = price + tax;
//     return withTax;
// };

//------------------------------------------

// why/where we need arrow-function ?

/*

    advantages of arrow function

    --> by default bound  to current context's owner
    --> we cant arrow function to any obj dynamically i.e using call/apply/bind

*/


// let trainer = {
//     name:'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");

//         // let askQues = function (ques) {
//         //     console.dir(this);
//         //     console.log(this.name+" anwering "+ques);
//         // }

//         // using 'arrow-function'
//         let askQues =  (ques) => {
//             console.dir(this);
//             console.log(this.name+" anwering "+ques);
//         }

//         console.log("teaching end");
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// askQues("ques-1");

// let newTrainer = { name: 'Aravind' };
// askQues.call(newTrainer,'ques-1');



//---------------------------------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num+" invoice processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process:  () => {
//         console.log(this.num+" invoice processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log(this.num + " invoice procesed partially..");
//         return ()=>{console.log(this.num+" invoice processed completly");}
//     }
// };

// let func = invoice.process();
// func();
// let newInvoice = { num: 321 };
// func.call(newInvoice);


//-----------------------------------


// let factory = {
//     num: 0,
//     getInvoice: function () {

//         let invoice = {
//             num: 123,
//             process: () => {
//                 console.log(this.num + " invoice processed");
//             }
//         };
//         return invoice;
//     }
// };
// factory.getInvoice().process();

//-------------------------------------





function Person(name, age) {
    this.name = name;
    this.age = age;

    // let self = this;
    // setInterval(function () { 
    //     self.age++;
    //     console.log(self.age);
    // },1000);

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

let prson1 = new Person('Ria', 0);
let prson2 = new Person('Nag', 32);