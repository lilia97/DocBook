const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var TransactionsSchema = new Schema({
    
    booking_date: date,
    reference: String,
    Dr: String,
    specialty: String,
    appointment: date,
    hospital: String, 
});

// Compile model from schema
var TransactionsModel = mongoose.model('TransactionsModel', TransactionsSchema );