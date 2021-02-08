/// Where the admin of this page see
const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

/// html file
const path = require('path')

router.get('/add-product',productsController.getAddProduct);
router.post('/add-product',productsController.postAddProduct);
///
module.exports = router;
