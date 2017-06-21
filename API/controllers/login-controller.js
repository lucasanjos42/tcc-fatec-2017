var jwt = require('jsonwebtoken');
var config = require('../config');
var userModel = require('../models/user-model');

loginController = function() {


    login = function(req, res) {

        var find = {
            email: req.body.email,
            password: req.body.password
        };

        userModel.findOne(find, function(err, user) {
            if (err || !user) return res.status(403).json('Usuário Inválido');

            var token = jwt.sign({
                "user": user
            }, config.SECRET);

            user.password = '';

            var resp = {
                token: token,
                user: user
            };

            res.json(resp);

        });

    };

    return {
        login: login
    };

};

module.exports = loginController();
