var mongoose = require('mongoose');
var orderModel = require('../models/order-model');
var Order = mongoose.model('order');
var email = require('../services/email-service');
var moment = require('moment');

orderController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};

        if (req.params.id)
            find._id = req.params.id;

        orderModel.find(find, (err, order) => {
            if (err) return res.json(err);
            res.json(order);
        });

    };

    /*
     * HTTP POST
     */
    post = function(req, res) {

        order = new Order(req.body);

        date = moment().locale('pt-br').format('ll');

        order.save((err, order) => {

            email.send('teia-store@contato.com.br', req.body.email, 1, req.body.name, req.body.totalPay, date);

            if (err) return res.json(err);
            res.json('Pedido cadastrado!');
        });

    };

    return {
        get: get,
        post: post
    };

};

module.exports = orderController();
