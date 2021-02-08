const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    /// get ejs file
    res.render('admin/add-product',
    {pageTitle: 'Add Product',path:'/admin/add-product'});
}

exports.postAddProduct = (req,res,next) => {
        /// request can't parse data by default, you must import package to parse data =>"bodyParser"
        const product = new Product(req.body.title);
        product.save();
        console.log(product);
        res.redirect('/');
    ;
}

exports.getProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    Product.fetchAll((products) => {
        res.render('shop/product-list',
        {prods: products,
         pageTitle:'Shop',
         path:'/'});
    });

}   

