var express = require('express');
var router = express.Router();
var userModel = require('../models/user-model');
var jwt = require('jsonwebtoken');
var config = require('../config');
var controller = require('../controllers/token-controller');

//Middleware de autenticação
router.use(function(req, res, next) {

    if (!req.headers.token)
        return res.status(401).send("Por favor autentique-se.");

    jwt.verify(req.headers.token, config.SECRET, function(err, decoded) {
        if (err || !decoded.user)
            return res.status(403).send("Autenticação inválida.");

        //Revalidar os dados enviados no token, pois é aberto
        var find = {
            email: decoded.user.email,
            password: decoded.user.password
        };

        userModel.findOne(find, function(err, user) {
            if (err || !user)
                return res.status(403).send("Autenticação inválida.");
            next();
        });
    });
});

router.post('/', controller.post);
router.get('/', controller.get);

module.exports = router;
