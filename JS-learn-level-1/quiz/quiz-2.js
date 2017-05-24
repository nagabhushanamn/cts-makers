let trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        let self = this;
        let doLearn = function () {
            // console.dir(this);
            console.log(this.name + ' learning .js from ' + self.name);
        }
        // doLearn();
        let emp = {
            name: "cts"
        };
        doLearn.call(emp);
    }
};

trainer.doTeach();

// let oldTrainer = trainer;
// trainer = { name: 'Ria' };

// oldTrainer.doTeach();

let newTrainer = {
    name: 'shammu'
};

trainer.doTeach.call(newTrainer);