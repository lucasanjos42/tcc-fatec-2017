var userModel = require('../models/user-model');
var moment = require('moment');

tokenController = function () {

    /*
     * HTTP GET
     */

    get = function (req, res) {

        var email = req.query.email;
        var token = req.query.token;

        console.log(email, token);

        find = {
            'email': email
        };

        userModel.findOne(find, (err, user) => {

            if (!user.token || user.token !== token)
                return res.status(400).send("Token não existe.");

            if (user.token === token)
                return res.json('OK');

        });

        // res.json('oi');

    };

    /*
     * HTTP POST
     */
    post = function (req, res) {

        find = {
            'email': req.body.email
        };

        userModel.findOne((find), (err, user) => {

            if (err || !user)
                return res.status(400).send("Usuário não encontrado.");

            var id = user._id;

            user.token = Math.random().toString(36).substr(2, 5);
            user.tokenTime = moment().format();

            user.save();

            res.json(user.token);

        });
    };

    return {
        get: get,
        post: post
    };

};

module.exports = tokenController();