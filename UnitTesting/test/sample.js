var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();


// describe('Array', function () {

//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal(-1, [1, 2, 3].indexOf(4));
//         });
//         it('my funny test', function () {
//             let foo = 'bar'
//                 , beverages = { tea: ['chai', 'matcha', 'oolong'] };
//             foo.should.be.a('string');
//             foo.should.equal('bar');
//             foo.should.have.lengthOf(4);
//             beverages.should.have.property('tea').with.lengthOf(3);
//         });
//     });

// });

describe('User', function () {
    describe('#save()', function () {
        it('should save without error', function (done) {
            // var user = new User('Luna'); // mongoose entity
            // user.save(function (err) {
            //     if (err) done(err);
            //     else done();
            // });
            setTimeout(function () {
                let e = new Error('i hate .js');
                done(e);
            }, 2000);
        });
    });
});

