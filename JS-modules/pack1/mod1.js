var app = app || {};

(function () {

    var i = 0;

    app.mod2.doWork();
    app.mod3.doWork();

    var o = {
        doWork: function () {
            console.log('mod-1 work');
        }
    };

    app.mod1 = o; // export

})();