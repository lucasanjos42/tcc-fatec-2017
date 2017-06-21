var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    gender: String,
    birthDate: Date,
    cpf: String,
    rg: String,
    phoneNumber: String,
    email: String,
    password: String,
    address: String,
    city: String,
    province: String,
    cep: String,
    category: String, // admin - company - user
    memberSince: Date,
    token: String,
    tokenTime: Date,
    cardNumber: String,
    type: String,
    expirationDate: Date,
    cvv: String
});

module.exports = mongoose.model('user', userSchema);
