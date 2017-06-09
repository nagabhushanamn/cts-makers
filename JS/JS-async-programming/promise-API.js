


let hotelAPI = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolving HotelPromise promise');
                resolve("Biryani...");
                //reject("Sorry...");
            }, 5000);

        });
        return promise;
    }
};

let barAPI = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolving Bar promise');
                resolve("Beer...");
                //reject("Sorry...No beer");
            }, 1000);

        });
        return promise;
    }
};



let trainer = {
    doTeach: function () {
        console.log('teaching . .js..');
        console.log('feels hungry..');
        let promise1 = hotelAPI.getFood();
        let promise2 = barAPI.getDrink();
        console.log('got promise...deferring my actions to future');
        // promise.then(
        //     (resp) => { console.log('yummy ' + resp) },
        //     (error) => { console.log('error ' + error); }
        // );
        // Promise.all([promise1, promise2])
        Promise.race([promise1, promise2]) ``
            .then(
            (resp) => { console.log('yummy ' + resp) },
            (error) => { console.log('error ' + error); }
            );
        console.log('cont.. further teaching... end.');
    }
};

trainer.doTeach();