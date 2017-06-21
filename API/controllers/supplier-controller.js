var mongoose = require('mongoose');
var supplierModel = require('../models/supplier-model');
var Supplier = mongoose.model('supplier');
var moment = require('moment');

supplierController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};
        if (req.params.id)
            find._id = req.params.id;

        supplierModel.find(find, function(err, supplier) {
            if (err) return res.json(err);
            res.json(supplier);
        });

    };

    /*
     * HTTP POST
     */
    post = function(req, res) {

        supplier = new Supplier(req.body);

        supplier.memberSince = moment().format();

        supplier.save(function(err, supplier) {
            if (err) return res.json(err);
            res.json('Fornecedor -' + supplier.name + '- cadastrado!');
        });

    };

    /*
     * HTTP PUT
     */
    put = function(req, res) {

        supplierModel.update({
            _id: req.params.id
        }, req.body, function(err, supplier) {
            if (err) return res.json(err);
            res.json('Fornecedor atualizado!');
        });

    };

    /*
     * HTTP DELETE
     */
    del = function(req, res) {

        supplierModel.find({
            _id: req.params.id
        }).remove(function(err, supplier) {
            if (err) return res.json(err);
            res.json('Fornecedor removido!');
        });

    };

    return {
        get: get,
        post: post,
        put: put,
        delete: del
    };

};

module.exports = supplierController();
