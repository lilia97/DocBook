const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var TransactionsSchema = new Schema({
    First_name: String,
    Last_name: String,
    booking_date: Date,
    reference: String,
    Dr: String,
    specialty: String,
    appointment: String,
    hospital: String, 
});

// Compile model from schema
var TransactionsModel = mongoose.model('TransactionsModel', TransactionsSchema );

module.exports=TransactionsModel