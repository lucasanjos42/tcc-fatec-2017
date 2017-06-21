var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//configurando o banco
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tcc');

// importando cron job
var cron = require('./services/cron-service');

//criando variaveis das rotas
var index = require('./routes/index');
var login = require('./routes/login-route');
var user = require('./routes/user-route');
var supplier = require('./routes/supplier-route');
var product = require('./routes/product-route');
var order = require('./routes/order-route');
var token = require('./routes/token-route');

var app = express();

app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    headers: ['Content-Type', 'Authorization', 'token']
}));

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//criando as rotas
app.use('/', index);
app.use('/login', login);
app.use('/user', user);
app.use('/supplier', supplier);
app.use('/product', product);
app.use('/order', order);
app.use('/token', token);

module.exports = app;
