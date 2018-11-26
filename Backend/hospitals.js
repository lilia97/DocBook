const mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var HospitalsSchema = new Schema({
    name: String,
    address: String,
    

});

// Compile model from schema
var HospitalssModel = mongoose.model('HospitalsModel', HospitalsSchema );