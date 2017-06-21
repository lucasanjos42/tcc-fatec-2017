var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supplierSchema = new Schema({
    name: String,
    fantasyName: String,
    cnpj: String,
    phoneNumber: String,
    email: String,
    website: String,
    zipcode: String,
    address: String,
    province: String,
    city: String,
    memberSince: Date
});

module.exports = mongoose.model('supplier', supplierSchema);
