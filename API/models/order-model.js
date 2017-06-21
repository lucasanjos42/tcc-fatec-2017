var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    userId: Schema.Types.ObjectId,
    email: String,
    name: String,
    surname: String,
    totalPay: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('order', orderSchema);
