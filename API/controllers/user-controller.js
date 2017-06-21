var mongoose = require('mongoose');
var userModel = require('../models/user-model');
var User = mongoose.model('user');
var moment = require('moment');

userController = function() {

    /*
     * HTTP GET
     */
    get = function(req, res) {

        find = {};
        if (req.params.id)
            find._id = req.params.id;

        userModel.find(find, function(err, user) {
            if (err) return res.json(err);
            res.json(user);
        });

    };

    /*
     * HTTP POST
     */
    post = function(req, res) {

        user = new User(req.body);

        user.memberSince = moment().format();

        user.save(function(err, user) {
            if (err) return res.json(err);
            res.json('Usuário -' + user.name + '- cadastrado!');
        });

    };

    /*
     * HTTP PUT
     */
    put = function(req, res) {

        userModel.update({
            _id: req.params.id
        }, req.body, function(err, user) {
            if (err) return res.json(err);
            res.json('Usuário atualizado!');
        });

    };

    /*
     * HTTP DELETE
     */
    del = function(req, res) {

        userModel.find({
            _id: req.params.id
        }).remove(function(err, user) {
            if (err) return res.json(err);
            res.json('Usuário removido!');
        });

    };

    return {
        get: get,
        post: post,
        put: put,
        delete: del
    };

};

module.exports = userController();
