var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    brand: String,
    category: String, // cellphone - notebook - console
    price: Number,
    realPrice: Number,
    shortDescription: String,
    description: String,
    picture: String,
    quantity: Number,
    date: { type: Date, default: Date.now },
    selled: Number
});

module.exports = mongoose.model('product', productSchema);
