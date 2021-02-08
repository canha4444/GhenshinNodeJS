/// Where the user see
const express = require('express');
const productsController = require('../controllers/products')

///html file

const router = express.Router();

router.get('/',productsController.getProduct);

router.get('/character',productsController);



module.exports = router