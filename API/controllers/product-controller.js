var mongoose = require('mongoose');
var productModel = require('../models/product-model');
var Product = mongoose.model('product');

productController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};
        if (req.params.id)
            find._id = req.params.id;

        productModel.find(find, (err, product) => {
            if (err) return res.json(err);
            res.json(product);
        });

    };

    /*
     * HTTP POST
     */
    post = function(req, res) {

        product = new Product(req.body);

        product.save((err, product) => {
            if (err) return res.json(err);
            res.json('Produto - ' + product.name + ' - cadastrado!');
        });

    };

    /*
     * HTTP PUT
     */
    put = function(req, res) {

        productModel.update({
            _id: req.params.id
        }, req.body, (err, user) => {
            if (err) return res.json(err);
            res.json('Produto Atualizado!');
        });

    };

    /*
     * HTTP DELETE
     */
    del = function(req, res) {

        productModel.find({
            _id: req.params.id
        }).remove((err, product) => {
            if (err) return res.json(err);
            res.json('Produto Removido!');
        });

    };

    return {
        get: get,
        post: post,
        put: put,
        delete: del
    };

};

module.exports = productController();
