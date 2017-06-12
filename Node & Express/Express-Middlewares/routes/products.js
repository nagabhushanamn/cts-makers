var express = require('express');
var router = express.Router();

let Product = require('../model/Product');

router.get('/', function (req, res, next) {

});
router.post('/', function (req, res, next) {

  let productData = req.body;
  console.log(productData);
  let newProduct = new Product(productData);
  console.log(newProduct);

  newProduct.save(function (err, data) {
    err = { message: 'Mongo Error' };
    if (err) { next(err); return };
    res.json(data);
  });


});

module.exports = router;
